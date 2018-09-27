import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
import lodash from 'lodash'
var cookieparser = require('cookieparser')

const AWS = require('aws-sdk');

const Bluebird = require('bluebird');



var credentials = {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_ACCESS_SECRET_KEY,
    region: process.env.AWS_REGION
};
let s3bucket = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_ACCESS_SECRET_KEY,
    Bucket: process.env.S3_BUCKET_NAME
});
// load AWS SES
AWS.config.update(credentials);
const ses = new AWS.SES();
var bucketPath = 'cretona-images';


Vue.use(Vuex,axios,lodash)

const createStore = () => {
    return new Vuex.Store({
        state:{
            auth: null,
            user:null,
            error:null,
            properties:[],
            totalPageCount:20,
            newProperty:[]
        },
        mutations:{

            setUser(state,payload){

                state.user = {
                    user_id: payload.user_id
                }
            },
            update (state, data) {
                state.auth = data
            },
            setProperties(state,payload){
                state.properties = payload
            },
            setNewProperty(state,payload){
              state.newProperty = payload
            }
        },
        actions: {
             nuxtServerInit({commit}, {req}) {
                 let accessToken = null

                 if (req.headers.cookie) {
                     var parsed = cookieparser.parse(req.headers.cookie)
                     if (parsed.auth) {
                         accessToken = JSON.parse(parsed.auth)
                         commit('update', accessToken)
                     }

                 }
            },

            onPropertyAdd({commit},payload){

                 let payload_data = {
                     address:payload.address,
                     street:payload.street,
                     city:payload.city,
                     state:payload.state,
                     zip:payload.zip,
                     rent:payload.rent,
                     bed:payload.bed,
                     bath:payload.bath,
                     manager_id:payload.manager_id,
                 }

                 let images_url = [];
                let bluebird = new Bluebird(function (resolve,reject) {

                    lodash.forEach(payload.imagesFiles,function (value,key) {

                        let main_filename = value.name;
                        let main_ext = main_filename.substr(main_filename.lastIndexOf('.') + 1);

                        var params = {
                            Bucket: bucketPath,
                            Key: 'property'+key+ new Date().getTime() + '.' + main_ext,
                            Body: value
                        };

                        s3bucket.upload(params, function (err, data) {
                            if (err) {
                                console.log('error in callback');
                                console.log(err);
                                return
                            }
                            images_url.push(data.Location)
                            if(payload.imagesFiles.length - 1 === key){
                                resolve(images_url)
                            }
                        });



                    })


                });


                bluebird.then(function (data) {

                    payload_data['images'] = data;
                    const options = {
                        method: 'POST',
                        headers: {

                            'Content-Type': 'application/json'// Required for CORS support to work
                            // "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
                        },
                        data:payload_data,
                        url:'https://p79hsy5ji0.execute-api.us-east-1.amazonaws.com/dev/property/add_property',
                    };
                    axios(options) .then((res) => {
                        console.log(res)
                        if (res.data.status) {
                            commit('setNewProperty',{id:res.data.property[0]})
                            $nuxt.$router.push("/property-manager/my_properties")
                        }
                    });
                });
            },

            savePropertyImage({commit},payload){

                let main_filename = payload.image.name;
                let main_ext = main_filename.substr(main_filename.lastIndexOf('.') + 1);

                var params = {
                    Bucket: bucketPath,
                    Key: 'property'+1+ new Date().getTime() + '.' + main_ext,
                    Body: payload.image
                };

                s3bucket.upload(params, function (err, data) {
                    if (err) {
                        console.log('error in callback');
                        console.log(err);
                        return
                    }

                    let payload_data={
                        id:payload.property_id,
                        image:data.Location
                    }
                    const options = {
                        method: 'POST',
                        headers: {

                            'Content-Type': 'application/json'// Required for CORS support to work
                            // "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
                        },
                        data:payload_data,
                        url:'https://p79hsy5ji0.execute-api.us-east-1.amazonaws.com/dev/property/addImageToProperty',
                    };
                    axios(options) .then((res) => {
                        console.log(res)

                    });

                });
            },

            sendMail({commit},payload){
                const params = {
                    Destination: {
                        ToAddresses: [process.env.TO_EMAIL]
                    },
                    Message: {
                        Body: {
                            Html: {
                                Charset: 'UTF-8',
                                Data: payload.message
                            },
                            Text: {
                                Charset: 'UTF-8',
                                Data: payload.message
                            }
                        },
                        Subject: {
                            Charset: 'UTF-8',
                            Data: "New Contact from Cretona"
                        }
                    },

                    Source: process.env.TO_EMAIL

                }

                ses.sendEmail(params, (err, data) => {
                    if (err) console.log(err, err.stack)
                    else console.log(data)
                })
            }
        },
        getters:{

            user (state){
                return state.user
            },
            auth (state){
                return state.auth
            },
            properties(state){
                return state.properties
            },
            newProperty(state){
                return state.newProperty
            }

        }
    })
}
export default createStore



