<template>
  <div class="total-sales">
    <CommonCard
      title="累计销售额"
      value="¥ 43,504,777"
    >
      <template>
        <div class="compare">

        </div>
      </template>
      
      <template v-slot:footer>
        <div>
          <span>昨日销售额 </span>
          <span class="money">¥ 30,000,000</span>
        </div>
      </template>
    </CommonCard>
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
.compare {
  height: 100%;
  background-color: pink;
}

span {
  font-size: 12px;
}
.money {
  margin-left: 5px;
  color: #333;
  font-weight: 700;
}
</style>