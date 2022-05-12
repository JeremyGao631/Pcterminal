<template>
  <div>
    <!--轮播图-->
    <el-carousel :interval="5000" arrow="always" >
      <el-carousel-item v-for="item in itemList" :key="item">
        <div class="content">
          <img :src="item"  alt="暂无图片" />
          <div>
            <span class="content-title">Excellent-performance</span><br />
            <span class="content-text">
              <span>DISTINCTIVE</span><br />
              <span>QUALITY</span><br />
            </span>
            <el-button>
              <span>BOOK SERVICE</span>
              <i class="el-icon-my-right"></i>
            </el-button>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
    <!--中部图片展示-->
    <div class="middle">
      <div class="title">FEATURED COLLECTIONS</div>
      <div class="texttitle clearfix">
        <div class="left">
          <span class="btn_anniu" @click="change(0)" :class="{ newStyle:0===number}">NEW ARRIVALS</span>
          <span class="btn_anniu" @click="change(1)" :class="{ newStyle:1===number}">SEARCH INVENTORY</span>
        </div>
        <div class="right">
          <span type="text" style="font-weight:bold;font-family: DINCondensed-Bold;color: #212020;font-size:20px;">AVAILIABLE 55 CARS</span>
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="textcontent">
        <div v-show='0===number'>
          <div class="textcard" v-for="index in information" :key="index">
            <div class="imgcard" style="height:191px;width:275px;">
              <img :src="index.url" style="height:100%;width:100%;" />
            </div>
            <div style="text-align:left;padding-top:30px;padding-bottom:20px;padding-left:19px;">
              <span style="font-weight:bold;font-size:25px;color: #212020">{{index.year}} {{index.type}}</span>
              <br />
              <span style="font-weight:bold;font-size:25px;color: #212020">{{index.kind}}</span>
            </div>
            <div style="padding-bottom:20px;display: flex;align-items: center;justify-content: space-between;padding-left:19px;">
              <span style="font-weight:bold;font-size: 20px;color: #212020">{{index.price}}</span>
              <span style="font-size: 16px;color: #4A4A4A;line-height: 19px;margin-top:3px;margin-left:5px;font-family:DINCondensed-Bold;font-weight: bold;opacity:0.7;">{{index.info}}</span>
            </div>
            <div style="border-bottom:1px solid #979797;margin-left:19px;opacity:0.1;"></div>
            <div style="padding-top:20px;display: flex;align-items: center;justify-content: left;padding-left:19px;">
              <span style="font-size: 12px;font-family:PingFangSC-Semibold;font-weight: 600;margin-right:25px;color: #4A4A4A;opacity:0.7;">{{index.distance}}</span>
              <span style="font-size: 12px;font-family:PingFangSC-Semibold;font-weight: 600;margin-right:25px;color: #4A4A4A;opacity:0.7;">{{index.info1}}</span>
              <span style="font-size: 12px;font-family:PingFangSC-Semibold;font-weight: 600;color: #4A4A4A;opacity:0.7;">{{index.info2}}</span>
            </div>
          </div>
        </div>
        <div v-show='1===number'>
          <div class="textcard" v-for="index in information1" :key="index">
            <div class="imgcard" style="height:191px;width:275px;">
              <img :src="index.url" style="height:100%;width:100%;" />
            </div>
            <div style="text-align:left;padding-top:30px;padding-bottom:20px;padding-left:19px;">
              <span style="font-weight:bold;font-size:25px;color: #212020">{{index.year}} {{index.type}}</span>
              <br />
              <span style="font-weight:bold;font-size:25px;color: #212020">{{index.kind}}</span>
            </div>
            <div style="padding-bottom:20px;display: flex;align-items: center;justify-content: space-between;padding-left:19px;">
              <span style="font-weight:bold;font-size: 20px;color: #212020">{{index.price}}</span>
              <span style="font-size: 16px;color: #4A4A4A;line-height: 19px;margin-top:3px;margin-left:5px;font-family:DINCondensed-Bold;font-weight: bold;opacity:0.7;">{{index.info}}</span>
            </div>
            <div style="border-bottom:1px solid #979797;margin-left:19px;opacity:0.1;"></div>
            <div style="padding-top:20px;display: flex;align-items: center;justify-content: left;padding-left:19px;">
              <span style="font-size: 12px;font-family:PingFangSC-Semibold;font-weight: 600;margin-right:25px;color: #4A4A4A;opacity:0.7;">{{index.distance}}</span>
              <span style="font-size: 12px;font-family:PingFangSC-Semibold;font-weight: 600;margin-right:25px;color: #4A4A4A;opacity:0.7;">{{index.info1}}</span>
              <span style="font-size: 12px;font-family:PingFangSC-Semibold;font-weight: 600;color: #4A4A4A;opacity:0.7;">{{index.info2}}</span>
            </div>
          </div>
        </div>
      </div>
      <el-button class="clearfix" style="border: 1px solid #F7941E;color:#F7941E;background-color: transparent;float:right;margin:0 150px 120px 150px;">
        <span style="color:#F7941E;font-size: 20px;font-family: DINCondensed-Bold;font-weight: bold;line-height: 25px;text-align: center;line-height: 130px;margin-left:20px;margin-right:65px;">SHOW ALL</span>
        <i class="el-icon-my-yellowright"></i>
      </el-button>
      <div style="clear:both;"></div>
    </div>
    <!--底部内容展示-->
    <div class="bottom">
      <div class="title">OUR SERVICES</div> 
      <div class="serviceinfo" style="width:100%;display: flex;align-items: center;justify-content: center;padding-top:61px;padding-bottom:200px;">
        <div class="infotext" style="width: 320px;height: 468px;background: #FFFFFF;margin-right:84px;">
          <img src="../../assets/images/home/onlineshowroom.png" style="width: 320px;height:200px;" /> 
          <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;width:320px;height: 268px;inline-height:268px;">
            <span style="font-family:DINCondensed-Bold;font-weight: bold;color: #212020;font-size:30px;">Online Showroom</span><br />
            <span style="font-family:PingFangSC-Semibold;font-weight: 400;color: #BEBEBE;font-size:12px;margin:0 50px 45px 45px;">Browse our hand-selected range of elite makes and models, including rare European, luxury and sports vehicles.</span>
          </div>
        </div> 
        <div class="infotext" style="width: 320px;height: 468px;background: #FFFFFF;margin-right:84px;">
          <img src="../../assets/images/home/sellyourcar.png" style="width: 320px;height:200px;" />
          <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;width:320px;height: 268px;inline-height:268px;">
            <span style="font-family:DINCondensed-Bold;font-weight: bold;color: #212020;font-size:30px;">Sell Your Car</span><br />
            <span style="font-family:PingFangSC-Semibold;font-weight: 400;color: #BEBEBE;font-size:12px;margin:0 50px 45px 45px;">A fair price is your guarantee with specialist valuations and quality service to make the process simple.</span>
          </div>
        </div>
        <div class="infotext" style="width: 320px;height: 468px;background: #FFFFFF;">
          <img src="../../assets/images/home/visitourstore.png" style="width: 320px;height:200px;" />
          <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;width:320px;height: 268px;inline-height:268px;">
            <span style="font-family:DINCondensed-Bold;font-weight: bold;color: #212020;font-size:30px;">Visit Our Store</span><br />
            <span style="font-family:PingFangSC-Semibold;font-weight: 400;color: #BEBEBE;font-size:12px;margin:0 50px 45px 45px;">Visit our store to see latest stock and xperience the unique virtual race car driving, or speak with our experienced team.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
  },
  data(){
    return{
      itemList:[
        require('../../assets/images/home/lunbo.png'),
        require('../../assets/images/home/onlineshowroom.png'),
        require('../../assets/images/home/sellyourcar.png'),
        require('../../assets/images/home/visitourstore.png')
      ],
      number: 0 ,
      information: [
                {
                  url: require('../../assets/images/home/1.jpg'),
                  year:'2019',
                  type: 'MERCEDES-BENZ',
                  kind: 'C63S AMG',
                  price: '$149000.00',
                  info: "Excl.Gov's Charges",
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
                },
                {
                  url: require('../../assets/images/home/5.jpg'),
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
                  url: require('../../assets/images/home/6.jpg'),
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
                  url: require('../../assets/images/home/7.jpg'),
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
                  url: require('../../assets/images/home/8.png'),
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
      information1: [
                {
                  url: require('../../assets/images/home/1.jpg'),
                  year:'1111',
                  type: 'MERCEDES-BENZ',
                  kind: 'C63S AMG',
                  price: '$149000.00',
                  info: "Excl.Gov's Charges",
                  distance: '126295 kms',
                  info1: 'Diesel',
                  info2: 'Auto'
                },
                {
                  url: require('../../assets/images/home/2.jpg'),
                  year:'2222',
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
                  year:'3333',
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
                  year:'4444',
                  type: 'MERCEDES-BENZ',
                  kind: 'C63S AMG',
                  price: '$149000.00',
                  info: "Excl . Gov's Charges",
                  distance: '126295 kms',
                  info1: 'Diesel',
                  info2: 'Auto'
                },
                {
                  url: require('../../assets/images/home/5.jpg'),
                  year:'5555',
                  type: 'MERCEDES-BENZ',
                  kind: 'C63S AMG',
                  price: '$149000.00',
                  info: "Excl . Gov's Charges",
                  distance: '126295 kms',
                  info1: 'Diesel',
                  info2: 'Auto'
                },
                {
                  url: require('../../assets/images/home/6.jpg'),
                  year:'6666',
                  type: 'MERCEDES-BENZ',
                  kind: 'C63S AMG',
                  price: '$149000.00',
                  info: "Excl . Gov's Charges",
                  distance: '126295 kms',
                  info1: 'Diesel',
                  info2: 'Auto'
                },
                {
                  url: require('../../assets/images/home/7.jpg'),
                  year:'7777',
                  type: 'MERCEDES-BENZ',
                  kind: 'C63S AMG',
                  price: '$149000.00',
                  info: "Excl . Gov's Charges",
                  distance: '126295 kms',
                  info1: 'Diesel',
                  info2: 'Auto'
                },
                {
                  url: require('../../assets/images/home/8.png'),
                  year:'8888',
                  type: 'MERCEDES-BENZ',
                  kind: 'C63S AMG',
                  price: '$149000.00',
                  info: "Excl . Gov's Charges",
                  distance: '126295 kms',
                  info1: 'Diesel',
                  info2: 'Auto'
                }
      ]
    }
  },
  methods: {
    change: function (index) {
            this.number = index; //重要处
          },
  }
}
</script>

<style lang="less" scoped>
  /deep/ .el-carousel {
    height: 997px;
    width:100%;
  }
  /deep/ .el-carousel__item img {
    width: 100%;
    height: 997px;
    position: relative;
  }
  /deep/ .el-carousel__container {
    position: relative;
    height: 997px;
  }
  /deep/ .el-carousel__indicators--horizontal {
    bottom: 0;
    left: 10%;
    transform: translateY(-64px);
  }
  /deep/ .el-carousel__indicator--horizontal .el-carousel__button {
    width: 10px;
    height: 10px;
    background: transparent;
    border: 1px solid #ffffff;
    border-radius: 50%;
    opacity: 0.5;
    margin-right: 5px;
  }  
  /deep/ .el-carousel__indicator--horizontal.is-active .el-carousel__button{
    width: 10px;
    height: 10px;
    background: #ffffff;
    border-radius: 50%;
    opacity: 1;
    margin-right: 5px;
  }
  .content {
    text-align: left;

  }
  .content-title {
    font-size: 60px;
    font-family: DINCondensed-Bold;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 36px;
    padding-bottom:10px;
  }
  .content-text {
    font-size: 120px;
    font-family: DINCondensed-Bold;
    font-weight: bold;
    color: #FFFFFF;
  }
  .content div {
    position: absolute;
    left: 10%;
    top: 125px;
  }
  .el-button {
    width: 231px;
    height: 58px;
    border: 1px solid #FFFFFF ;
    margin-top: 45px;
    background-color: transparent;
    color:#FFFFFF;
    display: flex;
    align-items: center;
    justify-content: right;
  }
  .el-button span{
    width: 91px;
    height: 130px;
    font-size: 20px;
    font-family: DINCondensed-Bold;
    font-weight: bold;
    line-height: 25px;
    text-align: center;
    color: #FFFFFF;
    line-height: 130px;
    margin-left:20px;
    margin-right:50px;
  }
  .el-icon-my-right {
    background: url('../../assets/images/home/right.png') no-repeat;
    background-size: cover;
    display:inline-block;
    height:16px;
    width:16px;
    margin-right: -16px;
  }
 .middle {
    .title {
      font-size: 45px;
      font-family: DINCondensed-Bold;
      font-weight: bold;
      color: #151515;
      white-space: nowrap;
      margin: 114px 0 0 150px;
      text-align:left;
    }
    .texttitle {
      padding-top:78px;
      border-bottom:2px solid #12100f;
      margin-left:150px;
      margin-right:150px;
      height:35px;
      font-family: DINCondensed-Bold;
        .left {
          float: left;
          .btn_anniu {
            margin-right: 20px;
            padding: 10px 25px;
            font-size:22px;
            color: #909090;
          }
          .newStyle{
            border: 2px solid #12100f;
            border-bottom: none;
            font-weight: bold;
            margin-right: 20px;
            padding: 10px 25px;
            color: #212020;
          }
        }
        .right {
          float: right;
        }
        .clearfix {
          clear:both;
        }
    }
    .textcontent {
      margin-left:150px;
      margin-right:150px;
      padding-top: 60px;

      .textcard {
        float:left;
        margin-right: 34px;
        padding-bottom:60px;
          span {
            font-family: DINCondensed-Bold;
            margin-left:3px;
          }
      }
      .clearfix {
          clear:both;
        }

      .textcard:nth-child(4), .textcard:nth-last-child(1) {
        margin-right: 0px;
      }
    }
  }
  .el-icon-my-yellowright {
    background: url('../../assets/images/home/yellowright.png') no-repeat;
    background-size: cover;
    display:inline-block;
    height:16px;
    width:16px;
    margin-right: -16px;
  }

  .bottom {
    background-color:#F4F6F8;
    .title {
      font-size: 45px;
      font-family: DINCondensed-Bold;
      font-weight: bold;
      color: #151515;
      white-space: nowrap;
      padding: 88px 0 0 150px;
      text-align:left;
    }
  }


</style>