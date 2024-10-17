function getAverage(marks){
  return Math.floor(marks.reduce((acc, c) => acc + c) / marks.length)
}
