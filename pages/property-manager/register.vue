<template>
    <div class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 add-property add-peronal top-pad">
                    <form method="post" action="#" @submit.prevent="onRegisterTenant($store,$router)">
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 property-location">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                                <h4>Register / Property Manager</h4>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <p style="font-size: large"><span class="red-asterisk">*</span> for Required field</p>
                            </div>
                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 extra-input">
                                <div class="form-group">
                                    <label for="form-street"><span class="red-asterisk">*</span> First Name</label>
                                    <input type="text" v-model="first_name" id="form-street" name="form-street" class="form-control set-input inner-input">
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 extra-input">
                                <div class="form-group">
                                    <label for="form-city"><span class="red-asterisk">*</span> Last Name</label>
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
                                    <label for="form-email"><span class="red-asterisk">*</span> Email</label>
                                    <input type="email" v-model="email" id="form-email" name="form-state" class="form-control set-input inner-input">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 extra-input">
                                <div class="form-group">
                                    <label for="password"><span class="red-asterisk">*</span> Password</label>
                                    <input type="password" v-model="password" id="password" name="form-zip" class="form-control set-input inner-input">
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 extra-input">
                                <div class="form-group">
                                    <label for="c-password"><span class="red-asterisk">*</span> Confirm Password</label>
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

                if(validator.isEmpty(this.first_name)){
                    alert('First name field is required.')
                    return
                }

                if(validator.isEmpty(this.last_name)){
                    alert('last name field is required.')
                    return
                }

                if(!validator.isAlphanumeric(this.phone)){
                    alert('Phone number is not of valid type. Only alpha-numeric are allowed.')
                    return
                }

                if(validator.isEmpty(this.password)){
                    alert('Password field is required.')
                    return
                }
                if(validator.isEmpty(this.c_password)){
                    alert('Password confirmation field is required.')
                    return
                }
                if(!validator.equals(this.password,this.c_password)){
                    alert('Passwords do not match.')
                    return
                }
                if(!validator.isEmail(this.email)){
                    alert('Email is invalid.')
                    return
                }

                if(validator.isEmpty(this.email)){
                    alert('Email field is required.')
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
                            console.log(res.data)
                            const auth = {
                                accessToken: res.data.user[0],
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