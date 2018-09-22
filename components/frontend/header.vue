<template>
    <div class="container-fluid top-header">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 live-call">

                    <ul class="cretona-unordered">
                        <li class="cretona_page cretona-live">
                            <a id="call-cretona-live" class="call-cretona-live" href="tel:(408) 763-5033"><span>
                                <img src="/images/phone-icon.png" alt=""></span>408.763.5033</a>
                        </li>
                        <li class="cretona_page cretona-started">
                            <a id="get-cretona-started" class="get-cretona-started" href="#" data-toggle="modal" data-target="#formmodal">Contact Us</a>
                        </li>
                    </ul>

                </div>



                    <!-- Button trigger modal -->
                    <!-- Modal -->
                    <div class="modal formodal " id="formmodal" >
                        <div class="modal-dialog" >
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">GET IN TOUCH</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                </div>
                                <div class="modal-body">
                                    <form method="post" action="#" @submit.prevent="sendEmailModal">
                                        <div class="col-xs-6 col-sm-6 col-md-6 extra-input">
                                            <div class="form-group">
                                                <input type="text" id="first_name" autocomplete="false" v-model="first_name_modal" name="first_name" placeholder="First Name" class="form-control set-input inner-input">
                                            </div>
                                        </div>
                                        <div class="col-xs-6 col-sm-6 col-md-6 extra-input">
                                            <div class="form-group">
                                                <input type="text" id="last_name" autocomplete="false" v-model="last_name_modal" name="last_name" placeholder="Last Name" class="form-control set-input inner-input">
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-12 address-extra">
                                            <div class="form-group">
                                                <input type="text" id="email" autocomplete="false" v-model="email_modal" name="email" placeholder="Email" class="form-control extra-add set-input">
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-12 address-extra">
                                            <div class="form-group">
                                                <input type="text" id="phone" autocomplete="false" v-model="phone_modal" name="phone" placeholder="Phone" class="form-control extra-add set-input">
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-12 address-extra">
                                            <div class="form-group">
                                                <textarea placeholder="Comment" autocomplete="false" v-model="comment_modal" class="form-control" id="comment" rows="3"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-xs-12 col-sm-12 col-md-12 address-extra address-btn">
                                            <button type="submit" class="btn btn-primary">
                                                <span> Submit</span>
                                                <img src="images/arrow-right.png">
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    </div>
</template>

<script>
    import validator from 'validator'
    export default {
        data(){
            return {

                first_name_modal:"",
                last_name_modal:"",
                email_modal:"",
                phone_modal:"",
                comment_modal:"",
            }
        },
        methods:{

            sendEmailModal(){


                if(validator.isEmpty(this.first_name_modal)){
                    alert('First name is required.')
                    return
                }

                if(validator.isEmpty(this.last_name_modal)){
                    alert('Last name is required.')
                    return
                }
                if(!validator.isEmail(this.email_modal)){
                    alert('Email is invalid.')
                    return
                }
                if(validator.isEmpty(this.comment_modal)){
                    alert('Comment is required.')
                    return
                }

                let payload = {
                    message:this.first_name_modal + " " + this.last_name_modal +" has contact you and wrote this comment: " + this.comment_modal+ " phone: " + this.phone_modal,
                    from_email:this.email_modal,
                }


                this.$store.dispatch('sendMail',payload)
                alertify.success('Your message has been sent. Your will be contacted soon.')
                setTimeout(function () {
                    window.location.reload()
                },1000);
            }
        }
    }
</script>