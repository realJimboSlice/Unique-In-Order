var uniqueInOrder = function (iterable) {
  // Declare empty array
  inOrderArr = [];
  // Loop through the iterable
  for (let i = 0; i < iterable.length; i++) {
    // If the current element is not equal to the next element, push it to the inOrderArr
    if (iterable[i] !== iterable[i + 1]) {
      inOrderArr.push(iterable[i]);
    }
  }
  return inOrderArr;
};

// console.log(uniqueInOrder("AAAABBBCCDAABBB")); // ['A', 'B', 'C', 'D', 'A', 'B']
// console.log(uniqueInOrder("ABBCcAD")); // ['A', 'B', 'C', 'c', 'A', 'D']
// console.log(uniqueInOrder([1, 2, 2, 3, 3])); // [1,2,3]
