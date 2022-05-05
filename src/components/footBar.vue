<template>
    <div class="jj">
        <div>
            <img class="img" src="../assets/logo.png" alt="">
        </div>
        <div>
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-menu-item text-color="#151515" index="1">HOME</el-menu-item>
                <el-menu-item index="2">ONLINE SHOWROOM</el-menu-item>
                <el-menu-item index="3">ELL YOUR CAR</el-menu-item>
                <el-menu-item index="4">ABOUT</el-menu-item>
                <el-menu-item index="5">CONTACT</el-menu-item>
            </el-menu>
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
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style lang="less" scoped>
  .jj {
      background-color: #000;
    margin-top:-63px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    .img {
      margin-left:260px;
      margin-right: 528px;
      width: 78px;
      height: 50px;
    }
  }
</style>