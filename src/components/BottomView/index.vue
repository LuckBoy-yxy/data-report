<template>
  <div class="bottom-view">
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">关键词搜索</div>
        </template>
        <template>
          <div class="chart-wrapper">
            <div class="chart-inner">
              <div class="chart">
                <div class="chart-title">搜索用户数</div>
                <div class="chart-data">{{ userCount }}</div>
                <v-chart :options="searchUserOption" />
              </div>
              <div class="chart">
                <div class="chart-title">搜索量</div>
                <div class="chart-data">{{ searchCount }}</div>
                <v-chart :options="searchNumberOption" />
              </div>
            </div>
            <div class="table-wrapper">
              <el-table
                :data="tableData"
              >
                <el-table-column prop="rank" label="排名" />
                <el-table-column prop="keyword" label="关键词" />
                <el-table-column prop="count" label="总搜索量" align="center" />
                <el-table-column prop="users" label="搜索用户数" align="center" />
                <el-table-column prop="range" label="点击率" align="center" />
              </el-table>

              <el-pagination
                layout="prev, pager, next"
                background
                :total="total"
                :page-size="pageSize"
                @current-change="onPageChange"
              />
            </div>
          </div>
        </template>
      </el-card>
    </div>

    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title-wrapper">
            <div class="title">分类销售排行</div>
            <div class="radio-wrapper">
              <el-radio-group v-model="radioSelect" size="small">
                <el-radio-button label="品类"></el-radio-button>
                <el-radio-button label="商品"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
        </template>
        <template>
          <div class="chart-wrapper">
            <v-chart :options="categoryOptions" />
          </div>
        </template>
      </el-card>
    </div>
  </div>
</template>

