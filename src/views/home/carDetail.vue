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
            <img src="../../assets/images/carDetail/shandian.png" />
            <div class="showlefttext">
                <span class="texttop">34719</span>
                <span class="texttop-right>"> kms</span>
                <br />
                <span class="textbottom">Odometer</span>
            </div>
          </div>
          <div class="showleft">
            <img src="../../assets/images/carDetail/car.png" />
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
  </div>
  <div class="booking">
    <div class="title">BOOK INSPECTION</div>
    <div class="userinput">
      <div class="inputtable">
        <span>name</span>
        <el-input />
      </div>
      <div class="inputtable">
        <span>Phone</span>
        <el-input />
      </div>
      <div class="inputtable">
        <span>Time</span>
        <el-input />
      </div>
      <div class="submit">
        <div class="newbutton">
          <el-button >
            <span>SUBMIT</span>
            <i class="el-icon-my-yellowright"></i>
          </el-button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
name: 'CarDetail',
  components: {
  },
  data(){
    return{
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
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.carDetail {
  background-color: #F4F6F8;
  width:100%;
  .infodetail {
    padding-bottom:200px;
    width:1440px;
    margin: 0 auto;
    .title {
      font-size: 70px;
      font-family: DINCondensed-Bold;
      font-weight: bold;
      color: #212020;
      line-height: 55px;
      margin: 0 20px 50px 20px;
      padding-top:92px;
      text-align:left;
      letter-spacing: 1px;
    }
    .content {
      margin:49px 20px 0px 20px;
      display: flex;
      align-items: top;
      justify-content: center;
      .contentleft {
        width:35%;
        margin-right:20px;
        .pricekind {
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
          margin: 10px 0;
          padding: 10px 0;
          .listresult {
            .listname {
              float:left;
              width:170px;
              font-size: 18px;
              font-family: DINCondensed-Bold;
              font-weight: 300;
              color: #909090;
              line-height: 25px;
              margin-right:10px;
              text-align: left;
              letter-spacing: 1px;
              padding-left: 30px;
            }
            .result {
              width:calc(100% - 240px;);
              float:left;
              font-size: 18px;
              font-family: DINCondensed-Bold;
              font-weight: bold;
              color: black;
              line-height: 25px;
              text-align: left;
            }
          }
        }
        .list:nth-child(2n+1) {
           background-color: white;
        }
        .list:nth-child(2n+2) {
           padding:0;
        }

        .littleshow {
          background-color: white;
          width:100%;
          height:100px;
          margin-top: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          .showleft {
            height: 50px;
            margin:0 15px;
            img {
              float:left;
              height:100%;
              border:1px dashed black;
              margin-right:5px;
            }
            .showlefttext {
              float:left;
              height:100%;
              text-align: left;
              .texttop {
                font-size: 24px;
                font-family: DINCondensed-Bold;
                font-weight: bold;
                color: black;
                line-height: 31px;
              }
              .texttop-right {
                font-size: 24px;
                font-family: DINCondensed-Bold;
                font-weight: bold;
                color: black;
                line-height: 31px;
              }
              .textbottom {
                font-size: 16px;
                font-family: DINCondensed-Bold;
                font-weight: 400;
                color: #909090;
                line-height: 22px;
              }
            }
          }
        }
      }
      .contentright {
        width:calc(65% - 40px);
        margin-left:20px;
        .bigimg {
          width: 100%;
          height: 495px;
          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
        }
        .smallimg {
         height: 100px;
         display: flex;
         align-items: center;
         justify-content: center;
         overflow: hidden;
         margin-top: 28px;
         img {
          width:calc(100% / 6 - 5px);
          float:left;
          height:98%;
          margin-right:10px;
          object-fit: cover;
         }
        }
      }
    }
  }
  .booking {
    background-color: #F4F6F8;
    padding-bottom:200px;
    width:1440px;
    margin: 0 auto;
    .title {
      font-size: 70px;
      font-family: DINCondensed-Bold;
      font-weight: bold;
      color: #212020;
      line-height: 55px;
      margin: 0 20px 50px 20px;
      padding-top:92px;
      text-align:left;
      letter-spacing: 1px;
    }
  }
}

</style>