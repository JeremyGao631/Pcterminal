<template>
    <div class="jj">
        <div>
            <img class="img" src="../assets/images/components/TopBar.png" alt="">
        </div>
        <!-- text-color="#fff"
              active-text-color="#ffd04b"-->
        <div>
            <el-menu 
              default-active="active"
              class="el-menu-demo" 
              mode="horizontal" 
              router
              @select="handleSelect" 
              >
                <el-menu-item text-color="#151515" index="/home">HOME</el-menu-item>
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
    }
  }
</script>
<style lang="less" scoped>
  .jj {
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-end;
    .img {
      margin-left: 15rem;
      margin-right: 29rem;
      width: 78px;
      height: 50px;
    }
  }
  .el-menu.el-menu--horizontal {
    border-bottom: none;
  }
.el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: none;
}
.el-menu--horizontal>.el-menu-item {
  border-bottom:none;
}
</style>