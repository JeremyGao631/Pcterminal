<!-- eslint-disable vue/no-dupe-keys -->
<template>
    <div class="contact">
      <div class="banner">
        <img class="contentimg" src="../../assets/images/onlineshowroom/05.png"  alt="暂无图片" />
        <div class="inlinetext">
            <p class="content-title">Thoughtful-service</p><br />
            <span class="content-text">
                <span class="span1" >SELL</span><br />
                <span class="span2" >YOUR CAR</span><br />
                <div style="clear:both;"></div>
            </span>
            <el-button class="clickbtn" @click="contactUs()">
                <span>CONTACT US</span>
                <i class="el-icon-my-right"></i>
            </el-button>
        </div>
      </div>
      <div class="between">
        <div class="sell">
          <div class="title">
            <div>
              <div>S</div>
              <div>E</div>
              <div>L</div>
              <div>L</div>
              <div>Y</div>
              <div>O</div>
              <div>U</div>
              <div>R</div>
              <div>C</div>
              <div>A</div>
              <div>R</div>
            </div>
          </div>
        </div>
        <div class="step_box">
          <div class="step">
            <div class="step_item">
                <img src="../../assets/images/sellyourcar/BringInYourCar.png" alt="" class="img">
                <div class="step_info">
                  <p>Bring in your car</p>
                  <div style="width: 170px;">We’ll take a look regardless of make, kilometres, or condition.</div>
                  <img src="../../assets/images/sellyourcar/1.png" alt="" class="img">
                </div>
            </div>
            <div class="step_item step_item2">
                <img src="../../assets/images/sellyourcar/GetYourInstantOffer.png" alt="" class="img">
                <div class="step_info">
                  <p>Get your instant offer</p>
                  <div style="width: 200px;">To provide you an honest and fair offer, our appraisers here at Autohome AU thoroughly inspect the condition of your car and compare it against current market data.</div>
                  <img src="../../assets/images/sellyourcar/2.png" alt="" class="img">
                </div>
            </div>
            <div class="step_item">
                <img src="../../assets/images/sellyourcar/GetCashPayment.png" alt="" class="img">
                <div class="step_info">
                  <p>Get instant payment</p>
                  <div style="width: 200px;">We will pay cash or electronic transfer on the same day on completion of vehicle transfer.</div>
                  <img src="../../assets/images/sellyourcar/3.png" alt="" class="img">
                </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="contact">
          <div class="us">CONTACT US TO GET STARTED</div>
          <div class="started">{{ started }}</div>
          <div class="started1">{{ started1 }}</div>
        </div>
        <div class="form">
          <!-- details提交单-->
          <div class="detail">PERSONAL DETAILS</div>
          <div class="input_cont">
            <el-row :gutter="90" class="inputs">
              <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
                <div class="input1">
                  <div class="name">Name*</div>
                  <el-input v-model="form.name" />
                </div>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
                <div class="input1">
                  <div class="name">Mobile*</div>
                  <el-input v-model="form.mobile" />
                </div>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
                <div class="input1">
                  <div class="name">Email</div>
                  <el-input v-model="form.email" @blur="emails" />
                </div>
              </el-col>
            </el-row>
          </div>
          <!-- // vehicle details提交单-->
          <div class="detail1">MY VEHICLE DETAILS</div>
          <div class="input_cont">
            <el-row :gutter="90" class="inputs">
              <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8" class="input1">
                <div class="name">Year*</div>
                <el-input v-model="forms.year" />
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8" class="input1">
                <div class="name">Make*</div>
                <el-input v-model="forms.make" />
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8" class="input1">
                <div class="name">Model*</div>
                <el-input v-model="forms.model" />
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8" class="input1">
                <div class="name">Transmission*</div>
                <el-select v-model="forms.transmission" placeholder="Transmission:Any">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    <span class="optionspan" style="font-size: 16px;font-family: DINCondensed-Bold;font-weight: bold;color: #000;">{{item.label}}</span>
                  </el-option>
                </el-select>
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8" class="input1">
                <div class="name">Odometer*</div>
                <el-input v-model="forms.odometer" />
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8" class="input1">
                <div class="name">Color</div>
                <el-input v-model="forms.color" />
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8"  class="input1">
                <div class="name">Trim color</div>
                <el-input v-model="forms.trimcolor" />
              </el-col>
              <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8" class="input1">
                <div class="name">Logbook</div>
                <el-select v-model="forms.logbook" placeholder="Yes">
                  <el-option
                    v-for="item in logbooks"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    @click="book(item)">
                    <span class="optionspan" style="font-size: 16px;font-family: DINCondensed-Bold;font-weight: bold;color: #000;">{{item.label}}</span>
                  </el-option>
                </el-select>
              </el-col>
            </el-row>
            <el-row :gutter="90" class="inputs">
              <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8" class="input1">
                <el-upload
                  action="#"
                  list-type="picture-card"
                  accept=".jpg, .png"
                  :limit="1"
                  :on-change="getFile"
                  :on-preview="handlePicture"
                  :on-remove="handleRemove">
                  <i class="el-icon-plus"></i>
                </el-upload>
              </el-col>
            </el-row>
            <el-button size="medium" type="primary" class="imgbtn">Image upload</el-button>
          </div>
          
          
          <div class="input3">
            <div class="input1">
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
            </div>
          </div>
          <div class="detail">COMMENTS</div>
          <div class="input4">
            <div class="input1">
              <div class="name special">COMMENTS</div>
              <el-input v-model="forms.comments" type="textarea" :rows="8" />
            </div>
            <el-button @click="submit()" type="primary" class="btn">SUBMIT</el-button>
          </div>
          <div class="privacy">PRIVACY</div>
          <div class="formText">
            <span class="tex">Your contact details are being collected by Autohome AU to enable us to record the details of the
                              vehicle you are interested in and to consider the purchase of your trade-in vehicle. We may disclose
                              your personal information to third parties to check whether and how, your vehicle is encumbered.</span>
            <span class="tex1">· From time to time, Autohome AU would like to contact you and to let you know about our products
                              and services, including special offers.</span>
            <span class="tex1">· If you do not want us to do so, please let us know by contacting us. You can let us know at any time
                              if you no longer wish to be contacted for these purposes. Your consent will remain current until you
                              advise us otherwise.
