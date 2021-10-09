function easySort(array = []) {
  let counter, i
  counter = 0

  for (i = 0; i < array.length; i++) {
    if (array[i] === 0) counter++
  }

  for (i = 0; i < counter; i++) {
    array[i] = 0
  }

  for (; i < array.length; i++) {
    array[i] = 1
  }

  return array
}

;(() => {
  let i, arr

  arr = []
  for (i = 0; i < 5; i++) arr.push(Math.round(Math.random()))

  console.log(arr)
  console.log(easySort(arr))
})()