<script>
  import CommonDataMixin from '../../mixins/commonDataMixin'

  export default {
    name: 'BottomView',
    mixins: [CommonDataMixin],
    data() {
      return {
        searchUserOption: {},
        searchNumberOption: {},
        tableData: [],
        totalData: [],
        total: 0,
        pageSize: 4,
        userCount: 0,
        searchCount: 0,
        radioSelect: '品类',
        categoryOptions: {}
      }
    },
    watch: {
      wordCloud() {
        const totalData = []
        this.wordCloud.forEach((item, index) => {
          totalData.push({
            id: index + 1,
            rank: index + 1,
            keyword: item.word,
            count: item.count,
            users: item.user,
            range: `${ ((item.user / item.count) * 100).toFixed(2) }%`
          })
        })
        this.totalData = totalData
        this.total = this.tableData.length
        this.renderTable(1)
        this.userCount = this.format(totalData.reduce((sum, item) => { item.users + sum }, 0))
        this.searchCount = this.format(totalData.reduce((sum, item) => { item.count + sum }, 0))
        this.renderLineChart()
      }
    },
    methods: {
      onPageChange(page) {
        this.renderTable(page)
      },
      renderPieChart() {
        const mockData = [
          {
            legendname: '粉面粥店',
            value: 67,
            percent: '22.92%',
            itemStyle: {
              color: '#e7e702'
            },
            name: '粉面粥店 | 22.92%'
          },
          {
            legendname: '简餐便当',
            value: 97,
            percent: '10.71%',
            itemStyle: {
              color: '#8d7fec'
            },
            name: '简餐便当 | 10.71%'
          },
          {
            legendname: '汉堡披萨',
            value: 92,
            percent: '14.29%',
            name: '汉堡披萨 | 14.29%'
          },
          {
            legendname: '香锅冒菜',
            value: 36,
            percent: '19.64%',
            name: '香锅冒菜 | 19.64%'
          },
          {
            legendname: '小吃炸串',
            value: 63,
            percent: '5.36%',
            name: '小吃炸串 | 5.36%'
          },
          {
            legendname: '地方菜系',
            value: 100,
            percent: '27.08%',
            itemStyle: {
              color: '#5082f2'
            },
            name: '地方菜系 | 27.08%'
          }
        ]
        this.categoryOptions = {
          title: [
            {
              text: '品类分布',
              textStyle: {
                fontSize: 14,
                color: '#666'
              },
              left: 20,
              top: 20
            },
            {
              text: '累计订单量',
              subtext: '336',
              x: '34.5%',
              y: '42.5%',
              textAlign: 'center',
              textStyle: {
                fontSize: 14,
                color: '#999'
              },
              subtextStyle: {
                fontSize: 28,
                color: '#333'
              }
            }
          ],
          series: [
            {
              name: '品类分布',
              type: 'pie',
              data: mockData,
              label: {
                normal: {
                  show: true,
                  position: 'outter',
                  formatter(params) {
                    return params.data.legendname
                  }
                }
              },
              center: ['35%', '50%'],
              radius: ['45%', '60%'],
              labelLine: {
                normal: {
                  length: 8,
                  length2: 3,
                  smooth: true
                }
              },
              clockwise: false,
              itemStyle: {
                borderWidth: 4,
                borderColor: '#fff'
              }
            }
          ],
          legend: {
            type: 'scroll',
            orient: 'vertical',
            height: 250,
            top: 'middle',
            left: '70%',
            textStyle: {
              color: '#8c8c8c'
            }
          },
          tooltip: {
            trigger: 'item',
            formatter(params) {
              const str = 
                params.seriesName + '<br />' +
                params.marker + params.data.legendname + '<br />' +
                '数量:' + params.data.value + '<br />' +
                '占比:' + params.data.percent
              return str
            }
          }
        }
      },
      renderTable(page) {
        this.tableData = this.totalData.slice(
          (page - 1) * this.pageSize,
          (page - 1) * this.pageSize + this.pageSize
        )
      },
      renderLineChart() {
        const createOption = (key) => {
          const data = []
          const axis = []
          this.wordCloud.forEach(item => data.push(item[key]))
          this.wordCloud.forEach(item => data.push(item.word))
          return {
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: axis
            },
            yAxis: {
              type: 'value',
              show: false
            },
            tooltip: {},
            grid: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            },
            series: [
              {
                type: 'line',
                areaStyle: {
                  color: 'rgba(95, 187, 255, .5)'
                },
                lineStyle: {
                  color: 'rgba(95, 187, 255)'
                },
                itemStyle: {
                  opacity: 0
                },
                smooth: true,
                data
              }
            ]
          }
        }
        this.searchUserOption = createOption('user')
        this.searchNumberOption = createOption('count')
      }
    },
    mounted() {
      this.renderPieChart()
    }
  }
</script>

<style lang="scss" scoped>
  .bottom-view {
    display: flex;
    margin-top: 20px;
    .view {
      flex: 1;
      width: 50%;
      box-sizing: border-box;
      &:first-child {
        padding: 0 10px 0 0;
      }
      &:last-child {
        padding: 0 0 0 10px;
      }
      .title-wrapper {
        display: flex;
        align-items: center;
        height: 60px;
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
        font-size: 14px;
        font-weight: 500;
        padding: 0 0 0 20px;
        .radio-wrapper {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          padding-right: 20px;
        }
      }
      .chart-wrapper {
        display: flex;
        flex-direction: column;
        height: 452px;
        .chart-inner {
          display: flex;
          padding: 0 10px;
          margin-top: 20px;
          .chart {
            flex: 1;
            padding: 0 10px;
            .chart-title {
              color: #999;
              font-size: 14px;
            }
            .chart-data {
              font-size: 22px;
              color: #333;
              font-weight: 500;
              letter-spacing: 2px;
            }
            .echarts {
              height: 50px;
            }
          }
        }
        .table-wrapper {
          flex: 1;
          margin-top: 20px;
          padding: 0 20px 20px;
          .el-pagination {
            display: flex;
            justify-content: flex-end;
            margin-top: 30px;
          }
        }
      }
    }
  }
</style>