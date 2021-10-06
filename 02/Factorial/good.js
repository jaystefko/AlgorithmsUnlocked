function factorial(n = -1) {
  return n < 2 ? 1 : n * factorial(n - 1)
}

;(() => {
  let a, b, c

  a = factorial(5)
  b = factorial(2)
  c = factorial(3)

  console.log(a, b, c)
})()
