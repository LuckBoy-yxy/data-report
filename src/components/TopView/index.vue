<template>
  <div class="">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover">
          <TotalSales />
        </el-card>
      </el-col>

      <el-col :span="6">
        <el-card shadow="hover">
          <TotalOrders />
        </el-card>
      </el-col>

      <el-col :span="6">
        <el-card shadow="hover">
          <TodayUsers />
        </el-card>
      </el-col>

      <el-col :span="6">
        <el-card shadow="hover">
          <TotalUsers />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import TotalSales from '../TotalSales/index.vue'
  import TotalOrders from '../TotalOrders/index.vue'
  import TodayUsers from '../TodayUsers/index.vue'
  import TotalUsers from '../TotalUsers/index.vue'

  export default {
    name: '',
    components: {
      TotalSales,
      TotalOrders,
      TodayUsers,
      TotalUsers
    }
  }
</script>

<style lang="scss" scoped>

</style>