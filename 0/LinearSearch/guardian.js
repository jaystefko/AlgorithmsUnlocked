function linearSearch(array = [], searchedElement = -1) {
  let last, i
  const MAX = array.length - 1

  last = array[MAX]
  array[MAX] = searchedElement
  i = 0

  while (array[i] !== searchedElement) i++

  return i < MAX ? i : last === searchedElement ? i : -1
}

;(() => {
  let a, b, c, arr

  arr = [2, 3, 1, 2]
  a = linearSearch(arr, 5)
  b = linearSearch(arr, 2)
  c = linearSearch(arr, 1)

  console.log(a, b, c)
})()
