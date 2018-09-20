<template>
  <div>
  <div class="container-fluid online-services">
    <div class="container">
      <div class="row home-banner">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 cretona-costs">
          <div class="col-lg-7 col-md-6 col-sm-6 col-xs-6 costs-content">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 kvg-pop">
              <h3>Cretona: Cost Conscious Resident / Owner online services </h3>
              <p>No Fees. Know how</p>
            </div>
          </div>

          <div class="col-lg-5 col-md-6 col-sm-6 col-xs-6 peronal-tab">
            <div class="col-xs-12 col-sm-12 col-md-12 address-extra kvg-extra">
              <h3>GET IN TOUCH</h3>
            </div>

            <form method="post" action="#" @submit.prevent="sendEmail">
              <div class="col-xs-6 col-sm-6 col-md-6 extra-input">
                <div class="form-group">
                  <input type="text" id="f_name" autocomplete="false" v-model="first_name" name="first_name" placeholder="First Name" class="form-control set-input inner-input">
                </div>
              </div>
              <div class="col-xs-6 col-sm-6 col-md-6 extra-input">
                <div class="form-group">
                  <input type="text" id="l_name" autocomplete="false" v-model="last_name" name="last_name" placeholder="Last Name" class="form-control set-input inner-input">
                </div>
              </div>

              <div class="col-xs-12 col-sm-12 col-md-12 address-extra">
                <div class="form-group">
                  <input type="text" id="home_email" autocomplete="false" v-model="email" name="email" placeholder="Email" class="form-control extra-add set-input">
                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-12 address-extra">
                <div class="form-group">
                  <input type="text" id="home_phone" autocomplete="false" v-model="phone" name="phone" placeholder="Phone" class="form-control extra-add set-input">
                </div>
              </div>

              <div class="col-xs-12 col-sm-12 col-md-12 address-extra">
                <div class="form-group">
                  <textarea placeholder="Comment" autocomplete="false" v-model="comment" class="form-control" id="home-comment" rows="3"></textarea>
                </div>
              </div>

              <div class="col-xs-12 col-sm-12 col-md-12 address-extra">
                <button type="submit" class="btn btn-primary">
                  <span> Submit</span>
                  <img src="images/arrow-right.png">

                </button>
              </div>

            </form>

            <div class="col-xs-12 col-sm-12 col-md-12 address-extras">

              <!-- Button trigger modal -->
              <!-- Modal -->
              <div class="modal fade" id="formmodal" tabindex="-1" role="dialog" aria-labelledby="formmodal" aria-hidden="true">
                <div class="modal-dialog" role="document">
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
      </div>
    </div>
  </div>
  <div class="container-fluid final-services">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 property-owners">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 one-stop kvg-top">
            <h3 class="text-center">Finally, one stop to service residents and property owner needs</h3>
            <p class="text-center">We eliminate all processing costs too!</p>
          </div>
          <div class="col-lg-12 col-md-12 col-sx-12 col-xs-12 main-services">
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 inner-services">
              <div class="col-lg-12 col-md-12 col-sx-12 col-xs-12 service-service">
                <div class="col-md-2 service-image">
                  <img src="images/user-service.png">
                </div>
                <div class="col-md-10 servicetext">
                  <h5>Credit Bureau Services</h5>
                </div>
              </div>
              <div class="col-lg-12 col-md-12 col-sx-12 col-xs-12 service-text">
                <p>Cretona will report your rental history - We are a trusted reporting source for all 3 credit bureaus. Free credit checks for Property Owners and managers. </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 inner-services">
              <div class="col-lg-12 col-md-12 col-sx-12 col-xs-12 service-service">
                <div class="col-md-2 service-image">
                  <img src="images/insurance.png">
                </div>
                <div class="col-md-10 servicetext">
                  <h5>Low Cost Renters Insurance</h5>
                </div>
              </div>
              <div class="col-lg-12 col-md-12 col-sx-12 col-xs-12 service-text">
                <p>Our residents will have access to a marketplace of competitve insurers who offer discounted policies.</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 inner-services">
              <div class="col-lg-12 col-md-12 col-sx-12 col-xs-12 service-service">
                <div class="col-md-2 service-image">
                  <img src="images/streamlined.png">
                </div>
                <div class="col-md-10 servicetext">
                  <h5>Streamlined Payment Center</h5>
                </div>
              </div>
              <div class="col-lg-12 col-md-12 col-sx-12 col-xs-12 service-text">
                <p>Cretona offers a NO FEE online smart payment portal for all payment methods (credit card, ACH and e-check).</p>
              </div>
            </div>
          </div>
          <div class="col-lg-12 col-md-12 col-sx-12 col-xs-12 main-services">
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 inner-services">
              <div class="col-lg-12 col-md-12 col-sx-12 col-xs-12 service-service">
                <div class="col-md-2 service-image">
                  <img src="images/credit.png">
                </div>
                <div class="col-md-10 servicetext">
                  <h5>Credit in lieu of Deposit</h5>
                </div>
              </div>
              <div class="col-lg-12 col-md-12 col-sx-12 col-xs-12 service-text">
                <p>Through intelligent credit score reviews and our relationships with financial institutions you may qualify for a waiver on your security deposit. </p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 inner-services">
              <div class="col-lg-12 col-md-12 col-sx-12 col-xs-12 service-service">
                <div class="col-md-2 service-image">
                  <img src="images/network.png">
                </div>
                <div class="col-md-10 servicetext">
                  <h5>Network of Cretona Serviced Properties</h5>
                </div>
              </div>
              <div class="col-lg-12 col-md-12 col-sx-12 col-xs-12 service-text">
                <p>We will leverage our growing network to provide rich data points and analysis to our customers, both resident and owner.</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 inner-services">
              <div class="col-lg-12 col-md-12 col-sx-12 col-xs-12 service-service">
                <div class="col-md-2 service-image">
                  <img src="images/integration.png">
                </div>
                <div class="col-md-10 servicetext">
                  <h5>Integration with Property Management Software</h5>
                </div>
              </div>
              <div class="col-lg-12 col-md-12 col-sx-12 col-xs-12 service-text">
                <p>Cretona is continuously working to streamline and integrate with existing software platforms.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid cretona-women">
    <div class="container">
      <div class="row">
        <div class="offset-lg-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 trust-worthy">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 one-stop">
            <h3>Not only trustworthy and professional, but also free!</h3>
            <h5>How it works:</h5>
          </div>
          <div class="col-lg-12 col-md-12 col-sx-12 col-xs-12 service-text">
            <p class="start-saving">Owners, sign up today, it's free and start saving hassle and money Residents, start a search for a new home!</p>
            <p class="online-experience">Our online experience is super smart and simple to use for residents and owners</p>
            <p class="full-disruption">The world is full of disruption, we are part of that wave. No fees for online rental payments for residents and no fee credit checks for owners</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid rental-history">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 property-owners processing-costs">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 one-stop kvg-top">
            <h3 class="text-center">By reporting rental history for free, for all residents, we improve the market data and it benefits everyone</h3>
            <p class="text-center">The revolution in Resident/Owner online relations</p>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 online-relations">
            <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12 estate-industry">
              <img src="images/hand-shake.png">
              <p>Cretona comes from the real estate industry and we understand what you need</p>
            </div>
            <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12 estate-industry">
              <img src="images/location.png">
              <p>Locate available properties right on our website. </p>
            </div>
            <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12 estate-industry">
              <img src="images/tool.png">
              <p>Create robust propery listings with us</p>
            </div>
            <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12 estate-industry">
              <img src="images/calculator.png">
              <p>View key financial information on your own online dashboard</p>
            </div>
            <div class="col-lg-2 col-md-12 col-sm-12 col-xs-12 estate-industry">
              <img src="images/key.png">
              <p>Cretona will match the right applicant to your properties</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid financial-information">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 property-owners cretona-eliminates">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 one-stop">
            <h3>Cretona Eliminates fees for Resident and Owner.</h3>
            <h5>Put our simple online services to work for you today. Anyone can do it.</h5>
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
  layout:'frontend',
    head: {
        titleTemplate: 'Home',
    },
    data(){
      return {
          first_name:"",
          last_name:"",
          email:"",
          phone:"",
          comment:"",
          first_name_modal:"",
          last_name_modal:"",
          email_modal:"",
          phone_modal:"",
          comment_modal:"",
      }
    },
    methods:{
        sendEmail(){


            if(validator.isEmpty(this.first_name)){
                alert('First name is required.')
                return
            }

            if(validator.isEmpty(this.last_name)){
                alert('Last name is required.')
                return
            }
            if(!validator.isEmail(this.email)){
                alert('Email is invalid.')
                return
            }
            if(validator.isEmpty(this.comment)){
                alert('Comment is required.')
                return
            }

            let payload = {
                message:this.first_name + " " + this.last_name +" has contact you and wrote this comment: " + this.comment+ " phone: " + this.phone+". Email Address: " + this.email,

            }


            this.$store.dispatch('sendMail',payload)
            alertify.success('Your message has been sent. Your will be contacted soon.')
            window.location.reload();
        },
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
            window.location.reload();
        }
    }
}
</script>

<style>

</style>

