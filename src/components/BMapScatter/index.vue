<template>
  <div class="bmap2">
    <ve-bmap
      :settings="chartSettings"
      :title="title"
      :tooltip="tooltip"
      :series="series"
      height="100%"
    ></ve-bmap>
  </div>
</template>

<script>
  import CommonDataMixin from '../../mixins/commonDataMixin'

  const convertData = function(data, geo) {
    const res = []
    data.forEach(item => {
      const geoCoord = geo[item.name]
      res.push({
        name: item.name,
        value: [...geoCoord, item.value]
      })
    })

    return res
  }

  export default {
    name: 'BMap2',
    mixins: [CommonDataMixin],
    data() {
      return {
        title: {
          text: '外卖销售数据大盘',
          subtext: '销售趋势统计',
          left: 'center'
        },
        chartSettings: {
          key: 'vpUwe9iLWc9yRzmGwtaafMZeP98acj2e',
          bmap: {
            center: [104.114129, 37.550339],
            zoom: 5,
            roam: false,
            mapStyle: {
              styleJson: [
                {
                  'featureType': 'water',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#d1d1d1'
                  }
                },
                {
                  'featureType': 'land',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#f3f3f3'
                  }
                },
                {
                  'featureType': 'railway',
                  'elementType': 'all',
                  'stylers': {
                    'visibility': 'off'
                  }
                },
                {
                  'featureType': 'highway',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#fdfdfd'
                  }
                },
                {
                  'featureType': 'highway',
                  'elementType': 'labels',
                  'stylers': {
                    'visibility': 'off'
                  }
                },
                {
                  'featureType': 'arterial',
                  'elementType': 'geometry',
                  'stylers': {
                    'color': '#fefefe'
                  }
                },
                {
                  'featureType': 'arterial',
                  'elementType': 'geometry.fill',
                  'stylers': {
                    'color': '#fefefe'
                  }
                },
                {
                  'featureType': 'poi',
                  'elementType': 'all',
                  'stylers': {
                    'visibility': 'off'
                  }
                },
                {
                  'featureType': 'green',
                  'elementType': 'all',
                  'stylers': {
                    'visibility': 'off'
                  }
                },
                {
                  'featureType': 'subway',
                  'elementType': 'all',
                  'stylers': {
                    'visibility': 'off'
                  }
                },
                {
                  'featureType': 'manmade',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#d1d1d1'
                  }
                },
                {
                  'featureType': 'local',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#d1d1d1'
                  }
                },
                {
                  'featureType': 'arterial',
                  'elementType': 'labels',
                  'stylers': {
                    'visibility': 'off'
                  }
                },
                {
                  'featureType': 'boundary',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#fefefe'
                  }
                },
                {
                  'featureType': 'building',
                  'elementType': 'all',
                  'stylers': {
                    'color': '#d1d1d1'
                  }
                },
                {
                  'featureType': 'label',
                  'elementType': 'labels.text.fill',
                  'stylers': {
                    'color': '#999999'
                  }
                }
              ]
            }
          }
        },
        tooltip: {},
        series: []
      }
    },
    watch: {
      mapData() {
        const { data, geo } = this.mapData
        this.series = [
        {
            name: '销售额',
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: convertData(datam, geo),
            encode: {
              value: 2
            },
            itemStyle: {
              color: 'purple'
            },
            symbolSize: (val) => {
              return val[2] / 10
            },
            label: {
              show: false,
              position: 'right',
              formatter(v) {
                return `${v.data.name} - ${v.data.value[2]}`
              }
            },
            emphasis: {
              label: {
                show: true
              }
            }
          },
          {
            name: 'Top 10',
            type: 'effectScatter',
            coordinateSystem: 'bmap',
            data: convertData(data.sort((a, b) => {
              return b.value - a.value
            }).slice(0, 6), geo),
            symbolSize(val) {
              return val[2] / 10
            },
            encode: {
              value: 2
            },
            label: {
              show: false,
              position: 'right',
              formatter(v) {
                return `${v.data.name} - ${v.data.value[2]}`
              }
            },
            emphasis: {
              label: {
                show: true
              }
            },
            hoverAnimation: true,
            rippleEffect: {
              brushType: 'stroke'
            },
            itemStyle: {
              color: 'purple',
              shadowBlur: 10,
              shadowColor: '#333'
            }
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.bmap2 {
  width: 100%;
  height: 100%;
}
</style>