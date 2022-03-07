// 1. 使用Try catch
try {
  new Promise((resolve, reject) => {
    reject("WTF 123");
  });
} catch (e) {
  console.log("e", e);
  throw e;
}

// 2. 使用全局方法 unhandledrejection
window.addEventListener("unhandledrejection", (event) => {
  event && event.preventDefault();
  console.log("event", event);
});
