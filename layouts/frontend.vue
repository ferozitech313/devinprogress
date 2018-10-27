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
                        Dropzone.autoDiscover = false;
                        $(".navbar-nav li a").click(function(event) {
                            if (!$(this).parent().hasClass('dropdown'))
                                $(".navbar-collapse").collapse('hide');
                        });
                        //For Signup
                        var current_fs, next_fs, previous_fs; //fieldsets
                        var left, opacity, scale; //fieldset properties which we will animate
                        var animating; //flag to prevent quick multi-click glitches

                        $(".next").click(function(){

                            if(animating) return false;
                            animating = true;

                            current_fs = $(this).closest('.steps');
                            console.log(current_fs)
                            next_fs = $(this).closest('.steps').next();

                            //activate next step on progressbar using the index of next_fs
                            $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

                            //show the next fieldset
                            next_fs.show();
                            //hide the current fieldset with style
                            current_fs.animate({opacity: 0}, {
                                step: function(now, mx) {
                                    //as the opacity of current_fs reduces to 0 - stored in "now"
                                    //1. scale current_fs down to 80%
                                    scale = 1 - (1 - now) * 0.2;
                                    //2. bring next_fs from the right(50%)
                                    left = (now * 50)+"%";
                                    //3. increase opacity of next_fs to 1 as it moves in
                                    opacity = 1 - now;
                                    current_fs.css({
                                        'transform': 'scale('+scale+')',
                                        'position': 'absolute'
                                    });
                                    next_fs.css({'left': left, 'opacity': opacity});
                                },
                                duration: 800,
                                complete: function(){
                                    current_fs.hide();
                                    animating = false;
                                },
                                //this comes from the custom easing plugin
                                easing: 'easeInOutBack'
                            });
                        });

                        $(".previous").click(function(){
                            if(animating) return false;
                            animating = true;

                            current_fs = $(this).parent();
                            previous_fs = $(this).parent().prev();

                            //de-activate current step on progressbar
                            $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

                            //show the previous fieldset
                            previous_fs.show();
                            //hide the current fieldset with style
                            current_fs.animate({opacity: 0}, {
                                step: function(now, mx) {
                                    //as the opacity of current_fs reduces to 0 - stored in "now"
                                    //1. scale previous_fs from 80% to 100%
                                    scale = 0.8 + (1 - now) * 0.2;
                                    //2. take current_fs to the right(50%) - from 0%
                                    left = ((1-now) * 50)+"%";
                                    //3. increase opacity of previous_fs to 1 as it moves in
                                    opacity = 1 - now;
                                    current_fs.css({'left': left});
                                    previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
                                },
                                duration: 800,
                                complete: function(){
                                    current_fs.hide();
                                    animating = false;
                                },
                                //this comes from the custom easing plugin
                                easing: 'easeInOutBack'
                            });
                        });

                        $(".submit").click(function(){
                            return false;
                        })

                    })
                }
        }

        }
</script>
<style>
    ul.navbar-nav.nav-fill.ml-auto.cretona-pages li > .nuxt-link-exact-active{
        background-image: url(../static/images/bottom-border.png);
        background-position: bottom;
        background-repeat: no-repeat;
        color: #03a9f4!important;
        /*background-color: #03a9f4!important;*/
    }
    .my-properties-nav li > .nuxt-link-exact-active{
        background-image: url(../static/images/bottom-border.png);
        background-position: bottom;
        background-repeat: no-repeat;
        background-color: #03a9f4!important;
        color: #fff !important;
    }

</style>