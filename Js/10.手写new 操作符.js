function myNew(fn, ...args) {
  // 基于原型链 创建一个新对象
  let newObj = Object.create(fn.prototype)

  // 添加属性到新对象上 并获取obj函数的结果
  let res = fn.call(newObj, ...args)

  // 如果执行结果有返回值并且是一个对象, 返回执行的结果, 否则, 返回新创建的对象
  return res && typeof res === 'object' ? res : newObj;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}


// console.log(myNew(Person, "lihua", 18););

class Child {
  constructor(name) {
    this.name = name
  }
}

console.log(myNew(Person, "张三"));
// console.log(new Child("张三"));

