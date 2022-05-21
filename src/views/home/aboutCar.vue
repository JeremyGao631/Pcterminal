<template>
    <div class="contact">
        <img class="imgs" src="../../assets/images/about/OurMission.png" alt="">
        <div class="text">
          <div class="title">OUR MISSION</div>
          <div class="span">Offer our customers exceptional quality and excellent value with our integrity and enthusiasm.</div>
        </div>
        <div class="offer">WHAT WE OFFER</div>
        <div class="style">
            <div v-for="(items,index) in information" :key="index" class="weOffer">
                <img :src="items.img" alt="" class="imgStyle">
                <div class="title">{{ items.title }}</div>
                <div class="information">{{ items.information }}</div>
            </div>
        </div>
        <div class="ourStory">
            <img class="storyImg" src="../../assets/images/about/OurStory.png" alt="">
            <div class="title">
                <div class="storyTit">OUR STORY</div>
                <div class="story">{{ story }}</div>
            </div>
        </div>
        <div class="offer spcialoffer">WHY CHOOSE US</div>
        <div class="styles">
            <div v-for="(items,index) in chooses" :key="index" class="weOffer">
                <img :src="items.img" alt="" class="imgStyle">
                <div class="title">{{ items.title }}</div>
                <div class="information">{{ items.information }}</div>
            </div>
        </div>
        <img class="img" src="../../assets/images/about/VisitOurShowroom.png" alt="">   
        <div class="visit">
            <div class="visitTitle">VISIT OUR SHOWROOM</div>
            <div class="visitText">{{ visit }}</div>
        </div>
    </div>
</template>
<script>
// import { Dialog } from "element-ui";
// import contactCom from "../components/contact-com.vue"


