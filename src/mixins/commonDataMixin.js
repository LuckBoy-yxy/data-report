function format(value) {
  const reg = /\d{1,3}(?=(\d{3})+$)/g
  return `${value}`.replace(reg, '$&,')
}

function wrapperPercentage(option, key) {
  return option && option[key] ? `${ option[key] }%` : '0%'
}

function wrapperMoney(option, key) {
  return option && option[key] ? `¥ ${ format(option[key]) }` : '¥ 0.00'
}

function wrapperNumber(option, key) {
  return option && option[key] ? format(option[key]) : 0
}

function wrapperOriginalNumber(o, k) {
  return o && o[k] ? o[k] : 0
}

function wrapperArray (option, key) {
  return option && option[key] ? option[key] : []
}

export default {
  computed: {
    reportData() {
      return this.getReportData()
    },
    salesToday() {
      return wrapperMoney(this.reportData, 'salesToday')
    },
    salesGrowthLastDay() {
      return wrapperPercentage(this.reportData, 'salesGrowthLastDay')
    },
    salesGrowthLastMonth() {
      return wrapperPercentage(this.reportData, 'salesGrowthLastMonth')
    },
    salesLastDay() {
      return wrapperMoney(this.reportData, 'salesLastDay')
    },
    orderToday() {
      return wrapperNumber(this.reportData, 'orderToday')
    },
    orderLastDay() {
      return wrapperNumber(this.reportData, 'orderLastDay')
    },
    orderTrend() {
      return wrapperArray(this.reportData, 'orderTrend')
    },
    orderUser() {
      return wrapperNumber(this.reportData, 'orderUser')
    },
    returnRate() {
      return wrapperPercentage(this.reportData, 'returnRate')
    },
    orderUserTrend() {
      return wrapperArray(this.reportData, 'orderUserTrend')
    },
    orderUserTrendAxis() {
      return wrapperArray(this.reportData, 'orderUserTrendAxis')
    },
    userToday() {
      return wrapperNumber(this.reportData, 'userToday')
    },
    userTodayNumber() {
      return wrapperOriginalNumber(this.reportData, 'userToday')
    },
    userLastMonth() {
      return wrapperOriginalNumber(this.reportData, 'userLastMonth')
    },
    userGrowthLastDay() {
      return wrapperPercentage(this.reportData, 'userGrowthLastDay')
    },
    userGrowthLastMonth() {
      return wrapperPercentage(this.reportData, 'userGrowthLastMonth')
    }
  },
  inject: ['getReportData', 'getWordCloud', 'getMapData']
}