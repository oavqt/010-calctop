const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
const half = (a) => 1 / a;
const percentage = (a) => a / 100;
const square = (a, b) => a ** b;
let root = (a) => {
  let lower = 0;
  let upper = a;
  while (lower <= upper) {
    let mid = Math.floor((lower + upper) / 2);
    if (mid * mid <= a) {
      lower = mid + 1;
    } else {
      upper = mid - 1;
    }
  }
  return upper;
};


let root = (a) => {
    let avg = (a, b) => (a + b)/2, c=5, b;
    for (let i = 0; i <= 25; i++){
    b = a/c 
    c = avg(b, c)
    }
    return c
}