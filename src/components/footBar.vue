<template>
    <div class="jj">
        <div class="left">
            <img class="img" src="../assets/images/components/BottomBar.png" alt="">
            <div class="bottom">
              <img class="bottom-logo" src="../assets/images/components/facebook.png" alt="">
              <img class="bottom-logo" src="../assets/images/components/twitter.png" alt="">
              <img class="bottom-logo" src="../assets/images/components/instagram.png" alt="">
              <img class="bottom-logo" src="../assets/images/components/Youtube.png" alt="">
            </div>
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
          <div class="guide">CONTACT</div>
          <div class="components">Tel: 0498698000</div>
          <div class="components">Wechat: buyingcars</div>
          <div class="components">E-mail: enquiries@autohome.com.au</div>
          <div class="components" style="white-space: nowrap;">Address: 388 Parramatta Road,Burwood,NSW 2134</div>
        </div>
    </div>
    
</template>

<script>
  export default {
    name:'footBar',
    props: {
    },
    data() {
      return {
        tips: 'Autohome AU.ALL right reserved. @Copyright 2020'
      };
    },
    methods: {
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
      .img {
        margin-right: 255px;
        margin-bottom: 20px;
        width: 88px;
        height: 54px;
      }
      .bottom {
        padding-top: 10px;
        padding-bottom: 10px;
        .bottom-logo {
          margin-right: 25px;
          width: 27px;
          height: 27px;
        }
      }
      .tips {
        width: 220px;
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
      padding-top: 80px;
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
        width: 39px;
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
        width: 39px;
        padding-bottom: 15px;
        height: 20px;
        font-size: 20px;
        font-family: DINCondensed-Bold, DINCondensed;
        width: 300px;
        color: #909090;
        line-height: 24px;
      }

    }
  }
</style>