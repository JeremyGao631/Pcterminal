<template>
    <div class="content">
        <img src="../../assets/images/onlineshowroom/OnlineShowroom.png"  alt="暂无图片" />
        <div class="inlinetext">
            <span class="content-text">
                <span>ONLINE</span><br />
                <span>SHOWROOM</span><br />
                <div style="clear:both;"></div>
            </span>
            <el-button>
                <span>BOOK SERVICE</span>
                <i class="el-icon-my-right"></i>
            </el-button>
        </div>
        <div class="middle">
            <div class="title">START A NEW SEARCH</div>
            <div class="show" >
                <div class="left">
                    <div class="choose">
                        <div class="chooseleft">Make</div>
                        <div class="chooseright" @click="testshow()" v-show="show">-</div>
                        <div class="chooseright" @click="testshow()" v-show="!show">+</div>
                        <div style="clear:both;"></div>
                    </div>
                    <div style="clear:both;"></div>
                    <div class="choosetext" v-show="show">
                        <div>
                            <el-checkbox v-model="checked1">Abarth</el-checkbox>
                        </div>
                        <div>
                            <el-checkbox v-model="checked2">Alfa Romeo</el-checkbox>
                        </div>
                        <div>
                            <el-checkbox v-model="checked3">Audi</el-checkbox>
                        </div>
                        <div>
                            <el-checkbox v-model="checked4">Bentiey</el-checkbox>
                        </div>
                        <div>
                            <el-checkbox v-model="checked5">BMW</el-checkbox>
                        </div>
                    </div>
                    <div class="viewall" :class="{ newviewall:!show}">
                        <div class="viewleft">VIEW ALL</div>
                        <div class="viewright" @click="testshow5()" v-show="show5">∨</div>
                        <div class="viewright" @click="testshow5()" v-show="!show5">∧</div>
                        <div style="clear:both;"></div>
                    </div>
                    <div style="clear:both;"></div>
                    <!--model-->
                    <div class="viewmodel" v-show="show5">
                        <div class="modelleft">Model</div>
                        <div class="modelright" @click="testshow1()" v-show="show1">-</div>
                        <div class="modelright" @click="testshow1()" v-show="!show1">+</div>
                        <div style="clear:both;"></div>
                    </div>
                    <div style="clear:both;"></div>
                    <div class="choosetext" v-show="show1 && show5">
                        <div>
                            <el-checkbox v-model="checked6">any</el-checkbox>
                        </div>
                    </div>
                    <!--tr-->
                    <div class="viewtr" :class="{ newviewtr:!show1}" v-show="show5">
                        <div class="trleft">Transmission</div>
                        <div class="trright" @click="testshow2()" v-show="show2">-</div>
                        <div class="trright" @click="testshow2()" v-show="!show2">+</div>
                        <div style="clear:both;"></div>
                    </div>
                    <div style="clear:both;"></div>
                    <div class="choosetext" v-show="show2 && show5">
                        <div>
                            <el-checkbox v-model="checked7">Auto</el-checkbox>
                        </div>
                        <div>
                            <el-checkbox v-model="checked8">Manual</el-checkbox>
                        </div>
                    </div>
                    <!--year-->
                    <div class="viewyear" :class="{ newviewyear:!show2}" v-show="show5">
                        <div class="yearleft">Year</div>
                        <div class="yearright" @click="testshow3()" v-show="show3">-</div>
                        <div class="yearright" @click="testshow3()" v-show="!show3">+</div>
                        <div style="clear:both;"></div>
                    </div>
                    <div style="clear:both;"></div>
                    <div class="block" v-show="show3 && show5">
                        <el-slider
                        v-model="value"
                        range
                        show-stops
                        :min="2008"
                        :max="2022"
                        @change="move(value)">
                        </el-slider>
                    </div>
                    <div class="showyear" v-show="show3 && show5">
                        <div class="minyear">2008</div>
                        <div class="maxyear">2022</div>
                    </div>
                    <!--price-->
                    <div class="viewprice" v-show="show5">
                        <div class="priceleft">Price</div>
                        <div class="priceright" @click="testshow4()" v-show="show4">-</div>
                        <div class="priceright" @click="testshow4()" v-show="!show4">+</div>
                        <div style="clear:both;"></div>
                    </div>
                    <div style="clear:both;"></div>
                    <div class="block" v-show="show4 && show5">
                        <el-slider
                        v-model="value"
                        range
                        show-stops
                        :min="2008"
                        :max="2022"
                        @change="move(value)">
                        </el-slider>
                    </div>
                    <div class="showprice" v-show="show4 && show5">
                        <div class="minprice">$0</div>
                        <div class="maxprice">$190303</div>
                    </div>
                </div>
                <div style="clear:both;"></div>
                <div class="right">
                    <div class="texttitle">
                        <div class="titleleft">
                            <span >SORT BY</span>
                            <el-select v-model="value" placeholder="Date:High To Low">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </div>
                        <div class="titleright">
                            <span class="textleft">AVAILIABLE</span>
                            <span class="textright">55 Cars</span>
                        </div>
                    </div>
                    <div style="clear:both;"></div>
                    <div class="showimg">
                        <div class="textcard" v-for="index in information" :key="index">
                            <div class="imgcard" style="height:171px;width:272px;" >
                                <img :src="index.url"  style="height:191px"/>
                            </div>
                            <div class="cardtitle" >
                                <span class="yeartype">{{index.year}} {{index.type}}</span>
                                <br />
                                <span class="kind" >{{index.kind}}</span>
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
                        <div style="clear:both;"></div>
                    </div>
                    <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="100"
                        page-size="9"
                        prev-text="Previous"
                        next-text="Next">
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'OnlineShowroom',
  components: {
  },
  data(){
    return{
        show:true,
        show1:true,
        show2:true,
        show3:true,
        show4:true,
        show5:true,
        checked1:false,
        checked2:false,
        checked3:false,
        checked4:false,
        checked5:false,
        checked6:false,
        checked7:false,
        checked8:false,
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
    testshow(){
        this.show = !this.show;
    },
    testshow1(){
        this.show1 = !this.show1;
    },
    testshow2(){
        this.show2= !this.show2;
    },
    testshow3(){
        this.show3 = !this.show3;
    },
    testshow4(){
        this.show4 = !this.show4;
    },
    testshow5(){
        this.show5 = !this.show5;
    },
    move(value){
        return value;
    }
  }
}
</script>


