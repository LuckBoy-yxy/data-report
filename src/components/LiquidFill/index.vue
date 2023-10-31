<template>
  <ve-liquidfill
    :data="chartData"
    :settings="chartSettings"
    height="100%"
  />
</template>

<script>
  import CommonDataMixin from '../../mixins/commonDataMixin'

  const getColor = (value) => {
    let str = '#c7c7cb'
    if (value) {
      if (value > 0 && value <= 0.5) {
        str = 'rgba(97, 216, 0, .7)'
      } else if (value <= 0.8 ) {
        str = 'rgba(204, 178, 26, .7)'
      } else {
        str = 'rgba(241, 47, 28, .7)'
      }
    }

    return str 
  } 
  export default {
    name: 'LiquidFill',
    mixins: [CommonDataMixin],
    data() {
      return {
        chartData: {},
        chartSettings: {}
      }
    },
    watch: {
      userGrowthLastMonth() {
        this.chartData = {
          columns: ['title', 'percent'],
          rows: [
            {
              title: '用户月同比增长',
              percent: this.userGrowthLastMonth / 100
            }
          ]
        }
        this.chartSettings = {
          seriesMap: {
            '用户月同比增长': {
              radius: '80%',
              label: {
                normal: {
                  formatter(v) {
                    return `${ (v.data.value * 100).toFixed(2) }%`
                  },
                  insideColor: '#fff',
                  textStyle: {
                    color: '#999',
                    fontSize: 36,
                    fontWeight: 'normal' 
                  },
                  position: ['50%', '50%']
                }
              },
              outline: {
                itemStyle: {
                  borderColor: '#aaa4a4',
                  borderWidth: 1,
                  color: 'none',
                  shadowBlur: 0,
                  shadowColor: '#fff'
                },
                borderDistance: 0
              },
              backgroundStyle: {
                color: '#fff'
              },
              itemStyle: {
                shadowBlur: 0,
                shadowColor: '#fff'
              },
              amplitude: 8,
              color: [getColor(this.chartData.rows[0].percent)]
            }
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>