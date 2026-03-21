for (let row = 1; row <= 10; row++) {
    let line = ""; 
    for (let col = 1; col <= 10; col++) {
        line += (row * col) + "\t"; // \t adds a "tab" space to align numbers
    }
    console.log(line);
}
