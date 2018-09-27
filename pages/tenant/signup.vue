<template>

    <div class="container-fluid signup-main before-you">
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-sm-12 our-signup">
                    <form id="msform">
                        <!-- progressbar -->
                        <ul id="progressbar" class="p-0 ">
                            <li class="active"></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <!-- fieldsets -->
                        <fieldset class="steps">
                            <div class="row">
                                <div class="col-md-6 col-sm-6 col-xs-12">
                                    <h3>Before you begin-1</h3>
                                    <p>Please be prepared to pay the application fee as outlined in the property listing. In addition to this rental application, you will also be required to provide a copy of a valid form of identification and proof of income.</p>
                                    <p>To complete this rental application, you must be prepared to provide 3 years of residential history as well as contact information for your rental references. You will also be asked to provide information on your monthly income, and please note that most properties require that applicant combined gross income is at least three (3) times the monthly rent amount.</p>
                                    <p>Each resident over the age of 18 must submit a separate rental application.</p>
                                </div>
                                <div class="col-md-6 col-sm-6 col-xs-12 applying">
                                    <h4>You are applying to rent:</h4>
                                    <p>2415 Bathgate<br> Bronx, NY 10458
                                    </p>
                                    <h5>Desired Move-in</h5>
                                    <div class="form-group">
                                        <input type="email" class="form-control" id="exampleInputEmail1"
                                               aria-describedby="emailHelp">
                                    </div>
                                    <div class="form-check apply-all-chek">
                                        <label class="form-check-label">
                                            <input type="radio" class="form-check-input"   v-model="user_type" @click="test" name="optionsRadios"
                                                   id="optionsRadios21" value="Tenant" checked>I am applying as a
                                            tenant. (I will be living on the property.)
                                        </label>
                                    </div>
                                    <div class="form-check apply-all-chek">
                                        <label class="form-check-label">
                                            <input type="radio" class="form-check-input" v-model="user_type" @click="test"  name="optionsRadios"
                                                   id="optionsRadios22" value="Co-Signer">I am applying as a
                                            co-signer/guarantor for another applicant.<br>
                                            (I will not be living on the property.)
                                        </label>
                                    </div>
                                    <button name="next" type="button" class="btn btn-info next action-button">
                                        GET STARTED<img src="/images/arrow-right.png">
                                    </button>
                                </div>
                            </div>
                        </fieldset>

                        <fieldset class="steps">
                            <h3>YOUR CONTACT INFO</h3>
                            <p>Please let us know how we can best reach you.</p>
                            <div class="col-xs-12 col-sm-12 col-md-12 your-contact">
                                <div class="row">
                                    <div class="col-xs-6 col-sm-12 col-md-6 contact-info">
                                        <div class="form-group">
                                            <label>First name</label>
                                            <input type="text" required="" v-model="first_name"   class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-12 col-md-6 contact-info">
                                        <div class="form-group">
                                            <label>last name</label>
                                            <input type="text" required="" v-model="last_name"  class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-12 col-md-6 contact-info">
                                        <div class="form-group">
                                            <label>E-mail Address</label>
                                            <input type="text" required="" v-model="email"  class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-12 col-md-6 contact-info">
                                        <div class="form-group">
                                            <label>Confirm E-mail Address</label>
                                            <input type="text" required="" v-model="confirm_email"  class="form-control">
                                        </div>
                                    </div>

                                    <NewPhoneNumber ></NewPhoneNumber>

                                    <div class="col-xs-12 col-sm-12 col-md-12 contact-info contact-info-top">
                                        <div class="form-group">
                                            <button name="next" type="button" class="btn btn-info next action-button">
                                                SAVE AND CONTINUE<img src="/images/arrow-right.png">
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset class="steps">
                            <h3>where you've lived</h3>
                            <p class="ferozi">Please provide 3 years of residetial history</p>
                            <h2 class="current">current address</h2>
                            <div class="col-xs-12 col-sm-12 col-md-12 your-contact">
                                <div class="row">
                                    <div class="col-xs-6 col-sm-12 col-md-6 contact-info">
                                        <div class="form-group">
                                            <label>Address Line 1</label>
                                            <input type="text" required="" v-model="address_line_one"  class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-12 col-md-6 contact-info">
                                        <div class="form-group">
                                            <label>Address Line 2</label>
                                            <input type="text" required="" v-model="address_line_two"  class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-12 col-md-2 contact-info">
                                        <div class="form-group">
                                            <label>City</label>
                                            <input type="text" required="" v-model="city"  class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-12 col-md-2 contact-info">
                                        <div class="form-group">
                                            <label>State</label>
                                            <input type="text" required v-model="state" class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-12 col-md-2 contact-info">
                                        <div class="form-group">
                                            <label>Zip</label>
                                            <input type="text" required="" v-model="zip"  class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-12 col-md-6 contact-info">
                                        <div class="form-group">
                                            <label>Country</label>
                                            <select v-model="country" class="form-control">
                                                <option value="" selected="selected">Select Country</option>
                                                <option value="United States">United States</option>
                                                <option value="United Kingdom">United Kingdom</option>
                                                <option value="Afghanistan">Afghanistan</option>
                                                <option value="Albania">Albania</option>
                                                <option value="Algeria">Algeria</option>
                                                <option value="American Samoa">American Samoa</option>
                                                <option value="Andorra">Andorra</option>
                                                <option value="Angola">Angola</option>
                                                <option value="Anguilla">Anguilla</option>
                                                <option value="Antarctica">Antarctica</option>
                                                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                                                <option value="Argentina">Argentina</option>
                                                <option value="Armenia">Armenia</option>
                                                <option value="Aruba">Aruba</option>
                                                <option value="Australia">Australia</option>
                                                <option value="Austria">Austria</option>
                                                <option value="Azerbaijan">Azerbaijan</option>
                                                <option value="Bahamas">Bahamas</option>
                                                <option value="Bahrain">Bahrain</option>
                                                <option value="Bangladesh">Bangladesh</option>
                                                <option value="Barbados">Barbados</option>
                                                <option value="Belarus">Belarus</option>
                                                <option value="Belgium">Belgium</option>
                                                <option value="Belize">Belize</option>
                                                <option value="Benin">Benin</option>
                                                <option value="Bermuda">Bermuda</option>
                                                <option value="Bhutan">Bhutan</option>
                                                <option value="Bolivia">Bolivia</option>
                                                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                                <option value="Botswana">Botswana</option>
                                                <option value="Bouvet Island">Bouvet Island</option>
                                                <option value="Brazil">Brazil</option>
                                                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                                <option value="Brunei Darussalam">Brunei Darussalam</option>
                                                <option value="Bulgaria">Bulgaria</option>
                                                <option value="Burkina Faso">Burkina Faso</option>
                                                <option value="Burundi">Burundi</option>
                                                <option value="Cambodia">Cambodia</option>
                                                <option value="Cameroon">Cameroon</option>
                                                <option value="Canada">Canada</option>
                                                <option value="Cape Verde">Cape Verde</option>
                                                <option value="Cayman Islands">Cayman Islands</option>
                                                <option value="Central African Republic">Central African Republic</option>
                                                <option value="Chad">Chad</option>
                                                <option value="Chile">Chile</option>
                                                <option value="China">China</option>
                                                <option value="Christmas Island">Christmas Island</option>
                                                <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                                <option value="Colombia">Colombia</option>
                                                <option value="Comoros">Comoros</option>
                                                <option value="Congo">Congo</option>
                                                <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                                                <option value="Cook Islands">Cook Islands</option>
                                                <option value="Costa Rica">Costa Rica</option>
                                                <option value="Cote D'ivoire">Cote D'ivoire</option>
                                                <option value="Croatia">Croatia</option>
                                                <option value="Cuba">Cuba</option>
                                                <option value="Cyprus">Cyprus</option>
                                                <option value="Czech Republic">Czech Republic</option>
                                                <option value="Denmark">Denmark</option>
                                                <option value="Djibouti">Djibouti</option>
                                                <option value="Dominica">Dominica</option>
                                                <option value="Dominican Republic">Dominican Republic</option>
                                                <option value="Ecuador">Ecuador</option>
                                                <option value="Egypt">Egypt</option>
                                                <option value="El Salvador">El Salvador</option>
                                                <option value="Equatorial Guinea">Equatorial Guinea</option>
                                                <option value="Eritrea">Eritrea</option>
                                                <option value="Estonia">Estonia</option>
                                                <option value="Ethiopia">Ethiopia</option>
                                                <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                                                <option value="Faroe Islands">Faroe Islands</option>
                                                <option value="Fiji">Fiji</option>
                                                <option value="Finland">Finland</option>
                                                <option value="France">France</option>
                                                <option value="French Guiana">French Guiana</option>
                                                <option value="French Polynesia">French Polynesia</option>
                                                <option value="French Southern Territories">French Southern Territories</option>
                                                <option value="Gabon">Gabon</option>
                                                <option value="Gambia">Gambia</option>
                                                <option value="Georgia">Georgia</option>
                                                <option value="Germany">Germany</option>
                                                <option value="Ghana">Ghana</option>
                                                <option value="Gibraltar">Gibraltar</option>
                                                <option value="Greece">Greece</option>
                                                <option value="Greenland">Greenland</option>
                                                <option value="Grenada">Grenada</option>
                                                <option value="Guadeloupe">Guadeloupe</option>
                                                <option value="Guam">Guam</option>
                                                <option value="Guatemala">Guatemala</option>
                                                <option value="Guinea">Guinea</option>
                                                <option value="Guinea-bissau">Guinea-bissau</option>
                                                <option value="Guyana">Guyana</option>
                                                <option value="Haiti">Haiti</option>
                                                <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                                                <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                                                <option value="Honduras">Honduras</option>
                                                <option value="Hong Kong">Hong Kong</option>
                                                <option value="Hungary">Hungary</option>
                                                <option value="Iceland">Iceland</option>
                                                <option value="India">India</option>
                                                <option value="Indonesia">Indonesia</option>
                                                <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                                                <option value="Iraq">Iraq</option>
                                                <option value="Ireland">Ireland</option>
                                                <option value="Israel">Israel</option>
                                                <option value="Italy">Italy</option>
                                                <option value="Jamaica">Jamaica</option>
                                                <option value="Japan">Japan</option>
                                                <option value="Jordan">Jordan</option>
                                                <option value="Kazakhstan">Kazakhstan</option>
                                                <option value="Kenya">Kenya</option>
                                                <option value="Kiribati">Kiribati</option>
                                                <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                                                <option value="Korea, Republic of">Korea, Republic of</option>
                                                <option value="Kuwait">Kuwait</option>
                                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                                <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                                                <option value="Latvia">Latvia</option>
                                                <option value="Lebanon">Lebanon</option>
                                                <option value="Lesotho">Lesotho</option>
                                                <option value="Liberia">Liberia</option>
                                                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                                <option value="Liechtenstein">Liechtenstein</option>
                                                <option value="Lithuania">Lithuania</option>
                                                <option value="Luxembourg">Luxembourg</option>
                                                <option value="Macao">Macao</option>
                                                <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                                                <option value="Madagascar">Madagascar</option>
                                                <option value="Malawi">Malawi</option>
                                                <option value="Malaysia">Malaysia</option>
                                                <option value="Maldives">Maldives</option>
                                                <option value="Mali">Mali</option>
                                                <option value="Malta">Malta</option>
                                                <option value="Marshall Islands">Marshall Islands</option>
                                                <option value="Martinique">Martinique</option>
                                                <option value="Mauritania">Mauritania</option>
                                                <option value="Mauritius">Mauritius</option>
                                                <option value="Mayotte">Mayotte</option>
                                                <option value="Mexico">Mexico</option>
                                                <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                                                <option value="Moldova, Republic of">Moldova, Republic of</option>
                                                <option value="Monaco">Monaco</option>
                                                <option value="Mongolia">Mongolia</option>
                                                <option value="Montserrat">Montserrat</option>
                                                <option value="Morocco">Morocco</option>
                                                <option value="Mozambique">Mozambique</option>
                                                <option value="Myanmar">Myanmar</option>
                                                <option value="Namibia">Namibia</option>
                                                <option value="Nauru">Nauru</option>
                                                <option value="Nepal">Nepal</option>
                                                <option value="Netherlands">Netherlands</option>
                                                <option value="Netherlands Antilles">Netherlands Antilles</option>
                                                <option value="New Caledonia">New Caledonia</option>
                                                <option value="New Zealand">New Zealand</option>
                                                <option value="Nicaragua">Nicaragua</option>
                                                <option value="Niger">Niger</option>
                                                <option value="Nigeria">Nigeria</option>
                                                <option value="Niue">Niue</option>
                                                <option value="Norfolk Island">Norfolk Island</option>
                                                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                                                <option value="Norway">Norway</option>
                                                <option value="Oman">Oman</option>
                                                <option value="Pakistan">Pakistan</option>
                                                <option value="Palau">Palau</option>
                                                <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                                                <option value="Panama">Panama</option>
                                                <option value="Papua New Guinea">Papua New Guinea</option>
                                                <option value="Paraguay">Paraguay</option>
                                                <option value="Peru">Peru</option>
                                                <option value="Philippines">Philippines</option>
                                                <option value="Pitcairn">Pitcairn</option>
                                                <option value="Poland">Poland</option>
                                                <option value="Portugal">Portugal</option>
                                                <option value="Puerto Rico">Puerto Rico</option>
                                                <option value="Qatar">Qatar</option>
                                                <option value="Reunion">Reunion</option>
                                                <option value="Romania">Romania</option>
                                                <option value="Russian Federation">Russian Federation</option>
                                                <option value="Rwanda">Rwanda</option>
                                                <option value="Saint Helena">Saint Helena</option>
                                                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                                <option value="Saint Lucia">Saint Lucia</option>
                                                <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                                <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                                                <option value="Samoa">Samoa</option>
                                                <option value="San Marino">San Marino</option>
                                                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                                                <option value="Saudi Arabia">Saudi Arabia</option>
                                                <option value="Senegal">Senegal</option>
                                                <option value="Serbia and Montenegro">Serbia and Montenegro</option>
                                                <option value="Seychelles">Seychelles</option>
                                                <option value="Sierra Leone">Sierra Leone</option>
                                                <option value="Singapore">Singapore</option>
                                                <option value="Slovakia">Slovakia</option>
                                                <option value="Slovenia">Slovenia</option>
                                                <option value="Solomon Islands">Solomon Islands</option>
                                                <option value="Somalia">Somalia</option>
                                                <option value="South Africa">South Africa</option>
                                                <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                                                <option value="Spain">Spain</option>
                                                <option value="Sri Lanka">Sri Lanka</option>
                                                <option value="Sudan">Sudan</option>
                                                <option value="Suriname">Suriname</option>
                                                <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                                <option value="Swaziland">Swaziland</option>
                                                <option value="Sweden">Sweden</option>
                                                <option value="Switzerland">Switzerland</option>
                                                <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                                                <option value="Taiwan, Province of China">Taiwan, Province of China</option>
                                                <option value="Tajikistan">Tajikistan</option>
                                                <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                                                <option value="Thailand">Thailand</option>
                                                <option value="Timor-leste">Timor-leste</option>
                                                <option value="Togo">Togo</option>
                                                <option value="Tokelau">Tokelau</option>
                                                <option value="Tonga">Tonga</option>
                                                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                                                <option value="Tunisia">Tunisia</option>
                                                <option value="Turkey">Turkey</option>
                                                <option value="Turkmenistan">Turkmenistan</option>
                                                <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                                <option value="Tuvalu">Tuvalu</option>
                                                <option value="Uganda">Uganda</option>
                                                <option value="Ukraine">Ukraine</option>
                                                <option value="United Arab Emirates">United Arab Emirates</option>
                                                <option value="United Kingdom">United Kingdom</option>
                                                <option value="United States">United States</option>
                                                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                                <option value="Uruguay">Uruguay</option>
                                                <option value="Uzbekistan">Uzbekistan</option>
                                                <option value="Vanuatu">Vanuatu</option>
                                                <option value="Venezuela">Venezuela</option>
                                                <option value="Viet Nam">Viet Nam</option>
                                                <option value="Virgin Islands, British">Virgin Islands, British</option>
                                                <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                                                <option value="Wallis and Futuna">Wallis and Futuna</option>
                                                <option value="Western Sahara">Western Sahara</option>
                                                <option value="Yemen">Yemen</option>
                                                <option value="Zambia">Zambia</option>
                                                <option value="Zimbabwe">Zimbabwe</option>
                                            </select>

                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-12 col-md-3 contact-info">
                                        <div class="form-group">
                                            <label>Resided from</label>
                                            <input type="text" required="" v-model="resided_from"  class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-12 col-md-3 contact-info">
                                        <div class="form-group resided-from">
                                            <select v-model="year" class="form-control" >
                                                <option>Year</option>
                                                <option>2017</option>
                                                <option>2016</option>
                                                <option>2015</option>
                                                <option>2014</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-12 col-md-6 contact-info">
                                        <div class="form-group">
                                            <label>Monthly rent</label>
                                            <div class="input-group mb-3">
                                                <div class="input-group-prepend">
                                                    <span class="input-group-text">$</span>
                                                </div>
                                                <input type="text" v-model="monthly_rent" class="form-control" aria-label="Amount (to the nearest dollar)">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-12 col-md-6 contact-info">
                                        <div class="form-group">
                                            <label>Landlord</label>
                                            <input type="text" required="" v-model="landlord"  class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-12 col-md-6 contact-info">
                                        <div class="form-group">
                                            <label>Landlord phone number</label>
                                            <input type="text" required=""  v-model="landlord_phone_number" class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-12 col-md-12 contact-info">
                                        <div class="form-group">
                                            <label>landlord e-mail address</label>
                                            <input type="text" required="" v-model="landlord_email_address"  class="form-control">
                                        </div>
                                    </div>
                                    <div class=" col-sm-12 col-md-12 contact-info">
                                        <div class="form-group">
                                            <label  >reason for leaving</label>
                                            <textarea class="form-control" rows="5" v-model="reason_for_leaving" ></textarea>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-sm-12 contact-info">
                                        <h2>Previous addresses</h2>
                                        <div class="col-md-12 col-sm-12 float-left">
                                            <a class="phone-number" href="#">
                                                <i class="fas fa-plus-circle"></i>
                                                <span> Previous addresses</span></a>
                                        </div>

                                        <div class="col-md-12 col-sm-12 float-left">
                                            <button name="next" type="button" class="btn btn-info next action-button">
                                                SAVE AND CONTINUE<img src="/images/arrow-right.png">
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset class="steps">
                            <h3>your housemates</h3>
                            <p>Check all that apply </p>
                            <h2 class="current">other occupants</h2>
                            <div class="form-check signup4">
                                <label class="form-check-label">
                                    <input type="checkbox" class="form-check-input">
                                    I am applying with other adults 18 and older
                                </label>
                            </div>
                            <p class="ferozi">All occupants over the age of 18 must submit their own application.</p>
                            <div class="col-xs-12 col-sm-12 col-md-12 your-contact">
                                <div class="row">
                                    <div class="col-xs-6 col-sm-12 col-md-6 contact-info">
                                        <div class="form-group">
                                            <label>first name</label>
                                            <input type="text" required=""   class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-12 col-md-6 contact-info">
                                        <div class="form-group">
                                            <label>last name</label>
                                            <input type="text" required=""   class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-12 col-md-6 contact-info">
                                        <div class="form-group">
                                            <label>e-mail ADDRESS</label>
                                            <input type="text" required=""   class="form-control">
                                        </div>
                                    </div>
                                    <div class=" col-sm-12 col-md-6 contact-info">
                                        <div class="form-group">
                                            <label>Phone number</label>
                                            <input type="text" required=""   class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-sm-12 contact-info">
                                        <div class="col-md-12 col-sm-12 float-left">
                                            <a class="phone-number" href="#">
                                                <i class="fas fa-plus-circle"></i>
                                                <span> Add Additional Applicant</span></a>
                                        </div>
                                        <div class="form-check signup4">
                                            <label class="form-check-label">
                                                <input type="checkbox" class="form-check-input">
                                                I will have dependents living with me who are under 18
                                            </label>
                                        </div>
                                        <h2>pets</h2>
                                        <div class="form-check signup4">
                                            <label class="form-check-label">
                                                <input type="checkbox" class="form-check-input">
                                                I have pets
                                            </label>
                                        </div>
                                        <div class="col-md-12 col-sm-12 float-left">
                                            <button name="next" type="button" class="btn btn-info next action-button">
                                                SAVE AND CONTINUE<img src="/images/arrow-right.png">
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset class="steps">
                            <h3>PERSONAL INFORMATION</h3>
                            <h5>IDENTIFICATION</h5>
                            <p class="col-md-5 col-sm-12 we-need">We need this information to run credit and background checks. Everything submitted in this application is encrypted and stored securely</p>
                            <div class="col-xs-12 col-sm-12 col-md-12 your-contact">
                                <div class="row">
                                    <div class="col-xs-6 col-sm-12 col-md-6 contact-info">
                                        <div class="form-group">
                                            <label>DATE OF BIRTH</label>
                                            <input type="text" required=""   class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-12 col-md-6 contact-info">
                                        <div class="form-group">
                                            <label>DRIVERS LICENSE</label>
                                            <input type="text" required=""   class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-12 col-md-6 contact-info">
                                        <div class="form-group">
                                            <label>SOCIAL SECURITY NUMBER</label>
                                            <input type="text" required=""   class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-xs-6 col-sm-12 col-md-6 contact-info">
                                        <div class="form-group">
                                            <label>DRIVERS LICENSE STATE</label>
                                            <select class="form-control" >
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 col-sm-12 date-birth">
                                    <h4 class="energy-contact">EMERGENCY CONTACT</h4>
                                    <div class="row">
                                        <div class="col-xs-6 col-sm-12 col-md-6 contact-info">
                                            <div class="form-group">
                                                <label>NAME</label>
                                                <input type="text" required=""   class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-xs-6 col-sm-12 col-md-6 contact-info">
                                            <div class="form-group">
                                                <label>RELATIONSHIP</label>
                                                <input type="text" required=""   class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-xs-6 col-sm-12 col-md-6 contact-info">
                                            <div class="form-group">
                                                <label>ADDRESS</label>
                                                <input type="text" required=""   class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-xs-6 col-sm-12 col-md-6 contact-info">
                                            <div class="form-group">
                                                <label>PHONE</label>
                                                <input type="text" required=""   class="form-control">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 col-sm-12 vehicles contact-info">
                                    <h4>VEHICLES</h4>
                                    <div class="form-check signup4">
                                        <label class="form-check-label">
                                            <input type="checkbox" class="form-check-input">
                                            I have one or more vehicles
                                        </label>
                                    </div>
                                    <div class="col-md-12 col-sm-12 float-left">
                                        <button name="next" type="button" class="btn btn-info next action-button">SAVE
                                            AND CONTINUE<img src="/images/arrow-right.png">
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset class="steps">
                            <div class="singup6">
                                <h3>YOUR INCOME</h3>
                                <h4>CURRENT EMPLOYER</h4>
                                <div class="col-xs-12 col-sm-12 col-md-12 your-contact">
                                    <div class="row">
                                        <div class="col-xs-6 col-sm-12 col-md-6 contact-info">
                                            <div class="form-group">
                                                <label>EMPLOYER NAME</label>
                                                <input type="text" required=""   class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-xs-6 col-sm-12 col-md-6 contact-info">
                                            <div class="form-group">
                                                <label>ADDRESS</label>
                                                <input type="text" required=""   class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-md-6 contact-info">
                                            <div class="form-group">
                                                <label>City</label>
                                                <input type="text" required=""   class="form-control">
                                            </div>
                                        </div>
                                        <div class=" col-sm-12 col-md-6 contact-info">
                                            <div class="form-group">
                                                <label>State</label>
                                                <select class="form-control" >
                                                    <option>uk</option>
                                                    <option>usa</option>
                                                    <option>uae</option>
                                                    <option>uk</option>
                                                    <option>usa</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-md-6 contact-info">
                                            <div class="form-group">
                                                <label>Zip</label>
                                                <input type="text" required=""   class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-xs-6 col-sm-12 col-md-6 contact-info">
                                            <div class="form-group">
                                                <label>country</label>
                                                <select class="form-control" >
                                                    <option>uk</option>
                                                    <option>usa</option>
                                                    <option>uae</option>
                                                    <option>uk</option>
                                                    <option>usa</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-xs-6 col-sm-12 col-md-6 contact-info">
                                            <div class="form-group">
                                                <label>EMPLOYER PHONE NUMBER</label>
                                                <input type="text" required=""   class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-xs-6 col-sm-12 col-md-6 contact-info">
                                            <div class="form-group">
                                                <label>monthly Salary</label>
                                                <div class="input-group mb-3">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text">$</span>
                                                    </div>
                                                    <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-xs-6 col-sm-12 col-md-6 contact-info">
                                            <div class="form-group">
                                                <label>POSITION HELD</label>
                                                <input type="text" required=""   class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-md-6 contact-info">
                                            <div class="form-group">
                                                <label>YEARS WORKED</label>
                                                <select class="form-control" >
                                                    <option>year</option>
                                                    <option>2017</option>
                                                    <option>2016</option>
                                                    <option>2015</option>
                                                    <option>2014</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-md-6 contact-info">
                                            <div class="form-group">
                                                <label>SUPERVISOR NAME</label>
                                                <input type="text" required=""   class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-xs-6 col-sm-12 col-md-6 contact-info">
                                            <div class="form-group">
                                                <a class="phone-number" href="#">
                                                    <i class="fas fa-plus-circle"></i>
                                                    <span>Add Additional Income</span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-sm-12 vehicles contact-info signup6-veh">
                                        <h4>VEHICLES</h4>
                                        <div class="form-check signup4">
                                            <label class="form-check-label">
                                                <input type="checkbox" class="form-check-input">
                                                I have one or more vehicles
                                            </label>
                                        </div>
                                        <div class="col-md-12 col-sm-12 float-left">
                                            <button name="next" type="button" class="btn btn-info next action-button">
                                                SAVE AND CONTINUE<img src="/images/arrow-right.png">
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset class="steps">
                            <h3>YOUR CONTACT INFO</h3>
                            <div class="col-md-12 col-sm-12 question">
                                <p>Have you ever been a defendent in an unlawful detainer (eviction) lawsuit or defaulted (failed to perform) any obligation of a rental agreement or lease?</p>
                                <div class="form-check apply-all-chek">
                                    <label class="form-check-label">
                                        <input type="radio" class="form-check-input" name="optionsRadios"
                                               id="optionsRadios1" value="option1" checked="">No
                                    </label>
                                </div>
                                <div class="form-check apply-all-chek">
                                    <label class="form-check-label">
                                        <input type="radio" class="form-check-input" name="optionsRadios"
                                               id="optionsRadios1" value="option1" checked="">Yes
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label for="comment">Please explain:</label>
                                    <textarea class="form-control" rows="5" ></textarea>
                                </div>
                            </div>
                            <div class="col-md-12 col-sm-12 question">
                                <p>Have you ever been convicted of a crim?</p>
                                <div class="form-check apply-all-chekc">
                                    <label class="form-check-label">
                                        <input type="radio" class="form-check-input" name="optionsRadios"
                                               id="optionsRadios1" value="option1" checked="">No
                                    </label>
                                </div>
                                <div class="form-check apply-all-chek">
                                    <label class="form-check-label">
                                        <input type="radio" class="form-check-input" name="optionsRadios"
                                               id="optionsRadios1" value="option1" checked="">Yes
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label for="comment">Please explain:</label>
                                    <textarea class="form-control" rows="5" ></textarea>
                                </div>
                            </div>
                            <div class="col-md-12 col-sm-12 question">
                                <p>Have you ever filed suit against a landlord?</p>
                                <div class="form-check apply-all-chek">
                                    <label class="form-check-label">
                                        <input type="radio" class="form-check-input" name="optionsRadios"
                                               id="optionsRadios1" value="option1" checked="">No
                                    </label>
                                </div>
                                <div class="form-check apply-all-chek">
                                    <label class="form-check-label">
                                        <input type="radio" class="form-check-input" name="optionsRadios"
                                               id="optionsRadios1" value="option1" checked="">Yes
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label for="comment">Please explain:</label>
                                    <textarea class="form-control" rows="5" ></textarea>
                                </div>
                            </div>
                            <div class="col-md-12 col-sm-12 question">
                                <p>Do you have a water bed. an aquarium or any other water filled furniture?</p>
                                <div class="form-check apply-all-chek">
                                    <label class="form-check-label">
                                        <input type="radio" class="form-check-input" name="optionsRadios"
                                               id="optionsRadios1" value="option1" checked="">No
                                    </label>
                                </div>
                                <div class="form-check apply-all-chek">
                                    <label class="form-check-label">
                                        <input type="radio" class="form-check-input" name="optionsRadios"
                                               id="optionsRadios1" value="option1" checked="">Yes
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label for="comment">Please explain:</label>
                                    <textarea class="form-control" rows="5" ></textarea>
                                </div>
                            </div>
                            <div class="col-md-12 col-sm-12 question">
                                <p>Are you a smoker? </p>
                                <div class="form-check apply-all-chek">
                                    <label class="form-check-label">
                                        <input type="radio" class="form-check-input" name="optionsRadios"
                                               id="optionsRadios1" value="option1" checked="">No
                                    </label>
                                </div>
                                <div class="form-check apply-all-chek">
                                    <label class="form-check-label">
                                        <input type="radio" class="form-check-input" name="optionsRadios"
                                               id="optionsRadios1" value="option1" checked="">Yes
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label for="comment">Please explain:</label>
                                    <textarea class="form-control" rows="5" ></textarea>
                                </div>
                            </div>
                            <div class="col-md-12 col-sm-12 question">
                                <p>Do you have any pets?</p>
                                <div class="form-check apply-all-chek">
                                    <label class="form-check-label">
                                        <input type="radio" class="form-check-input" name="optionsRadios"
                                               id="optionsRadios1" value="option1" checked="">No
                                    </label>
                                </div>
                                <div class="form-check apply-all-chek">
                                    <label class="form-check-label">
                                        <input type="radio" class="form-check-input" name="optionsRadios"
                                               id="optionsRadios1" value="option1" checked="">Yes
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label for="comment">Please explain:</label>
                                    <textarea class="form-control" rows="5" ></textarea>
                                </div>
                            </div>
                            <div class="col-md-12 col-sm-12 question">
                                <p>Have you ever been evicted or in housing court?</p>
                                <div class="form-check apply-all-chek">
                                    <label class="form-check-label">
                                        <input type="radio" class="form-check-input" name="optionsRadios"
                                               id="optionsRadios1" value="option1" checked="">No
                                    </label>
                                </div>
                                <div class="form-check apply-all-chek">
                                    <label class="form-check-label">
                                        <input type="radio" class="form-check-input" name="optionsRadios"
                                               id="optionsRadios1" value="option1" checked="">Yes
                                    </label>
                                </div>
                                <div class="form-group">
                                    <label for="comment">Please explain:</label>
                                    <textarea class="form-control" rows="5" ></textarea>
                                </div>
                                <div class="col-md-12 col-sm-12 float-left">
                                    <button name="next" type="button" class="btn btn-info next action-button">SAVE AND
                                        CONTINUE<img src="/images/arrow-right.png">
                                    </button>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset class="steps">
                            <div id="menu8" class="container tab-pane fade signup8 active show">
                                <h3>ATTACH DOCUMENTS</h3>
                                <h5>Please upload all required documentation including:</h5>
                                <ul>
                                    <li>Photo ID</li>
                                    <li>Proof of income (e.g. recent pay stubs, bank statements or tax returns)</li>
                                </ul>
                                <div class="wrapper">
                                    <div class="drop" style="border: 3px dashed rgb(218, 223, 227); background: transparent;">
                                        <div class="cont" style="color: rgb(142, 153, 165);">
                                            <div class="tit">
                                                DRAG FILES HERE
                                            </div>
                                            <div class="desc">
                                                or
                                            </div>
                                            <div class="browse">
                                                CHOOSE FILES TO UPLOAD
                                            </div>
                                        </div>
                                        <output id="list"></output>
                                        <input id="files" multiple="true" name="files[]" type="file">
                                    </div>
                                </div>
                                <div class="col-md-12 col-sm-12 contact-info save-coninue">
                                    <div class="col-md-12 col-sm-12 float-left">
                                        <button name="next" type="button" class="btn btn-info next action-button">SAVE
                                            AND CONTINUE<img src="/images/arrow-right.png">
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset class="steps">
                            <h3>TERMS &amp; CONDITIONS</h3>
                            <div class="col-md-12 col-sm-12 col-xs-12 scrollator-main">
                                <div class="col-md-12 col-sm-12 scrollator" id="scrollable_div">
                                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure</p>
                                    <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure</p>
                                </div>
                            </div>
                            <div class="col-md-12 col-sm-12 contact-info signup9">
                                <div class="form-check signup4">
                                    <label class="form-check-label">
                                        <input type="checkbox" class="form-check-input">
                                        I Agree to the Terms and Condition of CRETONA
                                    </label>
                                </div>
                                <div class="col-md-12 col-sm-12 float-left">
                                    <button name="next" type="button" class="btn btn-info next action-button">SAVE AND
                                        CONTINUE<img src="/images/arrow-right.png">
                                    </button>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset class="steps">
                            <h3>THANK YOU!</h3>
                            <div class="col-md-12 col-sm-12 col-xs-12 pesonal-info">
                                <div class="row">
                                    <div class="col-lg-4 col-md-12 col-sm-12 pesonalinformation">
                                        <h4>PERSONAL INFORMATION</h4>
                                        <div class="row">
                                            <ul class="col-md-5 col-sm-6 name-div">
                                                <li>Name</li>
                                                <li>Phone</li>
                                                <li>Email</li>
                                                <li>Address</li>
                                                <li>Zip Code</li>
                                                <li>SSN</li>
                                            </ul>
                                            <ul class="col-lg-7 col-md-7 col-sm-6 list-none">
                                                <li>John Smith</li>
                                                <li>412-345-6789</li>
                                                <li>john.smith@cretona.com</li>
                                                <li>123 Dale Ave.</li>
                                                <li>10124</li>
                                                <li>123-45-6789</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-lg-8 col-md-12 col-sm-12 main-credit">
                                        <div class="row">
                                            <div class="col-md-4 col-sm-4 credit-div">
                                                <div class="col-md-12 col-sm-12">
                                                    <h1>890</h1>
                                                    <p>YOUR CREDIT RATING</p>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-sm-4 approved-div">
                                                <div class="col-md-12 col-sm-12">
                                                    <p>YOU HAVE BEEN APPROVED FOR NO DEPOSIT</p>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-sm-4 loader-div">
                                                <div class="col-md-12 col-sm-12">
                                                    <button class="btn btn-default btn-lg"><i
                                                            class="fa fa-spinner fa-spin"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>


</template>
<script>

    import NewPhoneNumber from '@/components/frontend/NewPhoneNumber'
    import PreviousAddress from '@/components/frontend/PreviousAddress'
    export default {
        components:{
            NewPhoneNumber,
            PreviousAddress
        },
        layout:'frontend',
        head: {
            titleTemplate: 'Tenant Signup',
            script :[
                {src:'https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js'},
            ],
        },
        data(){
            return {
                user_type:"Tenant",
                first_name:"",
                last_name:"",
                email:"",
                confirm_email:"",
                phone_number:[],
                phone_number_type:[],
                monthly_rent:"",
                address_line_one:"",
                address_line_two:"",
                city:"",
                country:"",
                resided_from:"",
                landlord:"",
                landlord_phone_number:"",
                landlord_email_address:"",
                reason_for_leaving:"",
                previous_address_line_one:"",
                previous_address_line_two:"",
                zip:"",
                state:"",
                year:""


            }
        },
        methods:{
            test(){
                console.log(this.user_type)
            },
            addMorePhoneNumberField(){


            }

        },
        mounted(){
            if (process.browser) {
                window.onNuxtReady((app) => {

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