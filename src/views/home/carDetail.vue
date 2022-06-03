<template>
<div class="carDetail">
  <div class="infodetail">
    <div class="title">{{information.title}}</div>
    <div class="content">
      <div class="contentleft">
        <div class="pricekind">
          <span class="price">{{information.price}}</span>
          <span class="kind">{{information.kind}}</span>
        </div>
        <div style="clear:both;"></div>
        <div class="list" v-for="index in List" :key="index">
          <div class="listresult">
            <span class="listname">{{index.name}}</span>
            <span class="result">{{index.result}}</span>
          </div>
          <div style="clear:both;"></div>
        </div>
        <div class="littleshow">
          <div class="showleft">
            <img src="../../assets/images/carDetail/odometer.png" />
            <div class="showlefttext">
                <span class="texttop">34719</span>
                <span class="texttopright"> kms</span>
                <br />
                <span class="textbottom">Odometer</span>
            </div>
          </div>
          <div class="showleft">
            <img src="../../assets/images/carDetail/transmission.png" />
            <div class="showlefttext">
                <span class="texttop">Auto</span>
                <br />
                <span class="textbottom">Transmission</span>
            </div>
          </div>
          <div class="showleft">
            <img src="../../assets/images/carDetail/rili.png" />
            <div class="showlefttext">
                <span class="texttop">2016</span>
                <br />
                <span class="textbottom">Year</span>
            </div>
          </div>
        </div>
      </div>
      <div class="contentright">
        <div class="bigimg">
          <img src="../../assets/images/home/1.jpg" />
        </div>
        <div class="smallimg">
          <img src="../../assets/images/home/2.jpg" />
          <img src="../../assets/images/home/3.jpg" />
          <img src="../../assets/images/home/4.jpg" />
          <img src="../../assets/images/home/5.jpg" />
          <img src="../../assets/images/home/6.jpg" />
          <img src="../../assets/images/home/7.jpg" />
        </div>
      </div>
    </div>
    <div class="detailtext">
      <span class="texttitle">DEALER COMMENTS</span>
      <br />
      <span class="textcontent">The team at Autohome AU make selling your car as easy and convenient as possible. 
        <br />Simply send us your vehicle details using the form below and let our team take care of the rest. 
        <br />Contact us now.
      </span>
  </div>
  </div>
  <div class="booking">
    <div class="bookingtext">
      <div class="title">BOOK INSPECTION</div>
      <div class="userinput">
        <div class="inputtable">
          <span>Name</span>
          <el-input required v-model="name" />
        </div>
        <div class="inputtable">
          <span>Phone</span>
          <el-input v-model="phone" />
        </div>
        <div class="inputtable">
          <span>Email</span>
          <el-input :required="reqEmail" v-model="email" />
        </div>
        <div class="inputtable">
          <span>Time</span>
          <el-input :required="reqPhone" v-model="time" />
        </div>
      </div>
      <div class="inputtables">
        <div class="newbutton">
          <el-button @click="submit()">
            <span>SUBMIT</span>
            <i class="el-icon-my-yellowright"></i>
          </el-button>
        </div>
      </div>
      <div style="clear:both;"></div>
      <div class="sectitle">SIMILAR VEHICLES</div>
      <div class="textcontent">
        <div class="textcard" v-for="index in information1" :key="index">
          <div class="imgcard">
            <img :src="index.url" />
          </div>
          <div class="titlecard" >
            <span >{{index.year}} {{index.type}}</span>
            <br />
            <span >{{index.kind}}</span>
          </div>
          <div class="contentcard">
            <span class="contentcard-price">{{index.price}}</span>
            <span class="contentcard-info">{{index.info}}</span>
          </div>
          <div class="break" ></div>
          <div class="detailcard" >
            <span >{{index.distance}}</span>
            <span >{{index.info1}}</span>
            <span >{{index.info2}}</span>
          </div>
        </div>
      </div>
      <div class="choosepage">
        <el-pagination
          layout="prev, pager, next"
          :total="30">
        </el-pagination>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { inspection } from '@/api'

