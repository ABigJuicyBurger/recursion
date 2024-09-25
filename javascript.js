console.log("This was printed recursively");

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciIterative(n) {
  let a = 0;
  let b = 1;
  let c;
  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
}

function mergeSort(n) {
  if (n.length <= 1) {
    return n;
  }
  const middle = Math.floor(n.length / 2);
  const left = n.slice(0, middle);
  const right = n.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.time("fibonacci");
fibonacci(8);
console.timeEnd("fibonacci");
console.time("fibonacciIterative");
fibonacciIterative(8);
console.timeEnd("fibonacciIterative");
