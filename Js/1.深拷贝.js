// 深拷贝拷贝多层, 每一级别的数据都会拷贝.
let obj = {
  id: 1,
  msg: {
    age: 18,
  },
  color: ["pink", "red"],
};
let newObj = {};

const isObj = (val) => typeof val === "object" && val !== null;

// 写法1
function deepClone(obj) {
  // 通过 instanceof 去判断你要拷贝的变量它是否是数组（如果不是数组则对象）。

  // 1. 准备你想返回的变量（新地址）。
  const newObj = obj instanceof Array ? [] : {}; // 核心代码。

  // 2. 做拷贝；简单数据类型只需要赋值，如果遇到复杂数据类型就再次进入进行深拷贝，直到所找到的数据为简单数据类型为止。
  for (const key in obj) {
    const item = obj[key];

    newObj[key] = isObj(item) ? deepClone(item) : item;
    // newObj[key] = Object.prototype.toString.call(item) === "[object Object]" ? deepClone(item) : item;
  }

  // 3. 返回拷贝的变量。
  return newObj;
}

// 写法2 利用es6新特性 WeakMap弱引用 性能更好
function deepClone2(obj, wMap = new WeakMap()) {
  if (isObj(obj)) {
    // 判断是对象还是数组
    let target = Array.isArray(obj) ? [] : {};

    // 如果存在这个就直接返回
    if (wMap.has(obj)) {
      return wMap.get(obj);
    }

    wMap.set(obj, target);

    // 遍历对象
    Reflect.ownKeys(obj).forEach((item) => {
      // 拿到数据后判断是复杂数据还是简单数据
      target[item] = isObj(obj[item]) ? deepClone2(obj[item], wMap) : obj[item];
    });

    return target;
  } else {
    return obj;
  }
}

// newObj = deepClone2(obj);
// newObj.color.push("123123123");
// console.log("obj", obj);
// console.log("newObj", newObj);
