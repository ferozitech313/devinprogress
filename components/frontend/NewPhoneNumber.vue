<template>
    <div>
    <div class="row" v-for="(line, index) in lines" v-bind:key="index">
        <div class="col-xs-4 col-sm-12 col-md-4 contact-info">
            <div class="form-group">
                <label>Phone number</label>
                <input type="text" required="" v-model="line.phone_number"  class="form-control">
            </div>
        </div>
        <div class="col-xs-2 col-sm-12 col-md-2 contact-info">
            <div class="form-group">
                <label>Phone Number Type</label>
                <select class="form-control" v-model="line.phone_number_type">
                    <option value="Home" selected>Home</option>
                    <option value="Office">Office</option>
                    <option value="Mobile">Mobile</option>
                </select>
            </div>
        </div>
        <div class="col-xs-6 col-sm-12 col-md-6 contact-info" >
            <div class="form-group">
                <a class="phone-number" href="#" @click.prevent="addLine">
                    <i class="fas fa-plus-circle"></i>
                    <span> Add Phone Number</span></a>
            </div>
        </div>
        <div class="col-xs-6 col-sm-12 col-md-6 contact-info" v-if="lines.length > 1">
            <div class="form-group">
                <a class="phone-number" href="#"  @click.prevent="removeLine(index)">
                    <i class="fas fa-plus-circle"></i>
                    <span> Remove Phone Number</span></a>
            </div>
        </div>

    </div>
    </div>
</template>
<script>
    export default{

        data (){
            return {

                lines: [{
                    phone_number_type: null,
                    phone_number: null,
                }],
                blockRemoval: true
            }
        },
        watch: {
            lines () {
                this.blockRemoval = this.lines.length <= 1
            }
        },
        methods:{
            addLine (e) {

                let checkEmptyLines = this.lines.filter(line => line.number === null)

                if (checkEmptyLines.length >= 1 && this.lines.length > 0) return
                $(e.target).parent().hide();
                this.lines.push({
                    phone_number_type: null,
                    phone_number: null,
                })
            }
            ,
            removeLine (lineId) {
                if (!this.blockRemoval) this.lines.splice(lineId, 1)
            }
        }

    }
</script>