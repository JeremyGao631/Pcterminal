<template>
    <div class="contact">
        <img class="imgs" src="../../assets/images/sellyourcar/SellYourCar.png" alt="">
        <div class="text">
          <div class="title">SELL YOUR CAR</div>
          <div class="span">{{point}}</div>
        </div>
        <div class="between">
          <div class="sell">
            <div class="title">SELL YOUR CAR</div>
            <div class="content">
              <div v-for="(item, index) in content" :key="index" class="contentView">
                <div class="yourCar">{{ item.title }}</div>
                <div :class="textstyle[index]">{{ item.content }}</div>
              </div>
            </div>
            <div style="clear:both" ></div>
            <div class="image">
              <div v-for="(img,index) in img" :key="index" class="imggs">
                <img :src="img.url" alt="" class="img">
              </div>
            </div>
            <div class="imgs">
              <img class="imgs1" src="../../assets/images/sellyourcar/1.png" alt="">
              <img class="imgs2" src="../../assets/images/sellyourcar/2.png" alt="">
              <img class="imgs3" src="../../assets/images/sellyourcar/3.png" alt="">
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
            <div class="inputs">
              <div class="input1">
                <div class="name">Name*</div>
                <el-input v-model="form.name" />
              </div>
              <div  class="input1">
                <div class="name">Mobile*</div>
                <el-input v-model="form.mobile" />
              </div>
              <div class="input1">
                <div class="name">Email</div>
                <el-input v-model="form.email" />
              </div>

            </div>
            <!-- // vehicle details提交单-->
            <div class="detail1">MY VEHICLE DETAILS</div>
            <div class="inputs">
              <div class="input1">
                <div class="name">Year*</div>
                <el-input v-model="forms.year" />
              </div>
              <div  class="input1">
                <div class="name">Make*</div>
                <el-input v-model="forms.make" />
              </div>
              <div class="input1">
                <div class="name">Model*</div>
                <el-input v-model="forms.model" />
              </div>
            </div>
            <div class="input2">
              <div class="input1">
                <div class="name">Transmission*</div>
                <el-select v-model="forms.transmission" placeholder="Transmission:Any">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </div>
              <div  class="input1">
                <div class="name">Odometer*</div>
                <el-input v-model="forms.odometer" />
              </div>
              <div class="input1">
                <div class="name">Color</div>
                <el-input v-model="forms.color" />
              </div>
            </div>
            <div class="input5">
              <div  class="input1">
                <div class="name">Trim color</div>
                <el-input v-model="forms.trimcolor" />
              </div>
              
              <div class="input1">
                <div class="name">Logbook</div>
                <el-select v-model="forms.logbook" placeholder="Yes">
                  <el-option
                    v-for="item in logbooks"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    @click="book(item)">
                  </el-option>
                </el-select>
              </div>
              <div  class="input7">
                <el-input disabled />
              </div>
            </div>
            <div class="input3">
              <div class="input1">
                <div class="name">Photo Upload</div>
                <el-input v-model="forms.photo" />
              </div>
              <el-button type="primary" class="btn">UPLOAD</el-button>
            </div>
            <div class="detail">COMMENTS</div>
            <div class="input4">
              <div class="input1">
                <div class="name special">COMMENTS</div>
                <el-input v-model="forms.comments" type="textarea" :rows="8" />
              </div>
              <el-button type="primary" class="btn">SUBMIT</el-button>
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


