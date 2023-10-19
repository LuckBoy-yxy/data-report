<template>
  <div class="total-orders">
    <CommonCard
      title="累计订单量"
      value="2,754,619"
    >
      <template>
        <v-chart :options="getOptions()" />
      </template>

      <template v-slot:footer>
        <div>
          <span>昨日订单量</span>
          <span class="emphasis">2,000,000</span>
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
    methods: {
      getOptions() {
        return {
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
              data: [620, 432, 220, 534, 790, 430, 220, 320, 532, 320, 834, 690, 530, 220, 620],
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
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>