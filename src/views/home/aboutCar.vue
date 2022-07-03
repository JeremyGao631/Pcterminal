<template>
    <div class="contact">
        <img class="contentimg" src="../../assets/images/about/JVS00341-4.jpg" alt="">
        <div class="inlinetext">
            <span class="content-title">Get to know us</span><br />
            <span class="content-text">
                <span style="padding-left:60px">ABOUT</span><br />
                <span style="padding-left:60px;margin-top:-10px ;">AUTOHOME AU</span><br />
                <div style="clear:both;"></div>
            </span>
            <el-button class="clickbtn" @click="contactUs()">
                <span>CONTACT US</span>
                <i class="el-icon-my-right"></i>
            </el-button>
        </div>
        <div class="offer">WHAT WE OFFER</div>
        <div class="style">
            <div v-for="(items,index) in information" :key="index" class="weOffer">
                <img :src="items.targeUrl" alt="" class="imgStyle">
                <div class="title">{{ items.secondtitle }}</div>
                <div class="information">{{ items.describtion }}</div>
            </div>
        </div>
        <div class="ourStory">
            <img class="storyImg" src="../../assets/images/about/JVS00326-Edit-3.jpg" alt="">
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
        <div class="visit_box">
            <img class="img" src="../../assets/images/home/JVS00366-Edit-3.jpg" alt="">   
            <div class="visit">
                <div class="visitTitle">VISIT OUR SHOWROOM</div>
                <div class="visitText">{{ visit }}</div>
                <div class="visitText">{{ visit1 }}</div>
                <div class="visitText">{{ visit2 }}</div>
            </div>
        </div>
    </div>
</template>
<script>
// import { Dialog } from "element-ui";
// import contactCom from "../components/contact-com.vue"

