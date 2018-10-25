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
                                <div class="col-md-6 col-sm-12">
                                    <h3>Before you begin-1</h3>
                                    <p>Please be prepared to pay the application fee as outlined in the property listing. In addition to this rental application, you will also be required to provide a copy of a valid form of identification and proof of income.</p>
                                    <p>To complete this rental application, you must be prepared to provide 3 years of residential history as well as contact information for your rental references. You will also be asked to provide information on your monthly income, and please note that most properties require that applicant combined gross income is at least three (3) times the monthly rent amount.</p>
                                    <p>Each resident over the age of 18 must submit a separate rental application.</p>
                                </div>
                                <div class="col-md-6 col-sm-12 applying">
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

                                <PreviousAddress></PreviousAddress>
                                <div class="row">
                                    <div class="col-md-12 col-sm-12 contact-info">
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