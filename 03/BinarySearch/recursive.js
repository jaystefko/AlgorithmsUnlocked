function binarySearch(array = [], searchedElement = -1, left = -1, right = -1, middle = -1) {
  if (left > right) return -1
  middle = Math.floor((left + right) / 2)
  if (array[middle] === searchedElement) return middle
  else if (array[middle] < searchedElement) {
    return binarySearch(array, searchedElement, middle + 1, right)
  } else {
    return binarySearch(array, searchedElement, left, middle - 1)
  }
}

;(() => {
  const MAX = 100
  let i, a, b, c, arr

  arr = []
  for (i = 0; i < MAX; i++) arr.push(parseInt(Math.random() * 100))
  arr.sort((a, b) => a - b)

  a = parseInt(Math.random() * 100)
  b = parseInt(Math.random() * 100)
  c = parseInt(Math.random() * 100)

  console.log(a, b, c)

  a = binarySearch(arr, a, 0, MAX - 1)
  b = binarySearch(arr, b, 0, MAX - 1)
  c = binarySearch(arr, c, 0, MAX - 1)

  console.log(a, b, c)
})()
