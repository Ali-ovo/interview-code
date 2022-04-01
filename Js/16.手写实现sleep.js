

// 使用 promise 配合await的异步方法来实现
{
  (async () => {
    console.log('start');
    await sleep(3000)
    console.log('end');

    function sleep(timer) {
      return new Promise(res => {

        setTimeout(() => {
          res()
        }, timer);
      })
    }
  })();
}

// 方法二 在网上查询的 这是完全堵塞进程来达到sleep
{
  (async () => {
    console.log('start');
    await sleep(3000)
    console.log('end');

    function sleep(delay) {
      let t = Date.now();
      while (Date.now() - t <= delay) {
        continue;
      }
    };
  })()
}