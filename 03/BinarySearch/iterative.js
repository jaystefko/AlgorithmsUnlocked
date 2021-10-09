function binarySearch(array = [], searchedElement = -1) {
  let left, right, middle
  left = 0
  right = array.length - 1

  while (left <= right) {
    middle = Math.floor((right + left) / 2)

    if (array[middle] === searchedElement) return middle
    else if (array[middle] < searchedElement) {
      left = middle + 1
    } else {
      right = middle - 1
    }
  }

  return -1
}

;(() => {
  let i, a, b, c, arr

  arr = []
  for (i = 0; i < 1000; i++) arr.push(parseInt(Math.random() * 100))
  arr.sort((a, b) => a - b)

  a = parseInt(Math.random() * 100)
  b = parseInt(Math.random() * 100)
  c = parseInt(Math.random() * 100)

  console.log(a, b, c)

  a = binarySearch(arr, a)
  b = binarySearch(arr, b)
  c = binarySearch(arr, c)

  console.log(a, b, c)
})()
