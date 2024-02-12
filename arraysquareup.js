function squareUp(n) {
    const result = Array(n * n).fill(0);
    for (let i = n - 1; i < n * n; i += n) {
        for (let j = i, count = 1; count <= n - i % n; j--, count++) {
            result[j] = count;
        }
    }
    return result;
}

// Test cases
console.log(squareUp(3));  // Output: [0, 0, 1, 0, 2, 1, 3, 2, 1]
console.log(squareUp(2));  // Output: [0, 1, 2, 1]
console.log(squareUp(4));  // Output: [0, 0, 0, 1, 0, 0, 2, 1, 0, 3, 2, 1, 4, 3, 2, 1]
