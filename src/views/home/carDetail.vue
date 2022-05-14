<template>
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

<style>

</style>