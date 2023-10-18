<template>
  <div class="total-sales">
    <CommonCard
      title="今日交易用户数"
      value="386,586"
    >
      <template>
        <div
          id="today-users-chart"
          :style="{
            width: '100%',
            height: '100%'
          }"
        ></div>
      </template>

      <template v-slot:footer>
        <div>
          <span>退货率</span>
          <span class="emphasis">5.04%</span>
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
      const chartDom = document.getElementById('today-users-chart')
      const myChart = this.$echarts.init(chartDom)
      myChart.setOption({
        color: ['#3398DB'],
        xAxis: {
          type: 'category',
          show: false,
          data: [
            '00:00',
            '01:00',
            '02:00',
            '03:00',
            '04:00',
            '05:00',
            '06:00',
            '07:00',
            '08:00',
            '09:00',
            '10:00',
            '11:00',
            '12:00',
            '13:00'
          ]
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
            type: 'bar',
            data: [
              410,
              82,
              200,
              334,
              390,
              330,
              220,
              150,
              82,
              200,
              134,
              290,
              330,
              150
            ],
            barWidth: '60%'
          }
        ]
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>