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
  response[0] = equalKeyArray[0]

  for (i = 1; i < max; i++) response[i] = equalKeyArray[i] + response[i - 1]

  return response
}

;(() => {
  let i, arr, eq

  arr = []
  for (i = 0; i < 10; i++) arr.push(parseInt(Math.random() * 10))
  eq = equalKeyCounter(arr, 10)

  console.log(arr)
  console.log(eq)
  console.log(lessKeyCounter(eq, 10))
})()
