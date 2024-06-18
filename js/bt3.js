let firstArray = [];
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
}
let count = 0;
for (let i = 0; i < n; i++) {
  while (Number(firstArray[i])) {
    count += 1;
    break;
  }
}
alert(`Mảng vừa nhập có ${count} ký tự số`);
