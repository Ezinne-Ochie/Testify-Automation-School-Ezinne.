function removeNegatives(arr) {
    let result = [];
    for (const num of arr) {
        if (num >= 0) {
            result.push(num);
        }
    }
    return result;
}

console.log(removeNegatives([-5, 10, -2, 3]));
