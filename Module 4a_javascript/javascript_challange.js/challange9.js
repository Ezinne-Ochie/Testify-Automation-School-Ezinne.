const text = 'early to bed early to rise ';
let count = 0;

for (const letter of text) {
    if ('aeiou'.includes(letter)) {
        count++;
    }
}

console.log(count);
