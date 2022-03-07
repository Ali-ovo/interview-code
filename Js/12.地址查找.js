const address = [
  {
    id: 1,
    name: '北京市',
    children: [
      {
        id: 11,
        name: '海淀区',
        children: [
          {
            id: 111,
            name: '中关村',
          }
        ]
      },
      {
        id: 12,
        name: '朝阳区',
      },
    ],
  },
  {
    id: 2,
    name: '河北省'
  }
]



const getName = (arr, id) => {
  let name
  arr.forEach(item => {
    if (item.id == id) {
      name = item.name
    } else if (item.children) {
      name = getName(item.children, id)
    } 
  })

  return name
}

console.log(getName(address, 12));