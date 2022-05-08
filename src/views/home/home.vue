<template>
  <div>
    <el-carousel :interval="5000" arrow="always" >
      <el-carousel-item v-for="item in itemList" :key="item">
        <div class="content">
          <img :src="item"  alt="暂无图片" />
          <div>
            <span class="content-title">Excellent-performance</span><br />
            <span class="content-text">DISTINCTIVE <br />QUALITY</span><br />
            <el-button>
              BOOK SERVICE
              <i class="el-icon-my-right" />
            </el-button>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
    <div class="middle">
      <div class="title">Featured Collections</div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {
  },
  data(){
    return{
      itemList:[
        require('../../assets/images/home/lunbo.png'),
        require('../../assets/images/home/onlineshowroom.png'),
        require('../../assets/images/home/sellyourcar.png'),
        require('../../assets/images/home/visitourstore.png'),
        require('../../assets/images/home/visitourstore.png')
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  /deep/ .el-carousel {
    height: 997px;
    width:100%;
  }
  /deep/ .el-carousel__item img {
    width: 100%;
    height: 100%;
    position: relative;
    // display: none;
  }
  /deep/ .el-carousel__container {
    position: relative;
    height: 997px;
  }
  /deep/ .el-carousel__indicators--horizontal {
    bottom: 0;
    left: 10%;
    transform: translateY(-64px);
  }
  /deep/ .el-carousel__indicator--horizontal .el-carousel__button {
    width: 10px;
    height: 10px;
    background: transparent;
    border: 1px solid #ffffff;
    border-radius: 50%;
    opacity: 0.5;
    margin-right: 5px;
  }  
  /deep/ .el-carousel__indicator--horizontal.is-active .el-carousel__button{
    width: 10px;
    height: 10px;
    background: #ffffff;
    border-radius: 50%;
    opacity: 1;
    margin-right: 5px;
  }
  .content {
    text-align: left;
  }
  /deep/ .content-title {
    width: 430px;
    height: 60px;
    font-size: 60px;
    font-family: DINCondensed-Bold, DINCondensed;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 72px;
  }
  /deep/ .content-text {
    width: 605px;
    height: 260px;
    font-size: 120px;
    font-family: DINCondensed-Bold, DINCondensed;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 130px;
  }
  .content div {
    position: absolute;
    left: 10%;
    top: 257px;
  }
  /deep/ .el-button {
    width: 231px;
    height: 58px;
    border: 1px solid #FFFFFF ;
    margin-top: 79px;
    background-color: transparent;
  }
  /deep/ .el-button span{
    width: 91px;
    font-size: 20px;
    font-family: DINCondensed-Bold, DINCondensed;
    font-weight: bold;
    line-height: 25px;
    text-align: center;
    color: #FFFFFF;
  }
  /deep/ .el-icon-my-right {
    background: url('../../assets/images/home/right.png') no-repeat;
    font-size: 20px;
    background-size: cover;
  }
  /deep/ .el-icon-my-right:hover {
    background: url('../../assets/images/home/yellowright.png') no-repeat;
    font-size: 20px;
    background-size: cover;
  }
</style>