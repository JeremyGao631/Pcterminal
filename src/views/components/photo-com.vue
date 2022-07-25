<template>
    <div>
        <div style="width:800px;height:800px;margin:20px 0 0 700px;">
            <div style="width:400px;height:400px">
                <img :src="firstPhoto" style="width:100%;height:100%">
            </div>
            <div>
                <i style="font-size: 30px;display: inline-block;position: relative;top: 40px;cursor: pointer;" class="el-icon-arrow-left" @click="imgLeft()"></i>
                <ul class="Img_ul">
                    <li v-for="(item,index) in imgUrlList" :key="index" class="Img_li" :style="imgStyle" @click="changeImg(item, index)">
                        <img :class="index === imgActiveIndex ? 'img_activeBorder' : ''" :src="item" style="width:50px;height:50px">
                    </li>
                </ul>
                <i style="font-size: 30px;display: inline-block;position: relative;left: 370px;top: -50px;cursor: pointer;" class="el-icon-arrow-right" @click="imgRight()"></i>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "photo-com",
    data () {
        return {
            // mainImgUrl: '',
            // imgUrlList: [
            //     'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
            //     'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
            //     'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
            //     'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
            //     'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
            //     'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
            //     'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',
            //     'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
            //     'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
            //     'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
            //     'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg'
            // ],
            imgActiveIndex: 0, // 当前移动图片的索引值
            imgDistance: 0, // 移动的距离
            allDistance: 0, // 总移动距离

        }
    },
    props: {
        firstPhoto: {
            type: String,
            default: ''
        },
        imgUrlList: {
            type: Array,
            default: () => [],
            required: false
        }
    },
    computed: {
        imgStyle() {
            return {
                transform: `translate3d(${this.imgDistance}px, 0, 0)` // 计算移动的距离(x,y,z)
            }
        }
    },
    methods: {
        changeImg(item, index) {
            this.$emit('changeImg',(item,index))
            this.imgActiveIndex = index
        },
        imgLeft() {
            if (this.imgActiveIndex > 0) {
                this.imgActiveIndex--  // 索引值-1
                this.imgUrlList.forEach((item, index) => { // 循环小图,通过判断索引值赋值给大图
                    if (this.imgActiveIndex === index) {
                        this.mainImgUrl = item
                    }
                })
            }
            if (this.imgActiveIndex >= 4) {
                var index = 0
                const temp = window.setInterval(() => { // 利用定时器实现图片左右移动的动画效果
                    if (index < 33) { // 移动次数(33次)
                        this.imgDistance += 2 // 每次向左移动的距离 (移动总距离为33*this.imgDistance)
                        index++
                        return
                    } else {
                        window.clearInterval(temp) // 移动完清除定时器
                    }
                }, 10)
            }
        },
        imgRight() {
            if (this.imgActiveIndex < this.imgUrlList.length - 1) {
                this.imgActiveIndex++
                this.imgUrlList.forEach((item, index) => {
                    if (this.imgActiveIndex === index) {
                        this.mainImgUrl = item
                    }
                })
                if (this.imgActiveIndex >= 5) {
                    this.allDistance = -66 * (this.imgActiveIndex - 4)
                    var index = 0
                    const temp = window.setInterval(() => {
                        if (index < 33) {
                            this.imgDistance -= 2 // 每次向右移动的距离
                            index++
                            return
                        } else {
                            window.clearInterval(temp)
                        }
                    }, 10)
                }
            } else if (this.imgActiveIndex === this.imgUrlList.length - 1) { // 到达最后一张图片，再点击跳转回第一张
                this.imgActiveIndex = 0;
                this.mainImgUrl = this.imgUrlList[0]
                const index = 0
                const temp = window.setInterval(() => { // 利用定时器实现图片左右移动的动画效果
                    if (index < Math.abs(this.allDistance/2)) { // 取绝对值再除
                        this.imgDistance += 2 // 每次向左移动的距离 (移动总距离为33*this.imgDistance)
                        this.index ++
                        return
                    } else {
                        window.clearInterval(temp) // 移动完清除定时器
                    }
                }, 1)
            }
        }
    }
}
</script>
<style scoped>
.Img_ul{
    position: relative;
    display: flex;
    left: 36px;
    width: 322px;
    height: 50px;
    overflow: hidden;
    list-style: none;
}
.Img_li{
    float:left;
    margin: 0 8px;
    cursor: pointer;
}
.img_activeBorder{
    border: 3px solid #0dcc73;
}
</style>