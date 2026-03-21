function lengthConverter (value ,fromUnit, toUnit) {
    const unitInMeters = {
        km:100,
        m:1,
        cm:0.01
    };

    const valueInMeters = value * unitInMeters[fromUnit];

    const result = valueInMeters / unitInMeters[toUnit];

    return result;
}
lengthConverter (100,20,10)

console.log(lengthConverter)