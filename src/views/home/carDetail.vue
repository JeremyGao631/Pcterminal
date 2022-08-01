<template>
<div class="carDetail">
  <div class="infodetail">
    <div class="title">{{information.title}}</div>
    <div class="content">
      <div class="contentleft">
        <div class="pricekind">
          <span class="price"><span class="price1">$</span>{{information.price.substring(1, information.price.length)}}</span>
          <span class="kind">{{information.kind}}</span>
        </div>
        <div style="clear:both;"></div>
        <div class="list" v-for="(item,index) in List" :key="index">
          <div class="listresult">
            <span class="listname">{{item.name}}</span>
            <span class="result">{{item.result}}</span>
          </div>
          <div style="clear:both;"></div>
        </div>
        <div class="littleshow">
          <div class="showleft">
            <img src="../../assets/images/carDetail/odometer.png" />
            <div class="showlefttext">
                <span class="texttop">{{informations.odometer}}</span>
                <span class="texttopright"> kms</span>
                <br />
                <span class="textbottom">Odometer</span>
            </div>
          </div>
          <div class="showleft">
            <img src="../../assets/images/carDetail/transmission.png" />
            <div class="showlefttext">
                <span class="texttop">{{informations.body}}</span>
                <br />
                <span class="textbottom">Transmission</span>
            </div>
          </div>
          <div class="showleft">
            <img src="../../assets/images/carDetail/rili.jpg" />
            <div class="showlefttext">
                <span class="texttop">{{ informations.year }}</span>
                <br />
                <span class="textbottom">Year</span>
            </div>
          </div>
        </div>
      </div>
      <div class="contentright">
        <el-carousel ref="carousel" @change="changebigimg()" arrow="never" indicator-position="none" :interval="5000">
          <el-carousel-item v-for="(item1,index) in imgUrlList" :key="index" >
            <div class="bigimg">
                <!-- <img :src="mainImgUrl"> -->
                <img :src="item1">
            </div>
          </el-carousel-item>
        </el-carousel>
          <div style="width: 100%;">
              <i style="z-index: 2;font-size: 30px;display: inline-block;position: relative;top: -220px;cursor: pointer;left: -390px;border: 1px solid #fff;color: #fff;border-radius: 50%;padding: 2px;margin-left: 10px;" class="el-icon-back" @click="imgLeft()"></i>
                <ul class="Img_ul">
                    <li v-for="(item,index) in imgUrlList" :key="index" class="Img_li" :style="imgStyle" @click="changeImg(index)">
                        <img :class="index === imgActiveIndex ? 'img_activeBorder' : ''" :src="item">
                    </li>
                </ul>
              <i style="z-index: 2;font-size: 30px;display: inline-block;position: relative;left: 370px;top: -345px;cursor: pointer;border: 1px solid #fff;color: #fff;border-radius: 50%;padding: 2px;" class="el-icon-right" @click="imgRight()"></i>
          </div>
      </div>
    </div>
    <div class="detailtext">
      <span class="texttitle">DEALER COMMENTS</span>
      <br/>
      <span class="texttitle1">{{advTitle}}</span>
      <br />
      <span class="textcontent" v-html="advbody">
      </span>
  </div>
  </div>
  <div class="booking">
    <div class="bookingtext">
      <div class="title">BOOK INSPECTION</div>
      <div class="userinput">
        <el-row :gutter="20">
            <el-col :lg="6" :md="8" :sm="12" :xs="24">
              <div class="inputtable">
                <span>Name</span>
                <el-input required v-model="name" />
              </div>
            </el-col>
            <el-col :lg="6" :md="8" :sm="12" :xs="24">
              <div class="inputtable">
                <span>Phone</span>
                <el-input maxlength="10" v-model="phone" />
              </div>
            </el-col>
            <el-col :lg="6" :md="8" :sm="12" :xs="24">
              <div class="inputtable">
                <span>Email</span>
                <el-input v-model="email" @blur="emails" />
              </div>
            </el-col>  
            <el-col :lg="6" :md="8" :sm="12" :xs="24">
              <div class="inputtable">
                <span>Time</span>
                <el-date-picker
                  v-model="time"
                  type="date"
                  placeholder="Select date"
                  style=" position: relative;font-size: 14px;display: inline-block;width: 100%;">
                </el-date-picker>
              </div>
            </el-col>
        </el-row>
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
        <el-row :gutter="20">
          <el-col :lg="6" :md="8" :sm="12" :xs="24" class="textcard" v-for="(item,index) in information1" :key="index" @click="jumpCardDetail(item)">
            <div class="imgcard" @click="jumpCardDetail(item)">
              <img :src="item.photo[0]" />
            </div>
            <div class="titlecard" @click="jumpCardDetail(item)" >
              <span >{{item.year}} {{item.make}} {{item.model}}</span>
            </div>
            <div class="contentcard" @click="jumpCardDetail(item)">
              <span class="contentcard-price">${{item.price}}</span>
              <span class="contentcard-info">Excl . Gov's Charges</span>
            </div>
            <div class="break" ></div>
            <div class="detailcard" @click="jumpCardDetail(item)">
              <span >{{item.odometer}} kms</span>
              <!-- <span >{{item.body}}</span> -->
              <span>{{item.fueltype.substring(0,6)}}</span>
              <span >{{item.geartype.slice(0,4)}}</span>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="choosepage">
        <el-pagination
          layout="prev, pager, next"
          page-size:='8'
          @next-click="next"
          @prev-click ="shang"
          :total="40">

        </el-pagination>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { inspection } from '@/api'
