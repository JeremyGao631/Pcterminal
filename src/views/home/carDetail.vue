<template>
<div class="carDetail">
  <div class="infodetail">
    <div class="title">{{information.title}}</div>
    <el-row :gutter="20" class="content">
      <el-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
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
      </el-col>
      <el-col :span='12'>
        <div id="jssor_1" style="position: relative; top: 0px; left: 0px; height: 530px; overflow: hidden;">
          <div data-u="loading" style="position: absolute; top: 0px; left: 0px;">
              <div style="filter: alpha(opacity=70); opacity: 0.7; position: absolute; display: block; top: 0px; left: 0px; width: 100%; height: 100%;"></div>
              <div style="position:absolute;display:block;background:url('img/loading.gif') no-repeat center center;top:0px;left:0px;width:100%;height:100%;"></div>
          </div>
          <div data-u="slides" style="cursor: default; position: relative; top: 0px; left: 0px; width: 800px; height: 430px; overflow: hidden;">
              <div data-p="144.50" style="display: none;" v-for="(item,index) in imgUrlList" :key="index">
                  <img data-u="image" :src="item" />
                  <img data-u="thumb" :src="item" />
              </div>
          </div>
          <div data-u="thumbnavigator" class="jssort01" style="position:absolute;left:0px;bottom:0px;width:800px;height:100px;" data-autocenter="1">
              
              <div data-u="slides" style="cursor: default;">
                  <div data-u="prototype" class="p">
                      <div class="w">
                          <div data-u="thumbnailtemplate" class="t"></div>
                      </div>
                      <div class="c"></div>
                  </div>
              </div>
          </div>
          <span data-u="arrowleft" class="jssora05l" style="top:158px;left:8px;width:40px;height:40px;"></span>
          <span data-u="arrowright" class="jssora05r" style="top:158px;right:8px;width:40px;height:40px;"></span>
        </div>
      </el-col>
    </el-row>
  </div>

    <!-- <div id="jssor_1" style="position: relative; margin: 0 auto; top: 0px; left: 0px; width: 800px; height: 456px; overflow: hidden;background-color: #24262e;">
        
        <div data-u="loading" style="position: absolute; top: 0px; left: 0px;">
            <div style="filter: alpha(opacity=70); opacity: 0.7; position: absolute; display: block; top: 0px; left: 0px; width: 100%; height: 100%;"></div>
            <div style="position:absolute;display:block;background:url('img/loading.gif') no-repeat center center;top:0px;left:0px;width:100%;height:100%;"></div>
        </div>
        <div data-u="slides" style="cursor: default; position: relative; top: 0px; left: 0px; width: 800px; height: 356px; overflow: hidden;">
            <div data-p="144.50" style="">
                <img data-u="image" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
                <img data-u="thumb" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
            </div>
            <div data-p="144.50" style="display: none;">
                <img data-u="image" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
                <img data-u="thumb" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
            </div>
            <div data-p="144.50" style="display: none;">
                <img data-u="image" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
                <img data-u="thumb" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
            </div>
            <div data-p="144.50" style="display: none;">
                <img data-u="image" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
                <img data-u="thumb" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
            </div>
            <div data-p="144.50" style="display: none;">
                <img data-u="image" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
                <img data-u="thumb" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
            </div>
            <div data-p="144.50" style="display: none;">
                <img data-u="image" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
                <img data-u="thumb" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
            </div>
            <div data-p="144.50" style="display: none;">
                <img data-u="image" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
                <img data-u="thumb" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
            </div>
            <div data-p="144.50" style="display: none;">
                <img data-u="image" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
                <img data-u="thumb" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
            </div>
            <div data-p="144.50" style="display: none;">
                <img data-u="image" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
                <img data-u="thumb" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
            </div>
            <div data-p="144.50" style="display: none;">
                <img data-u="image" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
                <img data-u="thumb" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
            </div>
            <div data-p="144.50" style="display: none;">
                <img data-u="image" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
                <img data-u="thumb" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
            </div>
            <div data-p="144.50" style="display: none;">
                <img data-u="image" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
                <img data-u="thumb" src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" />
            </div>
        </div>
        
        <div data-u="thumbnavigator" class="jssort01" style="position:absolute;left:0px;bottom:0px;width:800px;height:100px;" data-autocenter="1">
            
            <div data-u="slides" style="cursor: default;">
                <div data-u="prototype" class="p">
                    <div class="w">
                        <div data-u="thumbnailtemplate" class="t"></div>
                    </div>
                    <div class="c"></div>
                </div>
            </div>
        </div>
        <span data-u="arrowleft" class="jssora05l" style="top:158px;left:8px;width:40px;height:40px;"></span>
        <span data-u="arrowright" class="jssora05r" style="top:158px;right:8px;width:40px;height:40px;"></span>
    </div> -->



    <div class="detailtext">
      <span class="texttitle">DEALER COMMENTS</span>
      <br/>
      <span class="textcontent">{{advTitle}}</span>
      <br />
      <span class="textcontent" v-html="advbody">
      </span>
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
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

