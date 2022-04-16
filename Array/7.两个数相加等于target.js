

const twoSum = (arr, target) => {
  const wanted = {}

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    const theOther = target - num;
    if (wanted[num]) {
      return [num, theOther]
    }

    wanted[theOther] = true;
  }
}


twoSum([1, 11, 7, 15], 8)