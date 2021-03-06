/*
Функция принимает целое положительное число, необходимо реализовать функцию так, 
чтобы она возвращала массив, в котором будут записаны числа в убывающем порядке,
которые кратны 3, до нуля включительно.
*/

// Моё решение 1
function getArr(num) {
  let result = [];

  for (let i = num; i >= 0; i--) {
    if (i % 3 === 0) {
      result.push(i);
    }
  }

  return result;
}

console.log(getArr(15)); // [15, 12, 9, 6, 3, 0]
console.log(getArr(17)); // [15, 12, 9, 6, 3, 0]
console.log(getArr(22)); // [21, 18, 15, 12, 9, 6, 3, 0]
