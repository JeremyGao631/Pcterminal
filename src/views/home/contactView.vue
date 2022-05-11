<template>
    <div class="contact">
        <img class="imgs" src="../../assets/images/contact/ContactUsNow.png" alt="">
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
                            :autosize="{ minRows: 4, maxRows: 20}"
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
            height: 670px;
        }
        .contact-main {
            margin-left: -78px;
            .table {
                margin: 95px 0 35px 755px;
                width: 580px;
                height: 450px;
                background-color: #f4f6f8;
                .title {
                    margin-top: 40px;
                    margin-left: 140px;
                    font-size: 32px;
                    font-family: DINCondensed-Bold, DINCondensed;
                    font-weight: bold;
                    color: #151515;
                    line-height: 100px;
                }
                .input-view {
                    margin-left:150px;
                    display: flex;
                    .el-input {
                        font-size: 12px;
                        width:200px;
                        margin: 10px 20px;
                    }
                    .el-textarea{
                        font-size: 13px;
                        margin-left: 20px;
                        width: 390px;
                    }
                }
                .el-button {
                    margin-top:25px;
                    margin-left:153px;
                    width: 144px;
                    font-size: 12px;
                    height: 40px;
                    border-radius:0;
                    color:#fff;
                    background-color: #151515;
                }
            }
            .left {
                position:absolute;
                top: 872px;
                left: 410px;
                .top {
                    display: flex;
                    .information {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin-right: 20px;
                        margin-bottom: 20px;
                        width: 166px;
                        height: 182px;
                        background: #FFFFFF;
                        box-shadow: 0px 14px 48px 0px rgba(73, 73, 73, 0.07);
                        .img {
                            margin-bottom: 14px;
                            margin-top:15px;
                            width: 50px;
                            height: 50px;
                        }
                        .title {
                            width: 61px;
                            height: 22px;
                            font-size: 18px;
                            font-family: DINCondensed-Bold, DINCondensed;
                            font-weight: bold;
                            color: #212020;
                            line-height: 32px;
                            margin-bottom: 10px;
                        }
                        .contact {
                            width: 140px;
                            height: 28px;
                            font-size: 2px;
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
            height: 300px;
            margin-bottom:-4px;
        }
        .location {
            margin-top:-100px;
            position: relative;
            top: 209px;
            right: 49px;
            .border {
                width: 350px;
            }
            .top {
                display: flex;
                align-items: flex-start;
                flex-direction: row;
                position: absolute;
                left: 647px;
                top: 51px;
                .logo {
                    width: 55px;
                }
                .tips {
                    width: 150px;
                    font-size: 12px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    color: #FFFDFD;
                }
            }
        }
    }
</style>
