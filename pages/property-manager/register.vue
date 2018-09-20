<template>
    <div class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 add-property add-peronal top-pad">
                    <form method="post" action="#" @submit.prevent="onRegisterTenant($store,$router)">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 property-location">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                                <h4>Register / Tenant</h4>
                            </div>

                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 extra-input">
                                <div class="form-group">
                                    <label for="form-street">First Name</label>
                                    <input type="text" v-model="first_name" id="form-street" name="form-street" class="form-control set-input inner-input">
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 extra-input">
                                <div class="form-group">
                                    <label for="form-city">Last Name</label>
                                    <input type="text" v-model="last_name" id="form-city" name="form-city" class="form-control set-input inner-input">
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 extra-input">
                                <div class="form-group">
                                    <label for="form-state">Phone</label>
                                    <input type="text" v-model="phone" id="form-state" name="form-state" class="form-control set-input inner-input">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 extra-input">
                                <div class="form-group">
                                    <label for="form-email">Email</label>
                                    <input type="email" v-model="email" id="form-email" name="form-state" class="form-control set-input inner-input">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 extra-input">
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" v-model="password" id="password" name="form-zip" class="form-control set-input inner-input">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 extra-input">
                                <div class="form-group">
                                    <label for="c-password">Confirm Password</label>
                                    <input type="password" v-model="c_password" id="c-password" name="form-zip" class="form-control set-input inner-input">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 extra-input">
                                <div class="form-group">

                                    <input type="submit" value="Submit"  class="btn btn-primary">
                                </div>
                            </div>

                        </div>


                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

 import validator from 'validator'
 import Cookie from 'js-cookie'
 import axios from 'axios'

    export default {
        layout:'frontend',
        head: {
            titleTemplate: 'Home',
        },
        middleware:'notAuthenticated',
        data(){
            return {
                first_name:"",
                last_name:"",
                phone:"",
                email:"",
                password:"",
                c_password:""
            }
        },
        methods:{
            onRegisterTenant(store,router){


                if(!validator.equals(this.password,this.c_password)){
                    alert('Password do not match.')
                    return
                }
                if(!validator.isEmail(this.email)){
                    alert('Email is invalid.')
                    return
                }

                let payload = {
                    first_name: this.first_name,
                    last_name: this.last_name,
                    phone: this.phone,
                    email: this.email,
                    password: this.password,
                }
                //console.log(payload)
                    const options = {
                        method: 'POST',
                        headers: {

                            'Content-Type': 'application/json'// Required for CORS support to work
                            // "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
                        },
                        data:payload,
                        url:'https://p79hsy5ji0.execute-api.us-east-1.amazonaws.com/dev/property-manager/postRegister',
                    };
                    axios(options) .then((res) => {

                            //console.log(res)
                        if (res.data.status) {
                            const auth = {
                                accessToken: res.data.user.id,
                                accessType: 'Property Manager',
                            }

                            store.commit('update', auth) // mutating to store for client rendering
                            Cookie.set('auth', auth) // saving token in cookie for server rendering

                            router.push('/property-manager/dashboard')
                        }
                    });


            }
        },
        mounted () {

        }
    }
</script>

<style>

</style>