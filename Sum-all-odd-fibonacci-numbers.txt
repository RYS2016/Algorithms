function sumFibs(num) {
  let n1 = 0, n2 = 1, next; 
  let arr = [1];
  next = n1 + n2;

  while (next <= num){
    arr.push(next);
    n1 = n2;
    n2 = next;
    next = n1 + n2;
  }
  return arr.filter(item => item % 2 !== 0).reduce((a, b) => a + b);
}

sumFibs(1000);










