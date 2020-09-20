// Задача
/*
Функция принимает массив с целыми числами, необходимо реализовать функцию так,
чтобы она возвращала сумму чисел массива, которые записаны в четных индексах включая 0.
*/

// Моё решение 1

function getSum(arr) {
  return arr.reduce((acc, val, i) => (i % 2 === 0 ? acc + val : acc));
}

console.log(getSum([5, 7, -1, 12, 3, 0])); // 7
console.log(getSum([4, 12, 29, 6, 31, 2, -50])); // 14
