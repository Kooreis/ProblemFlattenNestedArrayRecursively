```cpp
#include <iostream>
#include <vector>
#include <typeinfo>

template <typename T>
void flatten(const T& element, std::vector<int>& result) {
    result.push_back(element);
}

template <typename T>
void flatten(const std::vector<T>& elements, std::vector<int>& result) {
    for (const auto& element : elements) {
        flatten(element, result);
    }
}

int main() {
    std::vector<std::vector<int>> nestedArray = {{1, 2}, {3, 4, 5}, {6, 7, 8, 9}};
    std::vector<int> flattenedArray;

    flatten(nestedArray, flattenedArray);

    for (const auto& element : flattenedArray) {
        std::cout << element << " ";
    }

    return 0;
}
```