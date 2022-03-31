// 防抖
function debounce(fn) {
  let timeout = null;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, 500);
  };
}
function sayHi() {
  console.log("防抖");
}

const interFn = setInterval(debounce(sayHi), 100);

setTimeout(() => {
  clearInterval(interFn);
}, 2000);

// 简易写法
// var inp = document.getElementById("inp");
// let timeout = null;
// inp.addEventListener("input", function () {
//   clearTimeout(timeout);
//   timeout = setTimeout(() => {
//     console.log("66");
//   }, 500);
// });
