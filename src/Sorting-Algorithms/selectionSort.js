//console.log("selection sort");

function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var min = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      var temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
    console.log(arr);
    return arr;
  }
}

//selectionSort([15, 12, 14, 10]);
