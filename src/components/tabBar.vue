<template>
    <div class="jj">
        <div>
            <img class="img" src="../assets/images/components/TopBar.png" alt="" @click="jumphomepage()">
        </div>
        <!-- text-color="#fff"
              active-text-color="#ffd04b"-->
        <div class="menu">
            <el-menu 
              default-active="active"
              class="el-menu-demo" 
              mode="horizontal" 
              router
              @select="handleSelect" 
              >
                <el-menu-item index="/home">HOME</el-menu-item>
                <el-menu-item index="/showRoom">ONLINE SHOWROOM</el-menu-item>
                <el-menu-item index="/sell">SELL YOUR CAR</el-menu-item>
                <el-menu-item index="/about">ABOUT</el-menu-item>
                <el-menu-item index="contact" >CONTACT</el-menu-item>
            </el-menu>
        </div>
        
    </div>
    
</template>

<script>
  export default {
    name:'tabBar',
    props: {
    },
    data() {
      return {
        active: '/home',
        menuList: [
          {
            name:'home',
            path: '/home'

          }
        ]
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        // let path = val
        console.log(key, keyPath)
        this.$router.push(keyPath)
      },
      jumphomepage(){
        this.$router.push('/home')
      }
    }
  }
</script>
<style lang="less" scoped>
.el-menu-demo {
  color:#000;
}
  .jj {
    margin: 0 auto;
    width: 1400px;
    height: 70px;
    box-sizing: border-box;
    padding-top: 5px;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;
    .img {
      // margin-left: 240px;
      padding-top: 5px;
      width: 78px;
      height: 50px;
    }
  }
  /deep/.el-menu--horizontal > .el-menu-item[data-v-67e51b4e] {
    border-bottom: none;
    font-weight: bold;
    font-family: LucidaGrande-Bold, LucidaGrande;
    font-size: 16px;
    color: #5e6163;
    opacity: 0.7;
}
.el-menu--horizontal>.el-menu-item.is-active {
  opacity: 1;
}
  .el-menu.el-menu--horizontal {
    border-bottom: none;
  }
.el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: none;
    color:#000;
}
.el-menu--horizontal>.el-menu-item {
  border-bottom:none;
}
</style>