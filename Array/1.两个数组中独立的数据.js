var a = [1, 2, 4], b = [1, 3, 8, 4]

const newArr = a.concat(b).filter((item, _, arr) => {
  return arr.indexOf(item) === arr.lastIndexOf(item)
})

console.log(newArr);