export default({
    name: "aboutView",
    components: {
    },
    data() {
        return {
            information: [
                {
                    img: [require('../../assets/images/about/CarForSale.png')],
                    title:'Car for Sale',
                    information: 'Browse the fine motor vehicles via online showroom or visit our showroom in Sydney to view an exclusive range of luxury models and sports vehicles.'
                },
                {
                    img: [require('../../assets/images/about/SellYourCar.png')],
                    title:'Sell your car',
                    information: 'Our team at Autohome AU make selling your car as easy and convenient as possible. Click and simply send us your vehicle details and let our team take care of the rest.'
                },
                {
                    img: [require('../../assets/images/about/FinanceSolution.png')],
                    title:'Finance Solution',
                    information: 'We understand financing can be a hassle, so we re here to make everything as easy as possible. Contact to us directly and let our team provide you a perfect fit.'
                },
                {
                    img: [require('../../assets/images/about/ServiceAndRepairs.png')],
                    title:'Service and Repairs',
                    information: 'We offer a one-stop car servicing on all makes and models, tailored to suit both your budget and vehicle. Book your service online now!'
                }
            ],
            chooses: [
                {
                    img:[require('../../assets/images/about/ExceptionalQuality.png')],
                    title: 'Exceptional Quality',
                    information: 'Our cars have undergone a comprehensive inspection by qualified technicians to meet the highest standards.'
                },
                {
                    img: [require('../../assets/images/about/ExcellentValue.png')],
                    title: 'Excellent Value',
                    information: 'Our customers’ needs are our priority. We will constantly strive to meet your expectations.'
                },
                {
                    img: [require('../../assets/images/about/HighIntegrity.png')],
                    title: 'High Integrity',
                    information: 'Our services are trustworthy and reliable. We encourage open and honest communication.'
                },
                {
                    img:[require('../../assets/images/about/StrongEnthusiasm.png')],
                    title: 'Strong Enthusiasm',
                    information: 'Our employees share a deep passion for cars.'
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
        width: 100%;
        .imgs {
            width: 100%;
            height: 997px;
        }
        .text { 
          position:absolute;
          top: 202px;
          left: 186px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          .title {
            height: 130px;
            font-size: 90px;
            font-family: DINCondensed-Bold, DINCondensed;
            font-weight: bold;
            color: #FFFFFF;
            line-height: 130px;
          }
          .span {
            width: 683px;
            height: 183px;
            font-size: 45px;
            text-align: left;
            font-family: DINCondensed-Bold, DINCondensed;
            font-weight: bold;
            color: #FFFFFF;
            line-height: 61px;
          }
        }
        .offer {
            width: 42%;
            height: 100px;
            font-size: 60px;
            margin-top: 85px;
            margin-bottom: 65px;
            font-family: DINCondensed-Bold, DINCondensed;
            font-weight: bold;
            color: #151515;
            line-height: 100px;
            margin-left: 40px;
        }
        .spcialoffer {
            width: 42%;
            height: 100px;
            font-size: 60px;
            margin-top: 60px;
            margin-bottom: 43px;
            font-family: DINCondensed-Bold, DINCondensed;
            font-weight: bold;
            color: #151515;
            line-height: 100px;
            margin-left: 150px;
        }
        .style {
            width:83%;
            margin-bottom:160px;
            display: flex;
            flex-wrap: wrap;
            padding-left:231px;
            justify-content: center;
            .weOffer {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                width: 558px;
                .imgStyle {
                    width: 58px;
                    height: 59px;
                }
                .title {
                    width: 250px;
                    height: 32px;
                    text-align: left;
                    margin-bottom: 5px;
                    margin-top: 20px;
                    padding-bottom:12px;
                    font-size: 33px;
                    font-family: DINCondensed-Bold, DINCondensed;
                    font-weight: bold;
                    color: #212020;
                }
                .information {
                    width: 335px;
                    height: 120px;
                    text-align: left;
                    font-size: 16px;
                    padding-bottom: 25px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #4A4A4A;
                    line-height: 28px;
                }
            }
        }
        .styles {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin-left: 119px;
            margin-bottom: 70px;
            .weOffer {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                width: 300px;
                .imgStyle {
                    width: 32px;
                    height: 34px;
                }
                .title {
                    width: 250px;
                    height: 32px;
                    text-align: left;
                    margin-top: 20px;
                    font-size: 25px;
                    margin-bottom:10px;
                    font-family: DINCondensed-Bold, DINCondensed;
                    font-weight: bold;
                    color: #212020;
                }
                .information {
                    width: 185px;
                    height: 120px;
                    text-align: left;
                    font-size: 16px;
                    padding-bottom: 20px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #4A4A4A;
                    line-height: 28px;
                }
            }
        }
        .img {
            width: 100%;
            height: 395px;
            margin-bottom:-4px;
        }
        .visit{
            position:absolute;
            top: 2728px;
            left:30%;
            .visitTitle {
                width: 555px;
                height: 100px;
                font-size: 65px;
                text-align: center;
                padding-left:100px;
                font-family: DINCondensed-Bold, DINCondensed;
                font-weight: bold;
                color: #FFFFFF;
                line-height: 100px;
            }
            .visitText {
                width: 743px;
                height: 66px;
                font-size: 16px;
                text-align: center;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #FFFFFF;
                line-height: 22px;
            }
        }
        .ourStory {
            display: flex;
            margin-left: 395px;
            margin-top: 95px;
            margin-right:400px;
            .storyImg {
                width: 49%;
                height: 357px;
                background: #FFFFFF;
            }
            .title {
                text-align: right;
                margin-left:2%;
                margin-top:38px;
                .storyTit {
                    width: 344px;
                    height: 100px;
                    font-size: 60px;
                    padding-left:173px;
                    font-family: DINCondensed-Bold, DINCondensed;
                    font-weight: bold;
                    color: #151515;
                    line-height: 100px;
                }
                .story {
                    width: 456px;
                    padding-left:56px;
                    height: 168px;
                    font-size: 16px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #4A4A4A;
                    line-height: 28px;
                }
            }
        }
    }
</style>
