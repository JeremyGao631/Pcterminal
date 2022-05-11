<template>
  <div>
    <el-carousel :interval="5000" arrow="always" >
      <el-carousel-item v-for="item in itemList" :key="item">
        <div class="content">
          <img :src="item"  alt="暂无图片" />
          <div>
            <span class="content-title">Excellent-performance</span><br />
            <span class="content-text">DISTINCTIVE <br />QUALITY</span><br />
            <el-button>
              BOOK SERVICE
              <i class="el-icon-my-right"></i>
            </el-button>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
    <div class="middle">
      <div class="title">FEATURED COLLECTIONS</div>
      <div class="texttitle clearfix">
        <div class="left">
          <span class="btn_anniu" @click="change(0)" :class="{ newStyle:0===number}">NEW ARRIVALS</span>
          <span class="btn_anniu" @click="change(1)" :class="{ newStyle:1===number}">SEARCH INVENTORY</span>
        </div>
        <div class="right">
          <span type="text" style="font-weight:bold;">AVAILIABLE 55 CARS</span>
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="textcontent">
        <div v-show='0===number'>
          <div class="textcard" v-for="index in information" :key="index">
            <div class="imgcard" style="height:211px;width:280px;">
              <img :src="index.url" style="height:100%;width:100%;" />
            </div>
            <div style="text-align:left;padding-top:30px;padding-bottom:20px;">
              <span style="font-weight:bold;font-size:18px;color: #212020">{{index.year}} {{index.type}}</span>
              <br />
              <span style="font-weight:bold;font-size:18px;color: #212020">{{index.kind}}</span>
            </div>
            <div style="padding-bottom:20px;display: flex;align-items: center;justify-content: space-between;border-bottom:1px solid;">
              <span style="font-weight:bold;font-size: 16px;color: #212020">{{index.price}}</span>
              <span style="font-size: 12px;color: #4A4A4A;line-height: 19px;margin-top:3px;margin-left:5px;font-family:DINCondensed-Bold;font-weight: bold;">{{index.info}}</span>
            </div>
            <div style="padding-top:20px;display: flex;align-items: center;justify-content: left">
              <span style="font-size: 12px;font-family:PingFangSC-Semibold;font-weight: 600;margin-right:25px;color: #4A4A4A;">{{index.distance}}</span>
              <span style="font-size: 12px;font-family:PingFangSC-Semibold;font-weight: 600;margin-right:25px;color: #4A4A4A;">{{index.info1}}</span>
              <span style="font-size: 12px;font-family:PingFangSC-Semibold;font-weight: 600;color: #4A4A4A;">{{index.info2}}</span>
            </div>
          </div>
        </div>
        <div v-show='1===number'>
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
    height: 670px;
    width:100%;
  }
  /deep/ .el-carousel__item img {
    width: 100%;
    height: 670px;
    position: relative;
  }
  /deep/ .el-carousel__container {
    position: relative;
    height: 670px;
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
  /deep/ .content-title {
    font-size: 30px;
    font-family: DINCondensed-Bold;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 36px;
  }
  /deep/ .content-text {
    font-size: 60px;
    font-family: DINCondensed-Bold;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 75px;
  }
  .content div {
    position: absolute;
    left: 10%;
    top: 125px;
  }
  /deep/ .el-button {
    width: 231px;
    height: 58px;
    border: 1px solid #FFFFFF ;
    margin-top: 45px;
    background-color: transparent;
  }
  /deep/ .el-button span{
    width: 91px;
    font-size: 20px;
    font-family: DINCondensed-Bold;
    font-weight: bold;
    line-height: 25px;
    text-align: center;
    color: #FFFFFF;
    margin-left:20px;
  }
  /deep/ .el-icon-my-right {
    background: url('../../assets/images/home/right.png') no-repeat;
    font-size: 20px;
    background-size: cover;
    display:inline-block;
    height:17px;
    width:20px;
    margin-left:10px;
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
      height:30px;
      font-family: DINCondensed-Bold;
        .left {
          float: left;
          .btn_anniu {
            margin-right: 20px;
            padding: 10px 25px;
          }
          .newStyle{
            border: 2px solid #12100f;
            border-bottom: none;
            font-weight: bold;
            margin-right: 20px;
            padding: 10px 25px;
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
        margin-right: 27px;
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

</style>