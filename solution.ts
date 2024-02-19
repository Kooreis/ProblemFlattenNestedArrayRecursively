Here is a TypeScript solution for the problem:

```typescript
function flattenArray(arr: any[]): any[] {
    let flatArray: any[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flatArray = flatArray.concat(flattenArray(arr[i]));
        } else {
            flatArray.push(arr[i]);
        }
    }
    return flatArray;
}

console.log(flattenArray([1, [2, [3, 4], 5], 6]));
```

This console application will flatten a nested array structure recursively. The `flattenArray` function takes an array as an argument and checks each element. If the element is an array, it recursively calls `flattenArray` on that element and concatenates the result to `flatArray`. If the element is not an array, it simply pushes the element to `flatArray`. The function finally returns `flatArray`, which is a flattened version of the input array. The `console.log` statement at the end tests the function with a nested array.