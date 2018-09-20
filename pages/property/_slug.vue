<template>
    <div>
        <nav class="navbar navbar-expand navbar-dark bg-primary my-properties-nav">
            <div class="container">
                <div class="navbar-collapse collapse">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <nuxt-link class="nav-link active" to="/property-manager/my_properties">MY PROPERTIES</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="dashboard-all-leads.html">ALL LEADS</a>
                        </li>
                        <li class="nav-item number-notification">
                            <a class="nav-link " href="dashboard-applications.html">APPLICATIONS
                                <span>1</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div class="container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 all-leads add-property manage-tenant text-positon">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 allleads-div">
                            <h3>Property Detail</h3>
                        </div>

                        <div class="col-lg-12 col-md-12 col-sm-12 dashboard-property-address">
                            <div class="col-lg-4 col-md-12 col-sm-12 maple-drive">
                                <h6 class="solid-blue">Address</h6>
                                <h6>{{ newProperty.address }}</h6>

                            </div>
                            <div class="col-lg-4 col-md-12 col-sm-12 yearly-rent">
                                <h6 class="solid-blue">Rent</h6>
                                <h6>${{ newProperty.rent }} / Year.</h6>
                            </div>
                            <div class="col-lg-4 col-md-12 col-sm-12 number-of-bedrooms">
                                <h6 class="solid-blue">Bedroom</h6>
                                <h6>2</h6>
                            </div>
                            <div class="col-lg-4 col-md-12 col-sm-12 number-of-bathrooms">
                                <h6 class="solid-blue">Bathroom</h6>
                                <h6>{{ newProperty.bed }}</h6>

                            </div>
                        </div>

                        <div class="col-lg-12 col-md-12 col-sm-12 buildings-images">
                            <h3>Property IMAGES</h3>
                            <div class="col-lg-2 col-md-2 col-sm-6 images-detail" v-for="(image,i) in newProperty.images" :key="i">
                                <img :src="image.image" class="add-image">
                                <div class="middle-image">
                                    <div class="inner-middle">
                                        <p>
                                            <a href="#">
                                                <img class="eye-buttom" src="/images/icon-9.png">
                                            </a>
                                        </p>
                                        <p><img class="w-100" src="/images/bottom-border-4.png"></p>
                                        <p> <a href="#">
                                            <img src="/images/icon-10.png">
                                        </a></p>

                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-2 col-md-2 col-sm-6 images-detail" id="images_row">


                                <label for="addImage" class="btn btn-default btn-block btn-outlined">
                                    <img id="addImage" src="/images/image-24.png" class="add-image" @click="uploadBtnFile">
                                </label>

                                <input type="file" @change="ImageForBanner" ref="fileInput" style="display: none" id="imgInp"  name="banner" class="form-control">

                            </div>


                        </div>




                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

    import axios from "axios";

    export default {
        data(){
            return{
                imageUrl:"",
                banner : null,
                filename:"",
                id:this.$store.getters.newProperty.id
            }
        },
        layout:'frontend',
        async fetch ({ store, params }) {

            let options = {
                method: 'GET',
                headers: {

                    'Content-Type': 'application/json'// Required for CORS support to work
                    // "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
                },
                url:'https://p79hsy5ji0.execute-api.us-east-1.amazonaws.com/dev/property/'+params.slug,
            };
            await axios(options) .then((res) => {
               // console.log(res)
                store.commit('setNewProperty',res.data.property)

            });
        },
        computed:{
            newProperty(){
                return this.$store.getters.newProperty
            }

        },

        head: {
            titleTemplate: 'Property detail',
            link: [

                // { rel: "stylesheet", href: "../css/basic.min.css" },
                { rel: "stylesheet", href: "../css/dropzone.min.css" },

            ],
            script :[

                {src:'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.2/jquery-ui.js'},
                {src:'../js/dropzone.min.js'},

            ]
        },
        middleware:'property_manager_guard',
        methods:{
            ImageForBanner(event){
                const files = event.target.files;
                let fileName = files[0].name; //get file name
                let ext = fileName.substr(fileName.lastIndexOf('.') + 1);
                // console.log(ext)
                this.filename =  new Date().getTime() +'.'+ext;
                if(fileName.lastIndexOf('.') <= 0){

                    return alert('Please select a valid file!')
                }
                const fileReader = new FileReader();
                fileReader.addEventListener('load', () =>{


                    $('#images_row').before('<div class="col-lg-2 col-md-2 col-sm-6 images-detail">\n' +
                        '                                <img src="'+fileReader.result+'" class="add-image">\n' +
                        '                                <div class="middle-image">\n' +
                        '                                    <div class="inner-middle">\n' +
                        '                                        <p>\n' +
                        '                                            <a href="#">\n' +
                        '                                                <img class="eye-buttom" src="/images/icon-9.png">\n' +
                        '                                            </a>\n' +
                        '                                        </p>\n' +
                        '                                        <p><img class="w-100" src="/images/bottom-border-4.png"></p>\n' +
                        '                                        <p> <a href="#">\n' +
                        '                                            <img src="/images/icon-10.png">\n' +
                        '                                        </a></p>\n' +
                        '\n' +
                        '                                    </div>\n' +
                        '                                </div>\n' +
                        '                            </div>');

                    this.imageUrl = fileReader.result

                });
                fileReader.readAsDataURL(files[0])
                this.banner = files[0];

                let payload = {
                    image:files[0],
                    property_id:this.id
                }

                this.$store.dispatch('savePropertyImage',payload)
            },
            uploadBtnFile(){

                this.$refs.fileInput.click()
            }
        },
        mounted(){

        }
    }
</script>

<style>

</style>