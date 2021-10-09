function merge(leftArray = [], rightArray = []) {
  let i, j, result

  result = []
  i = j = 0

  while (i < leftArray.length && j < rightArray.length) {
    if (leftArray[i] < rightArray[j]) {
      result.push(leftArray[i])
      i++
    } else {
      result.push(rightArray[j])
      j++
    }
  }

  while (i < leftArray.length) {
    result.push(leftArray[i])
    i++
  }

  while (j < rightArray.length) {
    result.push(rightArray[j])
    j++
  }

  return result
}

function mergeSort(array = []) {
  let leftArray, rightArray, middle

  if (array.length < 2) return array

  middle = Math.floor(array.length / 2)
  leftArray = mergeSort(array.slice(0, middle))
  rightArray = mergeSort(array.slice(middle, array.length))

  return merge(leftArray, rightArray)
}

;(() => {
  let i, arr

  arr = []
  for (i = 0; i < 30; i++) arr.push(parseInt(Math.random() * 100))

  console.log(arr)
  console.log(mergeSort(arr))
})()
