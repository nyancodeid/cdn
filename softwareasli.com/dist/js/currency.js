var currency = {
  data: {
    usd: 0,
    euro: 0
  },
  methods: {
    setRate: function(selectedCurrency, value) {
      currency.data[selectedCurrency] = Number(value)
    },
    isRateAvailable: function(selectedCurrency) {
      return (currency.data[selectedCurrency] > 0)
    },
    convertTo: function(data, selectedCurrency) {
      selectedCurrency = selectedCurrency.toLowerCase()
      if (!currency.methods.isRateAvailable(selectedCurrency)) {
        return data
      } else {
        console.log(currency.data[selectedCurrency], data)
        return Math.round((data / currency.data[selectedCurrency]) * 100) / 100
      }
    }
  },
  events: {
    onRateChange: function(selectedCurrency) {
      var _value = $('#rate-' + selectedCurrency).val()
      console.log(selectedCurrency, _value)
      currency.methods.setRate(selectedCurrency, _value)
    }
  }
}