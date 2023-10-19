<template>
  <div class="sales-view">
    <el-card shadow="hover">
      <template v-slot:header>
        <div class="menu-wrapper">
          <el-menu
            class="sales-view-menu"
            mode="horizontal"
            :default-active="activeIndex"
            @select="onMenuSelect"
          >
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>

          <div class="menu-right">
            <el-radio-group
              v-model="radioSelect"
              size="small"
            >
              <el-radio-button label="今日"></el-radio-button>
              <el-radio-button label="本周"></el-radio-button>
              <el-radio-button label="本月"></el-radio-button>
              <el-radio-button label="今年"></el-radio-button>
            </el-radio-group>

            <el-date-picker
              class="sales-view-date-picker"
              v-model="date"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              size="small"
              unlink-panels
              :picker-options="pickerOptions"
            >

            </el-date-picker>
          </div>
        </div>
      </template>

      <template>

      </template>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'SalesView',
    data() {
      return {
        activeIndex: '1',
        radioSelect: '今日',
        date: null,
        pickerOptions: {
          shortcuts: [
            {
              text: '最近一周',
              onClick(picker) {
                const start = new Date()
                const end = new Date()
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
                picker.$emit('pick', [start, end], true)
              }
            },
            {
              text: '最近一个月',
              onClick(picker) {
                const start = new Date()
                const end = new Date()
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
                picker.$emit('pick', [start, end], true)
              }
            },
            {
              text: '最近三个月',
              onClick(picker) {
                const start = new Date()
                const end = new Date()
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
                picker.$emit('pick', [start, end], true)
              }
            }
          ]
        }
      }
    },
    methods: {
      onMenuSelect(index) {
        this.activeIndex = index
      }
    }
  }
</script>

<style lang="scss" scoped>
.sales-view {
  margin-top: 20px;
  .menu-wrapper {
    display: flex;
    position: relative;
    .sales-view-menu {
      padding-left: 20px;
      width: 100%;
      .el-menu-item {
        margin: 0 20px;
        height: 50px;
        line-height: 50px;
      }
    }

    .menu-right {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      top: 0;
      right: 20px;
      height: 50px;
      .sales-view-date-picker {
        margin-left: 20px;
      }
    }
  }
}
</style>