import { car } from '@/api'
// import {photoCom} from '../components/photo-com.vue'
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

locale.use(lang)
export default {
name: 'CarDetail',
  components: {
    // photoCom
  },
  data(){
    return{
      mainImgUrl: '',
      item1: '',
      item: '',
      imgUrlList: [
      ],
      imgActiveIndex: 0, // 当前移动图片的索引值
      imgDistance: 0, // 移动的距离
      allDistance: 0, // 总移动距离


      // 需提交的字段
      name: '',
      phone: '',
      time: '',
      email: '',
      photo: {},
      photos: [],
      advTitle: '',
      advbody: '',
      // reqEmail: true,
      // reqPhone: true,
      information: {
        title: '2016 Mercedes-Benz CLA45',
        price: '$149000.00',
        kind: "Excl. Gov's Charges" 
      },
      List: [],
      // 会优化部分
      photo1: '',
      photo2: '',
      photo3: '',
      photo4: '',
      photo5: '',
      photo6: '',

      information1: [
      ],
      informations: []
    }
  },
  created() {
    this.query()
    this.informations = this.$route.query.item
    this.advTitle = this.informations.advTitle
    this.advbody = this.informations.advbody
    this.imgUrlList = this.informations.photo
    this.mainImgUrl = this.informations.photo[0]
    this.init()
    this.allCar()
    this.setPhoto()
  },
  watch: {
    // email() {
    //   if (this.email === '') {
    //     this.reqPhone === true
    //   } else {
    //     this.reqPhone === false
    //   }
    // },
    // phone() {
    //   if (this.phone === '') {
    //     this.reqEmail === true
    //   } else {
    //     this.reqEmail === false
    //   }
    // }
  },
  computed: {
        imgStyle() {
            return {
                transform: `translate3d(${this.imgDistance}px, 0, 0)` // 计算移动的距离(x,y,z)
            }
        }
    },
  methods: {
    changebigimg(){
      var idx = this.$refs.carousel.activeIndex
      console.log("changebigimg",idx)
      this.mainImgUrl = this.imgUrlList[idx];
      this.imgActiveIndex = idx
    },


    changeImg(index) {
          console.log("changeImg",index);
            this.$refs.carousel.setActiveItem(index)
            this.imgActiveIndex = index
        },
        imgLeft() {
          // var nowidx = this.$refs.carousel.activeIndex
          // console.log(nowidx,"xxxsss")
          // this.mainImgUrl = this.imgUrlList[nowidx];
          // this.imgActiveIndex = nowidx
          // console.log(this.imgActiveIndex,"sdfasdasddad")
          // this.item = nowidx
          // console.log(this.item,"sdfasd111111111asddad")
            if (this.imgActiveIndex > 0) {
                this.imgActiveIndex--  // 索引值-1
                this.imgUrlList.forEach((item, index) => { // 循环小图,通过判断索引值赋值给大图
                    if (this.imgActiveIndex === index) {
                        this.$refs.carousel.setActiveItem(index)
                        this.mainImgUrl = item
                    }
                })
            }
            if (this.imgActiveIndex >= 4) {
                var index = 0
                const temp = window.setInterval(() => { // 利用定时器实现图片左右移动的动画效果
                    if (index < 33) { // 移动次数(33次)
                        this.imgDistance += 4 // 每次向左移动的距离 (移动总距离为33*this.imgDistance)
                        index++
                        return
                    } else {
                        window.clearInterval(temp) // 移动完清除定时器
                    }
                }, 10)
            }
        },
        imgRight() {
          // var nowidx = this.$refs.carousel.activeIndex
          // console.log(nowidx,"xxxsss")
          // this.mainImgUrl = this.imgUrlList[nowidx];
          // this.imgActiveIndex = nowidx
          // console.log(this.imgActiveIndex,"sdfasdasddad")
          // this.item = nowidx
          // console.log(this.item,"sdfasd111111111asddad")
            if (this.imgActiveIndex < this.imgUrlList.length - 1) {
                this.imgActiveIndex++
                this.imgUrlList.forEach((item, index) => {
                    if (this.imgActiveIndex === index) {
                      this.$refs.carousel.setActiveItem(index)
                        this.mainImgUrl = item
                    }
                })
                if (this.imgActiveIndex >= 5) {
                    this.allDistance = -66 * (this.imgActiveIndex - 4)
                    var index = 0
                    const temp = window.setInterval(() => {
                        if (index < 33) {
                            this.imgDistance -= 4 // 每次向右移动的距离
                            index++
                            return
                        } else {
                            window.clearInterval(temp)
                        }
                    }, 10)
                }
            } else if (this.imgActiveIndex === this.imgUrlList.length - 1) { // 到达最后一张图片，再点击跳转回第一张
                this.imgActiveIndex = 0;
                this.mainImgUrl = this.imgUrlList[0]
                var idx = 0
                const temp = window.setInterval(() => { // 利用定时器实现图片左右移动的动画效果
                    if (idx < Math.abs(this.allDistance/2)) { // 取绝对值再除
                        this.imgDistance += 4 // 每次向左移动的距离 (移动总距离为33*this.imgDistance)
                        idx++
                        return
                    } else {
                        window.clearInterval(temp) // 移动完清除定时器
                    }
                }, 1)
            }
        },

















    setPhoto() {
            this.photo = this.$route.query.item.photo
            this.photos = []
            for(var i = 0; i<=this.photo.length; i++ ) {
                const img = {
                    img: this.photo[i]
                }
                this.photos.push(img)
            }
            console.log(this.photos, '1212')
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
    getPhoto(val) {
      this.firstPhoto = val
    },
    jumpCardDetail(item) {
        this.price = item.price
        this.informations = item
        this.advTitle = item.advTitle
        this.advbody = item.advbody
        this.imgUrlList = item.photo
        this.init()
        this.allCar()
        // 回到顶部
        window.scrollTo(
            {
                top: 0,
                behavior:"smooth"
            }        
        )
    },
    next(val) {
    //   this.allCar()
    // },
        car({
                current: val,
                pageSize: '8',
                make: '',
                yearStart: '',
                yearEnd: '',
                priceStart: '',
                priceEnd: '',
                orderByPrice: '1',
                orderByYear: '1'
            }).then(car => {
                // this.information1 = car.data.records
                this.photo = this.$route.query.item.photo
                console.log(this.information1, 'car')
                this.information1 = []
                car.data.records.forEach(ele => {
                    const item = {
                        year: ele.year,
                        fueltype: ele.fueltype,
                        make: ele.make,
                        price: ele.priceDesc,
                        odometer: ele.odometer,
                        body: ele.body,
                        model: ele.model,
                        drive: ele.drive,
                        advbody: ele.advbody,
                        advTitle: ele.advTitle,
                        geartype: ele.geartype,
                        enginesize: ele.enginesize,
                        cylinders: ele.cylinders,
                        doornum: ele.doornum,
                        color: ele.color,
                        photo: ele.photo.split(',')
                    }
                    this.information1.push(item)
                })

            })
    },
    // getNum(val) {
    //   console.log(val,'15')
    // },
    shang(val) {
    //   this.allCar()
    // },
        car({
                current: val,
                pageSize: '8',
                make: '',
                yearStart: '',
                yearEnd: '',
                priceStart: '',
                priceEnd: '',
                orderByPrice: '1',
                orderByYear: '1'
            }).then(car => {
                // this.information1 = car.data.records
                console.log(this.information1, 'car')
                this.information1 = []
                car.data.records.forEach(ele => {
                    const item = {
                        year: ele.year,
                        fueltype: ele.fueltype,
                        make: ele.make,
                        price: ele.priceDesc,
                        odometer: ele.odometer,
                        body: ele.body,
                        drive: ele.drive,
                        model: ele.model,
                        advbody: ele.advbody,
                        advTitle: ele.advTitle,
                        geartype: ele.geartype,
                        enginesize: ele.enginesize,
                        cylinders: ele.cylinders,
                        doornum: ele.doornum,
                        color: ele.color,
                        photo: ele.photo.split(',')
                    }
                    this.information1.push(item)
                })

            })
    },
    // 收集信息提交
    submit() {
      if (this.name === '' || this.phone === '' || this.email === '' || this.time === '') {
        // this.$message('Please check the page information is completed')
        this.$message({
              dangerouslyUseHTMLString: true,
              message:'<span style="font-family:DINCondensed-Bold;font-size: 16px;">Please check the page information is completed</span>'
              });
      } else {
        inspection({
          // 缺少email字段
                    name:this.name,
                    phone: this.phone,
                    email:this.email,
                    time: this.time,
        }).then( res => {
          if (res.code === 0) {
            // this.$message('Submission successfull')
            this.$message({
                  dangerouslyUseHTMLString: true,
                  message:'<span style="font-family:DINCondensed-Bold;font-size: 16px;">Submission successfull</span>'
                  });
          }
        })
      }
    },
    // 按price的逻辑查询展示信息
    query() {

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
                // this.information1 = car.data.records
                this.information1 = []
                car.data.records.forEach(ele => {
                    const item = {
                        year: ele.year,
                        fueltype: ele.fueltype,
                        make: ele.make,
                        price: ele.priceDesc,
                        odometer: ele.odometer,
                        body: ele.body,
                        drive: ele.drive,
                        model: ele.model,
                        advbody: ele.advbody,
                        advTitle: ele.advTitle,
                        geartype: ele.geartype,
                        enginesize: ele.enginesize,
                        cylinders: ele.cylinders,
                        doornum: ele.doornum,
                        color: ele.color,
                        photo: ele.photo.split(',')
                    }
                    this.information1.push(item)
                })
                console.log(this.information1, 'car')

            })
            },
    init() {
            this.List = [
                {
                    name: 'Make',
                    result: this.informations.make
                },
                {
                    name: 'Model',
                    result: this.informations.model
                },{
                    name: 'Body Type',
                    result: this.informations.body
                },{
                    name: 'Color',
                    result: this.informations.color
                },{
                    name: 'Engine Size',
                    result: (this.informations.enginesize / 1000).toFixed(1)
                },{
                    name: 'Fuel Type',
                    result: this.informations.fueltype
                },{
                    name: 'Cylinders',
                    result: this.informations.cylinders
                },{
                    name: 'Doors',
                    result: this.informations.doornum
                },{
                    name: 'Drive',
                    result: this.informations.drive
                },
                ]
        },
  }
}
</script>

