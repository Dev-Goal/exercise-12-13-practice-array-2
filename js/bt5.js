// let firstArray = [];
// let a;
// while (true) {
//   a = Number(prompt("Nhập vào số lượng phần tử của mảng 1"));
//   if (Number.isInteger(a) && a > 0) {
//     break;
//   }
// }
// for (let i = 0; i < a; i++) {
//   let input = prompt(`Nhập vào phần tử thứ ${i + 1} của mảng 1`);
//   firstArray.push(input);
// }
// console.log("Mảng 1 là " + firstArray);

// let secondArray = [];
// let b;
// while (true) {
//   b = Number(prompt("Nhập vào số lượng phần tử của mảng 2"));
//   if (Number.isInteger(b) && b > 0) {
//     break;
//   }
// }
// for (let i = 0; i < b; i++) {
//   let input = prompt(`Nhập vào phần tử thứ ${i + 1} của mảng 2`);
//   secondArray.push(input);
// }
// console.log("Mảng 2 là " + secondArray);

// let thirdArray = firstArray + secondArray;
// console.log(thirdArray);

var btnSoSanh = document.getElementById("btnSoSanh");
btnSoSanh.addEventListener("click", getSoSanh);
function getSoSanh() {
  let str1 = document.getElementById("array1").value;
  let str2 = document.getElementById("array2").value;
  let strArray1 = str1.split(" ");
  let strArray2 = str2.split(" ");
  let message = "";
  for (let i = 0; i < strArray1.length; i++) {
    for (let j = 0; j < strArray2.length; j++) {
      if (strArray1[i] === strArray2[j]) {
        message = "Hai chuỗi này giống nhau";
      } else {
        message = "Hai chuỗi này không giống nhau";
      }
    }
  }
  document.getElementById("result").innerHTML = message;
}
