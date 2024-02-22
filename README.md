# Question: How do you flatten a nested array structure recursively? JavaScript Summary

The provided JavaScript code defines a function named `flattenArray` that takes a nested array as an input and returns a flattened version of it. The function uses recursion to achieve this. It starts by initializing an empty array named `result`. Then, it iterates over each element in the input array. If the current element is an array itself, the function calls itself with this sub-array as the argument, effectively starting a new level of recursion. The spread operator (`...`) is used to unpack the returned flattened sub-array into individual elements, which are then pushed into the `result` array. If the current element is not an array, it is simply pushed into the `result` array. This process continues until all elements have been processed, at which point the function returns the `result` array. The final line of the code logs the result of calling `flattenArray` with a deeply nested array as the argument, demonstrating the function's ability to flatten nested arrays.

---

# TypeScript Differences

The TypeScript version of the solution solves the problem in a similar way to the JavaScript version. Both versions use recursion to flatten the nested array structure. They both iterate over the elements of the input array, check if each element is an array, and if so, recursively call the flatten function on that element. If the element is not an array, they simply push it to the result array.

The main difference between the two versions is the use of TypeScript's static typing. In the TypeScript version, the function signature specifies that the input and output are both arrays of any type (`any[]`). This provides type safety, ensuring that the function is always called with an array and always returns an array. The JavaScript version does not have this feature, as JavaScript is a dynamically typed language.

Another difference is the use of the `concat` method in the TypeScript version to merge the flattened array with the result array, whereas the JavaScript version uses the spread operator (`...`) to achieve the same result. Both methods are valid and have similar performance characteristics, but the `concat` method is more widely supported in older browsers.

In conclusion, the TypeScript version provides the same functionality as the JavaScript version, but with the added benefit of static typing for better type safety and potentially fewer runtime errors.

---

# C++ Differences

The JavaScript version of the solution uses a function `flattenArray` that takes an array as an argument. It then iterates over the array using a for loop. If an element of the array is also an array (checked using `Array.isArray(value)`), it recursively calls `flattenArray` on that element and spreads the returned array into the `result` array using the spread operator (`...`). If the element is not an array, it simply pushes the element into the `result` array. The function then returns the `result` array, which is a flattened version of the input array.

The C++ version of the solution uses two overloaded functions `flatten`. The first version of `flatten` takes an integer and a reference to a vector of integers as arguments and simply pushes the integer into the vector. The second version of `flatten` takes a vector of integers and a reference to a vector of integers as arguments. It iterates over the input vector using a range-based for loop and calls `flatten` on each element. This results in a recursive call if the element is a vector itself. The flattened array is then printed to the console.

The main differences between the two versions are:

1. JavaScript uses `Array.isArray(value)` to check if an element is an array, while C++ uses function overloading to achieve the same effect.
2. JavaScript uses the spread operator (`...`) to add elements to the `result` array, while C++ uses `push_back`.
3. JavaScript uses a for loop with an index to iterate over the array, while C++ uses a range-based for loop.
4. JavaScript uses `console.log` to print the result, while C++ uses `std::cout`.
5. JavaScript uses dynamic typing, while C++ uses static typing and templates.

---
