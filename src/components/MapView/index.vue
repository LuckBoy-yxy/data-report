<template>
  <div class="map-view">
    <div class="left">
      <BMapScatter />
    </div>
    <div class="right">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title">用户月同比增长</div>
        </template>

        <template>
          <div class="chart-wrapper">111</div>
        </template>
      </el-card>

      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title">热门搜索</div>
        </template>

        <template>
          <div class="chart-wrapper">111</div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
  import BMapScatter from '../BMapScatter/index.vue'
  export default {
    name: 'MapView',
    components: {
      BMapScatter
    }
  }
</script>

<style lang="scss" scoped>
.map-view {
  display: flex;
  margin-top: 20px;
  .left {
    flex: 0 0 80%;
    margin-right: 20px;
    width: 80%;
    height: 600px;
    background-color: #fff;
  }
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      display: flex;
      align-items: center;
      padding: 0 0 0 20px;
      height: 60px;
      font-size: 14px;
      font-weight: 500;
      border-bottom: 1px solid #eee;
      box-sizing: border-box;
    }
    .chart-wrapper {
      width: 100%;
      height: 190px;
    }
  }
}
</style>