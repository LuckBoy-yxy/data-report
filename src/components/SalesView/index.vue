<template>
  <div class="sales-view">
    <el-card
      shadow="hover"
      :body-style="{ padding: '0 0 20px 0' }"
    >
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
        <div class="sales-view-chart-wrapper">
          <v-chart :options="chartOption" />

          <div class="sales-view-list">
            <div class="sales-view-title">排行榜</div>
            <div class="list-item-wrapper">
              <div
                class="list-item"
                v-for="item in rankData"
                :key="item.no"
              >
                <div
                  :class="['list-item-no', +item.no <= 3 ? 'top-no' : '']"
                >
                  {{ item.no }}
                </div>

                <div class="list-item-name">{{ item.name }}</div>

                <div class="list-item-money">{{ item.money }}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script>
  import CommonDataMixin from '../../mixins/commonDataMixin'

  export default {
    name: 'SalesView',
    mixins: [CommonDataMixin],
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
        },
        chartOption: {}
      }
    },
    computed: {
      rankData() {
        return this.activeIndex === '1' ? this.orderRank : this.userRank
      }
    },
    watch: {
      orderFullYear() {
        this.render(this.orderFullYear, this.orderFullYearAxis, '年度销售额')
      }
    },
    methods: {
      onMenuSelect(index) {
        this.activeIndex = index
        if (index === '1') {
          this.render(this.orderFullYear, this.orderFullYearAxis, '年度销售额')
        } else {
          this.render(this.userFullYear, this.userFullYearAxis, '年度用户访问量')
        }
      },
      render(data, axis, title) {
        this.chartOption = {
          title: {
            text: title,
            textStyle: {
              fontSize: 12,
              color: '#666'
            },
            left: 25,
            top: 20
          },
          xAxis: {
            type: 'category',
            data: axis,
            axisLine: {
              lineStyle: {
                color: '#999'
              }
            },
            axisTick: {
              alignWithLabel: true,
              lineStyle: {
                color: '#999'
              }
            },
            axisLabel: {
              color: '#333'
            }
          },
          yAxis: {
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              lineStyle: {
                type: 'dotted',
                color: '#eee'
              }
            }
          },
          grid: {
            top: 70,
            left: 60,
            right: 60,
            bottom: 50
          },
          series: [
            {
              type: 'bar',
              barWidth: '35%',
              data,
              color: ['#3398DB']
            }
          ]
        }
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

  .sales-view-chart-wrapper {
    display: flex;
    height: 270px;
    .echarts {
      flex: 0 0 70%;
      width: 70%;
      height: 100%;
    }
    .sales-view-list {
      overflow: hidden;
      flex: 1;
      width: 100%;
      height: 100%;
      .sales-view-title {
        margin-top: 20px;
        font-size: 12px;
        font-weight: 500;
        color: #666;
      }
      .list-item-wrapper {
        margin-top: 15px;
        .list-item {
          display: flex;
          align-items: center;
          padding: 6px 20px 6px 0;
          height: 20px;
          font-size: 12px;
          .list-item-no {
            width: 20px;
            height: 20px;
            line-height: 20px;
            text-align: center;
            color: #333;
            &.top-no {
              font-weight: 500;
              color: #fff;
              border-radius: 50%;
              background-color: #000;
            }
          }
          .list-item-name {
            margin-left: 10px;
            color: #333;
          }
          .list-item-money {
            flex: 1;
            text-align: right;
          }
        }
      }
    }
  }
}
</style>