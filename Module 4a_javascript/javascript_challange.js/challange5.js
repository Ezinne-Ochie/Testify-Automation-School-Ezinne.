function reverseArray(arr) {
    let reversed = [];
    for (const item of arr) {
        reversed.unshift(item); 
    }
    return reversed;
}


const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(reverseArray(myNumbers)); 

