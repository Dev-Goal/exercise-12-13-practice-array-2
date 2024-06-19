var btnChange = document.getElementById("btn");
btnChange.addEventListener("click", getChange);
function getChange() {
  let array = document.getElementById("txt").value;
  let strArray = array.split(" ");
  // console.log(strArray);
  for (let i = 0; strArray.length; i++) {
    if (strArray[i] == "-") {
      strArray[i] = "_";
      break;
    }
  }
  //   return array;
  //   let result = arrstrArrayay.join("");
  document.getElementById("result").innerHTML = strArray;
}
