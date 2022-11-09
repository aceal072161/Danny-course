let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for (let i = 0; i < arr.length; i++) {
  if (isPrime(arr[i])) {
    console.log(i + 1, "質數");
  } else {
    console.log(i + 1, "非質數");
  }
}

function isPrime(num) {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
//再去想
