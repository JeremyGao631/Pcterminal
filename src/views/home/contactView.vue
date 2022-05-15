<template>
    <div class="contact">
        <img class="imgs" src="../../assets/images/contact/ContactUsNow.png" alt="">
        <div class="text">
          <div class="title">CONTACT US NOW</div>
        </div>
        <div class="contact-main">
            <div class= "table">
                <span class="title">CONTACT</span>
                <div class="input-view">
                    <el-input 
                        v-model="name"
                        placeholder="Name*" 
                        required 
                    />
                    <el-input 
                        v-model="phone"
                        placeholder="Phone*" 
                        required 
                    />
                </div>

                <div class="input-view">
                    <el-input 
                        v-model="email"
                        placeholder="Email*" 
                        required 
                    />
                    <el-input 
                        v-model="address"
                        placeholder="Address*" 
                        required 
                    />
                </div>
                <div class="input-view">
                        <el-input
                            type="textarea"
                            :autosize="{ minRows: 8, maxRows: 20}"
                            placeholder="Message*"
                            v-model="message" />
                </div>
                <el-button :disabled="this.name === '' || this.phone === '' || this.email === '' || this.address === ''" @click="contactSubmit()">SUBMIT</el-button>
            </div>
            <div class="left">
                <div class="top">
                    <div class =information>
                        <img class="img" src="../../assets/images/contact/Phone.png" alt="">
                        <span class="title"> {{ information[0].title }}</span>
                        <span class="contact"> {{ information[0].information }}</span>
                    </div>
                    <div class =information>
                        <img class="img" src="../../assets/images/contact/Email.png" alt="">
                        <span class="title"> {{ information[1].title }}</span>
                        <span class="contact"> {{ information[1].information }}</span>
                    </div>
                </div>
                <div class="top">
                    <div class =information>
                        <img class="img" src="../../assets/images/contact/Wechat.png" alt="">
                        <span class="title"> {{ information[2].title }}</span>
                        <span class="contact"> {{ information[2].information }}</span>
                    </div>
                    <div class =information>
                        <img class="img" src="../../assets/images/contact/Address.png" alt="">
                        <span class="title"> {{ information[3].title }}</span>
                        <span class="contact"> {{ information[3].information }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="location">
            <img class="border" src="../../assets/images/contact/LocationIconBackground.png" alt="">
            <div class="top">
                <img class="logo" src="../../assets/images/contact/LocationIcon.png" alt="">
                <div class="tips">388 Parramatta Road，Burwood, NSW 2134</div>
            </div>
        </div>
        <img class="img" src="../../assets/images/contact/LocationBackground.png" alt="">
    </div>
</template>
<script>
import { Dialog } from "element-ui";
// import contactCom from "../components/contact-com.vue"


export default({
    name: "contactView",
    components: {
    },
    data() {
        return {
            name: '',
            phone: '',
            email: '',
            address: '',
            message: '',
            disabled: true, // 校验
            information: [
                {
                    title:'Phone',
                    information: '0498 698 000'
                },
                {
                    title:'Email',
                    information: 'enquiries@auto-home.com.au'
                },
                {
                    title:'Wechat',
                    information: 'buyingcars'
                },
                {
                    title:'Address',
                    information: '388 Parramatta Road，Burwood, NSW 2134'
                }
            ]
        }
    },
    methods: {
        contactSubmit() {
            if(this.name === '' || this.phone === '' || this.email === '' || this.address === '') {
                this.disabled = true
                Dialog.alert('请补充资料完整')
            } else {
                this.disabled = false
                
            }
        }
    }
})
</script>
<style lang="less" scoped>
    .contact {
        .imgs {
            width: 100%;
            height: 997px;
        }
        .text { 
          position:absolute;
          top: 220px;
          left: 200px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          .title {
            height: 130px;
            font-size: 120px;
            font-family: DINCondensed-Bold, DINCondensed;
            font-weight: bold;
            color: #FFFFFF;
            line-height: 130px;
          }
        }
        .contact-main {
            margin-left: -78px;
            .table {
                margin: 95px 0 35px 755px;
                width: 902px;
                height: 772px;
                background-color: #f4f6f8;
                .title {
                    margin-left: 140px;
                    font-size: 80px;
                    font-family: DINCondensed-Bold, DINCondensed;
                    font-weight: bold;
                    color: #151515;
                    line-height: 230px;
                }
                .input-view {
                    margin-left: 195px;
                    display: flex;
                    .el-input {
                        font-size: 20px;
                        width: 278px;
                        margin: 10px 20px;
                    }
                    .el-textarea{
                        font-size: 20px;
                        margin-left: 20px;
                        margin-top:20px;
                        width: 595px;
                    }
                }
                .el-button {
                    margin-top: 25px;
                    margin-left: 153px;
                    width: 231px;
                    font-size: 20px;
                    height: 58px;
                    border-radius: 0;
                    color:#fff;
                    background-color: #151515;
                }
            }
            .left {
                position:absolute;
                top: 1258px;
                left: 210px;
                .top {
                    display: flex;
                    .information {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin-right: 20px;
                        margin-bottom: 20px;
                        width: 289px;
                        height: 306px;
                        background: #FFFFFF;
                        box-shadow: 0px 14px 48px 0px rgba(73, 73, 73, 0.07);
                        .img {
                            margin-top:55px;
                            margin-bottom:40px;
                            width: 66px;
                            height: 66px;
                        }
                        .title {
                            width: 111px;
                            height: 22px;
                            font-size: 40px;
                            font-family: DINCondensed-Bold, DINCondensed;
                            font-weight: bold;
                            color: #212020;
                            line-height: 32px;
                            margin-bottom: 35px;
                        }
                        .contact {
                            width: 250px;
                            height: 28px;
                            font-size: 10px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #151515;
                            line-height: 28px;
                        }
                    } 
                }

            }
        }
        .img {
            width: 100%;
            height: 441px;
            margin-bottom:-4px;
        }
        .location {
            margin-top:-100px;
            position: relative;
            top: 305px;
            right: 68px;
            .border {
                width: 510px;
                height: 210px;
            }
            .top {
                display: flex;
                align-items: flex-start;
                flex-direction: row;
                position: absolute;
                left: 887px;
                top: 71px;
                .logo {
                    width: 78px;
                }
                .tips {
                    width: 250px;
                    font-size: 12px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    color: #FFFDFD;
                }
            }
        }
    }
</style>