<style lang="less" scoped>
.topImg {
  width: 250px;
}
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
      margin: 0 40px 50px 20px;
      padding-top:150px;
      text-align:left;
      letter-spacing: 1px;
    }
    .content {
      margin-left: 20px;
      margin-top: 70px;
      margin-right: 40px;
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
            margin-right: 10px;
            margin-bottom: 5px;
            .price1 {
              font-size: 30px;
            }
            
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
          justify-content: space-evenly;
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
            // margin:0 50px 0 0;
          }
          .showleft:nth-child(2) {
            // margin:0 10px 0 10px;
          }
          .showleft:nth-child(3) {
            // margin:0 15px 0 15px;
          }
        }
      }
      .contentright {
        width:calc(60%);
        margin-left:10px;
        .bigimg {
          width: calc((100% - 16px) + 5px);
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
    // height:180px;
    margin: 50px 40px 15px 20px;
    .texttitle {
      height: 130px;
      font-size: 30px;
      font-family: DINCondensed-Bold;
      font-weight: bold;
      color: #151515;
      line-height: 75px;
    }
    .texttitle1 {
      height: 130px;
      font-size: 25px;
      font-family: DINCondensed-Bold;
      font-weight: bold;
      color: #151515;
      line-height: 75px;
    }
    .textcontent {
          text-align: left;
          width: 794px;
          // margin-bottom:10px;
          // height: 66px;
          font-size: 20px;
          font-family: DINCondensed-Bold;
          // font-weight: bold;
          color: #4A4A4A;
          line-height: 22px;
          opacity: 0.7;
          letter-spacing: 1px;
          // position: relative;
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
        justify-content: space-between;
        margin-left: 20px;
        margin-right: 40px;
        .inputtable {
          margin-right: 45px;
          text-align: left;
          .el-input {
            /deep/ .el-input__inner {
                    width:310px;
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
            // height:58px;
            // width:231px;
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
          justify-content: flex-end;
          margin-top:60px;
          span {
            color: #F4F6F8;
            font-size: 21px;
            font-family: DINCondensed-Bold;
            font-weight: bold;
            text-align: center;
            line-height: 140px;
            margin-right: 55px;
            padding-top: 8px;
          }
          .el-icon-my-yellowright {
            background: url('../../assets/images/carDetail/youjt.png') no-repeat;
            background-size: cover;
            display:inline-block;
            height: 16px;
            width: 16px;
            margin-right: -16px;
            margin-top: 67px;
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
        margin-right: 5px;
        .textcard {
          float:left;
          margin-right:30px;
          width: calc(100% / 4 - 30px);
          // margin: 0 20px;
          padding-bottom: 30px;
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
            // padding-left: 19px;
            span {
              font-family: DINCondensed-Bold;
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
              font-size: 26px;
              color: #212020;
              line-height: 29px;
            }
            .contentcard-info {
              font-size: 18px;
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
      .choosepage {
        margin: 20px 40px 0 200px;
        text-align: right;
        .el-pagination {
          /deep/ .btn-prev{
              width: 30px;
              height: 35px;
              background-image: url('../../assets/images/carDetail/left.svg');
              background-size: 100% 100%;
          }
          /deep/ i {
            display:none;
          }
          /deep/ .btn-next{
              width: 30px;
              height: 35px;
              background-image: url('../../assets/images/carDetail/right.svg');
              background-size: 100% 100%;
          }
          /deep/ .el-pager {
            margin-top:15px;
              li:not(.disabled) {
                  width:10px;
                  height:4px;
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

.Img_ul{
    position: relative;
    width: 100%;
    overflow: hidden;
    list-style: none;
    padding: 0;
    // height: 80px;
    margin: 0 ;
    top: -27px;
    white-space: nowrap;
}
.Img_li{
    display: inline-block;
    width: calc((100% / 6) - 16px);
    padding-right: 1px;
    margin-right:16px;
    cursor: pointer;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
}

/deep/ .el-carousel__container {
  height: 425px;
}
</style>