<template>
    <div class="jj">
        <div class="left">
            <img class="img" :src="firstImg" alt="">
            <div class="bottom">
              <!-- <div  v-for="(item, idx) in lefts" :key="idx">
                <img class="bottom-logo" :src="item.targeUrl" alt="">
              </div> -->
              <a href="https://www.facebook.com/Autohome-Australia-112046877077530" target="_blank">
                <img class="bottom-logo" :src="lefts[0].targeUrl" alt="">
              </a>
              <a href="https://twitter.com/AutoHome19" target="_blank">
                <img class="bottom-logo" :src="lefts[1].targeUrl" alt="">
              </a>
              <a href="https://www.instagram.com/autohome_au/" target="_blank">
                <img class="bottom-logo" :src="lefts[2].targeUrl" alt="">
              </a>
              <!-- <img class="bottom-logo" :src="lefts[3].targeUrl" alt=""> 甲方 -->
            </div>
            <div class="tips">{{tip}}</div>
            <div class="tips">{{tips}}</div>
        </div>
        <div class="line"/>
        <!-- <div class="right">
          <div class="guide">GUIDE</div>
          <div @click="home()" class="components">HOME</div>
          <div @click="showroom()" class="components">ONLINE SHOWROOM</div>
          <div @click="sell()" class="components">SELL YOUR CAR</div>
          <div @click="about()" class="components">ABOUT</div>
          <div @click="contact()" class="component">CONTACT</div>
        </div> -->
        <div class="among">
          <div class="guide">{{ content }}</div>
          <div  v-for="(item,index) in rights" :key="index">
            <div class="components">{{ item.describtion }}</div>
          </div>
          <!-- <div class="components">Wechat: buyingcars</div>
          <div class="components">E-mail: enquiries@autohome.com.au</div>
          <div class="components" style="white-space: nowrap;">Address: 388 Parramatta Road,Burwood,NSW 2134</div> -->
        </div>
    </div>
    
</template>

<script>
  import { describtion } from '@/api'
  export default {
    name:'footBar',
    props: {
    },
    data() {
      return {
        tip: 'Autohome AU.ALL right reserved.',
        tips: '@Copyright 2020',
        lefts: [],
        rights: [],
        content: '',
        firstImg: '',

      };
    },
    created() {
      this.left()
      this.right()
    },
    methods: {
      // facebook() {
      //   window.location.href="https://www.facebook.com/Autohome-Australia-112046877077530"
      // },
      ins() {
        window.location.href="https://www.instagram.com/autohome_au/"
      },
      twitter() {
        window.location.href="https://twitter.com/AutoHome19"
      },
      left() {
        this.lefts = []
        describtion({
          current: '1',
          pageSize: '10',
          title: 'FOOTER-LEFT'
        }).then(res => {
          this.tip = res.data.records[5].describtion
          this.tips = res.data.records[6].describtion
          this.firstImg = res.data.records[0].targeUrl
          res.data.records.forEach(ele => {
            if (ele.targeUrl != null && ele.sort != 1) {
              const items = {
                // describtion: ele.describtion,
                targeUrl: ele.targeUrl
              }
            this.lefts.push(items)
            }

          })
        console.log(this.lefts, '1')
      })
    },
    right() {
      this.rights = []
      describtion({
        current: '1',
        pageSize: '10',
        title: 'FOOTER-RIGHT'
      }).then(res => {
        this.content = res.data.records[0].describtion
        res.data.records.forEach(ele => {
          if (ele.sort != 1) {
              const item = {
                describtion: ele.describtion
              }
            this.rights.push(item)
          }

        })
        console.log(this.rights, '2')
      })
    },
      // home() {
      //   this.$router.push('/home')
      // },
      // showroom() {
      //   this.$router.push('/showRoom')
      // },
      // sell() {
      //   this.$router.push('/sell')
      // },
      // about() {
      //   this.$router.push('/about')
      // },
      // contact() {
      //   this.$router.push('/contact')
      // }
    }
  }
</script>
<style lang="less" scoped>
  .jj {
      background-color: #151515;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    .left {
        margin-left: 0;
        padding-top: 100px;
        padding-bottom: 100px;
      .img {
        margin-right: 255px;
        margin-bottom: 20px;
        width: 88px;
        height: 54px;
      }
      .bottom {
        display: flex;
        padding-top: 10px;
        padding-bottom: 10px;
        .bottom-logo {
          margin-right: 25px;
          width: 27px;
          height: 27px;
        }
      }
      .tips {
        width: 320px;
        height: 40px;
        font-size: 20px;
        text-align: left;
        font-family: DINCondensed-Bold, DINCondensed;
        font-weight: bold;
        color: #909090;
        line-height: 24px;
        }
    }
    .line {
      width: 220px;
      height: 200px;
      margin-top: 45px;
      border-left: 1px solid #313030
    }
    .right {
      text-align: left;
      padding-top: 100px;
      padding-bottom: 100px;
      .guide {
        width: 61px;
        height: 30px;
        font-size: 30px;
        padding-bottom: 10px;
        font-family: DINCondensed-Bold, DINCondensed;
        font-weight: bold;
        color: #F7941E;
        letter-spacing: 1px;
      }
      .components {
        padding-bottom: 15px;
        height: 20px;
        font-size: 16px;
        font-family: DINCondensed-Bold, DINCondensed;
        width: 150px;
        color: #909090;
        line-height: 24px;
      }
      .component {
        width: 39px;
        padding-bottom: 43px;
        height: 20px;
        font-size: 16px;
        font-family: DINCondensed-Bold, DINCondensed;
        width: 150px;
        color: #909090;
        line-height: 24px;
      }
    }
    .among {
      text-align: left;
      padding-top: 25px;
      .guide {
        width: 61px;
        height: 30px;
        margin-bottom: 20px;
        font-size: 30px;
        font-family: DINCondensed-Bold, DINCondensed;
        font-weight: bold;
        color: #F7941E;
        letter-spacing: 1px;
      }
      .components {
        padding-bottom: 15px;
        height: 20px;
        font-size: 20px;
        letter-spacing: 1px;
        font-family: DINCondensed-Bold, DINCondensed;
        width: 390px;
        color: #909090;
        line-height: 24px;
      }

    }
  }
</style>