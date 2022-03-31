// 判断出现次数最多的次数
function maxNum(item, arr) {
  let num = 0;
  arr.forEach(val => {
    item === val && num++
  })

  return num
}



function fn(arr1, arr2) {
  // 使用Map数据类型来记录次数
  let obj = new Map();

  // 合并数组并找出最多的次数, 并以键值对存放到Map数据类型
  [...arr1, ...arr2].forEach(item => {
    let hasNum = obj.get(item)
    let num = 1
    if (hasNum) {
      num = hasNum + 1
    }
    obj.set(item, num)
  })

  // 存放合并并去重之后的数组
  let arr = []
  // 遍历Map数据类型 然后把次数最多的直接push到新数组
  for (const key of obj.keys()) {
    if (obj.get(key) > 1) {
      for (let index = 0; index < Math.max(maxNum(key, arr1), maxNum(key, arr2)); index++) {
        arr.push(key)
      }
    } else {
      arr.push(key)
    }
  }

  // 最后进行排序
  return arr.sort((a, b) => a - b)
}

console.log(fn(
  [1, 100, 0, 5, 1, 5],
  [2, 5, 5, 5, 1, 3]
)
);
    // [0, 1, 1, 2, 3,5, 5, 5, 100]



    // let map = new Map([['name', 'xx'], ['age', 23]])

    // for (let key of map.keys()) {
    //   console.log(key);
    // }