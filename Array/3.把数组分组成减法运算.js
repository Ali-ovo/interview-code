var newArr = [5, [[4, 3], 2, 1]]

    // 1.
    let newStringArr = `${JSON.stringify(newArr)}`
    let fn = newStringArr.split("").map((el) => {
      switch (el) {
        case "[":
          return '('
        case "]":
          return ')'
        case ",":
          return '-'
        default:
          return el
      }
    }).join("")
    // console.log(new Function("return " + fn)());



    // 2.
    function run(arr) {
      return arr.reduce((pre, cur) => {
        let first = Array.isArray(pre) ? run(pre) : pre
        let tempArr = Array.isArray(cur) ? run(cur) : cur
        return first - tempArr
      })
    }

    // 3.
    // function test(arr) {
    //   function isArr(isarr) {

    //     return !Array.isArray(isarr) ? isarr : test(isarr)
    //   }
      
    //   var result = isArr(arr[0])

    //   for (var i = 1; i < arr.length; i++) {
    //     result = result - isArr(arr[i])
    //   }
    //   return result

    // }


    console.log(run(newArr));