</span>
            <span class="tex1">· If you do not provide us with your personal information, we may not be able to consider any offer
                              made by you.
</span>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
// import { Dialog } from "element-ui";
import { vehicle } from '@/api'



export default({
    name: "sellCar",
    components: {
    },
    data() {
        return {
          dialogImageUrl: '',
          dialogVisible: false,
          textstyle: [
            'textstyle1',
            'textstyle2',
            'textstyle3',
          ],
          // details提交单
          form: {
            name:'',
            mobile: '',
            email: ''
          },
          // vehicle details提交单
          forms: {
            year:'',
            make: '',
            model: '',
            transmission: '',
            odometer: '',
            color: '',
            trimcolor: '',
            logbook: '',
            photo: '',
            comments: ''
          },
            started: 'The team at Autohome AU make selling your car as easy and convenient as possible.',
            started1: 'Simply send us your vehicle details using the form below and let our team take care of the rest. Contact us now.',
            content: [
              {
                content: 'We’ll take a look regardless of make, kilometres, or condition.', 
                title: 'Bring in your car'
              },
              {
                content: 'To provide you an honest and fair offer, our appraisers here at Autohome AU Auto Traders thoroughly inspect the condition of your car and compare it against current market data.',
                title: 'Get your instant offer'
              },
              {
                content: 'we will pay cash or electroic transfer on the same day on completion of vehicle transfer.',
                title: 'Get cash payment'
              }
            ],
            options: [
              {
                value:'1',
                label:'Any'
              },
              {
                value:'2',
                label:'Auto'
              },
              {
                value:'3',
                label:'Manual'
              }
            ],
            logbooks: [
              {
                value:'1',
                label:'Full dealer service history'
              },
              {
                value:'2',
                label:'Partialy dealer service history'
              },
              {
                value:'3',
                label:'No service Logbook'
              }
            ],
            logbook: 'full dealer service history',
            img: [
              {url: [require('../../assets/images/sellyourcar/BringInYourCar.png')]},
              {url: [require('../../assets/images/sellyourcar/GetYourInstantOffer.png')]},
              {url: [require('../../assets/images/sellyourcar/GetCashPayment.png')]}
            ],
            imgs: [
              {url: [require('../../assets/images/sellyourcar/1.png')]},
              {url: [require('../../assets/images/sellyourcar/2.png')]},
              {url: [require('../../assets/images/sellyourcar/3.png')]}
            ],
            visit: 'Please visit our showroom in Burwood to inspect our range of vehicles and discuss your needs. Our Sales team speak English and Chinese, and we look forward to helping you with your next car sale or purchase.',
            story: 'Autohome Australia were established in 2019 and our focus is to provide a solution for all sellers and buyers. Through word of mouth and referrals from satisfied clients, our reputation has allowed us to attract both local and interstate clients. Our area of specialty is luxury and prestigious vehicles.'
        }
    },
    methods: {
      book(item) {
        this.logbook = item.label
        console.log(this.logbook)
      },
      // 邮箱校验
      emails() {
        var emailText = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
        var istrue = emailText.test(this.form.email)
        if(!istrue) {
            // this.$message('Please enter a valid email address.')
            this.$message({
              dangerouslyUseHTMLString: true,
              message:'<span style="font-family:DINCondensed-Bold;font-size: 16px;">Please enter a valid email address.</span>'
              });
            this.email = ''
        }
        },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        console.log(file, '12121')
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      getFile(file) {
        this.getBase64(file.raw).then(res => {
          const params = res.split(',')
          console.log(params, '111111')
          if (params.length > 0) {
            this.proofImage = params[1]
            this.forms.photo = this.proofImage
          }
          console.log(this.forms.photo,'22222')
        })
      },
      getBase64(file) {
      return new Promise(function (resolve, reject) {
        const reader = new FileReader()
        let imgResult = ''
        reader.readAsDataURL(file)
        reader.onload = function () {
          imgResult = reader.result
        }
        reader.onerror = function (error) {
          reject(error)
        }
        reader.onloadend = function () {
          resolve(imgResult)
        }
      })
        },
      handleUploadRemove() {
        this.proofImage = '';
      },
      // eslint-disable-next-line no-dupe-keys
      handlePicture(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      submit() {
        if (this.form.name === '' || this.form.mobile === '' || this.forms.Year === '' || this.forms.make === '' || this.forms.model === '' || this.forms.transmission === '' || this.forms.odometer === '') {
            this.$message({
              dangerouslyUseHTMLString: true,
              message:'<span style="font-family:DINCondensed-Bold;font-size: 16px;">Please check the page information is completed</span>'
              });
            return
        } else {
          vehicle({
          // 缺少字段
              name:this.form.name,
              phone: this.form.mobile,
              email:this.form.email,
              year: this.forms.year,
              make: this.forms.make,
              model: this.forms.model,
              transmission: this.forms.transmission,
              odometer: this.forms.odometer,
              regonumber: this.forms.regonumber,
              color: this.forms.color,
              trim: this.forms.trim,
              logbook: this.forms.logbook,
              photo: this.forms.photo,
              comments: this.forms.comments
            }).then( res => {
                console.log(res, 'Submission successfull')
                if (res.code === 0) {
                  // this.$message('Submission successfull')
                  this.$message({
                  dangerouslyUseHTMLString: true,
                  message:'<span style="font-family:DINCondensed-Bold;font-size: 16px;">Submission successfull</span>'
                  });
                }
            })
          }
        }
    }
})
</script>
<style lang="less" scoped>
/deep/ .el-message__content {
  font-family: DINCondensed-Bold;
  font-size: 20px;
}
/deep/.el-upload--picture-card {
    background-color: #fbfdff;
    border: 1px dashed #c0ccda;
    border-radius: 6px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 148px;
    height: 148px;
    cursor: pointer;
    line-height: 146px;
    vertical-align: top;
    margin: 20px 0;
}
  .el-upload__tip {
      position: relative;
      left: 33px;
  }
    .contact {
      .banner{
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    .contentimg {
      position: relative;
      width: 100%;
    }
    .inlinetext {
      position: absolute;
      left: 10%;
      text-align: left;
      .content-title {
        font-size: 2vw;
        font-family: DINCondensed-Bold;
        font-weight: bold;
        margin: 0;
        color: #FFFFFF;
      }
      .content-text {
        font-size: 5vw;
        font-family: DINCondensed-Bold;
        font-weight: bold;
        color: #FFFFFF;
        .span1 {
          float:left;
          margin-top: -20px;
        }
        .span2 {
          float:left;
          margin-top: -30px;
        }

      }
      .clickbtn {
        position: relative;
        border: 1px solid #FFFFFF ;
        background-color: transparent;
        color:#FFFFFF;
        display: flex;
        align-items: center;
        justify-content: right;
        margin-top: 30px;
        padding: 20px 5px 15px 5px;
        span{
          font-size: 1.5vw;
          font-family: DINCondensed-Bold;
          font-weight: bold;
          line-height: 1;
          text-align: center;
          color: #FFFFFF;
          margin-left: 40px;
          padding-top: 5px;
        }
        .el-icon-my-right {
          margin-left: 40px;
          background: url('../../assets/images/home/right.png') no-repeat;
          background-size: cover;
          display:inline-block;
          height: 16px;
          width: 16px;
        }
      }
    }
  }
        .between {
          width: 100%;
          background: #F4F6F8;
          height: 850px;
          .sell {
            width: 100%;
            .title {
              width: 100%;
              height: 32px;
              font-size: 100px;
              padding-top:180px;
              padding-bottom:40px;
              font-family: DINCondensed-Bold;
              font-weight: bold;
              color: #e4e6ea;
              line-height: 32px;
              display: flex;
              justify-content: space-between;
              opacity: 0.4;
              div{
                text-align: center;
                display: flex;
                justify-content: space-between;
                padding-left: 10px;
                width: 100%;
              }
            }
            
          }
          .step_box{
            margin-left: 15%;
            width: 85%;
            height: 407px;
            background-color: #fff;
            position: relative;
            .step{
              position: absolute;
              top: 72px;
              left: -8%;
              width: 103%;
              display: flex;
              .step_item{
                display: flex;
                width: calc(100% / 3);
                img{
                  width: 45%;
                  height: 385px;
                }
                .step_info{
                  margin-left: 30px;
                  width: calc(55% - 30px);
                  position: relative;
                  p{
                    margin: 10px 0;
                    color: #212020;
                    font-size: 36px;
                    font-family: 'DINCondensed-Bold';
                    text-align: left;
                  }
                  div{
                    color: #909090;
                    font-size: 14px;
                    font-family: 'PingFangSC-Regular';
                    line-height: 1.5;
                    text-align: left;
                  }
                  img{
                    position: absolute;
                    left: 0;
                    bottom: 72px;
                    width: 40px;
                    height: 40px;
                  }
                }
              }
            }
          }
        }
        .bottom {
          background-color: #fff;
          margin: 0 auto;
          width: 85%;
          margin-bottom: 175px;
          .contact {
            margin: 0 auto;
            width: 85%;
            margin-top:108px;
            text-align: left;
            margin-bottom: 50px;
            .us {
              width: 100%;
              height: 100px;
              font-size: 80px;
              font-family: DINCondensed-Bold, DINCondensed;
              font-weight: bold;
              color: #212020;
              line-height: 100px;
            }
            .started {
              width: 100%;
              font-size: 17px;
              font-family: PingFangSC-Regular;
              font-weight: 400;
              color: #4A4A4A;
              line-height: 22px;
              text-align: left;
            }
            .started1 {
              width: 50%;
              font-size: 17px;
              font-family: PingFangSC-Regular;
              font-weight: 400;
              color: #4A4A4A;
              line-height: 22px;
              text-align: left;
            }
          }
          .form {
            background-color: #f4f6f8;
            margin: 0 auto;
            width: 85%;
            padding-top: 1px;
            padding-bottom: 200px;
            .detail {

              min-width: 245px;
              margin: 80px 0 60px 0;
              width: 35%;
              height: 45px;
              font-size: 30px;
              padding-right:32px;
              text-align: right;
              background-color: #000;
              font-family: DINCondensed-Bold, DINCondensed;
              font-weight: bold;
              color: #E8E8E8;
              line-height: 50px;
            }
            .privacy {
              position: relative;
              top: 240px;
              width: 35%;
              height: 45px;
              font-size: 30px;
              text-align: right;
              padding-right:32px;
              background-color: #000;
              font-family: DINCondensed-Bold, DINCondensed;
              font-weight: bold;
              color: #E8E8E8;
              line-height: 50px;
            }
            .detail1 {
              min-width: 245px;
              margin: 80px 0 30px 0;
              width: 35%;
              height: 45px;
              font-size: 30px;
              text-align: right;
              padding-right:32px;
              background-color: #000;
              font-family: DINCondensed-Bold, DINCondensed;
              font-weight: bold;
              color: #E8E8E8;
              line-height: 50px;
            }
            .input_cont{
              padding: 0 100px;
              .inputs {
                margin: 0 100px;
                // display: flex;
                // margin-left: 12%;
                // justify-content: left;
                // align-items: center;
                .input1 {
                  text-align: left;
                  padding-top: 30px;
                  .el-input {
                    /deep/ .el-input__inner {
                      width:100%;
                      background-color: #f4f6f8;
                    }
                  }
                  /deep/ .el-select {
                    width:100%;
                    /deep/ .el-input__inner{
                      background-color: #f4f6f8;
                    }
                  }
                }
                .name{
                  text-align: left;
                  margin: 15px 0;
                  font-size: 20px;
                  font-family: DINCondensed-Bold, DINCondensed;
                  font-weight: bold;
                }
                .el-input__inner {
                  width: 100%;
                  border: 1px solid #000;
                }
              }
            }
            .input2 {
              padding-top:32px;
              display: flex;
              margin-left: 12%;
              justify-content: left;
              align-items: center;
              .input1 {
                margin-right: 81px;
                .el-input {
                  /deep/ .el-input__inner {
                    width:260px;
                    background-color: #f4f6f8;
                  }
                }
                .el-select {
                  /deep/ .el-input{
                    width:260px;
                  }
                  /deep/ .el-input__inner {
                    background-color: #f4f6f8;
                  }
                }
              }
              .name{
                text-align: left;
                margin-bottom: 15px;
                font-size: 20px;
                font-family: DINCondensed-Bold, DINCondensed;
                font-weight: bold;
              }
              .el-input__inner {
                width: 100%;
                border: 1px solid #000;
              }
            }
            .input5 {
              padding-top:32px;
              display: flex;
              margin-left: 12%;
              justify-content: left;
              align-items: center;
              .input1 {
                margin-right: 81px;
                .el-input {
                  /deep/ .el-input__inner {
                    width:260px;
                    background-color: #f4f6f8;
                  }
                }
                .el-select {
                  /deep/ .el-input{
                    width:260px;
                  }
                  /deep/ .el-input__inner {
                    background-color: #f4f6f8;
                  }
                }
              }
              .input7 {
                margin-left: 77px;
                .el-input {
                  /deep/ .el-input__inner {
                    width:260px;
                    background-color: #f4f6f8;
                  }
                }
                /deep/.el-input.is-disabled .el-input__inner {
                  border:none;
                }
              }
              .name{
                text-align: left;
                margin-bottom: 15px;
                font-size: 20px;
                font-family: DINCondensed-Bold, DINCondensed;
                font-weight: bold;
              }
              .el-input__inner {
                width: 100%;
                border: 1px solid #000;
              }
            }
            .input3 {
              padding-top: 32px;
              display: flex;
              margin-left: 9%;
              justify-content: left;
              align-items: center;
              .input1 {
                margin-right: 81px;
                .el-input {
                  /deep/ .el-input__inner {
                    width:420px;
                    background-color: #f4f6f8;
                  }
                }
              }
              .name{
                margin-left: 35px;
                text-align: left;
                font-size: 20px;
                margin-bottom: 15px;
                font-family: DINCondensed-Bold, DINCondensed;
                font-weight: bold;
              }
              /deep/.el-input__inner {
                width: 80%;
                margin-left: 35px
              }
              .btn{
                border: none;
                width: 147px;
                height: 44px;
                color: #fff;
                background-color: #000;
                position: relative;
                top: 18px;
                margin-left: -50px;
                /deep/ span {
                  width: 50px;
                  height: 130px;
                  font-size: 20px;
                  font-family: DINCondensed-Bold, DINCondensed;
                  font-weight: bold;
                  color: #FFFFFF;
                }
              }
              .imgbtn {
                border: none;
                width: 110px;
                height: 44px;
                color: #fff;
                background-color: #000;
                position: relative;
                top: 18px;
                /deep/ span {
                  width: 50px;
                  height: 130px;
                  font-size: 18px;
                  font-family: DINCondensed-Bold, DINCondensed;
                  font-weight: bold;
                  color: #FFFFFF;
                }
              }
              .input7 {
                margin-left: 77px;
                .el-input {
                  /deep/ .el-input__inner {
                    width:260px;
                  }
                }
                /deep/.el-input.is-disabled .el-input__inner {
                  border:none;
                }
              }
              
            }
            .input4 {
              margin-left: 163px;
              margin-right: 163px;
              .input1 {
                width: 82%;
                height: 107px;
                .el-input {
                  /deep/ .el-input__inner {
                    width:260px;
                  }
                }
                .special {
                  margin-left:80px;
                }
                .el-textarea {
                  /deep/ .el-textarea__inner {
                    width:100%;
                    margin-left:80px;
                    background-color: #f4f6f8;
                  }
                }
              }
              .name{
                text-align: left;
                margin-bottom: 15px;
                font-size: 20px;
                font-family: DINCondensed-Bold, DINCondensed;
                font-weight: bold;
              }
              .btn{
                border: none;
                width: 200px;
                height: 59px;
                color: fff;
                padding-top:15px;
                background-color: #000;
                position: relative;
                top: 160px;
                left: -4%;
                /deep/ span {
                  // width: 50px;
                  // height: 130px;
                  padding-top: 10px;
                  font-size: 21px;
                  font-family: DINCondensed-Bold;
                  // font-weight: bold;
                  color: #FFFFFF;
                }
              }
              
            }
          }
          .form1 {
            height: 500px;
            background-color: #f4f6f8;
            margin: 33px 249px 0;
            .detail1 {
              position: relative;
              top: 85px;
              width: 285px;
              height: 45px;
              font-size: 30px;
              text-align: right;
              padding-right:32px;
              background-color: #000;
              font-family: DINCondensed-Bold, DINCondensed;
              font-weight: bold;
              color: #E8E8E8;
              line-height: 50px;
            }
            .inputs {
              padding-top:120px;
              display: flex;
              margin-left: 12%;
              justify-content: center;
              align-items: center;
              .input2 {
                margin-right: 81px;
                .el-input {
                  /deep/ .el-input__inner {
                    width:260px;
                  }
                }
              }
              .name{
                text-align: left;
                margin-bottom: 15px;
                font-size: 20px;
                font-family: DINCondensed-Bold, DINCondensed;
                font-weight: bold;
              }
              .el-input__inner {
                width: 100%;
                border: 1px solid #000;
              }
            }
          }
          .formText {
            background-color: #f4f6f8;
            display: flex;
            flex-direction: column;
            position: relative;
            top:234px;
            padding-bottom: 50px;
            .tex {
              font-size: 16px;
              text-align: left;
              margin-top:51px;
              padding-left: 17%;
              padding-right: 17%;
              line-height: 20px;
              font-weight: 400;
              font-family: PingFangSC-Light, PingFang SC;
              color: #151515;
            }
            .tex1 {
              font-size: 16px;
              text-align: left;
              margin-top:5px;
              padding-bottom: 5px;
              padding-left: 17%;
              padding-right: 17%;
              line-height: 20px;
              font-weight: 400;
              font-family: PingFangSC-Light, PingFang SC;
              color: #151515;
            }
          }
        }
    }
    /deep/.el-input__inner {
        border: 1px solid #000 ;
        border-radius: 0 ;
        width: 100%;
        font-size: 17px;
        font-family: DINCondensed-Bold, DINCondensed;
        color: #000;
        font-weight: bold;
        padding-top: 5px;
        background-color: #f4f6f8;
      }
/deep/.el-input--suffix .el-input__inner {
  padding-right: 14px !important;
}
/deep/.el-textarea__inner {
  border: 1px solid #000 ;
  border-radius: 0 ;
  width: 100%;
 
}
/deep/.el-input__inner::placeholder {
    font-size: 20px;
font-family: DINCondensed-Bold, DINCondensed;
font-weight: bold;
color: #151515;
line-height: 20px;
}
/deep/.el-button--medium {
  font-family: DINCondensed-Bold, DINCondensed;
font-weight: bold;
  float: left;
}
/deep/.el-button--primary {
  background-color: #000;
  border-color: #000;
}


// /deep/.el-select-dropdown .el-scrollbar .el-select-dropdown__wrap .el-scrollbar__view .el-select-dropdown__item span{
// font-size: 20px;
// font-family: DINCondensed-Bold;
// }

@media screen and (max-width: 1135px){
  .contact .bottom .contact .us {
    margin-bottom: 100px;
  }
}

@media screen and (max-width: 1200px){
  .contact .bottom .form .input4 {
    margin-left: 0;
  }
  .contact .bottom .form .input4 .input1 {
    width: 100%
  }
  .contact .bottom .form .input4 .btn{
    left: 75px
  }
}

@media screen and (min-width: 1300px) and (max-width: 1400px){
  .contact .between .step_box {
    margin-left: 0;
    width: 100%;
  }
  .contact .between .step_box .step{
    left: 0;
    width: 100%;
  }
}

@media screen and (max-width: 1299px){
  .contact .between {
    height: 1620px;
  }
  .contact .between .step_box {
    margin-left: 0;
    width: 100%;
    height: auto;
  }
  .contact .between .step_box .step{
    position: relative;
    left: 0;
    flex-direction: column;
    top: 20px;
    .step_item{
      margin-bottom: 20px;
      width: 100%;
    }
    .step_item2{
      display: block;
      img{
        float: right;
      }
      .step_info{
        float: left;
        margin-left: 0;
        margin-right: 30px;
        height: 385px;
        p{
          text-align: right;
        }
        div{
          float: right;
          text-align: right;
        }
        img{
          left: auto;
          right: 0;
        }
      }
    }
  }
}
</style>
