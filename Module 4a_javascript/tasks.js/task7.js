const side1 = '3'
const side2 = '2'
const side3 = '1'

if (side1 == side2 == side3) {
    console.log ('Equilateral triangle')
} else if (side1===side2||side1===side3||side2===side3) {
    console.log ('isosceles triangle')
} else {
    console.log ('Scalene triangle')
}
