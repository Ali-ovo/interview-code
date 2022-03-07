
    function maxNum(item, arr) {
      let num = 0;
      arr.forEach(val => {
        item === val && num++
      })

      return num
    }



    function fn(a, b) {

      let obj = new Map();
      

      [...a, ...b].forEach(item => {
        let hasNum = obj.get(item)
        let num = 1
        if (hasNum) {
          num = hasNum + 1
        }
        obj.set(item, num)
      })

      let arr = []

      for (const key of obj.keys()) {
        if (obj.get(key) > 1) {
          for (let index = 0; index < Math.max(maxNum(key, a), maxNum(key, b)); index++) {
            arr.push(key)
          }

        } else {
          arr.push(key)
        }
      }

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