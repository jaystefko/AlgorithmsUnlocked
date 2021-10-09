function equalKeyCounter(array = [], max = -1) {
  let response, i
  response = new Array(max)

  for (i = 0; i < max; i++) response[i] = 0

  for (i = 0; i < array.length; i++) {
    response[array[i]]++
  }

  return response
}

function lessKeyCounter(equalKeyArray = [], max = -1) {
  let response, i
  response = new Array(max)
  response[0] = 0

  for (i = 1; i < max; i++) response[i] = equalKeyArray[i - 1] + response[i - 1]

  return response
}

function reorganise(array = [], lessKeyArray = [], max = -1) {
  let i, next, B, key, index
  B = new Array(array.length)
  next = new Array(max)

  for (i = 0; i < max; i++) next[i] = lessKeyArray[i] + 1

  for (i = 0; i < array.length; i++) {
    key = array[i]
    index = next[key]
    B[index - 1] = array[i]
    next[key]++
  }

  return B
}

function countingSort(array = [], max = -1) {
  let eq, less

  eq = equalKeyCounter(array, max)
  less = lessKeyCounter(eq, max)
  return reorganise(array, less, max)
}

;(() => {
  const MAX = 10
  let i, arr

  arr = []
  for (i = 0; i < 10; i++) arr.push(parseInt(Math.random() * MAX))

  console.log(countingSort(arr, MAX))
})()
