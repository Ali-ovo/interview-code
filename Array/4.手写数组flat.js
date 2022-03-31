
    const flat = function (arr, dep = 1) {
      // 声明一个新数组
      let result = []
      // 遍历原数组
      arr.forEach(item => {
        // 当原数组内存在数组并且层级dep大于时递归
        if (Array.isArray(item) && dep > 0) {
          // 层级递减
          // dep--
          // 使用concat链接数组
          result = result.concat(flat(item, dep - 1))
        } else {
          result.push(item)
        }
      })
      return result
    }






    const arr = [1, 2, 3, [4, 5, [7, [6]]]]
    console.log(flat(arr, 1)); //  [1,2,3, 4, 5, [7, [6]]]
    // flat(arr, 10) //  [1,2,3, 4, 5, 7, 6]
