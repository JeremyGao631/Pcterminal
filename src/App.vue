<template>
  <div id="app">
      <el-container>
        <el-header>
          <tabBar/>
        </el-header>
        <el-main>
          <div class="main-content">
              <div class="main-wrap">
                    <!-- <router-view class="main" /> -->
                <keep-alive>
                  <router-view v-if="$route.meta.keepAlive" class="main" />
                    </keep-alive>
                  <router-view v-if="!$route.meta.keepAlive" class="main" />
              </div>
            </div>
        </el-main>
        <el-footer>
          <footBar />
        </el-footer>
      </el-container>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import footBar from './components/footBar.vue'
import tabBar from './components/tabBar.vue'

export default {
  name: 'app',
  components: {
    tabBar,
    footBar,
  }
}
</script>

<style lang="less" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
}
.el-header {
    text-align: center;
    line-height: 1rem;
  }
  .el-footer {
    text-align: center;
    line-height: 1rem;
  }
  .main-content {
    flex: 1;
    display: flex;
    overflow-y: hidden;
  }
  .main-wrap {
    flex: 1;
    overflow-y: scroll;
  }
  .el-main {
    text-align: center;
    line-height: 60rem;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
