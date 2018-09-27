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
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 all-leads add-property add-peronal pay-rent rent-vacant-cards">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 lead-left">
                        <h3>Rented</h3>
                    </div>

                    <div class="row">
                        <div class="col-lg-offset-4 col-lg-3">
                            <a href="/add_property" class="btn btn-primary">Add Property</a>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 col-sm-12 vacant-card" v-if="properties.length > 0" v-for="(property,i) in properties" :key="i">
                        <div class="card">
                            <img class="card-img-top" v-if="property.images[0]" :src="property.images[0].image" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title"><a :href="'/property/'+property.slug">{{ property.address }}</a></h5>

                                <div class="rented-table1">
                                    <small>RENTED AMOUNT</small>
                                    <h6>${{ property.rent }}
                                        <span>/  month</span>
                                    </h6>
                                </div>

                                <div class="rented-table2">
                                    <button class="btn btn-default">TENANT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div  class="col-lg-12 col-md-12 col-sm-12 vacant-card" v-if="properties.length == 0">
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
    export default {
        layout:'frontend',
        head: {
            titleTemplate: 'Dashboard',
        },
        async fetch ({ store, params }) {


            const options = {
                method: 'POST',
                headers: {

                    'Content-Type': 'application/json'// Required for CORS support to work
                    // "Access-Control-Allow-Credentials" : true // Required for cookies, authorization headers with HTTPS
                },
                data:{manager_id:1},
                url:'https://p79hsy5ji0.execute-api.us-east-1.amazonaws.com/dev/property/my_property',
            };
            await   axios(options) .then((res) => {
                console.log(res)
                store.commit('setProperties',res.data.properties)
            });


        },
        computed:{
            properties(){
                console.log(this.$store.getters.properties)
                return this.$store.getters.properties
            }
        },
        middleware:'property_manager_guard',
        methods:{

        }
    }
</script>

<style>

</style>