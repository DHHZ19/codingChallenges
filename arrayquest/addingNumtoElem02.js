function number(array) {
    return array.map(function(line, i) {
      return String(i + 1) + ": " + line
    })
  }