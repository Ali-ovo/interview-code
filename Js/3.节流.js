/* function throttle(fn) {
    let canRun = true; // 通过闭包保存一个标记
    return function () {
      if (!canRun) return; // 在函数开头判断标记是否为true，不为true则return
      canRun = false; // 立即设置为false
      setTimeout(() => {
        // 将外部传入的函数的执行放在setTimeout中
        fn.apply(this, arguments);
        // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。当定时器没有执行的时候标记永远是false，在开头被return掉
        canRun = true;
      }, 500);
    };
  }
  function sayHi(e) {
    console.log(e.target.innerWidth, e.target.innerHeight);
  }
  window.addEventListener("resize", throttle(sayHi)); */

// 装逼写法
function throttle(fn) {
  let canRun = null; // 通过闭包保存一个标记
  return function () {
    if (canRun) return; // 在函数开头判断标记是否为true，不为true则return
    canRun = setTimeout(() => {
      // 将外部传入的函数的执行放在setTimeout中
      fn.apply(this, arguments);
      // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。当定时器没有执行的时候标记永远是false，在开头被return掉
      canRun = null;
    }, 500);
  };
}
function sayHi() {
  console.log("节流成功");
}

const interFn = setInterval(throttle(sayHi), 100);

setTimeout(() => {
  clearInterval(interFn);
}, 2000);

// 简单写法
/* function throttle(fn) {
    // 节流阀
    let switchs = null;
    return function () {
      if (switchs) return;

      switchs = setTimeout(() => {
        fn.apply(this);

        switchs = null;
      }, 500);
    };
  }
  function sayHi() {
    console.log("节流成功");
  }
  var div = document.getElementById("div");
  div.addEventListener("click", throttle(sayHi)); */
