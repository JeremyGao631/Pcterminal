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
                <div class="style">{{ item.content }}</div>
              </div>
            </div>
            <div class="image">
              <div v-for="(img,index) in img" :key="index" class="imggs">
                <img :src="img.url" alt="" class="img">
              </div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="contact">
            <div class="us">CONTACT US TO GET STARTED</div>
            <div class="started">{{ started }}</div>
          </div>
          <div class="form">
            <div class="detail">Personal Details</div>
            <div class="inputs">
              <div class="input1">
                <div class="name">Name*</div>
                <el-input />
              </div>
              <div  class="input1">
                <div class="name">Mobile*</div>
                <el-input />
              </div>
              <div>
                <div class="name">Email</div>
                <el-input />
              </div>

            </div>
            <div class="detail1">MY VEHICLE DETAILS</div>
            <div class="inputs">
              <div class="input1">
                <div class="name">Year*</div>
                <el-input />
              </div>
              <div  class="input1">
                <div class="name">Make*</div>
                <el-input />
              </div>
              <div>
                <div class="name">Model</div>
                <el-input />
              </div>
            </div>
            <div class="input2">
              <div class="input1">
                <div class="name">Transmission*</div>
                <el-input />
              </div>
              <div  class="input1">
                <div class="name">Odometer*</div>
                <el-input />
              </div>
              <div>
                <div class="name">Rego number</div>
                <el-input />
              </div>
            </div>
            <div class="input2">
              <div class="input1">
                <div class="name">Color</div>
                <el-input />
              </div>
              <div  class="input1">
                <div class="name">Trim</div>
                <el-input />
              </div>
              <div>
                <div class="name">Logbook</div>
                <el-input />
              </div>
            </div>
            <div class="input3">
              <div class="input1">
                <div class="name">Photo Upload</div>
                <el-input />
              </div>
              <el-button type="primary" class="btn">UPLOAD</el-button>
            </div>
            <div class="detail">COMMENTS</div>
            <div class="input4">
              <div class="input1">
                <div class="name">COMMENTS</div>
                <el-input type="textarea" :rows="5" />
              </div>
              <el-button type="primary" class="btn">SUBMIT</el-button>
            </div>
            <div class="privacy">PRIVACY</div>
            <div class="formText">
              <span class="tex">Your contact details are being collected by Autohome AU to enable us to record the details of the vehicle you are interested in and to consider the purchase of your trade-in vehicle. We may disclose your personal information to third parties to check whether and how, your vehicle is encumbered.</span>
              <span class="tex">From time to time, Autohome AU would like to contact you and to let you know about our products and services, including special offers.</span>
              <span class="tex">If you do not want us to do so, please let us know by contacting us. You can let us know at any time if you no longer wish to be contacted for these purposes. Your consent will remain current until you advise us otherwise.</span>
              <span class="tex">If you do not provide us with your personal information, we may not be able to consider any offer made by you.</span>
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
            point: 'The easiest way to sell your car, hassle free and stress free',
            started: 'The team at Autohome AU make selling your car as easy and convenient as possible. Simply send us your vehicle details using the form below and let our team take care of the rest. Contact us now.',
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
            img: [
              {url: [require('../../assets/images/sellyourcar/BringInYourCar.png')]},
              {url: [require('../../assets/images/sellyourcar/GetYourInstantOffer.png')]},
              {url: [require('../../assets/images/sellyourcar/GetCashPayment.png')]}
            ],
            visit: 'Please visit our showroom in Burwood to inspect our range of vehicles and discuss your needs. Our Sales team speak English and Chinese, and we look forward to helping you with your next car sale or purchase.',
            story: 'Autohome Australia were established in 2019 and our focus is to provide a solution for all sellers and buyers. Through word of mouth and referrals from satisfied clients, our reputation has allowed us to attract both local and interstate clients. Our area of specialty is luxury and prestigious vehicles.'
        }
    },
    methods: {
    }
})
</script>
<style lang="less" scoped>
    .contact {
        .imgs {
            width: 100%;
            height: 670px;
        }
        .text { 
          position:absolute;
          top: 162px;
          left: 145px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          .title {
            height: 130px;
            font-size: 65px;
            font-family: DINCondensed-Bold, DINCondensed;
            font-weight: bold;
            color: #FFFFFF;
            line-height: 130px;
          }
          .span {
            margin-top:-20px;
            width: 514px;
            height: 183px;
            font-size: 32px;
            text-align: left;
            font-family: DINCondensed-Bold, DINCondensed;
            font-weight: bold;
            color: #FFFFFF;
            line-height: 61px;
          }
        }
        .between {
          width: 100%;
          height: 565px;
          background: #F4F6F8;
          .sell {
            .title {
              height: 32px;
              font-size: 50px;
              padding:102px 0 20px 48px;
              font-family: DINCondensed-Bold, DINCondensed;
              font-weight: bold;
              color: #e4e6ea;
              line-height: 32px;
              letter-spacing: 73px;
            }
            .image {
              display: flex;
              position: relative;
              top: 49px;
            .imggs {
              width: 210px;
              padding-left: 202px;
              .img {
                width: 205px;
                height: 279px;
                background: #FFFFFF;
              }
            }
          }
            .content {
              width: 81%;
              height: 293px;
              background: #FFFFFF;
              display: flex;
              position: absolute;
              left: 282px;
              .contentView {
                display:flex;
                flex-direction: column;
                margin-top:44px;
                margin-left: 180px;
                .yourCar {
                  width: 220px;
                  height: 32px;
                  font-size: 22px;
                  text-align: left;
                  margin-bottom: 10px;
                  font-family: DINCondensed-Bold, DINCondensed;
                  font-weight: bold;
                  color: #212020;
                  line-height: 32px;
                }
                .style {
                  width: 165px;
                  height: 110px;
                  font-size: 12px;
                  text-align: left;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: #909090;
                  line-height: 22px;
                }
              }
            }
          }
        }
        .bottom {
          background-color: #fff;
          .contact {
            margin-top:85px;
            padding-left: 265px;
            .us {
              width: 725px;
              height: 100px;
              font-size: 40px;
              text-align: left;
              font-family: DINCondensed-Bold, DINCondensed;
              font-weight: bold;
              color: #212020;
              line-height: 100px;
            }
            .started {
              width: 535px;
              height: 66px;
              font-size: 12px;
              text-align: left;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #4A4A4A;
              line-height: 22px;
            }
          }
          .form {
            height: 1905px;
            background-color: #f4f6f8;
            margin: 33px 249px 55px;
            .detail {
              position: relative;
              top: 85px;
              width: 256px;
              height: 46px;
              font-size: 20px;
              text-align: center;
              background-color: #000;
              font-family: DINCondensed-Bold, DINCondensed;
              font-weight: bold;
              color: #E8E8E8;
              line-height: 50px;
            }
            .privacy {
              position: relative;
              top: 240px;
              width: 256px;
              height: 46px;
              font-size: 20px;
              text-align: center;
              background-color: #000;
              font-family: DINCondensed-Bold, DINCondensed;
              font-weight: bold;
              color: #E8E8E8;
              line-height: 50px;
            }
            .detail1 {
              position: relative;
              top: 85px;
              width: 256px;
              height: 46px;
              font-size: 20px;
              text-align: center;
              background-color: #000;
              font-family: DINCondensed-Bold, DINCondensed;
              font-weight: bold;
              color: #E8E8E8;
              line-height: 50px;
            }
            .inputs {
              padding-top:120px;
              display: flex;
              margin-left: 87px;
              .input1 {
                margin-right: 81px;
              }
              .name{
                text-align: left;
                margin-bottom: 15px;
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
              margin-left: 87px;
              .input1 {
                margin-right: 81px;
              }
              .name{
                text-align: left;
                margin-bottom: 15px;
                font-family: DINCondensed-Bold, DINCondensed;
                font-weight: bold;
              }
              .el-input__inner {
                width: 100%;
                border: 1px solid #000;
              }
            }
            .input3 {
              padding-top:32px;
              display: flex;
              margin-left: 87px;
              .input1 {
                margin-right: 81px;
                width: 373px;
                height: 107px;
              }
              .name{
                text-align: left;
                margin-bottom: 15px;
                font-family: DINCondensed-Bold, DINCondensed;
                font-weight: bold;
              }
              .btn{
                width: 147px;
                height: 44px;
                color: fff;
                background-color: #000;
                position: relative;
                left: -6px;
                top: 33px;
              }
              
            }
            .input4 {
              padding-top:130px;
              margin-left: 87px;
              .input1 {
                margin-right: 81px;
                width: 783px;
                height: 107px;
              }
              .name{
                text-align: left;
                margin-bottom: 15px;
                font-family: DINCondensed-Bold, DINCondensed;
                font-weight: bold;
              }
              .btn{
                width: 185px;
                height: 44px;
                color: fff;
                background-color: #000;
                position: relative;
                top: 110px;
                left: -26px;
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
              width: 256px;
              height: 46px;
              font-size: 20px;
              text-align: center;
              background-color: #000;
              font-family: DINCondensed-Bold, DINCondensed;
              font-weight: bold;
              color: #E8E8E8;
              line-height: 50px;
            }
            .inputs {
              padding-top:120px;
              display: flex;
              margin-left: 87px;
              .input2 {
                margin-right: 81px;
              }
              .name{
                text-align: left;
                margin-bottom: 15px;
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
            top:254px;
            .tex {
              font-size: 14px;
              text-align: left;
              margin-top:50px;
              padding: 0 80px;
              font-weight: 400;
              font-family: PingFangSC-Light, PingFang SC;
              color: #151515;
            }
          }
        }
    }
    .el-input__inner {
        width: 100%;
        border: 1px solid #000 !important;
        border-radius: 0 !important;
      }
</style>
