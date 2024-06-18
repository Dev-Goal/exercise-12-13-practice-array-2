let firstArray = [];
let secondArray = [];
let n;
while (true) {
  n = Number(prompt("Nhập vào số lượng của mảng"));
  if (Number.isInteger(n) && n > 0) {
    break;
  }
}
for (let i = 0; i < n; i++) {
  let input = prompt(`Nhập vào phần tử thứ ${i + 1}`);
  firstArray.push(input);
  secondArray.push(input);
}
let first = 0;
let last = secondArray.length - 1;

while (first < last) {
  let b = secondArray[first];
  secondArray[first] = secondArray[last];
  secondArray[last] = b;
  first++;
  last--;
}

alert("Mảng ban đầu " + firstArray);
alert("Mảng đảo ngược " + secondArray);
