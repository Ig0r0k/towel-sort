module.exports = function towelSort (matrix) {
  let result = [];
  let direct = true;
  if (arguments.length === 0) return [];
  for (let i = 0; i < matrix.length; i++) {
    if (direct) {
      for (let j = 0; j < matrix[i].length; j++) {
        result.push(matrix[i][j]);
        direct = false;
      }
    } else {
      for (let j = matrix[i].length - 1; j >= 0; j--) {
        result.push(matrix[i][j]);
        direct = true;
      }
    }
  }
  return result;
}
