function riverSizes(matrix) {
  let ans = [];

  for(let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++) { 
      if (matrix[i][j] === 1) {
        ans.push(getSum(i, j, 0, matrix))
      }
    }
  }
  return ans
}


function getSum(i, j, size, matrix) {
  if (j < 0 || i < 0 || i === matrix.length || j === matrix[0].length) {
    return 0
  }
  
  if(matrix[i][j] === 0){
    return 0
  }

  matrix[i][j] = 0

  let top = getSum(i - 1, j, size, matrix)
  let right = getSum(i, j + 1, size, matrix)
  let bottom = getSum(i + 1, j, size, matrix)
  let left = getSum(i, j - 1, size, matrix)

  size += top
  size += right
  size += bottom
  size += left
  size++
  
  return size
}

// Do not edit the line below.
exports.riverSizes = riverSizes;

