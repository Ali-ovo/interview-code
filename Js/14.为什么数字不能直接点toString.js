 // 1.因为数字直接.toString会被认为是小数 所以需要加一个空格才能解决
    // 123 .toString()

    var a = {
      b: '1',
      c: '2'
    }

    var b = [1, 2, 3, 4]
    // const c = b[Symbol.iterator]()
    // console.log(c.next());

    console.log(b);
    // for (const item of b) {
    //   console.log(item);
    // }

    for (const key in a) {
      console.log(key);
    }