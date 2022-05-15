<template>
<div class="carDetail">
  <div class="infodetail">
    <div class="title">{{information.title}}</div>
    <div class="content">
      <div class="contentleft">
        <div class="pricekind">
          <span class="price">{{information.price}}</span>
          <span class="kind">{{information.kind}}</span>
        </div>
        <div class="list" v-for="index in List" :key="index">
          <div class="listresult">
            <span class="listname">{{index.name}}</span>
            <span class="result">{{index.result}}</span>
          </div>
        </div>
        <div class="littleshow">
          <div class="showleft"></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
name: 'CarDetail',
  components: {
  },
  data(){
    return{
      information: {
        title: '2016 Mercedes-Benz CLA45',
        price: '$149000.00',
        kind: "Excl. Gov's Charges" 
      },
      List: [
        {
          name: 'Make',
          result: 'Mercedes-Benz'
        },
        {
          name: 'Model',
          result: 'CLA Class'
        },
        {
          name: 'Body Type',
          result: 'Coupe'
        },
        {
          name: 'Colour',
          result: 'Grey'
        },
        {
          name: 'Engine Size',
          result: '2.0'
        },
        {
          name: 'Fuel Type',
          result: 'Petrol'
        },
        {
          name: 'Cylinders',
          result: '4'
        },
        {
          name: 'Doors',
          result: '4'
        },
        {
          name: 'Seats',
          result: 'Seats'
        },
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.carDetail {
  background-color: #F4F6F8;
  width:100%;
  .infodetail {
    width:1440px;
    margin: 0 auto;
    .title {
      font-size: 70px;
      font-family: DINCondensed-Bold;
      font-weight: bold;
      color: #212020;
      line-height: 55px;
      margin: 0 20px 50px 20px;
      padding-top:92px;
      text-align:left;
      letter-spacing: 1px;
    }
    .content {
      margin:49px 20px 0px 20px;
      display: flex;
      align-items: top;
      justify-content: center;
    }
  }
}

</style>