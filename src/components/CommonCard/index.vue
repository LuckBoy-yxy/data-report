<template>
  <div class="common-card">
    <div class="title">{{ title }}</div>

    <div class="value">{{ value }}</div>

    <div class="chart">
      <slot></slot>
    </div>

    <div class="line"></div>

    <div class="total">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CommonCard',
    props: {
      title: String,
      value: String
    }
  }
</script>

<style lang="scss" scoped>
.title {
  font-size: 12px;
  color: #999;
}

.value {
  margin-top: 5px;
  font-size: 25px;
  color: #000;
  letter-spacing: 1px;
}

.chart {
  height: 50px;
}

.line {
  margin: 10px 0;
  border-top: 1px solid #eee;
}

.total {
  font-size: 12px;
  color: #666;
}
</style>

<style lang="scss">
.emphasis {
  margin-left: 5px;
  color: #333;
  font-weight: 700;
}

.increase {
  margin-left: 5px;
  margin-top: -3px;
  width: 0;
  height: 0;
  border-width: 3px;
  border-color: transparent transparent red transparent;
  border-style: solid;
}

.decrease {
  margin-left: 5px;
  margin-top: 3px;
  width: 0;
  height: 0;
  border-width: 3px;
  border-color: green transparent transparent transparent;
  border-style: solid;
}
</style>