function insertionSort(array = []) {
  let i, j, temp

  for (i = 1; i < array.length - 1; i++) {
    temp = array[i]
    j = i - 1

    while (j > -1 && array[j] > temp) {
      array[j + 1] = array[j]
      j--
    }

    array[j + 1] = temp
  }

  return array
}

;(() => {
  let i, arr

  arr = []
  for (i = 0; i < 30; i++) arr.push(parseInt(Math.random() * 100))

  console.log(arr)
  console.log(insertionSort(arr))
})()
