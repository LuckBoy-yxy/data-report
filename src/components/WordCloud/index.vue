<template>
  <ve-wordcloud
    :data="chartData"
    height="100%"
    :settings="chartSettings"
  />
</template>

<script>
  export default {
    name: 'WordCloud',
    data() {
      return {
        chartData: {
          columns: ['name', 'value'],
          rows: [
            {
              name: '大帅',
              value: Math.floor(100 * Math.random())
            },
            {
              name: '中帅',
              value: Math.floor(100 * Math.random())
            },
            {
              name: '小帅',
              value: Math.floor(100 * Math.random())
            },
            {
              name: '袁大帅',
              value: Math.floor(100 * Math.random())
            },
            {
              name: '袁中帅',
              value: Math.floor(100 * Math.random())
            },
            {
              name: '袁小帅',
              value: Math.floor(100 * Math.random())
            }
          ]
        },
        chartSettings: {
          color: [
            'rgba(97, 216, 0, .7)',
            'rgba(204, 178, 26, .7)',
            'rgba(245, 166, 35, .7)',
            'rgba(156, 13, 113, .7)'
          ]
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>