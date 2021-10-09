function divide(array = [], left = -1, right = -1) {
  let pivotIndex, pivotValue, i, temp

  pivotIndex = left
  pivotValue = array[right]

  for (i = left; i < right; i++) {
    if (array[i] <= pivotValue) {
      temp = array[i]
      array[i] = array[pivotIndex]
      array[pivotIndex] = temp
      pivotIndex++
    }
  }

  temp = array[pivotIndex]
  array[pivotIndex] = array[right]
  array[right] = temp

  return pivotIndex
}

function quickSort(array = [], left = -1, right = -1, pivotIndex = -1) {
  if (left >= right) {
    return array
  }

  pivotIndex = divide(array, left, right)
  quickSort(array, left, pivotIndex - 1)
  quickSort(array, pivotIndex + 1, right)
}

;(() => {
  let i, arr

  arr = []
  for (i = 0; i < 30; i++) arr.push(parseInt(Math.random() * 100))

  console.log(arr)

  quickSort(arr, 0, arr.length - 1)

  console.log(arr)
})()
