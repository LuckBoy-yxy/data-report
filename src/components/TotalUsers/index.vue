<template>
  <div class="total-users">
    <CommonCard
      title="累计用户数"
      :value="userToday"
    >
      <template>
        <v-chart :options="getOptions()" />
      </template>

      <template v-slot:footer>
        <div class="total-users-footer">
          <span>日同比</span>
          <span class="emphasis">{{ userGrowthLastDay }}</span>
          <div class="increase"></div>

          <span class="mooth">月同比</span>
          <span class="emphasis">{{ userGrowthLastMonth }}</span>
          <div class="decrease"></div>
        </div>
      </template>
    </CommonCard>
  </div>
</template>

<script>
  import CommonCardMixin from '../../mixins/commonCardMixin'
  import CommonDataMixin from '../../mixins/commonDataMixin'

  export default {
    name: 'TotalSales',
    mixins: [CommonCardMixin, CommonDataMixin],
    methods: {
      getOptions() {
        return {
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
              name: '上月平台用户数',
              type: 'bar',
              data: [this.userLastMonth],
              barWidth: 10,
              stack: '总量',
              itemStyle: {
                color: '#45c946'
              }
            },
            {
              name: '今日平台用户数',
              type: 'bar',
              data: [this.userTodayNumber],
              stack: '总量',
              itemStyle: {
                color: '#eee'
              }
            },
            {
              type: 'custom',
              stack: '总量',
              data: [this.userLastMonth],
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
        }
      }
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