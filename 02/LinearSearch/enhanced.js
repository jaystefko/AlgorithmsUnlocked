function linearSearch(array = [], searchedElement = -1) {
  let i

  for (i = 0; i < array.length; i++) {
    if (array[i] === searchedElement) return i
  }

  return -1
}

;(() => {
  let a, b, c, arr

  arr = [2, 3, 1, 2]
  a = linearSearch(arr, 5)
  b = linearSearch(arr, 2)
  c = linearSearch(arr, 1)

  console.log(a, b, c)
})()
