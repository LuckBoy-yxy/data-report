<template>
  <div class="home">
    <TopView />

    <SalesView />

    <BottomView />

    <MapView />
  </div>
</template>

<script>
  import TopView from '../components/TopView/index.vue'
  import BottomView from '../components/BottomView/index.vue'
  import MapView from '../components/MapView/index.vue'
  import SalesView from '../components/SalesView/index.vue'

  import { wordcloud, screenData, mapScatter } from '../api'

  export default {
    name: 'Home',
    components: {
      TopView,
      BottomView,
      MapView,
      SalesView
    },
    data() {
      return {
        reportData: null,
        wordCloud: null,
        mapData: null
      }
    },
    methods: {
      getReportData() {
        return this.reportData
      },
      getWordCloud() {
        return this.wordCloud
      },
      getMapData() {
        return this.mapData
      }
    },
    provide() {
      return {
        getReportData: this.getReportData,
        getWordCloud: this.getWordCloud,
        getMapData: this.getMapData
      }
    },
    mounted() {
      screenData().then(data => { this.reportData = data })
      wordcloud().then(data => { this.wordCloud = data })
      mapScatter().then(data => { this.mapData = data })
    }
  }
</script>

<style lang="scss">
.home {
  padding: 20px;
  width: 100%;
  // height: 100%;
  background-color: #eee;
  box-sizing: border-box;
}
</style>