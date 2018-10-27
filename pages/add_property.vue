<template>
    <div>

        <NavSecond></NavSecond>
        <div class="container-fluid">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 add-property add-peronal top-pad">
                        <form method="post"  @submit.prevent="onPropertyAdd"  action="#" class="dropzone wrapper" drop-zone="" id="file-dropzone">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 property-location">
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <h3>Add Property</h3>
                                    <h4>PROPERTY LOCATION</h4>
                                </div>

                                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 extra-input">
                                    <div class="form-group">
                                        <label for="form-address">ADDRESS</label>
                                        <input type="text" v-model="address" id="form-address" name="address" class="form-control set-input inner-input">
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 extra-input">
                                    <div class="form-group">
                                        <label for="form-street">Address 2</label>
                                        <input type="text" name="street" v-model="street" id="form-street"   class="form-control set-input inner-input">
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 extra-input">
                                    <div class="form-group">
                                        <label for="form-city">CITY</label>
                                        <input type="text" name="city" v-model="city" id="form-city"   class="form-control set-input inner-input">
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 extra-input">
                                    <div class="form-group">
                                        <label for="form-state">STATE</label>
                                        <select v-model="state" name="state" id="form-state" class="form-control set-input inner-input">
                                            <option value="">Select State</option>
                                            <option value="Alabama">Alabama</option>
                                            <option value="Alaska">Alaska</option>
                                            <option value="Arizona">Arizona</option>
                                            <option value="Arkansas">Arkansas</option>
                                            <option value="California">California</option>
                                            <option value="Colorado">Colorado</option>
                                            <option value="Connecticut">Connecticut</option>
                                            <option value="Delaware">Delaware</option>
                                            <option value="District of Columbia">District of Columbia</option>
                                            <option value="Florida">Florida</option>
                                            <option value="Georgia">Georgia</option>
                                            <option value="Guam">Guam</option>
                                            <option value="Hawaii">Hawaii</option>
                                            <option value="Idaho">Idaho</option>
                                            <option value="Illinois">Illinois</option>
                                            <option value="Indiana">Indiana</option>
                                            <option value="Iowa">Iowa</option>
                                            <option value="Kansas">Kansas</option>
                                            <option value="Kentucky">Kentucky</option>
                                            <option value="Louisiana">Louisiana</option>
                                            <option value="Maine">Maine</option>
                                            <option value="Maryland">Maryland</option>
                                            <option value="Massachusetts">Massachusetts</option>
                                            <option value="Michigan">Michigan</option>
                                            <option value="Minnesota">Minnesota</option>
                                            <option value="Mississippi">Mississippi</option>
                                            <option value="Missouri">Missouri</option>
                                            <option value="Montana">Montana</option>
                                            <option value="Nebraska">Nebraska</option>
                                            <option value="Nevada">Nevada</option>
                                            <option value="New Hampshire">New Hampshire</option>
                                            <option value="New Jersey">New Jersey</option>
                                            <option value="New Mexico">New Mexico</option>
                                            <option value="New York">New York</option>
                                            <option value="North Carolina">North Carolina</option>
                                            <option value="North Dakota">North Dakota</option>
                                            <option value="Northern Marianas Islands">Northern Marianas Islands</option>
                                            <option value="Ohio">Ohio</option>
                                            <option value="Oklahoma">Oklahoma</option>
                                            <option value="Oregon">Oregon</option>
                                            <option value="Pennsylvania">Pennsylvania</option>
                                            <option value="Puerto Rico">Puerto Rico</option>
                                            <option value="Rhode Island">Rhode Island</option>
                                            <option value="South Carolina">South Carolina</option>
                                            <option value="South Dakota">South Dakota</option>
                                            <option value="Tennessee">Tennessee</option>
                                            <option value="Texas">Texas</option>
                                            <option value="Utah">Utah</option>
                                            <option value="Vermont">Vermont</option>
                                            <option value="Virginia">Virginia</option>
                                            <option value="Virgin Islands">Virgin Islands</option>
                                            <option value="Washington">Washington</option>
                                            <option value="West Virginia">West Virginia</option>
                                            <option value="Wisconsin">Wisconsin</option>
                                            <option value="Wyoming">Wyoming</option>
                                        </select>

                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 extra-input">
                                    <div class="form-group">
                                        <label for="form-zip">Zip</label>
                                        <input type="text" name="zip" maxlength="5" v-model="zip" id="form-zip"  class="form-control set-input inner-input">
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 property-location">
                                <div class="form-border">
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <h4>PROPERTY DETAILS</h4>
                                </div>


                                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 extra-input">
                                    <div class="form-group">
                                        <label for="form-rent">RENT (per month)</label>
                                        <input type="text" name="rent" v-model="rent" maxlength="6" id="form-rent" class="form-control set-input inner-input">
                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 extra-input">
                                    <div class="form-group">
                                        <label for="form-bed">BED</label>
                                        <input type="text" v-model="bed" maxlength="3" id="form-bed" name="bed" class="form-control set-input inner-input">

                                    </div>
                                </div>


                                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 extra-input">
                                    <div class="form-group">
                                        <label for="form=bath">BATH</label>
                                        <input type="text" v-model="bath" maxlength="3" id="form=bath" name="bath" class="form-control set-input inner-input">
                                        <p id="first-name-error" style="display: none"></p>
                                    </div>
                                </div>

                            </div>

                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 add-property-images">
                                <div class="form-border">
                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <h4>Add PROPERTY IMAGES</h4>

                                </div>
                                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 property-images">


                                    <ul class="visualizacao   dropzone-previews"  >

                                    </ul>
                                    <div class="preview" style="display:none;">
                                        <li>
                                            <div>
                                                <div class="dz-preview dz-file-preview">
                                                    <img data-dz-thumbnail />
                                                    <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>
                                                    <div class="dz-success-mark"><span>?</span></div>
                                                    <div class="dz-error-mark"><span>?</span></div>
                                                    <div class="dz-error-message"><span data-dz-errormessage></span></div>
                                                </div>
                                            </div>
                                        </li>
                                    </div>
                                </div>

                            </div>
                            <div class="bottom col-lg-12 col-md-12 col-sm-12 col-xs-12 property-submit" style="float: left;">
                                                                 <button class="btn btn-default" id="button" type="submit">
                                                                       <span>Add Property</span>
                                                                     <img src="/images/arrow-right.png">
                                                                </button>
                                                           </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>
