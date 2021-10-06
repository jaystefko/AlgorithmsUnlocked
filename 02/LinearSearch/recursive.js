function linearSearch(array = [], searchedElement = -1, n = -1, i = 0) {
  if (i > n) return -1
  else if (array[i] === searchedElement) return i
  return linearSearch(array, searchedElement, n, i + 1)
}

;(() => {
  let a, b, c, arr

  arr = [2, 3, 1, 2]
  a = linearSearch(arr, 5, arr.length)
  b = linearSearch(arr, 2, arr.length)
  c = linearSearch(arr, 1, arr.length)

  console.log(a, b, c)
})()