import {describtion} from '@/api'
export default({
    name: "aboutView",
    components: {
    },
    data() {
        return {
            information: [
                // {
                //     img: [require('../../assets/images/about/CarForSale1.png')],
                //     title:'Car for Sale',
                //     information: 'Browse the fine motor vehicles via online showroom or visit our showroom in Sydney to view an exclusive range of luxury models and sports vehicles.'
                // },
                // {
                //     img: [require('../../assets/images/about/SellYourCar1.png')],
                //     title:'Sell your car',
                //     information: 'Our team at Autohome AU make selling your car as easy and convenient as possible. Click and simply send us your vehicle details and let our team take care of the rest.'
                // },
                // {
                //     img: [require('../../assets/images/about/FinanceSolution1.png')],
                //     title:'Finance Solution',
                //     information: 'We understand financing can be a hassle, so we re here to make everything as easy as possible. Contact to us directly and let our team provide you a perfect fit.'
                // },
                // {
                //     img: [require('../../assets/images/about/ServiceAndRepairs1.png')],
                //     title:'Service and Repairs',
                //     information: 'We offer a one-stop car servicing on all makes and models, tailored to suit both your budget and vehicle. Book your service online now!'
                // }
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
            visit: 'Please visit our showroom in Burwood to inspect our range of vehicles and discuss your needs.',
            visit1: 'Our Sales team speak English and Chinese.',
            visit2: 'and we look forward to helping you with your next car sale or purchase.',
            story: 'Autohome Australia was established in 2019 and our focus is to provide a solution for all sellers and buyers. Through word of mouth and referrals from satisfied clients, our reputation has allowed us to attract both local and interstate clients. Our area of specialty is luxury and prestigious vehicles.Our core principle and belief is that ‘we sell quality.’ We provide a streamlined process that is simple, transparent and efficient. You can be reassured that all our vehicles undergo a comprehensive inspection by qualified expert mechanics to ensure safety and quality for peace of mind.'
        }
    },
    created() {
        this.aboutData()
    },
    methods: {
        aboutData() {
            describtion({
                current: '1',
                pageSize: '10',
                title: 'ABOUT'
            }).then(res => {
                res.data.records.forEach(ele => {
                    const item = {
                    targeUrl: ele.targeUrl,
                    secondtitle: ele.secondtitle,
                    describtion: ele.describtion
                    }
                this.information.push(item)
                })
            })
        }
    }
})
</script>
<style lang="less" scoped>
    .contact {
        width: 100%;
        .contentimg {
        width: 100%;
        height: calc(100vh - 10px);
        }
        .inlinetext {
            position: absolute;
            left: 10%;
            top: 20%;
        }
        .content-title {
          font-size: 50px;
          font-family: DINCondensed-Bold;
          font-weight: bold;
          color: #FFFFFF;
          line-height: 50px;
          margin-left: -90px;
        }
        .content-text {
            font-size: 90px;
            font-family: DINCondensed-Bold;
            font-weight: bold;
            color: #FFFFFF;
            line-height: 130px;
            span {
                float:left;
            }
        }
        .clickbtn {
            width:160px;
            height: 58px;
            position: absolute;
            left:68px;
            border: 1px solid #FFFFFF ;
            margin-top: 20px;
            background-color: transparent;
            color:#FFFFFF;
            display: flex;
            align-items: center;
            justify-content: right;
            span{
                width: 91px;
                height: 130px;
                font-size: 20px;
                font-family: DINCondensed-Bold;
                font-weight: bold;
                line-height: 25px;
                text-align: center;
                color: #FFFFFF;
                line-height: 130px;
                margin-left: 20px;
                margin-right: 30px;
            }
            .el-icon-my-right {
                background: url('../../assets/images/home/right.png') no-repeat;
                background-size: cover;
                display:inline-block;
                height: 16px;
                width: 16px;
                margin-right: -16px;
            }
        }
        .offer {
            margin: 0 auto;
            width: 1400px;
            height: 100px;
            font-size: 60px;
            margin-top: 85px;
            margin-bottom: 65px;
            font-family: DINCondensed-Bold, DINCondensed;
            font-weight: bold;
            color: #151515;
            line-height: 100px;
            text-align: left;
        }
        .spcialoffer {
            margin: 0 auto;
            width: 1400px;
            height: 100px;
            font-size: 60px;
            margin-top: 100px;
            margin-bottom: 80px;
            font-family: DINCondensed-Bold, DINCondensed;
            font-weight: bold;
            color: #151515;
            line-height: 100px;
        }
        .style {
            margin: 0 auto;
            width: 1400px;
            margin-bottom:100px;
            display: flex;
            flex-wrap: wrap;
            box-sizing: border-box;
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
                    margin-top: 60px;
                    padding-bottom: 12px;
                    font-size: 33px;
                    font-family: DINCondensed-Bold;
                    font-weight: bold;
                    color: #212020;
                }
                .information {
                    width: 335px;
                    height: 120px;
                    text-align: left;
                    font-size: 16px;
                    padding-bottom: 60px;
                    font-family: PingFangSC-Regular;
                    font-weight: bold;
                    color: #4A4A4A;
                    line-height: 28px;
                    opacity: 0.7;
                }
            }
        }
        .styles {
            margin: 0 auto;
            width: 1400px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-bottom: 120px;
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
                    width: 220px;
                    // height: 152px;
                    font-size: 16px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: bold;
                    color: #4A4A4A;
                    line-height: 28px;
                    letter-spacing: 1px;
                    opacity: 0.7;
                    text-align: left;
                }
            }
        }
        .visit_box {
            width: 100%;
            height: 583px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            .img {
            width: 100%;
            height: 100%;
            }
            .visit{
                position:absolute;
                .visitTitle {
                    width: 555px;
                    height: 100px;
                    font-size: 65px;
                    text-align: center;
                    padding-left:160px;
                    font-family: DINCondensed-Bold, DINCondensed;
                    font-weight: bold;
                    color: #FFFFFF;
                    line-height: 100px;
                }
                .visitText {
                    height: 40px;
                    font-size: 20px;
                    text-align: center;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #FFFFFF;
                }
            }
        }
        .ourStory {
            margin: 0 auto;
            width: 1400px;
            display: flex;
            margin-top: 95px;
            justify-content: space-between;
            .storyImg {
                width: 690px;
                height: 462px;
                background: #FFFFFF;
                margin-right:42px;
            }
            .title {
                text-align: right;
                margin-top:45px;
                .storyTit {
                    width: 570px;
                    height: 100px;
                    font-size: 80px;
                    font-family: DINCondensed-Bold, DINCondensed;
                    font-weight: bold;
                    color: #151515;
                    line-height: 100px;
                }
                .story {
                    width: 566px;
                    height: 168px;
                    font-size: 20px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #4A4A4A;
                    line-height: 28px;
                    opacity: 0.7;
                }
            }
        }
    }
</style>
