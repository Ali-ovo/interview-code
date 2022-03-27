
    let arr = [
      { id: 0, name: '1', parent: -1, childNode: [] },
      { id: 1, name: '1', parent: 0, childNode: [] },
      { id: 99, name: '1-1', parent: 1, childNode: [] },
      { id: 111, name: '1-1-1', parent: 99, childNode: [] },
      { id: 66, name: '1-1-2', parent: 99, childNode: [] },
      { id: 1121, name: '1-1-2-1', parent: 112, childNode: [] },
      { id: 12, name: '1-2', parent: 1, childNode: [] },
      { id: 2, name: '2', parent: 0, childNode: [] },
      { id: 21, name: '2-1', parent: 2, childNode: [] },
      { id: 22, name: '2-2', parent: 2, childNode: [] },
      { id: 221, name: '2-2-1', parent: 22, childNode: [] },
      { id: 3, name: '3', parent: 0, childNode: [] },
      { id: 31, name: '3-1', parent: 3, childNode: [] },
      { id: 32, name: '3-2', parent: 3, childNode: [] }
    ]

    function arrToTree(arr, parentId) {

      const filterArr = arr.filter(item => {
        return parentId === undefined ? item.parent === -1 : item.parent === parentId
      })

      // console.log(filterArr);

      filterArr.map(item => {
        item.childNode = arrToTree(arr, item.id)
        return item
      })

      return filterArr
    }

    let tree = arrToTree(arr)

    console.log(tree);