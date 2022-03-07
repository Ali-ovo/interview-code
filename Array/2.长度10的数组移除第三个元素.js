  // 不使用循环 截取第三位字符

  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // splice(index,howmany,item1,...itemX) 操作数组 会改变原数组 
  // console.log(arr.splice(2, 1));


  // slice(start,end) 截取选中元素 返回新数组 不改变原数组
  // console.log(arr.slice(0, 2).concat(arr.slice(3,)));


  delete arr[2]
  // console.log(Array.from(...arr));


  console.log(arr.join("").replace("empty", "").split(""));
