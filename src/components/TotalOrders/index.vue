<template>
  <div class="total-orders">
    <CommonCard
      title="累计订单量"
      :value="orderToday"
    >
      <template>
        <v-chart :options="getOptions()" />
      </template>

      <template v-slot:footer>
        <div>
          <span>昨日订单量</span>
          <span class="emphasis">{{ orderLastDay }}</span>
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
        return this.orderTrend.length > 0 ? {
          xAxis: {
            type: 'category',
            show: false,
            boundaryGap: false
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
          series: [
            {
              type: 'line',
              data: this.orderTrend,
              areaStyle: {
                color: 'purple'
              },
              lineStyle: {
                width: 0
              },
              itemStyle: {
                opacity: 0
              },
              smooth: true
            }
          ]
        } : null
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>