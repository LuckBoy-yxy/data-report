<template>
  <div class="today-users">
    <CommonCard
      title="今日交易用户数"
      :value="orderUser"
    >
      <template>
        <v-chart :options="getOptions()" />
      </template>

      <template v-slot:footer>
        <div>
          <span>退货率</span>
          <span class="emphasis">{{ returnRate }}</span>
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
          color: ['#3398DB'],
          xAxis: {
            type: 'category',
            show: false,
            data: this.orderUserTrendAxis
          },
          yAxis: {
            show: false
          },
          grid: {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
          },
          tooltip: {},
          series: [
            {
              name: '用户实时交易量',
              type: 'bar',
              data: this.orderUserTrend,
              barWidth: '60%'
            }
          ]
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>