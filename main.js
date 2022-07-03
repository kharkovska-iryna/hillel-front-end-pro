// task_1 count
let count, squareCount, cubeCount;
count = 7;
squareCount = count ** 2;
cubeCount = count ** 3;
console.log('Значение:' + ' ' + count);
console.log('Квадрат этого значения:' + ' ' + squareCount);
console.log('Куб этого значения:',cubeCount);

// task_2 degrees
let degreesCelsius, degreesFahrenheit;
degreesCelsius = 10;
degreesFahrenheit = degreesCelsius*9/5+32;
console.log(degreesCelsius + '\u00B0' + 'C','равно',degreesFahrenheit + '\u00B0' + 'F');

let degreesCelsius_, degreesFahrenheit_;
degreesFahrenheit_ = 47;
degreesCelsius_ = Math.round((degreesFahrenheit_-32)*5/9);
console.log(degreesFahrenheit_ + '\u00B0' + 'F','равно',degreesCelsius_ + '\u00B0' + 'C');