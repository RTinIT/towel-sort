


module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length === 0) {
    return []
  }
  let res = []
  matrix.forEach((elem, index) => comparision(elem, index))
  function comparision(elem, index) {
      if (index % 2 !== 0) {
          elem = elem.reverse() 
          res.push(elem)
      } else {
          res.push(elem)
      }
  }
  res = [].concat.apply([], res)
  return res
}
