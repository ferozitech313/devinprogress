<template>
    <nav class="navbar navbar-toggleable-lg navbar-expand-lg navbar-light bg-faded shadow1 cretona-navbar">
        <div class="container nav-container">
            <nuxt-link class="navbar-brand hidden-lg-up" to="/">
                <img src="/images/cretona-logo.png" alt="">
            </nuxt-link>
            <button class="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navbar" aria-expanded="false">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse" id="navbar" aria-expanded="false" style="">
                <ul class="navbar-nav nav-fill ml-auto cretona-pages">
                    <li class="nav-item item">
                        <nuxt-link class="nav-link" to="/">Home</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link" to="/benefits">Benefits</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link class="nav-link  aboutus" to="/about_us">About US</nuxt-link>
                    </li>
                    <li class="nav-item dropdown" v-if="!loggedIn">
                        <nuxt-link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Register
                        </nuxt-link>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <nuxt-link class="dropdown-item" to="/tenant/signup">As Tenant</nuxt-link>
                            <nuxt-link class="dropdown-item" to="/property-manager/register">As Property Manager</nuxt-link>
                        </div>
                    </li>
                    <li class="nav-item" v-if="!loggedIn">
                        <nuxt-link class="nav-link aboutus" to="/login">Login</nuxt-link>
                    </li>
                    <li class="nav-item" v-if="loggedIn">
                        <nuxt-link class="nav-link aboutus" to="/property-manager/dashboard">My Dashboard</nuxt-link>
                    </li>
                    <li class="nav-item" v-if="loggedIn">
                        <a class="nav-link aboutus" @click.prevent="onLogout($store)" href="#">Log out</a>
                    </li>
                </ul>
                <div class="dropdown dropdown-flag country-flag">
                    <button class="btn btn-default dropdown-toggle" type="button" id="dropdownflag" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src="/images/dropdownflag.png">
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
    import Cookie from 'js-cookie'
    export default {
        computed:{
            loggedIn(){
               // console.log(this.$store.getters.auth)
                return this.$store.getters.auth
            }
        },
        methods:{
            onLogout(store){
                console.log('logging out')
                store.commit('update',null)
                Cookie.remove('auth')
                this.$router.push('/')
            }
        }
    }
</script>