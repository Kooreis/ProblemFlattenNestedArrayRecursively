```javascript
function flattenArray(data) {
    const result = [];

    for (let i = 0, length = data.length; i < length; i++) {
        const value = data[i];

        if (Array.isArray(value)) {
            result.push(...flattenArray(value));
        } else {
            result.push(value);
        }
    }

    return result;
}

console.log(flattenArray([1, [2, [3, [4, [5]]]]]));
```