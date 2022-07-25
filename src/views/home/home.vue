<template>
  <div>
    <!--轮播图-->
    <div class="lunbo section">
      <el-carousel :interval="5000" arrow="always" >
        <el-carousel-item v-for="(item,index) in itemList" :key="index">
          <div class="content">
            <img :src="item.targeUrl"  alt="暂无图片" />
            <div>
              <span class="content-title">{{item.secondtitle}}</span><br />
              <span class="content-text">
                <span style="padding-left: 51px;">{{item.span}}</span><br />
                <span style="padding-left: 51px;">{{item.span1}}</span><br />
              </span>
              <div class="contact_btn" @click="contactUs()">
                <span>CONTACT US  </span>
                <i class="el-icon-my-right"></i>
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!--中部图片展示-->
    <div class="middle section">
      <div class="title">FEATURED COLLECTIONS</div>
      <div class="texttitle">
        <div class="left">
          <span class="btn_anniu" @click="change(0)" :class="{ newStyle:0===number}">NEW ARRIVALS</span>
          <!-- <span class="btn_anniu" @click="change(1)" :class="{ newStyle:1===number}">SEARCH INVENTORY</span> -->
        </div>
        <div class="right">
          <span type="text">AVAILABLE 55 CARS</span>
        </div>
      </div>
      <div class="textcontent">
        <div v-show='0===number'>
          <div class="textcard" v-for="(item,index) in information" :key="index" @click="cardetail(item)">
            <div class="imgcard">
              <img :src="item.photo[0]" />
            </div>
            <div class="titlecard" >
              <span >{{item.year}} {{item.fueltype}}</span>
              <br />
              <span >{{item.make}}</span>
            </div>
            <div class="contentcard">
              <span class="contentcard-price">${{item.price}}</span>
              <span class="contentcard-info">Excl . Gov's Charges</span>
            </div>
            <div class="break" ></div>
            <div class="detailcard" >
              <span >{{item.odometer}}</span>
              <span >{{item.body}}</span>
              <span >{{item.color}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="test11">
        <div class="newbutton">
          <el-button @click="jumponlineshowroom()">
            <span>SHOW ALL</span>
            <i class="el-icon-my-yellowright"></i>
          </el-button>
        </div>
      </div>
      <div style="clear:both;"></div>
    </div>
    <!--底部内容展示-->
    <div class="bottom section">
      <div class="title">OUR SERVICES</div> 
      <div class="serviceinfo">
        <div  v-for="(item,idx) in service" :key="idx" class="infotext" @click="jumppage(idx)">
          <img :src="item.targeUrl" /> 
          <div class="infoinfo">
            <span class="infotitle" >{{ item.secondtitle }}</span><br />
            <span class="infodetail" >{{ item.describtion}}</span>
          </div>
        </div> 
        <!-- <div class="infotext" >
          <img src="../../assets/images/home/JVS00345-4.jpg" />
          <div class="infoinfo">
            <span class="infotitle" >Sell Your Car</span><br />
            <span class="infodetail" >A fair price is your guarantee with specialist valuations and quality service to make the process simple.</span>
          </div>
        </div>
        <div class="infotext" style="margin-right:0px;" >
          <img src="../../assets/images/home/JVS00366-Edit-3.jpg" />
          <div class="infoinfo">
            <span class="infotitle" >Visit Our Store</span><br />
            <span class="infodetail" >Visit our store to see latest stock and xperience the unique virtual race car driving, or speak with our experienced team.</span>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { describtion } from '@/api'
import { car } from '@/api'
export default {
  name: 'HomeView',
  components: {
  },
  data(){
    return{
      itemList:[
      ],
      number: 0 ,
      information: [
                // {
                //   url: require('../../assets/images/home/1.jpg'),
                //   year:'2019',
                //   type: 'MERCEDES-BENZ',
                //   kind: 'C63S AMG',
                //   price: '$149000.00',
                //   info: "Excl . Gov's Charges",
                //   distance: '126295 kms',
                //   info1: 'Diesel',
                //   info2: 'Auto'
                // },
      ],
      service: [],

    }
  },
  created() {
    this.desc()
    this.services()
    this.allCar()
  },
  methods: {
    jumppage(idx){
      if(idx == 0){
        this.$router.push('/showRoom')
      }else if(idx == 1){
        this.$router.push('/sell')
      }else {
        this.$router.push('/about')
      }
    },
    // change: function (index) {
    //         this.number = index; //重要处
    //       },
        // 车辆信息
    cardetail(item){
      this.$router.push({path: '/carDetail', query: {item: item}})
    },
    allCar() {
      car({
        current: '1',
        pageSize: '8',
        make: '',
        yearStart: '',
        yearEnd: '',
        priceStart: '',
        priceEnd: '',
        orderByPrice: '1',
        orderByYear: '1'
      }).then(car => {
        this.information = car.data.records
        console.log(this.information, 'car')
        this.information = []
        car.data.records.forEach(ele => {
            const item = {
                year: ele.year,
                fueltype: ele.fueltype,
                make: ele.make,
                price: ele.priceDesc,
                odometer: ele.odometer,
                body: ele.body,
                model: ele.model,
                geartype: ele.geartype,
                enginesize: ele.enginesize,
                cylinders: ele.cylinders,
                doornum: ele.doornum,
                color: ele.color,
                photo: ele.photo.split(',')
            }
            this.information.push(item)
        })
      })
    },
    contactUs() {
      this.$router.push('/contact')
    },
    jumponlineshowroom() {
      this.$router.push('/showRoom')
    },
    // 轮播图
    desc() {
      describtion({
        current: '1',
        pageSize: '10',
        title: 'FIRST'
      }).then(res => {
        console.log(res, '1212')
        res.data.records.forEach(ele => {
          const arr = ele.describtion.split('-')
          const item = {
            targeUrl: ele.targeUrl,
            span: arr[0],
            span1: arr[1],
            secondtitle: ele.secondtitle,
            describtion: ele.describtion
          }
          this.itemList.push(item)
        })
        console.log('01',this.itemList )
      })
    },
    // our services
    services() {
      describtion({
        current: '1',
        pageSize: '10',
        title: 'OUR SERVICES'
      }).then(services => {
        services.data.records.forEach(ele => {
          const item = {
            targeUrl: ele.targeUrl,
            secondtitle: ele.secondtitle,
            describtion: ele.describtion
          }
          this.service.push(item)
        })
        console.log(this.service, '1212')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.lunbo {
  .el-carousel {
    // height: calc(100vh - 10px);
    height: 900px;
    width:100%;
    .el-carousel__item {
      // height: calc(100vh - 10px);
      height: 900px;
      img {
        width: 100%;
        // height: calc(100vh - 10px);
        height: 900px;
        position: relative;
      }
    }
    /deep/ .el-carousel__container {
      position: relative;
      height: calc(100vh - 75px);
    }
  
    /deep/ .el-carousel__indicators--horizontal {
      bottom: 0;
      left: 240px;
      transform: translateY(-64px);
      .el-carousel__button {
        width: 10px;
        height: 10px;
        background: transparent;
        border: 1px solid #ffffff;
        border-radius: 50%;
        opacity: 0.5;
        margin-right: 5px;
      }
    }
    /deep/ .el-carousel__indicator--horizontal.is-active .el-carousel__button{
      width: 10px;
      height: 10px;
      background: #ffffff;
      border-radius: 50%;
      opacity: 1;
      margin-right: 5px;
    }
  }
}

.content {
  text-align: left;
  div {
    position: absolute;
    left: 10%;
    top: 23%;
    .content-title {
      font-size: 44px;
      font-family: DINCondensed-Bold;
      font-weight: bold;
      margin-bottom: 5px;
      color: #FFFFFF;
      line-height: 70px;
      margin-left: 55px;
    }
    .content-text {
      font-size: 90px;
      font-family: DINCondensed-Bold;
      font-weight: bold;
      color: #FFFFFF;
      line-height: 100px;
    }
    .contact_btn {
      position: relative;
      margin-top: 60px;
      margin-left: 20px;
      padding: 15px 0;
      width: 180px;
      border:1px solid #fff;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      span {
        font-size: 20px;
        font-family: DINCondensed-Bold;
        font-weight: bold;
        color: #FFFFFF;
      }
      .el-icon-my-right {
        margin-left: 15px;
        background: url('../../assets/images/home/right.png') no-repeat;
        background-size: cover;
        display:inline-block;
        height: 16px;
        width: 16px;
      }
    }
  }
}

.middle {
  margin: 0 auto;
  width: 1400px;
  .title {
    font-size: 70px;
    font-family: DINCondensed-Bold;
    font-weight: bold;
    color: #151515;
    white-space: nowrap;
    margin: 114px 20px 0 20px;
    text-align:left;
    letter-spacing: 2px; 
  }
  .texttitle {
    margin: 0 20px;
    margin-top: 78px;
    border-bottom: 2px solid #12100f;
    height: 50px;
    font-family: DINCondensed-Bold;
      .left {
        float: left;
        .btn_anniu {
          margin-right: 20px;
          font-size: 22px;
          color: #909090;
        }
        .newStyle{
          border: 2px solid #12100f;
          border-bottom: none;
          font-weight: bold;
          margin-right: 20px;
          font-size: 22px;
          color: #212020;
          display: block;
          height: 50px;
          line-height: 50px;
          padding: 0 20px;
        }
      }
      .right {
        float: right;
        span {
          font-weight:bold;
          font-family: DINCondensed-Bold;
          color: #212020;
          font-size: 22px;
          line-height: 50px;
        }
      }
      .clearfix {
        clear:both;
      }
  }
  .textcontent {
    padding-top: 60px;
    overflow: hidden;
    .textcard {
      float:left;
      margin: 0 20px;
      width: calc(25% - 40px);
      padding-bottom: 30px;
      .imgcard {
        width: 100%;
        height: 210px;
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
        // padding-left: 19px;
        span {
          font-family: DINCondensed-Bold;
          // margin-left: 3px;
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
        // padding-left: 7px;
        padding-right: 5px;
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
        justify-content: space-between;
        // padding-left: 7px;
        span {
          font-size: 15px;
          font-family:PingFangSC-Semibold;
          font-weight: 600;
          margin-right: 6px;
          color: #4A4A4A;
          opacity:0.7;
          // margin-right: 36px;
          line-height: 20px;
          white-space: nowrap;
        }
      }
    }
    .textcard:nth-last-child(1) {
      margin-right: 0px;
      padding-bottom:79px;
    }
  }
  .newbutton {
    margin-bottom: 110px;
    float:right;
    position: relative;
    margin-right: 30px;
    .el-button {
      width: 222px;
      height: 58px;
      border: 1px solid #F7941E ;
      background-color: transparent;
      color:#F7941E;
      display: flex;
      align-items: center;
      justify-content: right;
      padding-top: 15px;
      span {
        color:#F7941E;
        font-size: 21px;
        font-family: DINCondensed-Bold;
        font-weight: bold;
        line-height: 25px;
        text-align: center;
        line-height: 130px;
        margin-left:20px;
        margin-right:65px;
      }
      .el-icon-my-yellowright {
        background: url('../../assets/images/home/yellowright.png') no-repeat;
        background-size: cover;
        display:inline-block;
        height: 16px;
        width: 16px;
        margin-right: -16px;
      }
    }
  }
}

.bottom {
    background-color:#F4F6F8;
    .title {
      margin: 0 auto;
      width: 1400px;
      font-size: 70px;
      font-family: DINCondensed-Bold;
      font-weight: bold;
      color: #151515;
      white-space: nowrap;
      padding-top:114px;
      text-align:left;
      
    }
    .serviceinfo {
      margin: 0 auto;
      width: 1400px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding-top:52px;
      padding-bottom:200px;
      justify-content: flex-end;
      .infotext {
        margin-right:85px;
        width: calc(100% / 3 - 125px);
        height: 508px;
        background: #FFFFFF;
        img {
          width: 100%;
          height:240px;
        }
        .infoinfo {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width:100%;
          height: 268px;
          .infotitle {
            font-family:DINCondensed-Bold;
            font-weight: bold;
            color: #212020;
            font-size:30px;
          }
          .infodetail {
            font-family:PingFangSC-Regular;
            font-weight: 400;
            color: #817e7e;
            font-size:14px;
            margin:0 50px 45px 45px;
          }
        }
      }
    }
  }


</style>