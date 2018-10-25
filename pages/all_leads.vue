<template>
    <div>
        <NavSecond></NavSecond>

        <div class="container-fluid">
            <div class="container">
                <div class="row">
                    <div class="bgimg">


                    </div>
                </div>
            </div>
        </div>

    </div>

</template>
<script>
    import NavSecond from '@/components/frontend/nav_second'
    export default {
        components:{
            NavSecond
        },
        layout:'frontend',
        data(){
            return {

            }
        },
        head: {
            titleTemplate: 'Under Construction',
            link: [



            ],
            script :[


            ]
        },

        methods:{

        },
        mounted(){
            var vm = this;
            if (process.browser) {
                window.onNuxtReady((app) => {


                });
            }
        }
    }
</script>

<style>
    body, html {
        height: 100%
    }

    .bgimg {
        /* Background image */
        background-image: url('http://www.grantcountyinfair.com/uploads/1/0/4/0/104055372/published/pageunderconstruction_1.png?1535067078');
        /* Full-screen */
        background-position: center;
        background-size: cover;
        position: relative;
        color: white;
        font-family: "Courier New", Courier, monospace;
        font-size: 25px;
        min-height: 430px;
        float: left;
        width: 100%;
        margin: 3em 0em;
    }




    /* Style the <hr> element */
    hr {
        margin: auto;
        width: 40%;
    }
</style>