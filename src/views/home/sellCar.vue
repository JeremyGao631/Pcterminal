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
          </div>
          <img :src="img.url" alt="">
          <div>

          </div>
        </div>
    </div>
</template>
<script>
// import { Dialog } from "element-ui";
// import contactCom from "../components/contact-com.vue"


export default({
    name: "contactView",
    components: {
    },
    data() {
        return {
            point: 'The easiest way to sell your car, hassle free and stress free',
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
          height: 845px;
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
            .content {
              width: 100%;
              height: 293px;
              background: #FFFFFF;
              display: flex;
              .contentView {
                display:flex;
                flex-direction: column;
                margin-top: 44px;
                margin-left: 237px;
                .yourCar {
                  width: 220px;
                  height: 32px;
                  font-size: 20px;
                  text-align: left;
                  margin-bottom: 10px;
                  font-family: DINCondensed-Bold, DINCondensed;
                  font-weight: bold;
                  color: #212020;
                  line-height: 32px;
                }
                .style {
                  width: 184px;
                  height: 110px;
                  font-size: 13px;
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
    }
</style>
