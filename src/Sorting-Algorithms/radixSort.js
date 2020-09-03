function getDigit(num, i) {
  var formula = Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  return formula;
}

function digitCount(num) {
  var formula = Math.floor(Math.log10(Math.abs(num))) + 1;
  if (num === 0) return 1;
  return formula;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (var i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  console.log(nums);
  return nums;
}

radixSort([23, 345, 5467, 12, 2345, 9852]);
