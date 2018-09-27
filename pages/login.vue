<template>
    <div class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 add-property add-peronal top-pad">
                    <form method="post" action="#" @submit.prevent="onLoginTenant($store,$router)">
                        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 property-location">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">

                                <h4>Login</h4>
                            </div>

                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 extra-input">
                                <div class="form-group">
                                    <label for="form-email">Email</label>
                                    <input type="email" v-model="email" id="form-email" name="form-state" class="form-control set-input inner-input">
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 extra-input">
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" v-model="password" id="password" name="form-zip" class="form-control set-input inner-input">
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 extra-input">
                                <div class="form-group">

                                    <input type="checkbox" v-model="remember"  value="1" id="remember"  class="form-control">
                                    <label for="remember">Remember Me</label>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 extra-input">
                                <div class="form-group">

                                    <input type="submit" value="Login"  class="btn btn-primary">
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
            titleTemplate: 'Login',
        },
        middleware:'notAuthenticated',
        data(){
            return {

                email:"",
                password:"",
                remember:false

            }
        },
        methods:{
            onLoginTenant(store,router){

                if(!validator.isEmail(this.email)){
                    alert('Email is invalid.')
                    return
                }

                let payload = {
                    email: this.email,
                    password: this.password,
                }
               // console.log(payload)
                const options = {
                    method: 'POST',
                    headers: {

                        'Content-Type': 'application/json'// Required for CORS support to work
                        // "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
                    },
                    data:payload,
                    url:'https://p79hsy5ji0.execute-api.us-east-1.amazonaws.com/dev/property-manager/postLogin',
                };
                axios(options) .then((res) => {

                   // console.log(res)
                    if (res.data.status) {
                        const auth = {
                            accessToken: res.data.user.id,
                            accessType: res.data.user.user_type,
                        }

                        if(this.remember){
                            Cookie.set('auth', auth, { expires: 365 })

                        }else{
                            Cookie.set('auth', auth)
                        }
                        store.commit('update', auth) // mutating to store for client rendering


                        router.push('/property-manager/dashboard')
                    }else{
                        alert('Incorrect Login credential.')
                    }
                });


            }
        }
    }
</script>

<style>

</style>