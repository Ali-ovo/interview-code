
    // 创建构造函数
    function CreateMyObj() {
      this.a = '1'
      this.b = {
        c: 'd'
      }

      this[Symbol('ss')] = 'ss'
    }

    // new 构造函数生成对象
    var obj = new CreateMyObj()

    // 构造函数原型上挂载属性
    CreateMyObj.prototype.e = 'f'


    console.log(obj);



    /*
     * object.keys 只能获得['a','b'] 不能遍历原型链 并且不含Symbol属性
     */
    // Object.keys(obj) 
    // console.log(Object.keys(obj));



    /*
     * forin 会遍历原型链 也不含symbol
     */
    // for (const key in obj) {
    //   // 会遍历到原型链
    //   console.log(key);
    //   // hasOwnProperty 检测是否是对象的自有属性
    //   // if (Object.hasOwnProperty.call(obj, key)) {
    //   // }
    // }


    /*
     *  Object.getOwnPropertyNames()  
     *  输出对象自身的可枚举和不可枚举属性的数组,不输出原型链上的属性和symbol
     * 
     * Object.getOwnPropertySymbols()  
     *  输出对象自身的不可枚举属性的数组,不输出原型链上的属性
     */
    // console.log(Object.getOwnPropertyNames(obj));
    // console.log(Object.getOwnPropertySymbols(obj));


    
    /*
     *  Reflect.ownKeys 可以拿到Symbol或字符串 也不管是否可枚举. 但不会遍历原型链
     *  
     */
    console.log(Reflect.ownKeys(obj));