export default({
    name: "sellCar",
    components: {
    },
    data() {
        return {
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
            point: 'The easiest way to sell your car, hassle free and stress free',
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
                label:''
              },
              {
                value:'2',
                label:'yes'
              },
              {
                value:'3',
                label:'no'
              }
            ],
            logbooks: [
              {
                value:'1',
                label:'full dealer service history'
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
      }
    }
})
</script>
<style lang="less" scoped>
    .contact {
      width: 100%;
        .imgs {
          width: 100%;
          height: 830px;
        }
         .text { 
          position:absolute;
          top: 150px;
          left: 240px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          .title {
            height: 130px;
            font-size: 80px;
            font-family: DINCondensed-Bold;
            font-weight: bold;
            color: #FFFFFF;
            line-height: 130px;
          }
          .span {
            width: 497px;
            height: 183px;
            font-size: 45px;
            text-align: left;
            font-family: DINCondensed-Bold;
            font-weight: bold;
            color: #FFFFFF;
            line-height: 61px;
          }
        }
        .between {
          height: 650px;
          background: #F4F6F8;
          position: relative;
          .sell {
            .title {
              height: 32px;
              font-size: 100px;
              padding: 90px 0px 40px 80px;
              font-family: DINCondensed-Bold;
              font-weight: bold;
              color: #e4e6ea;
              line-height: 32px;
              letter-spacing: 100px;
            }
            .image {
              display: flex;
              position: relative;
              bottom: 345px;
              left: -5.5%;
              .imggs {
                .img {
                  width: 210px;
                  height: 375px;
                  background: #FFFFFF;
                }
              }
              .imggs:nth-child(1){
                padding-left:15%;
              }
              .imggs:nth-child(2){
                padding-left:19%;
              }
              .imggs:nth-child(3){
                padding-left:19%;
              }
            }
            .imgs {
              display: flex;
              position: relative;
              bottom: 1020px;
              .imgs1 {
                width: 43px;
                height: 43px;
                background: #FFFFFF;
                position: absolute;
                top: 580px;
                left:410px;
              }
              .imgs2 {
                width: 43px;
                height: 43px;
                background: #FFFFFF;
                position: absolute;
                top: 580px;
                left: 975px;
              }
              .imgs3 {
                width: 43px;
                height: 43px;
                background: #FFFFFF;
                position: absolute;
                top: 580px;
                left: 1550px;
              }
            }
            .content {
              width: 1638px;
              height: 375px;
              background: #FFFFFF;
              display: flex;
              position: relative;
              left: 245px;
              justify-content: left;
              overflow: hidden;
              .contentView {
                display:flex;
                flex-direction: column;
                margin-top:44px;
                padding-right: 12%;
                padding-left: 10%;
                .yourCar {
                  width: 211px;
                  height: 32px;
                  font-size: 40px;
                  font-family: DINCondensed-Bold, DINCondensed;
                  font-weight: bold;
                  color: #212020;
                  line-height: 32px;
                  white-space: nowrap;
                }
                .textstyle1 {
                  width:206px;
                  height: 110px;
                  font-size: 16px;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #909090;
                  line-height: 22px;
                  text-align: left;
                  margin-top: 10px;
                }
                .textstyle2 {
                  width:217px;
                  height: 110px;
                  font-size: 16px;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #909090;
                  line-height: 22px;
                  text-align: left;
                  margin-top: 10px;
                }
                .textstyle3 {
                  width:202px;
                  height: 110px;
                  font-size: 16px;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #909090;
                  line-height: 22px;
                  text-align: left;
                  margin-top: 10px;
                }
              }
            }
          }
        }
        .bottom {
          background-color: #fff;
          margin:0 170px;
          .contact {
            width: 50%;
            margin-top:108px;
            padding-left: 65px;
            text-align: left;
            .us {
              width: 725px;
              height: 100px;
              font-size: 80px;
              font-family: DINCondensed-Bold, DINCondensed;
              font-weight: bold;
              color: #212020;
              line-height: 100px;
            }
            .started {
              width: 794px;
              font-size: 17px;
              font-family: PingFangSC-Regular;
              font-weight: 400;
              color: #4A4A4A;
              line-height: 22px;
              text-align: left;
            }
            .started1 {
              width: 794px;
              font-size: 17px;
              font-family: PingFangSC-Regular;
              font-weight: 400;
              color: #4A4A4A;
              line-height: 22px;
              text-align: left;
            }
          }
          .form {
            height: 1750px;
            background-color: #f4f6f8;
            margin: 33px 100px 150px 65px;
            .detail {
              position: relative;
              top: 85px;
              width: 420px;
              height: 43px;
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
              width: 420px;
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
              position: relative;
              top: 85px;
              width: 420px;
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
              .input1 {
                margin-right: 81px;
                .el-input {
                  /deep/ .el-input__inner {
                    width:260px;
                  }
                }
                .el-select {
                  /deep/ .el-input {
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
            .input2 {
              padding-top:32px;
              display: flex;
              margin-left: 12%;
              justify-content: center;
              align-items: center;
              .input1 {
                margin-right: 81px;
                .el-input {
                  /deep/ .el-input__inner {
                    width:260px;
                  }
                }
                .el-select {
                  /deep/ .el-input{
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
            .input5 {
              padding-top:32px;
              display: flex;
              margin-left: 12%;
              justify-content: center;
              align-items: center;
              .input1 {
                margin-right: 81px;
                .el-input {
                  /deep/ .el-input__inner {
                    width:260px;
                  }
                }
                .el-select {
                  /deep/ .el-input{
                    width:260px;
                  }
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
              margin-left: 17.5%;
              margin-right: 15.5%;
              justify-content: center;
              padding-right: 300px;
              .input1 {
                margin-right: 120px;
                width: 373px;
                height: 107px;
                .el-input {
                  /deep/ .el-input__inner {
                    width:420px;
                  }
                }
              }
              .name{
                margin-left:20px;
                text-align: left;
                font-size: 20px;
                margin-bottom: 15px;
                font-family: DINCondensed-Bold, DINCondensed;
                font-weight: bold;
              }
              /deep/.el-input__inner {
                width: 80%;
                margin-left:6%;
              }
              .btn{
                width: 147px;
                height: 44px;
                color: #fff;
                background-color: #000;
                position: relative;
                top: 36px;
                /deep/ span {
                  width: 50px;
                  height: 130px;
                  font-size: 20px;
                  font-family: DINCondensed-Bold, DINCondensed;
                  font-weight: bold;
                  color: #FFFFFF;
                }
              }
              
            }
            .input4 {
              padding-top:130px;
              margin-left: 87px;
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
                width: 185px;
                height: 44px;
                color: fff;
                background-color: #000;
                position: relative;
                top: 160px;
                left: -4%;
                /deep/ span {
                  width: 50px;
                  height: 130px;
                  font-size: 20px;
                  font-family: DINCondensed-Bold, DINCondensed;
                  font-weight: bold;
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
            display: flex;
            flex-direction: column;
            position: relative;
            top:234px;
            .tex {
              font-size: 16px;
              text-align: left;
              margin-top:51px;
              padding-left: 11%;
              padding-right: 20%;
              line-height: 20px;
              font-weight: 400;
              font-family: PingFangSC-Light, PingFang SC;
              color: #151515;
            }
            .tex1 {
              font-size: 16px;
              text-align: left;
              margin-top:5px;
              padding-left: 11%;
              padding-right: 20%;
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
      }
/deep/.el-input--suffix .el-input__inner {
  padding-right: 14px !important;
}
/deep/.el-textarea__inner {
  border: 1px solid #000 ;
  border-radius: 0 ;
  width: 100%;

}

</style>
