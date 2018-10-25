<template>
    <div>
        <NavSecond></NavSecond>

    <div class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 all-leads add-property add-peronal pay-rent rent-vacant-cards">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 lead-left">
                        <h3>Rented</h3>
                    </div>

                    <div class="row">
                        <div class="col-lg-offset-4 col-lg-3">
                            <nuxt-link to="/add_property" class="btn btn-primary">Add Property</nuxt-link>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-12 vacant-card" v-if="properties" v-for="(property,i) in properties" :key="i">
                        <div class="card">
                            <div class="thumbnail-image">
                            <img class="card-img-top" v-if="property.images" :src="property.images[0].image" alt="Card image cap">
                            <img class="card-img-top"  src="https://blog.stylingandroid.com/wp-content/themes/lontano-pro/images/no-image-slide.png" alt="Card image cap" v-else>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title"><a :href="'/property/'+property.slug">{{ property.address }}</a></h5>

                                <div class="rented-table1">
                                    <small>RENTED AMOUNT</small>
                                    <h6>${{ property.rent }}
                                        <span>/  month</span>
                                    </h6>
                                </div>

                                <div class="rented-table2">
                                    <nuxt-link to="/tenant/index" class="btn btn-default">TENANT</nuxt-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  class="col-lg-12 col-md-12 col-sm-12 vacant-card" v-else>
                        <p >No Property available at this moment</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>


    import axios from 'axios'
    import NavSecond from '@/components/frontend/nav_second'
    export default {
        components:{
            NavSecond
        },
        layout:'frontend',
        head: {
            titleTemplate: 'Dashboard',
        },
        asyncData ({ store, params }) {


            const options = {
                method: 'POST',
                headers: {

                    'Content-Type': 'application/json'// Required for CORS support to work
                    // "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
                },
                data:{manager_id:store.getters.auth.accessToken},
                url:'https://p79hsy5ji0.execute-api.us-east-1.amazonaws.com/dev/property/my_property',
            };
            return   axios(options) .then((res) => {
                store.commit('setProperties',res.data.properties)
                return {properties: res.data.properties}
            });


        },
        computed:{
//            properties(){
//
//                if(this.$store.getters.properties){
//                    return this.$store.getters.properties
//                }else{
//                    return []
//                }
//
//            }
        },
        middleware:'property_manager_guard',
        methods:{

        }
    }
</script>

<style>

</style>