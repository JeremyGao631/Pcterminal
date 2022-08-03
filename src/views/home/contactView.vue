<template>
    <div class="contact">
        <img class="imgs" src="../../assets/images/home/JVS00138.png" alt="">
        <div class="contact-main">
            <div class="left">
                <div class="top">
                    <div class ="information">
                        <img class="img" src="../../assets/images/contact/Phone.png" alt="">
                        <span class="title"> {{ information[0].title }}</span>
                        <span class="contact"> {{ information[0].information }}</span>
                    </div>
                    <div class ="information">
                        <img class="img" src="../../assets/images/contact/Email.png" alt="">
                        <span class="title"> {{ information[1].title }}</span>
                        <span class="contact"> {{ information[1].information }}</span>
                    </div>
                </div>
                <div class="top">
                    <div class ="information">
                        <img class="img" src="../../assets/images/contact/Wechat.png" alt="">
                        <span class="title"> {{ information[2].title }}</span>
                        <span class="contact"> {{ information[2].information }}</span>
                        <div class="code_box" id="code1"><img src="../../assets/images/contact/WeChatQRcode.png" /></div>
                    </div>
                    <div class ="information">
                        <img class="img" src="../../assets/images/contact/Address.png" alt="">
                        <span class="title"> {{ information[3].title }}</span>
                        <span class="contact"> {{ information[3].information }}</span>
                    </div>
                    <!-- <el-dialog
                        title="WeChat QR Code"
                        :visible.sync="chatQRCodeDialogVisible"
                        width="40%"
                        :before-close="chatQRCodeHandleClose">
                        <div>
                            <img src="../../assets/images/contact/WeChatQRcode.png" />
                        </div>
                        <span slot="footer" class="dialog-footer">
                        </span>
                    </el-dialog> -->
                </div>
                <!--新增-->
                <div class="top">
                    <div class ="information special" @click="goHome()">
                        <img class="img" src="../../assets/images/contact/facebook.png" alt="">
                        <span class="title"> {{ information[4].title }}</span>
                        <span class="contact"> {{ information[4].information }}</span>
                    </div>
                    <div class ="information" >
                        <img class="img" src="../../assets/images/contact/whatsapp.png" alt="">
                        <span class="title"> {{ information[5].title }}</span>
                        <span class="contact"> {{ information[5].information }}</span>
                        <div class="code_box" id="code2"><img src="../../assets/images/contact/WhatsAppQRcode.png" /></div>
                    </div>
                    <!-- <el-dialog
                        title="Whatsapp QR Code"
                        :visible.sync="appQRCodeDialogVisible"
                        width="40%"
                        :before-close="appQRCodeHandleClose">
                        <div>
                            <img src="../../assets/images/contact/WhatsAppQRcode.png" />
                        </div>
                        <span slot="footer" class="dialog-footer">
                        </span>
                    </el-dialog> -->
                </div>
            </div>
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
                        maxlength="10"
                        placeholder="Phone*" 
                        required 
                    />
                </div>

                <div class="input-view">
                    <el-input
                        v-model="email"
                        placeholder="Email*" 
                        @blur="emails"
                        required 
                    />
                    <el-input 
                        v-model="postcode"
                        placeholder="Postcode*" 
                        required 
                    />
                </div>
                <div class="input-view">
                        <el-input
                            type="textarea"
                            :autosize="{ minRows: 5, maxRows: 10}"
                            placeholder="Message*"
                            v-model="message" />
                </div>
                <el-button @click="contactSubmit()">SUBMIT</el-button>
                </div>

            </div>
        </div>
        <!-- <div class="location">
            <img class="border" src="../../assets/images/contact/LocationIconBackground.png" alt="">
            <div class="top">
                <img class="logo" src="../../assets/images/contact/LocationIcon.png" alt="">
                <div class="tips">388 Parramatta Road，Burwood, NSW 2134</div>
            </div>
        </div> -->
        <img class="img" src="../../assets/images/contact/ditu2.png" alt="">
    </div>