<style lang="less" scoped>
.content {
    img {
        width: 100%;
        height: 997px;
    }
    .inlinetext {
        position: absolute;
        left: 260px;
        top: 229px;
    }
    .content-text {
        font-size: 120px;
        font-family: DINCondensed-Bold;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 130px;
        span {
            float:left;
        }
    }
    .el-button {
        width: 231px;
        height: 58px;
        border: 1px solid #FFFFFF ;
        margin-top: 79px;
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
            margin-right: 50px;
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
    .middle {
        padding-bottom: 200px;
        .title {
            width: 568px;
            height: 130px;
            font-size: 80px;
            font-family: DINCondensed-Bold, DINCondensed;
            font-weight: bold;
            color: #151515;
            line-height: 130px;
            letter-spacing: 2px;
            margin: 114px 0 0 240px;
            text-align:left;
        }
        .show {
            display: flex;
            align-items: top;
            justify-content: center;
            margin: 31px 120px 0 120px;
            .left {
                width: 210px;
                margin-right: 20px;
                display:inline-block;
                vertical-align: top;
                padding-left: 130px;
                .choose {
                   position: relative;
                   border-top: 1px solid #151515;
                   .chooseleft {
                        position: absolute;
                        left: 0;
                        top: 20px;
                        font-size: 20px;
                        font-family: DINCondensed-Bold, DINCondensed;
                        font-weight: bold;
                        color: #151515;
                        letter-spacing: 1px;
                   } 
                   .chooseright {
                        position: absolute;
                        right: 0;
                        top: 20px;
                        font-size: 20px;
                        font-family: DINCondensed-Bold, DINCondensed;
                        font-weight: bold;
                        color: #151515;
                        letter-spacing: 1px;
                   } 
                }
                .choosetext {
                    text-align: left;
                    margin-top: 60px;
                    div:nth-child(n+1) {
                        margin-top: 10px;
                    }
                    .el-checkbox {
                        /deep/ .el-checkbox__label {
                            height: 22px;
                            font-size: 16px;
                            font-family: PingFangSC-Light, PingFang SC;
                            font-weight: 300;
                            color: #151515;
                            line-height: 22px
                        }
                    }
                }
                .viewall {
                    margin-top: 10px;
                    .viewleft {
                        font-size: 20px;
                        font-family: DINCondensed-Bold, DINCondensed;
                        font-weight: bold;
                        color: #151515;
                        letter-spacing: 1px;
                        float:left;
                    }
                    .viewright {
                        width: 9px;
                        height: 5px;
                        font-weight: bold;
                        float:left;
                        padding-left: 5px;
                    }
                }
                .newviewall {
                    margin-top: 50px;
                }
                .viewmodel {
                    margin-top: 20px;
                    position: relative;
                    border-top:1px solid #151515;
                    .modelleft {
                        position: absolute;
                        left: 0;
                        top: 20px;
                        font-size: 20px;
                        font-family: DINCondensed-Bold, DINCondensed;
                        font-weight: bold;
                        color: #151515;
                        letter-spacing: 1px;
                   } 
                    .modelright {
                        position: absolute;
                        right: 0;
                        top: 20px;
                        font-size: 20px;
                        font-family: DINCondensed-Bold, DINCondensed;
                        font-weight: bold;
                        color: #151515;
                        letter-spacing: 1px;
                   } 
                }
                .viewtr {
                    margin-top: 20px;
                    position: relative;
                    border-top: 1px solid #151515;
                    .trleft {
                        position: absolute;
                        left: 0;
                        top: 20px;
                        font-size: 20px;
                        font-family: DINCondensed-Bold, DINCondensed;
                        font-weight: bold;
                        color: #151515;
                        letter-spacing: 1px;
                   } 
                    .trright {
                        position: absolute;
                        right: 0;
                        top: 20px;
                        font-size: 20px;
                        font-family: DINCondensed-Bold, DINCondensed;
                        font-weight: bold;
                        color: #151515;
                        letter-spacing: 1px;
                   } 
                }
                .newviewtr {
                    margin-top:60px;
                }
                .viewyear {
                    margin-top: 20px;
                    position: relative;
                    border-top: 1px solid #151515;
                    .yearleft {
                        position: absolute;
                        left: 0;
                        top: 20px;
                        font-size: 20px;
                        font-family: DINCondensed-Bold, DINCondensed;
                        font-weight: bold;
                        color: #151515;
                        letter-spacing: 1px;
                   } 
                    .yearright {
                        position: absolute;
                        right: 0;
                        top: 20px;
                        font-size: 20px;
                        font-family: DINCondensed-Bold, DINCondensed;
                        font-weight: bold;
                        color: #151515;
                        letter-spacing: 1px;
                   } 
                }
                .block {
                    margin-top: 60px;
                    padding:0 20px;
                    /deep/  .el-slider__bar {
                        background-color:#151515;
                    }
                    /deep/  .el-slider__button {
                        background-color:#151515;
                        border: 2px solid #151515;
                    }
                }
                .showyear {
                    margin: 10px 10px 100px 10px;
                    position: relative;
                    .minyear {
                        line-height: 48px;
                        position: absolute;
                        left: 0;
                        width: 110px;
                        height: 48px;
                        background-color: #F4F6F8;
                        font-size: 16px;
                        font-family: PingFangSC-Light;
                        font-weight: 300;
                        color: #151515;
                    }
                    .maxyear {
                        line-height: 48px;
                        position: absolute;
                        right: 0;
                        width: 110px;
                        height: 48px;
                        background-color: #F4F6F8;
                        font-size: 16px;
                        font-family: PingFangSC-Light;
                        font-weight: 400;
                        color: #151515;
                    }
                }
                .newviewyear {
                    margin-top: 60px;
                }
                .viewprice {
                    margin-top: 60px;
                    position: relative;
                    border-top: 1px solid #151515;
                    .priceleft {
                        position: absolute;
                        left: 0;
                        top: 20px;
                        font-size: 20px;
                        font-family: DINCondensed-Bold, DINCondensed;
                        font-weight: bold;
                        color: #151515;
                        letter-spacing: 1px;
                   } 
                    .priceright {
                        position: absolute;
                        right: 0;
                        top: 20px;
                        font-size: 20px;
                        font-family: DINCondensed-Bold, DINCondensed;
                        font-weight: bold;
                        color: #151515;
                        letter-spacing: 1px;
                   } 
                }
                .showprice {
                    margin:10px 10px 100px 10px;
                    position: relative;
                    .minprice {
                        line-height: 48px;
                        position: absolute;
                        left: 0;
                        width: 110px;
                        height: 48px;
                        background-color: #F4F6F8;
                        font-size: 16px;
                        font-family: PingFangSC-Light;
                        font-weight: 300;
                        color: #151515;
                    }
                    .maxprice {
                        line-height: 48px;
                        position: absolute;
                        right: 0;
                        width: 110px;
                        height: 48px;
                        background-color: #F4F6F8;
                        font-size: 16px;
                        font-family: PingFangSC-Light;
                        font-weight: 400;
                        color: #151515;
                    }
                }
            }
            .right {
                width: 990px;
                margin-left: 20px;
                display:inline-block;
                .texttitle {
                    height: 48px;
                    .titleleft {
                        float: left;
                        span {
                            height: 48px;
                            font-size: 20px;
                            font-family: DINCondensed-Bold, DINCondensed;
                            font-weight: bold;
                            color: #151515;
                            line-height: 48px;
                            letter-spacing: 1px;
                            margin-right: 10px;
                        }
                        /deep/ .el-input__inner {
                            background-color:#F4F6F8;
                        }
                    }
                    .titleright {
                        float: right;
                        .textleft {
                            height: 22px;
                            font-size: 16px;
                            font-family: PingFangSC-Light, PingFang SC;
                            font-weight: 300;
                            color: #151515;
                            line-height: 48px;
                            margin-right: 10px;
                        }
                        .textright {
                            height: 30px;
                            font-size: 20px;
                            font-family: DINCondensed-Bold, DINCondensed;
                            font-weight: bold;
                            color: #151515;
                            line-height: 48px;
                            letter-spacing: 1px;
                        }
                    }
                }
                .showimg {
                    margin-top: 40px;
                    .textcard {
                        float:left;
                        margin-right: 35px;
                        padding-bottom: 60px;
                        span {
                            font-family: DINCondensed-Bold;
                            margin-left: 3px;
                        }
                        .imgcard {
                            height: 191px;
                            width: 275px;
                            .img {
                               width:100%; 
                            }
                        }
                        .cardtitle {
                            text-align:left;
                            padding-top: 30px;
                            padding-bottom: 20px;
                            padding-left: 19px;
                            .yeartype, .kind  {
                                font-weight:bold;
                                font-size: 25px;
                                color: #212020;
                            }
                        }
                    }
                    .textcard:nth-child(3), .textcard:nth-child(6), .textcard:nth-child(9) {
                        margin-right: 0px;
                    }
                }
                /deep/.el-pagination.is-background .btn-next{
                    min-width: 100px;
                }
                /deep/.el-pagination.is-background .btn-prev{
                    min-width: 100px;
                }
            }
        }
    }
}

</style>