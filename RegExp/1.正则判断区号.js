    // 区号+8位数字 或者区号+特殊号码/10010/110
    let reg = /^\d{3}-(\d{8}|10010|110)/g
    let str = '020-12345678'
    let str2 = '020-10010'
    let str3 = '123-100'
    console.log(reg.test(str3));
  