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

  export default {
    name: 'Home',
    components: {
      TopView,
      BottomView,
      MapView,
      SalesView
    }
  }
</script>

<style lang="scss">
.home {
  padding: 20px;
  width: 100%;
  height: 100%;
  background-color: #eee;
  box-sizing: border-box;
}
</style>