export default {
name: 'CarDetail',
  components: {
  },
  data(){
    return{
      // 需提交的字段
      name: '',
      phone: '',
      time: '',
      email: '',
      reqEmail: true,
      reqPhone: true,
      information: {
        title: '2016 Mercedes-Benz CLA45',
        price: '$149000.00',
        kind: "Excl. Gov's Charges" 
      },
      List: [
        {
          name: 'Make',
          result: 'Mercedes-Benz'
        },
        {
          name: 'Model',
          result: 'CLA Class'
        },
        {
          name: 'Body Type',
          result: 'Coupe'
        },
        {
          name: 'Colour',
          result: 'Grey'
        },
        {
          name: 'Engine Size',
          result: '2.0'
        },
        {
          name: 'Fuel Type',
          result: 'Petrol'
        },
        {
          name: 'Cylinders',
          result: '4'
        },
        {
          name: 'Doors',
          result: '4'
        },
        {
          name: 'Seats',
          result: 'Seats'
        },
      ],
      information1: [
                {
                  url: require('../../assets/images/home/1.jpg'),
                  year:'2019',
                  type: 'MERCEDES-BENZ',
                  kind: 'C63S AMG',
                  price: '$149000.00',
                  info: "Excl . Gov's Charges",
                  distance: '126295 kms',
                  info1: 'Diesel',
                  info2: 'Auto'
                },
                {
                  url: require('../../assets/images/home/2.jpg'),
                  year:'2019',
                  type: 'MERCEDES-BENZ',
                  kind: 'C63S AMG',
                  price: '$149000.00',
                  info: "Excl . Gov's Charges",
                  distance: '126295 kms',
                  info1: 'Diesel',
                  info2: 'Auto'
                },
                {
                  url: require('../../assets/images/home/3.jpg'),
                  year:'2019',
                  type: 'MERCEDES-BENZ',
                  kind: 'C63S AMG',
                  price: '$149000.00',
                  info: "Excl . Gov's Charges",
                  distance: '126295 kms',
                  info1: 'Diesel',
                  info2: 'Auto'
                },
                {
                  url: require('../../assets/images/home/4.jpg'),
                  year:'2019',
                  type: 'MERCEDES-BENZ',
                  kind: 'C63S AMG',
                  price: '$149000.00',
                  info: "Excl . Gov's Charges",
                  distance: '126295 kms',
                  info1: 'Diesel',
                  info2: 'Auto'
                }
      ],
    }
  },
  created() {
    this.query()
  },
  watch: {
    email() {
      if (this.email === '') {
        this.reqPhone === true
      } else {
        this.reqPhone === false
      }
    },
    phone() {
      if (this.phone === '') {
        this.reqEmail === true
      } else {
        this.reqEmail === false
      }
    }
  },
  methods: {
    // 收集信息提交
    submit() {
            inspection({
              // 缺少email字段
                        name:'huli',
                        phone: '12738721838',
                        // email:'1232ui@qq.com',
                        time: '2022-05-20 17:30:05',
            }).then( res => {
                console.log(res, '提交成功')
            })
    },
    // 按price的逻辑查询展示信息
    query() {

    }
  }
}
</script>

