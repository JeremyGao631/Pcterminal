<template>
    <div class="contact">
        <img class="imgs" src="../../assets/images/contact/ContactUsNow.png" alt="">
        <div class="text">
          <div class="title">CONTACT US NOW</div>
        </div>
        <div class="contact-main">
            <div class= "table">
                <div class="table1">
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
                        v-model="Address"
                        placeholder="Address*" 
                        required 
                    />
                </div>
                <div class="input-view">
                        <el-input
                            type="textarea"
                            :autosize="{ minRows: 5, maxRows: 20}"
                            placeholder="Message*"
                            v-model="message" />
                </div>
                <el-button :disabled="this.name === '' || this.phone === '' || this.email === '' || this.address === ''" @click="contactSubmit()">SUBMIT</el-button>
                </div>

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
                    <div class =information @click="chatQRCodeOpen()">
                        <img class="img" src="../../assets/images/contact/Wechat.png" alt="">
                        <span class="title"> {{ information[2].title }}</span>
                        <span class="contact"> {{ information[2].information }}</span>
                    </div>
                    <div class =information>
                        <img class="img" src="../../assets/images/contact/Address.png" alt="">
                        <span class="title"> {{ information[3].title }}</span>
                        <span class="contact"> {{ information[3].information }}</span>
                    </div>
                    <el-dialog
                        title="WeChat QR Code"
                        :visible.sync="chatQRCodeDialogVisible"
                        width="40%"
                        :before-close="chatQRCodeHandleClose">
                        <div>
                            <img src="../../assets/images/contact/WeChatQRcode.png" />
                        </div>
                        <span slot="footer" class="dialog-footer">
                        </span>
                    </el-dialog>
                </div>
                <!--新增-->
                <div class="top">
                    <div class =information @click="goHome()">
                        <img class="img" src="../../assets/images/contact/Wechat.png" alt="">
                        <span class="title"> {{ information[4].title }}</span>
                        <span class="contact"> {{ information[4].information }}</span>
                    </div>
                    <div class =information @click="appQRCodeOpen()">
                        <img class="img" src="../../assets/images/contact/Address.png" alt="">
                        <span class="title"> {{ information[5].title }}</span>
                        <span class="contact"> {{ information[5].information }}</span>
                    </div>
                    <el-dialog
                        title="Whatsapp QR Code"
                        :visible.sync="appQRCodeDialogVisible"
                        width="40%"
                        :before-close="appQRCodeHandleClose">
                        <div>
                            <img src="../../assets/images/contact/WhatsAppQRcode.png" />
                        </div>
                        <span slot="footer" class="dialog-footer">
                        </span>
                    </el-dialog>
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
            appQRCodeDialogVisible: false,
            chatQRCodeDialogVisible: false,
            name: '',
            phone: '',
            email: '',
            address: '',
            message: '',
            disabled: true, // 校验
            information: [
                {
                    title:'Phone',
                    information: '0406 118 999'
                },
                {
                    title:'E-mail',
                    information: 'enquiries@auto-home.com.au'
                },
                {
                    title:'Wechat',
                    information: 'Autohome_388'
                },
                {
                    title:'Address',
                    information: '388 Parramatta Road，Burwood, NSW 2134'
                },
                {
                    title:'Facebook',
                    information: 'Autohome Australia'
                },
                {
                    title:'Whatsapp',
                    information: '0406 118 999'
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
        },
        goHome() {
            window.location.href="https://www.facebook.com/Autohome-Australia-101055345438578/"
        },
        appQRCodeHandleClose() {
            this.appQRCodeDialogVisible = false;
        },
        appQRCodeOpen() {
            this.appQRCodeDialogVisible = true;
        },
        chatQRCodeHandleClose() {
            this.chatQRCodeDialogVisible = false;
        },
        chatQRCodeOpen() {
            this.chatQRCodeDialogVisible = true;
        },

    }
})
</script>
<style lang="less" scoped>
    .contact {
        .imgs {
            width: 100%;
            height: 830px;
        }
        .text { 
          position:absolute;
          top: 180px;
          left: 240px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          .title {
            height: 130px;
            font-size: 100px;
            font-family: DINCondensed-Bold, DINCondensed;
            font-weight: bold;
            color: #FFFFFF;
            line-height: 130px;
          }
        }
        .contact-main {
            margin-left: 8px;
            .table {
                margin: 95px 200px 35px 30%;
                width: 52%;
                height: 750px;
                background-color: #f4f6f8;
                position: relative;
                .table1 {
                    position: absolute;
                    left:14%;
                .title {
                    margin-left: 60px;
                    font-size: 60px;
                    font-family: DINCondensed-Bold, DINCondensed;
                    font-weight: bold;
                    color: #151515;
                    line-height: 193px;
                }
                .input-view {
                    margin-left: 70px;
                    margin-top: -34px;
                    margin-bottom: 35px;
                    display: flex;
                    .el-input {
                        font-size: 20px;
                        width: 252px;
                        margin: 10px 20px;
                    }
                    .el-textarea{
                        font-size: 20px;
                        margin-left: 20px;
                        margin-top:20px;
                        width: 84%;
                    }
                }
                .el-button {
                    margin-top: 10px;
                    margin-left: 31px;
                    width: 180px;
                    font-size: 13px;
                    height: 46px;
                    border-radius: 0;
                    color:#fff;
                    background-color: #151515;
                }
                }
            }
            .left {
                position:absolute;
                top: 1030px;
                left: 13%;
                .top {
                    display: flex;
                    .information {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin-right: 20px;
                        margin-bottom: 20px;
                        width: 205px;
                        height: 210px;
                        background: #FFFFFF;
                        box-shadow: 0px 14px 48px 0px rgba(73, 73, 73, 0.07);
                        .img {
                            margin-top:19px;
                            margin-bottom:19px;
                            width: 45px;
                            height: 45px;
                        }
                        .title {
                            width: 111px;
                            height: 22px;
                            font-size: 30px;
                            font-family: DINCondensed-Bold, DINCondensed;
                            font-weight: bold;
                            color: #212020;
                            line-height: 32px;
                            margin-bottom: 19px;
                        }
                        .contact {
                            width: 200px;
                            height: 28px;
                            font-size: 14px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: bold;
                            color: #151515;
                            line-height: 28px;
                        }
                    } 
                }
                .showcode {
                    width: 150px;
                    height: 150px;
                    position: absolute;
                    top:245px;
                    left:15px;
                }

            }
        }
        .img {
            width: 100%;
            height: 352px;
            margin-bottom:-4px;
        }
        .location {
            margin-top:-100px;
            position: relative;
            top: 275px;
            right: 3.3%;
            .border {
                width: 410px;
                height: 210px;
            }
            .top {
                display: flex;
                align-items: flex-start;
                flex-direction: row;
                position: absolute;
                left: 44%;
                top: 71px;
                .logo {
                    width: 78px;
                }
                .tips {
                    width: 176px;
                    padding-top:10px;
                    font-size: 12px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    color: #FFFDFD;
                }
            }
        }
    }
/deep/.el-input__inner {
border: 1px solid #000 ;
border-radius: 0 ;
font-size: 14px;
}
/deep/.el-input--suffix .el-input__inner {
  padding-right: 14px !important;
}
/deep/.el-textarea__inner {
  border: 1px solid #000 ;
  border-radius: 0 ;
}
/deep/.el-input__inner {
    width: 217px;
}
/deep/.el-textarea__inner {
    margin-left:18px;
    width: 508px;
}
/deep/.el-input__inner::placeholder {
    font-size: 20px;
font-family: DINCondensed-Bold, DINCondensed;
font-weight: bold;
color: #151515;
line-height: 130px;
}
/deep/.el-textarea__inner::placeholder{
    font-size: 20px;
font-family: DINCondensed-Bold, DINCondensed;
font-weight: bold;
color:#151515;
}
</style>
