
// call
Function.prototype.MyCall = function (context) {
  if (typeof this !== "function") {
    throw new Error('type error')
  }

  if (context === null || context === undefined) {
    // 指定为 null 和 undefined 的 this 值会自动指向全局对象(浏览器中为window)
    context = window
  } else {
    context = Object(context) // 值为原始值（数字，字符串，布尔值）的 this 会指向该原始值的实例对象
  }


  // 使用Symbol 来确定唯一
  const fnSym = Symbol()

  //模拟档期那的对象的this指向
  context[fnSym] = this

  // 获取参数
  const args = [...arguments].slice(1)

  //绑定参数
  const result = context[fnSym](...args)
  //清除定义的this
  delete context[fnSym]

  // 返回结果  //清除定义的this
  return result
}

// Apply
Function.prototype.MyApply = function (context) {
  if (typeof this !== "function") {
    throw new Error('type error')
  }

  if (context === null || context === undefined) {
    // 指定为 null 和 undefined 的 this 值会自动指向全局对象(浏览器中为window)
    context = window
  } else {
    context = Object(context) // 值为原始值（数字，字符串，布尔值）的 this 会指向该原始值的实例对象
  }


  // 使用Symbol 来确定唯一
  const fnSym = Symbol()
  //模拟档期那的对象的this指向
  context[fnSym] = this

  // 获取参数
  const args = [...arguments][1]

  //绑定参数
  const result = arguments.length > 1 ? context[fnSym](...args) : context[fnSym]()

  //清除定义的this
  delete context[fnSym]

  // 返回结果  //清除定义的this
  return result
}

// bind

Function.prototype.MyBind = function (context) {
  if (typeof this !== "function") {
    throw new Error('type error')
  }

  if (context === null || context === undefined) {
    // 指定为 null 和 undefined 的 this 值会自动指向全局对象(浏览器中为window)
    context = window
  } else {
    context = Object(context) // 值为原始值（数字，字符串，布尔值）的 this 会指向该原始值的实例对象
  }

  //模拟档期那的对象的this指向
  const self = this

  // 获取参数
  const args = [...arguments].slice(1)

  return function Fn(...newFnArgs) {
    console.log(this);
    console.log("context", context);
    console.log("args", args);
    if (this instanceof Fn) {
      return new self(...args, ...newFnArgs)
    }
    return self.apply(context, [...args, ...newFnArgs])
  }

}



const obj = {
  name: 1
}


function getName(name, age) {
  this.age = age
  this.name = name
  return this
}

// const newBindFn = getName.MyBind(obj, "11", "100")
// console.log(new newBindFn);
// console.log(getName.bind(obj, "11", "100")());