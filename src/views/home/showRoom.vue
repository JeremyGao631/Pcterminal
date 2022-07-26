<template>
    <div class="content">
        <img class="contentimg" src="../../assets/images/onlineshowroom/04.png"  alt="暂无图片" />
        <div class="inlinetext">
            <span class="content-title">Extraordinary-experience</span><br />
            <span class="content-text">
                <span style="padding-left:51px">ONLINE</span><br />
                <span style="padding-left:51px">SHOWROOM</span><br />
                <div style="clear:both;"></div>
            </span>
            <el-button class="clickbtn" @click="contactUs()">
                <span>CONTACT US</span>
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
                    <div class="choosetext" v-show="show && !show5">
                        <div v-for="(item,idx) in makeList.slice(0,3)" :key="idx">
                            <el-checkbox-group v-model="radios" @change="makeChange(radios)">
                                <el-checkbox :label="item.mak">{{item.mak }}</el-checkbox>
                            </el-checkbox-group>
                        </div>
                    </div>
                    <div class="choosetext" v-show="show && show5">
                        <div v-for="(item,idx) in makeList" :key="idx">
                            <el-checkbox-group v-model="checkboxs" @change="makeChange(checkboxs)">
                                <el-checkbox :label="item.mak">{{item.mak }}</el-checkbox>
                            </el-checkbox-group>
                        </div>
                    </div>
                    
                    <div class="viewall" :class="{ newviewall:!show}">
                        <div class="viewleft">VIEW ALL</div>
                        <div class="viewright" @click="testshow5()" v-show="show5"><i class="el-icon-arrow-down"></i></div>
                        <div class="viewright" @click="testshow5()" v-show="!show5"><i class="el-icon-arrow-up"></i></div>
                        <div style="clear:both;"></div>
                    </div>
                    <div style="clear:both;"></div>
                    <!--model-->
                    <div class="viewmodel">
                        <div class="modelleft">Model</div>
                        <div class="modelright" @click="testshow1()" v-show="show1">-</div>
                        <div class="modelright" @click="testshow1()" v-show="!show1">+</div>
                        <div style="clear:both;"></div>
                    </div>
                    <div style="clear:both;"></div>
                    <div class="choosetext" v-show="show1">
                        <el-radio-group v-model="radio1" >
                            <el-radio label="2" @click.native="clickitem1('2')">Any</el-radio>
                        </el-radio-group>
                    </div>
                    <!--tr-->
                    <div class="viewtr" :class="{ newviewtr:!show1}" >
                        <div class="trleft">Transmission</div>
                        <div class="trright" @click="testshow2()" v-show="show2">-</div>
                        <div class="trright" @click="testshow2()" v-show="!show2">+</div>
                        <div style="clear:both;"></div>
                    </div>
                    <div style="clear:both;"></div>
                    <div class="choosetext" v-show="show2">
                        <div>
                            <el-radio-group v-model="radio2" >
                                <el-radio label="1" @click.native="clickitem2('1')">Auto</el-radio>
                            </el-radio-group>
                        </div>
                        <div>
                            <el-radio-group v-model="radio3" @click.native="clickitem2()">
                                <el-radio label="2" @click.native="clickitem2('2')">Manual</el-radio>
                            </el-radio-group>
                        </div>
                    </div>
                    <!--year-->
                    <div class="viewyear" :class="{ newviewyear:!show2}" >
                        <div class="yearleft">Year</div>
                        <div class="yearright" @click="testshow3()" v-show="show3">-</div>
                        <div class="yearright" @click="testshow3()" v-show="!show3">+</div>
                        <div style="clear:both;"></div>
                    </div>
                    <div style="clear:both;"></div>
                    <div class="block" v-show="show3">
                        <el-slider
                        v-model="year"
                        range
                        :min= minYears
                        :max= maxYears
                        @change="years(year)">
                        </el-slider>
                    </div>
                    <div class="showyear" v-show="show3 ">
                        <div class="minyear">{{minYear}}</div>
                        <div class="maxyear">{{maxYear}}</div>
                    </div>
                    <!--price-->
                    <div class="viewprice" >
                        <div class="priceleft">Price</div>
                        <div class="priceright" @click="testshow4()" v-show="show4">-</div>
                        <div class="priceright" @click="testshow4()" v-show="!show4">+</div>
                        <div style="clear:both;"></div>
                    </div>
                    <div style="clear:both;"></div>
                    <div class="block" v-show="show4 ">
                        <el-slider
                        v-model="price"
                        range
                        show-stops
                        :min= minPrices
                        :max= maxPrices
                        @change="move(price)">
                        </el-slider>
                    </div>
                    <div class="showprice" v-show="show4 ">
                        <div class="minprice">${{minPrice}}</div>
                        <div class="maxprice">${{maxPrice}}</div>
                    </div>
                </div>
                <div style="clear:both;"></div>
                <div class="right">
                    <div class="texttitle">
                        <div class="titleleft">
                            <span >SORT BY</span>
                            <el-select @change="change" v-model="sortBy" placeholder="Date:High To Low">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                <span class="optionspan" style="font-size: 16px;font-family: DINCondensed-Bold;font-weight: bold;color: #000;">{{item.label}}</span>
                                </el-option>
                            </el-select>
                        </div>
                        <div class="titleright">
                            <span class="textleft">AVAILABLE</span>
                            <span class="textright">55 Cars</span>
                        </div>
                    </div>
                    <div style="clear:both;"></div>
                    <div class="showimg">
                        <div class="textcard" v-for="(item,index) in information" :key="index"  @click="cardetail(item)">
                            <div class="imgcard">
                                <img :src="item.photo[0]"  />
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
                                <span >{{item.odometer}}kms</span>
                                <span >{{item.body}}</span>
                                <span >{{item.color}}</span>
                            </div>
                        </div>
                        <div style="clear:both;"></div>
                    </div>
                    <div class="newbutton" @click="loadmore()">
                        <el-button>
                            <span>LOAD MORE</span>
                            <i class="el-icon-my-yellowright"></i>
                        </el-button>
                    </div>
                    <div style="clear:both;"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { car } from '@/api'
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
        makeList: [],
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
        orderByPrice: 1,
        orderByYear: 1,
        sortBy:'',
        minYear: '',
        minYears: '', // 筛选时
        maxYears: '', // 筛选时
        maxYear: '',
        minPrice:'',
        maxPrice: '',
        minPrices:'',
        maxPrices: '',
        photo: [], // 汽车图
        year: [],
        price: [],
        radios: [],
        checkboxs: [], // 复选框绑定值
        radio: '1',
        radio1: '1',
        radio2: '1',
        radio3: '1',
      options: [
        {
          value: '1',
          label: 'Price: low to high'
        },
        {
          value: '2',
          label: 'Price: high to low'
        }, 
        {
          value: '3',
          label: 'Date: low to high'
        }, 
        {
          value: '4',
          label: 'Date: high to low'
        },
      ]
    }
  },
  created() {
    this.allCar()
  },
  methods: {
    clickitem(e){
      if (this.flags === true) {
        this.radio === e ? this.radio = '' : this.radio= e
      }
      this.flags = true
      setTimeout(() => {
        this.flags = false
      }, 300)
    },

    clickitem1(e){
      if (this.flags === true) {
        this.radio1 === e ? this.radio1 = '' : this.radio1= e
      }
      this.flags = true
      setTimeout(() => {
        this.flags = false
      }, 300)
    },

    clickitem2(e){
      if (this.flags === true) {
        this.radio2 === e ? this.radio2 = '' : this.radio2= e
      }
      this.flags = true
      setTimeout(() => {
        this.flags = false
      }, 300)
    },
    // sortby查询
    change(val) {
        console.log('12', val)
        if(val == 'Price: low to high') {
            this.orderByPrice = 2
            this.orderByYear = ''
            this.allCar()
        }else if(val == 'Price: high to low') {
            this.orderByPrice = 1
            this.orderByYear = ''
            this.allCar()
        } else if (val == 'Date: low to high') {
            this.orderByPrice = ''
            this.orderByYear = 2
            this.allCar()
        } else {
            this.orderByPrice = ''
            this.orderByYear = 1
            this.allCar()
        }
    },
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
        console.log(value,'1515')
        this.minPrice = this.price[0]
        this.maxPrice = this.price[1]
        this.selects()
    },
    years(value) {
        console.log(value, '1515')
        this.minYear = this.year[0]
        this.maxYear = this.year[1]
        this.selects()
    },
    makeChange(item) {
        console.log(item,'15')
        car({
        current: '1',
        pageSize: '1000',
        make: item.toString(),
        yearStart: this.minYear,
        yearEnd: this.maxYear,
        priceStart: this.minPrice,
        priceEnd: this.maxPrice,
        orderByPrice: this.orderByPrice,
        orderByYear: this.orderByYear
      }).then(car => {
        // this.information = car.data.records
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
            console.log('102',this.information)
        })
        // this.maxPrice = car.data.records[0].price
        // this.makeList = []
        // this.minPrice = car.data.records[car.data.records.length-1].price
        // this.price = [this.minPrice,this.maxPrice]
        // const lengths = makesList.length
        // for(i === lengths,)
         
      })
    },
    // 条件筛选
    
    selects() {
      car({
        current: '1',
        pageSize: '1000',
        make: this.checkboxs.toString(),
        yearStart: this.minYear,
        yearEnd: this.maxYear,
        priceStart: this.minPrice,
        priceEnd: this.maxPrice,
        orderByPrice: this.orderByPrice,
        orderByYear: this.orderByYear
      }).then(car => {
        // this.information = car.data.records
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
            console.log('155',this.information)
        })
        this.maxPrice = car.data.records[0].price
        // this.makeList = []
        // this.minPrice = car.data.records[car.data.records.length-1].price
        // this.price = [this.minPrice,this.maxPrice]
        // console.log(this.information, 'car')
        // 点击价格和年份时不筛选车型搜索框
        // const makesList = []
        // car.data.records.forEach(ele => {
        //   const makes = ele.make
        //   if(makesList.indexOf(makes) === -1) {
        //     makesList.push(makes)
        //     // this.makeList.push(item)
        //   }
        // })
        // const lengths = makesList.length
        // for(i === lengths,)
        //   console.log('1',makesList)
        //   for(var i = 0; i < makesList.length; i++) {
        //     const item = {
        //       mak: makesList[i]
        //     }
        //     this.makeList.push(item)
        //     console.log('5',this.makeList)
        //   }
      })
    },
    cardetail(item){
        this.$router.push({path: '/carDetail', query: {item: item}})
    },
    contactUs() {
      this.$router.push('/contact')
    },
    allCar() {
      car({
        current: '1',
        pageSize: '5000',
        make:'',
        yearStart: '',
        yearEnd: '',
        priceStart: '',
        priceEnd: '',
        orderByPrice: this.orderByPrice,
        orderByYear: this.orderByYear
      }).then(car => {
        this.maxPrice = car.data.records[0].price
        this.minPrice = car.data.records[car.data.records.length-1].price
        this.maxPrices = car.data.records[0].price
        this.minPrices = car.data.records[car.data.records.length-1].price
        this.price = [this.minPrice,this.maxPrice]

        // console.log(this.information, 'car')
        this.makeList = []
        const makesList = []
        car.data.records.forEach(ele => {
          const makes = ele.make
          if(makesList.indexOf(makes) === -1) {
            makesList.push(makes)
            // this.makeList.push(item)
          }
        })
        // const lengths = makesList.length
        // for(i === lengths,)
          console.log('10',makesList.length)
          for(var i = 0; i < makesList.length; i++) {
            const item = {
              mak: makesList[i]
            }
            this.makeList.push(item)
          }
          console.log('0',this.makeList)
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
        console.log(this.information,'158')
      })
      car({
        current: '1',
        pageSize: '500',
        make: '',
        yearStart: '',
        yearEnd: '',
        priceStart: '',
        priceEnd: '',
        // orderByPrice: '1',
        orderByYear: '1'
      }).then(res => {
        console.log('res',res)
        this.maxYear = res.data.records[0].year
        this.minYear = res.data.records[res.data.records.length-1].year
        this.maxYears = res.data.records[0].year
        this.minYears = res.data.records[res.data.records.length-1].year
        console.log('445',this.minYear)
        this.year = [this.minYear,this.maxYear]
        console.log('12',this.year)
      })
    },
  }
}
</script>


