// This was the most clever and "best practices" solution on codewars

var uniqueInOrder = function (iterable) {
  // ... (Spread Operator): The spread operator is used to expand iterable elements. In this case, it's used to convert the iterable into an array.
  // The filter() method creates a new array with all elements that pass the test implemented by the provided function.
  // (a, i) => a !== iterable[i-1]: This is an arrow function, a more concise syntax for writing function expressions in JavaScript. The => symbol is used to define it. The parameters are defined to the left of the arrow and the function body is defined to the right. In this case, a and i are parameters representing the current element and its index, respectively. The function body a !== iterable[i-1] is a test that returns true if the current element is not equal to the previous element in the iterable.
  return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};

// I'll see if I can't start using these kinds of tricks in my next solutions
