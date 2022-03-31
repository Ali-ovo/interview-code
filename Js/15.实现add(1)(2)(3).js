

    // 简单实现方法 调用多少次就return多少方法
    // const add = (a) => {
    //   return x => {
    //     return y => {
    //       return z => x + y + x;
    //     }
    //   }
    // }
    // function add(...args) {


    // 升级版写法 通过闭包保存一个数据 然后返回一个函数 然后在这个闭包上可以直接访问存下来的数据
    function add(x) {
      let sum = x;

      let tmp = function (y) {
        sum = sum + y;
        return tmp;
      };

      tmp.toString = () => sum

      return tmp;
    }


    const num = add(1)(2)(3)(4)(20)
     alert(num)
