<template>

    <div>
        <Header></Header>
        <Nav></Nav>
        <div>
            <nuxt/>
        </div>
          <Footer></Footer>
    </div>
</template>
<script>
import Header from '@/components/frontend/header'
import Nav from '@/components/frontend/nav'
import Footer from '@/components/frontend/footer'
        export default {
            components:{
                Header,Nav,Footer
            },
            head: {
                titleTemplate: 'Cretona',
                meta: [
                    { charset: 'utf-8' },
                    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                    { hid: 'description', name: 'description', content: 'Meta description' }
                ],
                link: [

                    { rel: "stylesheet", href: "../css/bootstrap.min.css" },
                    { rel: "stylesheet", href: "../css/style.css" },
                    { rel: "stylesheet", href: "../css/font-awsome/css/fontawesome-all.min.css" },
                    { rel: "stylesheet", href: "../css/alertify.css"},

                ],
                script :[

                    {src:'../js/jquery-3.3.1.min.js'},
                    {src:'../js/bootstrap.min.js'},
                    {src:'../js/alertify.min.js'},

                ]
            },
            mounted(){
                if (process.browser) {
                    window.onNuxtReady((app) => {

                        $(".navbar-nav li a").click(function(event) {
                            if (!$(this).parent().hasClass('dropdown'))
                                $(".navbar-collapse").collapse('hide');
                        });
                    })
                }
        }

        }
</script>
<style>
    li > .nuxt-link-exact-active{
        background-image: url(../static/images/bottom-border.png);
        background-position: bottom;
        background-repeat: no-repeat;
        color: #03a9f4!important;
    }
</style>