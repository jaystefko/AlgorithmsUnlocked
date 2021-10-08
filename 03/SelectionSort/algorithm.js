function selectionSort(array = []) {
  let i, j, min, minIndex

  for (i = 0; i < array.length - 1; i++) {
    min = array[i]
    minIndex = i

    for (j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        min = array[j]
        minIndex = j
      }
    }

    if (minIndex === i) guardian = false
    else {
      array[minIndex] = array[i]
      array[i] = min
    }
  }

  return array
}

;(() => {
  let i, arr

  arr = []
  for (i = 0; i < 30; i++) arr.push(parseInt(Math.random() * 100))

  console.log(arr)
  console.log(selectionSort(arr))
})()
