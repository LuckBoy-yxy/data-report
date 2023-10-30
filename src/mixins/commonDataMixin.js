function format(value) {
  return value
}

function wrapperPercentage(option, key) {
  return option && option[key] ? `${ option[key] }%` : '0%'
}

function wrapperMoney(option, key) {
  return option && option[key] ? `¥ ${ option[key] }` : '¥ 0.00'
}

function wrapperNumber(option, key) {
  return option && option[key] ? format(option[key]) : 0
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
    }
  },
  inject: ['getReportData', 'getWordCloud', 'getMapData']
}