<script>

    import axios from "axios";
    import validator from 'validator'
    import NavSecond from '@/components/frontend/nav_second'

    export default {
        layout:'frontend',
        components:{
            NavSecond
        },

        data(){
            return {
                address:"",
                street:"",
                city:"",
                state:"",
                zip:"",
                rent:"",
                bed:"",
                bath:"",
                imagesFiles:[]
            }
        },
        head: {
            titleTemplate: 'Add Property',
            link: [

               // { rel: "stylesheet", href: "../css/basic.min.css" },
                { rel: "stylesheet", href: "../css/dropzone.min.css" },

            ],
            script :[

              {src:'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.2/jquery-ui.js'},
              {src:'../js/dropzone.min.js'},

            ]
        },
        middleware:'property_manager_guard',
        methods:{
            onPropertyAdd(){
                this.$nuxt.$loading.start()
                let payload = {
                    address: this.address,
                    street: this.street,
                    city: this.city,
                    state: this.state,
                    zip: this.zip,
                    rent: this.rent,
                    bed: this.bed,
                    bath: this.bath,
                    imagesFiles: this.imagesFiles,
                    manager_id: this.$store.getters.auth.accessToken
                }
                if(validator.isEmpty(this.address)){
                    alert('Address field is required.')
                    return
                }
                if(validator.isEmpty(this.state)){
                    alert('State field is required.')
                    return
                }
                if(validator.isEmpty(this.city)){
                    alert('City field is required.')
                    return
                }
                if(!validator.isNumeric(this.rent)){
                    alert('Rent has to be numeric value')
                    return
                }else  if(!validator.isNumeric(this.bed)){
                    alert('Bed has to be numeric value')
                    return
                }else  if(!validator.isNumeric(this.bath)){
                    alert('Bath has to be numeric value')
                    return
                }else  if(!validator.isLength(this.rent,{min:0, max: 6})){
                    alert('Rent can only have 6 numeric characters. ')
                    return
                }else  if(!validator.isLength(this.bed,{min:0, max: 3})){
                    alert('Bed can only have 3 numeric characters. ')
                    return
                }else  if(!validator.isLength(this.bath,{min:0, max: 3})){
                    alert('Bed can only have 3 numeric characters. ')
                    return
                }else  if(!validator.isLength(this.zip,{min:0, max: 5})){
                    alert('Zip can only have 5 alpha-numeric characters. ')
                    return
                }

                this.$store.dispatch('onPropertyAdd',payload)


            }
        },
        mounted(){

            var vm = this;
            if (process.browser) {
                window.onNuxtReady((app) => {

                    $('.sortable').sortable();

                    $('#file-dropzone').dropzone({
                        url: "#",
                        maxFilesize: 100,
                        dictDefaultMessage: "Choose or drop  file from your computer",
                        paramName: "product_images",
                        // uploadMultiple:true,
                        maxThumbnailFilesize: 99999,
                        //   previewsContainer: '.visualizacao',
                        autoProcessQueue: false,
                        maxFiles: 100,
                        parallelUploads: 100,
                        uploadMultiple: true,
                         previewTemplate : $('.preview').html(),
                        init: function () {

                           this.on("addedfile", function (file) {

                                // Create the remove button
                                var removeButton = Dropzone.createElement("<a href='#' class='remove-btn' >Remove</a>");


                                // Capture the Dropzone instance as closure.
                                var _this = this;

                                // Listen to the click event
                                removeButton.addEventListener("click", function (e) {
                                    // Make sure the button click doesn't submit the form:
                                    e.preventDefault();
                                    e.stopPropagation();
                                    console.log('here')
                                    // Remove the file preview.
                                    _this.removeFile(file);
                                    // If you want to the delete the file on the server as well,
                                    // you can do the AJAX request here.
                                });
                                $('.dz-default').show();
                                // Add the button to the file preview element.
                                file.previewElement.appendChild(removeButton);

                               vm.imagesFiles.push(file)

                            });

                           this.on('completemultiple', function (file, json) {
                                $('.sortable').sortable('enable');
                           });



                        }
                    });

//                    $('#file-dropzone').append(' <div class="bottom col-lg-12 col-md-12 col-sm-12 col-xs-12 property-submit" style="float: left;">\n' +
//                        '                                <button class="btn btn-default" id="button" type="submit">\n' +
//                        '                                    <span>Add Property</span>\n' +
//                        '                                    <img src="/images/arrow-right.png">\n' +
//                        '                                </button>\n' +
//                        '                            </div>')
                });
            }
        }
    }
</script>

<style>

</style>