<template>
  <div class="total-sales">
    <CommonCard
      title="累计销售额"
      :value="salesToday"
    >
      <template>
        <div class="compare-wrapper">
          <div class="compare">
            <span>日同比</span>
            <span class="emphasis">{{ salesGrowthLastDay }}</span>
            <div class="increase"></div>
          </div>
          <div class="compare">
            <span>月同比</span>
            <span class="emphasis">{{ salesGrowthLastMonth }}</span>
            <div class="decrease"></div>
          </div>
        </div>
      </template>
      
      <template v-slot:footer>
        <div>
          <span>昨日销售额 </span>
          <span class="emphasis">{{ salesLastDay }}</span>
        </div>
      </template>
    </CommonCard>
  </div>
</template>

<script>
  import CommonCardMixin from '../../mixins/commonCardMixin'
  import commonDataMixin from '../../mixins/commonDataMixin'

  export default {
    name: 'TotalSales',
    mixins: [CommonCardMixin, commonDataMixin]
  }
</script>

<style lang="scss" scoped>
.compare-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  .compare {
    display: flex;
    align-items: center;
    margin-top: 3px;
    font-size: 12px;
    color: #666;
  }
}
</style>