<style lang="less" scoped>
.carDetail {
  background-color: #F4F6F8;
  width:100%;
  .infodetail {
    padding-bottom:40px;
    width:1440px;
    margin: 0 auto;
    .title {
      font-size: 70px;
      font-family: DINCondensed-Bold;
      font-weight: bold;
      color: #212020;
      line-height: 55px;
      margin: 0 0 50px 20px;
      padding-top:92px;
      text-align:left;
      letter-spacing: 1px;
    }
    .content {
      margin:49px 120px 0px 20px;
      display: flex;
      align-items: top;
      justify-content: center;
      .contentleft {
        width:40%;
        margin-right:20px;
        .pricekind {
          margin-bottom:10px;
          .price {
            float:left;
            width:200px;
            font-size: 48px;
            font-family: DINCondensed-Bold, DINCondensed;
            font-weight: bold;
            color: #151515;
            line-height: 48px;
            letter-spacing: 2px;
            margin-right:10px;
            
          }
          .kind {
            float:left;
            font-size: 18px;
            font-family: DINCondensed-Bold, DINCondensed;
            font-weight: bold;
            color: #909090;
            line-height: 22px;
            padding-top:20px;
          }
        }
        .list {
          margin: 5px 0;
          padding: 5px 0;
          .listresult {
            .listname {
              float:left;
              width:170px;
              font-size: 14px;
              font-family: PingFangSC-Light;
              font-weight: bold;
              color: #909090;
              line-height: 25px;
              margin-right:10px;
              text-align: left;
              opacity: 0.8;
              padding-left: 30px;
            }
            .result {
              width:calc(100% - 240px;);
              float:left;
              font-size: 14px;
              font-family: PingFangSC-Medium;
              font-weight: bold;
              color: black;
              line-height: 25px;
              text-align: left;
              white-space: nowrap;
            }
          }
        }
        .list:nth-child(2n+1) {
           background-color: white;
        }
        .list:nth-child(2n+2) {
           padding:5px 0;
        }

        .littleshow {
          background-color: white;
          width:100%;
          height:80px;
          margin-top: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          .showleft {
            height: 25px;
            img {
              float:left;
              height:100%;
              border:1px dashed black;
              margin-right:5px;
              padding:5px;
            }
            .showlefttext {
              float:left;
              height:100%;
              text-align: left;
              letter-spacing: 1px;
              .texttop {
                font-size: 16px;
                font-family: PingFangSC-Medium;
                font-weight: bold;
                color: black;
                line-height: 16px;
              }
              .texttopright {
                font-size: 14px;
                font-family: PingFangSC-Medium;
                font-weight: bold;
                color: black;
                line-height: 16px;
              }
              .textbottom {
                font-size: 14px;
                font-family: PingFangSC-Regular;
                font-weight: 400;
                color: #909090;
                line-height: 12px;
              }
            }
          }
          .showleft:nth-child(1) {
            margin:0 50px 0 0;
          }
          .showleft:nth-child(2) {
            margin:0 10px 0 10px;
          }
          .showleft:nth-child(3) {
            margin:0 15px 0 15px;
          }
        }
      }
      .contentright {
        width:calc(60%);
        margin-left:10px;
        .bigimg {
          width: 100%;
          height: 425px;
          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
        }
        .smallimg {
         height: 80px;
         display: flex;
         align-items: center;
         justify-content: center;
         overflow: hidden;
         margin-top: 5px;
         img {
          width:calc(100% / 6 - 5px);
          float:left;
          height:98%;
          margin-right:10px;
          object-fit: cover;
         }
         img:nth-last-child(1){
           margin:0px;
         }
        }
      }
    }
  }
  .detailtext {
    background-color: #FFFFFF;
    height:180px;
    margin: 50px 120px 0 20px;
    .texttitle {
      height: 130px;
      font-size: 30px;
      font-family: DINCondensed-Bold;
      font-weight: bold;
      color: #151515;
      line-height: 75px;
    }
    .textcontent {
          width: 794px;
          height: 66px;
          font-size: 20px;
          font-family: DINCondensed-Bold;
          font-weight: bold;
          color: #4A4A4A;
          line-height: 22px;
          opacity: 0.7;
          letter-spacing: 1px;
    }
  }
  .booking {
    background-color: #FFFFFF;
    .bookingtext {
      padding-bottom:200px;
      width:1440px;
      margin: 0 auto;
      .title {
        font-size: 70px;
        font-family: DINCondensed-Bold;
        font-weight: bold;
        color: #212020;
        line-height: 55px;
        margin: 0 0 50px 20px;
        padding-top:92px;
        text-align:left;
        letter-spacing: 1px;
      }
      .userinput {
        display: flex;
        align-items: center;
        justify-content: left;
        margin: 0 20px;
        .inputtable {
          margin-right: 45px;
          text-align: left;
          .el-input {
            /deep/ .el-input__inner {
                    width:260px;
                    height: 49px;
                    border-radius: 1px;
            }
          }
          span {
            float:left;
            margin-bottom:10px;
            font-size: 20px;
            font-family: DINCondensed-Bold;
            font-weight: bold;
            color:#151515;
            line-height: 20px;
          }
          /deep/ .el-input__inner {
            border: 1px solid black;
            height:58px;
            width:231px;
          }
          .el-button {
            width: 171px;
            height: 58px;
            border: 1px solid #151515 ;
            background-color: #151515;
            display: flex;
            align-items: center;
            justify-content: right;
            margin-top:30px;
            span {
              color:#F4F6F8;
              font-size: 20px;
              font-family: DINCondensed-Bold;
              font-weight: bold;
              text-align: center;
              line-height: 130px;
              margin-right:45px;
              padding-top: 10px;
            }
            .el-icon-my-yellowright {
              background: url('../../assets/images/carDetail/youjt.png') no-repeat;
              background-size: cover;
              display:inline-block;
              height: 16px;
              width: 16px;
              margin-right: -16px;
              margin-top: 65px;
            }
          }
        }
      }
      .newbutton {
        float:left;
        position: relative;
        left: 40%;
        .el-button {
          width: 200px;
          height: 60px;
          border: 1px solid #151515 ;
          background-color: #151515;
          display: flex;
          align-items: center;
          justify-content: right;
          margin-top:60px;
          span {
            color: #F4F6F8;
            font-size: 20px;
            font-family: DINCondensed-Bold;
            font-weight: bold;
            text-align: center;
            line-height: 140px;
            margin-right: 55px;
            padding-top: 10px;
          }
          .el-icon-my-yellowright {
            background: url('../../assets/images/carDetail/youjt.png') no-repeat;
            background-size: cover;
            display:inline-block;
            height: 16px;
            width: 16px;
            margin-right: -16px;
            margin-top: 65px;
          }
        }
      }
      .sectitle {
        font-size: 70px;
        font-family: DINCondensed-Bold;
        font-weight: bold;
        color: #212020;
        line-height: 55px;
        margin: 0 0 50px 20px;
        padding-top:150px;
        text-align:left;
        letter-spacing: 1px;
      }
      .textcontent {
        overflow: hidden;
        margin-left: 20px;
        margin-right: 100px;
        .textcard {
          float:left;
          margin-right:30px;
          width: calc(100% / 4 - 30px);
          .imgcard {
            width: 100%;
            height: 211px;
            img {
              height: 100%;
              width: 100%;
              object-fit: cover;
            }
          }
          .titlecard {
            text-align:left;
            padding-top: 10px;
            padding-bottom: 10px;
            padding-left: 19px;
            span {
              font-family: DINCondensed-Bold;
              margin-left: 3px;
              font-weight:bold;
              font-size: 30px;
              color: #212020;
              line-height: 32px;
            }
          }
          .contentcard {
            padding-bottom: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-left: 19px;
            padding-right: 30px;
            .contentcard-price {
              font-family:DINCondensed-Bold;
              font-weight:bold;
              font-size: 24px;
              color: #212020;
              line-height: 29px;
            }
            .contentcard-info {
              font-size: 16px;
              color: #4A4A4A;
              line-height: 19px;
              margin-top: 3px;
              margin-left: 5px;
              font-family:DINCondensed-Bold;
              font-weight: bold;
              opacity:0.7;
            }
          }
          .break {
            border-bottom: 1px solid #979797;
            margin-left: 19px;
            opacity:0.1;
          }
          .detailcard {
            padding-top:10px;
            display: flex;
            align-items: center;
            justify-content: left;
            padding-left: 19px;
            span {
              font-size: 14px;
              font-family:PingFangSC-Semibold;
              font-weight: 600;
              margin-right: 30px;
              color: #4A4A4A;
              opacity:0.7;
              margin-right: 36px;
              line-height: 20px;
              white-space: nowrap;
            }
          }
        }
      }
      .choosepage {
        margin: 20px 120px 0 200px;
        text-align: right;
        .el-pagination {
          /deep/ .btn-prev{
              width: 30px;
              height: 35px;
              background-image: url('../../assets/images/carDetail/leftjt.png');
              background-size: 100% 100%;
          }
          /deep/ i {
            display:none;
          }
          /deep/ .btn-next{
              width: 30px;
              height: 35px;
              background-image: url('../../assets/images/carDetail/rightjt.png');
              background-size: 100% 100%;
          }
          /deep/ .el-pager {
            margin-top:15px;
              li:not(.disabled) {
                  width:10px;
                  height:2px;
                  border:1px solid #151515;
                  font-weight: bold;
                  color: #151515;
                  font-size:0;
              }
              li:not(.disabled).active {
                  background-color: #151515;
                  color:#F4F6F8;
                  font-size:0;
              }
              
          }
        }
      }
    }
  }
}

</style>