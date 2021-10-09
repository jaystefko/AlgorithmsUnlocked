function equalKeyCounter(array = [], max = -1) {
  let response, i
  response = new Array(max)

  for (i = 0; i < max; i++) response[i] = 0

  for (i = 0; i < array.length; i++) {
    response[array[i]]++
  }

  return response
}

;(() => {
  let i, arr

  arr = []
  for (i = 0; i < 10; i++) arr.push(parseInt(Math.random() * 10))

  console.log(arr)
  console.log(equalKeyCounter(arr, 10))
})()