</template>
<script>
// import { Dialog } from "element-ui";
import { fetch } from '@/api'
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
            postcode: '',
            message: '',
            disabled: true, // 校验
            information: [
                {
                    title:'Phone',
                    information: '(02) 8386 3564'
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
            if(this.name === '' || this.phone === '' || this.email === '' || this.postcode === '' || this.message === '') {
                // this.disabled = true
                // this.$message('Please check the page information is completed')
                this.$message({
                dangerouslyUseHTMLString: true,
                message:'<span style="font-family:DINCondensed-Bold;font-size: 16px;">Please check the page information is completed</span>'
                });
            } else {
                // this.disabled = false
                fetch({
                    name:this.name,
                    phone: this.phone,
                    email:this.email,
                    message:this.message,
                    address:this.postcode
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
            console.log('123')
            // code值为0 成功
        },
        emails() {
            var emailText = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
            var istrue = emailText.test(this.email)
            if(!istrue) {
                // this.$message('Please enter a valid email address.')
                this.$message({
              dangerouslyUseHTMLString: true,
              message:'<span style="font-family:DINCondensed-Bold;font-size: 16px;">Please enter a valid email address.</span>'
              });
                this.email = ''
            }
        },
        goHome() {
            window.location.href="https://www.facebook.com/Autohome-Australia-101055345438578/"
        },
        // appQRCodeOpen() {
            
        // },
        // chatQRCodeOpen() {
        //     this.chatQRCodeDialogVisible = true;
        // },

    }
})
</script>
<style lang="less" scoped>
    .contact {
        .imgs {
            width: 100%;
            // height: calc(100vh - 15px);
            object-fit: cover;
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
            margin: 105px auto 0 auto;
            width: 80%;
            height: 1100px;
            display: flex;
            align-items: center;
            .table {
                right: 0;
                width: 50%;
                height: 955px;
                background-color: #f4f6f8;
                box-sizing: border-box;
                margin-left: -125px;
                .table1 {
                    padding: 20% 0 0 10%;
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
                        margin: 15px 20px;
                    }
                    .el-textarea{
                        font-size: 20px;
                        margin-left: 20px;
                        margin-top:20px;
                    }
                }
                .el-button {
                    margin-top: 10px;
                    padding-top:15px;
                    margin-left: 31px;
                    width: 200px;
                    font-size: 21px;
                    height: 58px;
                    font-family: DINCondensed-Bold;
                    border-radius: 1px;
                    color:#fff;
                    background-color: #151515;
                }
                }
            }
            .left {
                margin-left: 6%;
                margin-top: 20px;
                .top {
                    display: flex;
                    .information {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        margin-right: 20px;
                        margin-bottom: 20px;
                        width: 289px;
                        height: 276px;
                        background: #FFFFFF;
                        box-shadow: 0px 14px 48px 0px rgba(73, 73, 73, 0.07);
                        position: relative;
                        .img {
                            margin-top:56px;
                            margin-bottom:54px;
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
                        .code_box{
                            display: none;
                            position: absolute;
                            left: 0;
                            top: 0;
                            width: 100%;
                            height: 100%;
                            padding: 10px;
                            box-sizing: border-box;
                            img {
                                width: 100%;
                                height: 100%;
                            }
                        }
                    } 
                    .information:hover {
                        .code_box {
                            display: block;
                        }
                    }
                    .special {
                        cursor:pointer;
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
            margin-bottom:-5px;
            object-fit: cover;
        }
        .location {
            margin-top:-100px;
            position: relative;
            top: 275px;
            right: 3.3%;
            .border {
                width: 400px;
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
border: 1px solid #c4c9cf ;
border-radius: 0 ;
font-size: 14px;
background-color: #f4f6f8;
}
/deep/.el-input--suffix .el-input__inner {
  padding-right: 14px !important;
}
/deep/.el-textarea__inner {
  border: 1px solid #c4c9cf ;
  border-radius: 0 ;
  background-color: #f4f6f8;
}
/deep/.el-input__inner {
    width: 86%;
    padding-top: 3px;
}
/deep/.el-textarea__inner {
    margin-left:18px;
    width: 86%;
}
/deep/.el-input__inner::placeholder {
    font-size: 16px;
    font-family: DINCondensed-Bold, DINCondensed;
    font-weight: bold;
    padding-top: 3px;
    color: #151515;
    line-height: 130px;
}
/deep/.el-textarea__inner::placeholder{
    font-size: 16px;
    font-family: DINCondensed-Bold, DINCondensed;
    font-weight: bold;
    color:#151515;
}

@media screen and (max-width:1600px) and (min-width:1200px){
    /deep/.el-textarea__inner {
        width: 88%;
        margin-left: 12px;
    }

    .contact .contact-main .left {
        width: 100%;
    }
    .contact .contact-main .left .top .information {
        width: 80%;
    }
    .contact .contact-main {
        padding-right: 60px;
    }
}

@media screen and (max-width: 1200px){
    .contact .contact-main {
        margin: 105px auto 0 auto;
        width: 80%;
        display: block;
        height: 2000px;
    }
    .contact .contact-main .left .top {
        justify-content: center;
    }
    .contact .contact-main .table {
        margin: 0 auto;
        width: 80%;
    }
    .contact .contact-main .table .table1 {
        padding: 0;
    }
    .contact .contact-main .table .table1 .title {
        margin-left: 0;
    }

    /deep/.el-textarea__inner {
        width: 85%;
    }
}

@media screen and (max-width: 768px){
    .contact .contact-main .table{
        margin-left: -125px;
        width: 650px;
    }
    .contact .contact-main .table .table1 .title {
        margin-left: 120px;
    }
}

</style>
