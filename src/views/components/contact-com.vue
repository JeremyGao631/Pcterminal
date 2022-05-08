<template>
<div class="information">
  <el-image class="img" :src="url" />
  <span class="title"> {{ title }}</span>
  <span class="contact"> {{ information }}</span>
</div>
</template>
<script>

export default{
  name: "contact-com",
  data() {
    return {
    }
  },
  props: {
    url: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    information: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="less" scoped>
.information {
  width: 189px;
  height: 206px;
  background: #FFFFFF;
  box-shadow: 0px 14px 48px 0px rgba(73, 73, 73, 0.07);
  .img {
    width: 66px;
    height: 66px;
  }
  .title {
    width: 61px;
    height: 22px;
    font-size: 20px;
    font-family: DINCondensed-Bold, DINCondensed;
    font-weight: bold;
    color: #212020;
    line-height: 32px;
  }
  .contact {
    width: 125px;
    height: 28px;
    font-size: 10px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #151515;
    line-height: 28px;
  }
}
</style>
