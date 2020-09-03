//console.log("the bubble sort script is linked");

function bubbleSort(arr) {
  for (var i = arr.length; i > 0; i--) {
    var noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        var noSwaps = false;
      }
    }
    if (noSwaps === true) {
      break;
    }
  }
  console.log(arr);
  return arr;
}

//bubbleSort([9, 14, 6, 12, 1]);