import $ from 'jquery'

window.jQuery = $ 
require('@/assets/jssor.slider.mini')

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
    this.$nextTick(() => {
      this.jssor_1_slider_init()
    })
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
  methods: {
jssor_1_slider_init : function() {
            
            var jssor_1_SlideshowTransitions = [
              {$Duration:1200,x:0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,x:-0.3,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,x:-0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,x:0.3,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,y:0.3,$During:{$Top:[0.3,0.7]},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,y:-0.3,$SlideOut:true,$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,y:-0.3,$During:{$Top:[0.3,0.7]},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,y:0.3,$SlideOut:true,$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,x:0.3,$Cols:2,$During:{$Left:[0.3,0.7]},$ChessMode:{$Column:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,x:0.3,$Cols:2,$SlideOut:true,$ChessMode:{$Column:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,y:0.3,$Rows:2,$During:{$Top:[0.3,0.7]},$ChessMode:{$Row:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,y:0.3,$Rows:2,$SlideOut:true,$ChessMode:{$Row:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,y:0.3,$Cols:2,$During:{$Top:[0.3,0.7]},$ChessMode:{$Column:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,y:-0.3,$Cols:2,$SlideOut:true,$ChessMode:{$Column:12},$Easing:{$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,x:0.3,$Rows:2,$During:{$Left:[0.3,0.7]},$ChessMode:{$Row:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,x:-0.3,$Rows:2,$SlideOut:true,$ChessMode:{$Row:3},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,x:0.3,y:0.3,$Cols:2,$Rows:2,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$ChessMode:{$Column:3,$Row:12},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,x:0.3,y:0.3,$Cols:2,$Rows:2,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$SlideOut:true,$ChessMode:{$Column:3,$Row:12},$Easing:{$Left:$Jease$.$InCubic,$Top:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,$Delay:20,$Clip:3,$Assembly:260,$Easing:{$Clip:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,$Delay:20,$Clip:3,$SlideOut:true,$Assembly:260,$Easing:{$Clip:$Jease$.$OutCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,$Delay:20,$Clip:12,$Assembly:260,$Easing:{$Clip:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
              {$Duration:1200,$Delay:20,$Clip:12,$SlideOut:true,$Assembly:260,$Easing:{$Clip:$Jease$.$OutCubic,$Opacity:$Jease$.$Linear},$Opacity:2}
            ];
            
            var jssor_1_options = {
              $AutoPlay: true,
              $SlideshowOptions: {
                $Class: $JssorSlideshowRunner$,
                $Transitions: jssor_1_SlideshowTransitions,
                $TransitionsOrder: 1
              },
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $ThumbnailNavigatorOptions: {
                $Class: $JssorThumbnailNavigator$,
                $Cols: 10,
                $SpacingX: 8,
                $SpacingY: 8,
                $Align: 360
              }
            };
            
            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);
            
            //responsive code begin
            //you can remove responsive code if you don't want the slider scales while window resizing
            function ScaleSlider() {
                var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 800);
                    jssor_1_slider.$ScaleWidth(refSize);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }
            ScaleSlider();
            $Jssor$.$AddEvent(window, "load", ScaleSlider);
            $Jssor$.$AddEvent(window, "resize", $Jssor$.$WindowResizeFilter(window, ScaleSlider));
            $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
            //responsive code end
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
/* jssor slider arrow navigator skin 05 css */
        /*
        .jssora05l                  (normal)
        .jssora05r                  (normal)
        .jssora05l:hover            (normal mouseover)
        .jssora05r:hover            (normal mouseover)
        .jssora05l.jssora05ldn      (mousedown)
        .jssora05r.jssora05rdn      (mousedown)
        */
        .jssora05l, .jssora05r {
            display: block;
            position: absolute;
            /* size of arrow element */
            width: 40px;
            height: 40px;
            cursor: pointer;
            background: url('../../assets/a17.png') no-repeat;
            overflow: hidden;
        }
        .jssora05l { background-position: -10px -40px; }
        .jssora05r { background-position: -70px -40px; }
        .jssora05l:hover { background-position: -130px -40px; }
        .jssora05r:hover { background-position: -190px -40px; }
        .jssora05l.jssora05ldn { background-position: -250px -40px; }
        .jssora05r.jssora05rdn { background-position: -310px -40px; }

        /* jssor slider thumbnail navigator skin 01 css */
        /*
        .jssort01 .p            (normal)
        .jssort01 .p:hover      (normal mouseover)
        .jssort01 .p.pav        (active)
        .jssort01 .p.pdn        (mousedown)
        */
        .jssort01 .p {
            position: absolute;
            top: 0;
            left: 0;
            width: 72px;
            height: 72px;
        }
        
        .jssort01 .t {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: none;
        }
        
        .jssort01 .w {
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
        }
        
        .jssort01 .c {
            position: absolute;
            top: 0px;
            left: 0px;
            width: 68px;
            height: 68px;
            border: #000 2px solid;
            box-sizing: content-box;
            background: url('../../assets/t01.png') -800px -800px no-repeat;
            _background: none;
        }
        
        .jssort01 .pav .c {
            top: 2px;
            _top: 0px;
            left: 2px;
            _left: 0px;
            width: 68px;
            height: 68px;
            border: #000 0px solid;
            _border: #fff 2px solid;
            background-position: 50% 50%;
        }
        
        .jssort01 .p:hover .c {
            top: 0px;
            left: 0px;
            width: 70px;
            height: 70px;
            border: #fff 1px solid;
            background-position: 50% 50%;
        }
        
        .jssort01 .p.pdn .c {
            background-position: 50% 50%;
            width: 68px;
            height: 68px;
            border: #000 2px solid;
        }
        
        * html .jssort01 .c, * html .jssort01 .pdn .c, * html .jssort01 .pav .c {
            /* ie quirks mode adjust */
            width /**/: 72px;
            height /**/: 72px;
        }





























.topImg {
  width: 250px;
}
.carDetail {
  background-color: #F4F6F8;
  width:100%;
  .infodetail {
    padding-bottom:40px;
    width:80%;
    margin: 0 auto;
    .title {
      font-size: 70px;
      font-family: DINCondensed-Bold;
      font-weight: bold;
      color: #212020;
      line-height: 55px;
      margin: 0 20px 50px 20px;
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
        }
      }
    }
  }
  .detailtext {
    background-color: #FFFFFF;
    // height:180px;
    margin: 50px -20px 15px 0px;
    padding-bottom: 30px;
    .texttitle {
      height: 130px;
      font-size: 30px;
      font-family: DINCondensed-Bold;
      font-weight: bold;
      color: #151515;
      line-height: 75px;
    }
    .textcontent {
          text-align: left;
          width: 45%;
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
      width:80%;
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
          margin-right: 80px;
          text-align: left;
          .el-input {
            /deep/ .el-input__inner {
                    width:110%;
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
        padding-top: 60px;
        overflow: hidden;
        padding-left: 20px;
        padding-right: 20px;
        .textcard {
          float:left;
          // margin: 0 20px;
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
              display: block;
              height: 50px;
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


// #jssor_1 {
//   position: relative;
//   margin: 0 auto; 
//   top: 0px; 
//   left: 0px; 
//   height: 530px; 
//   overflow: hidden;
//   .slides{
//     cursor: default;
//     position: relative;
//     top: 0px;
//     left: 0px;
//     width: 800px;
//     height: 430px;
//     overflow: hidden;
//   }
// }



@media screen and (max-width: 1992px){
  .carDetail .infodetail .content {
    display:block;
  }
 .carDetail .booking .bookingtext .userinput .inputtable {
  margin-top: 30px;
 }
  
}

@media screen and (max-width: 1200px){ 
  .contentleft {
    margin-bottom: 20px;
  }
  #jssor_1 {
    margin-left: 25%;
    margin-right: 25%;
  }
}

@media screen and (max-width: 991px){ 
  .contentleft {
    margin-bottom: 20px;
  }
  #jssor_1 {
    margin-left: 0%;
  }
}

</style>