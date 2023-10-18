<template>
  <div class="total-sales">
    <CommonCard />
  </div>
</template>

<script>
  import CommonCardMixin from '../../mixins/commonCardMixin'

  export default {
    name: 'TotalSales',
    mixins: [CommonCardMixin]
  }
</script>

<style lang="scss" scoped>

</style>