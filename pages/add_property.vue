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
                                            <option value="British Columbia">British Columbia</option>
                                            <option value="Alberta">Alberta</option>
                                            <option value="Saskatchewan">Saskatchewan</option>
                                            <option value="Manitoba">Manitoba</option>
                                            <option value="Ontario">Ontario</option>
                                            <option value="Quebec">Quebec</option>
                                            <option value="New Brunswick">New Brunswick</option>
                                            <option value="Nova Scotia">Nova Scotia</option>
                                            <option value="Prince Edward Island">Prince Edward Island</option>
                                            <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                                            <option value="Yukon">Yukon</option>
                                            <option value="Northwest Territories">Northwest Territories</option>
                                            <option value="Nunavut">Nunavut</option>
                                        </select>

                                    </div>
                                </div>

                                <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 extra-input">
                                    <div class="form-group">
                                        <label for="form-zip">Zip</label>
                                        <input type="text" name="zip" v-model="zip" id="form-zip"  class="form-control set-input inner-input">
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