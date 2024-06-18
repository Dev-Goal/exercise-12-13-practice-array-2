let array = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
  [17, 18, 19, 20],
];
for (var i in array) {
  console.log("row " + i);
  for (var j in array[i]) {
    console.log(" " + array[i][j]);
  }
}