<style lang="less" scoped>
.content {
    .contentimg {
        width: 100%;
        // height: calc(100vh - 10px);
        height: 900px;
    }
    .inlinetext {
        position: absolute;
        left: 10%;
        top: 23%;
    }
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
        span {
            float:left;
        }
    }
    .clickbtn {
      position: relative;
      left: 12%;
      width: 231px;
      height: 58px;
      padding-top: 15px;
      border: 1px solid #FFFFFF ;
      background-color: transparent;
      color:#FFFFFF;
      display: flex;
      align-items: center;
      justify-content: right;
      margin-top: 60px;
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
        margin-right: 60px;
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
        margin: 0 auto;
        width: 1400px;
        padding-bottom: 200px;
        .title {
            font-size: 70px;
            font-family: DINCondensed-Bold;
            font-weight: bold;
            color: #151515;
            line-height: 130px;
            letter-spacing: 2px;
            margin: 114px 0 0 20px;
            text-align:left;
            letter-spacing: 2px;
        }
        .show {
            display: flex;
            align-items: top;
            justify-content: center;
            margin: 31px 20px 0 20px;
            .left {
                width: 20%;
                margin-right: 20px;
                display:inline-block;
                vertical-align: top;
                .choose {
                   position: relative;
                   border-top: 1px solid #151515;
                   .chooseleft {
                        position: absolute;
                        left: 0;
                        top: 20px;
                        font-size: 24px;
                        font-family: DINCondensed-Bold;
                        font-weight: bold;
                        color: #151515;
                        letter-spacing: 1px;
                   } 
                   .chooseright {
                        position: absolute;
                        right: 0;
                        top: 20px;
                        font-size: 20px;
                        font-family: DINCondensed-Bold;
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
                        font-family: PingFangSC-Semibold;
                    }
                    /deep/ .el-radio__label {
                        height: 22px;
                        font-size: 16px;
                        font-family: PingFangSC-Light;
                        font-weight: bold;
                        color: #151515;
                        line-height: 22px;
                        opacity: 0.5;
                    }
                    /deep/ .el-radio__inner {
                        border-radius: 0;
                    }
                }
                .viewall {
                    margin-top: 20px;
                    .viewleft {
                        font-size: 24px;
                        font-family: DINCondensed-Bold;
                        font-weight: bold;
                        color: #151515;
                        letter-spacing: 1px;
                        float:left;
                    }
                    .viewright {
                        width: 25px;
                        height: 5px;
                        font-weight: bold;
                        float:left;
                        padding-left: 5px;
                        padding-top: 2px;
                        /deep/ .el-icon-arrow-down {
                            font-weight: 600;
                            padding-top: 4px;
                        }
                        /deep/ .el-icon-arrow-up {
                            font-weight: 600;
                            padding-top: 4px;
                        }
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
                        font-size: 24px;
                        font-family: DINCondensed-Bold;
                        font-weight: bold;
                        color: #151515;
                        letter-spacing: 1px;
                   } 
                    .modelright {
                        position: absolute;
                        right: 0;
                        top: 20px;
                        font-size: 20px;
                        font-family: DINCondensed-Bold;
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
                        font-size: 24px;
                        font-family: DINCondensed-Bold;
                        font-weight: bold;
                        color: #151515;
                        letter-spacing: 1px;
                   } 
                    .trright {
                        position: absolute;
                        right: 0;
                        top: 20px;
                        font-size: 20px;
                        font-family: DINCondensed-Bold;
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
                        font-size: 24px;
                        font-family: DINCondensed-Bold;
                        font-weight: bold;
                        color: #151515;
                        letter-spacing: 1px;
                   } 
                    .yearright {
                        position: absolute;
                        right: 0;
                        top: 20px;
                        font-size: 20px;
                        font-family: DINCondensed-Bold;
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
                        border: 3px solid #FFFFFF;
                        box-shadow:2px 2px 10px #909090;
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
                        opacity: 0.5;
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
                        opacity: 0.5;
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
                        font-size: 24px;
                        font-family: DINCondensed-Bold;
                        font-weight: bold;
                        color: #151515;
                        letter-spacing: 1px;
                   } 
                    .priceright {
                        position: absolute;
                        right: 0;
                        top: 20px;
                        font-size: 20px;
                        font-family: DINCondensed-Bold;
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
                        opacity: 0.5;
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
                        opacity: 0.5;
                    }
                }
            }
            .right {
                width: calc(80% - 40px);
                margin-left: 20px;
                margin-top: -4px;
                display:inline-block;
                .texttitle {
                    // height: 48px;
                    // margin-top:5px;
                    margin-left:20px;
                    .titleleft {
                        float: left;
                        display: flex;
                        align-items: center;
                        span {
                            // height: 48px;
                            font-size: 24px;
                            font-family: DINCondensed-Bold;
                            font-weight: bold;
                            color: #151515;
                            text-align: center;
                            // line-height: 48px;
                            letter-spacing: 1px;
                            margin-right: 20px;
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
                            font-family: PingFangSC-Light;
                            font-weight: 300;
                            color: #151515;
                            line-height: 48px;
                            margin-right: 10px;
                            opacity: 0.5;
                        }
                        .textright {
                            height: 30px;
                            font-size: 20px;
                            font-family: DINCondensed-Bold;
                            font-weight: bold;
                            color: #151515;
                            line-height: 48px;
                            letter-spacing: 1px;
                            padding-right:20px;
                        }
                    }
                }
                .showimg {
                    margin-top: 40px;
                    overflow: hidden;
                    .textcard {
                        float:left;
                        margin: 0 20px;
                        width: calc(100% / 3 - 40px);
                        padding-bottom: 30px;
                        span {
                            font-family: DINCondensed-Bold;
                            // margin-left: 3px;
                        }
                        .imgcard {
                            width:100%;
                            height: 211px;
                            img {
                               width:100%; 
                               height:100%;     
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
                }
                .newbutton {
                    position: relative;
                    float: right;
                    margin-top: 20px;
                    margin-right: 30px;
                    .el-button {
                    width: 215px;
                    height: 58px;
                    border: 1px solid #F7941E ;
                    background-color: transparent;
                    color:#F7941E;
                    display: flex;
                    align-items: center;
                    justify-content: right;
                    span {
                        color:#F7941E;
                        font-size: 18px;
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
        }
    }
}
/deep/.el-select-dropdown__list {
    font-family: PingFangSC-Semibold;
}
/deep/.el-input__inner::placeholder {
    font-size: 16px;
font-family: DINCondensed-Bold, DINCondensed;
font-weight: bold;
line-height: 130px;
}
/deep/.el-input__inner {
        border-radius: 0 ;
        width: 100%;
        font-size: 16px;
        font-family: DINCondensed-Bold, DINCondensed;
        color: #000;
        font-weight: bold;
      }

</style>