<template>
  <div class="total-users">
    <CommonCard
      title="累计用户数"
      value="1,374,232"
    >
      <template>
        <div
          id="total-users-chart"
          :style="{
            width: '100%',
            height: '100%'
          }"
        ></div>
      </template>

      <template v-slot:footer>
        <div class="total-users-footer">
          <span>日同比</span>
          <span class="emphasis">37.34%</span>
          <div class="increase"></div>

          <span class="mooth">月同比</span>
          <span class="emphasis">71.68%</span>
          <div class="decrease"></div>
        </div>
      </template>
    </CommonCard>
  </div>
</template>

<script>
  import CommonCardMixin from '../../mixins/commonCardMixin'

  export default {
    name: 'TotalSales',
    mixins: [CommonCardMixin],
    mounted() {
      const chart = document.getElementById('total-users-chart')
      const myChart = this.$echarts.init(chart)
      myChart.setOption({
        xAxis: {
          type: 'value',
          show: false
        },
        yAxis: {
          type: 'category',
          show: false
        },
        grid: {
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        },
        series: [
          {
            type: 'bar',
            data: [200],
            barWidth: 10,
            stack: '总量',
            itemStyle: {
              color: '#45c946'
            }
          },
          {
            type: 'bar',
            data: [250],
            stack: '总量',
            itemStyle: {
              color: '#eee'
            }
          },
          {
            type: 'custom',
            stack: '总量',
            data: [200],
            renderItem(params, api) {
              const value = api.value(0)
              const endPoint = api.coord([value, 0])

              return {
                type: 'group',
                position: endPoint,
                children: [
                  {
                    type: 'path',
                    shape: {
                      d: 'M1024 255.996 511.971 767.909 0 255.996 1024 255.996z',
                      x: -8,
                      y: -22,
                      width: 15,
                      height: 15,
                      layout: 'cover'
                    },
                    style: {
                      fill: '#45c946'
                    }
                  },
                  {
                    type: 'path',
                    shape: {
                      d: 'M0 767.909l512.029-511.913L1024 767.909 0 767.909z',
                      x: -8,
                      y: 7,
                      width: 15,
                      height: 15,
                      layout: 'cover'
                    },
                    style: {
                      fill: '#45c946'
                    }
                  }
                ]
              }
            }
          }
        ]
      })
    }
  }
</script>

<style lang="scss" scoped>
.total-users-footer {
  display: flex;
  align-items: center;
  .mooth {
    margin-left: 10px;
  }
}
</style>