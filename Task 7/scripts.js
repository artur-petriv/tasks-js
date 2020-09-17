/* Задание:
В функцию передается целое положительное число. Необходимо сделать так, чтобы функция возвращала сумму всех цифр в переданном числе.
*/

// Моё решение №1
function sumDigits(num) {
  return String(num)
    .split("")
    .reduce((accum, value) => +accum + +value);
}

console.log(sumDigits(123)); // 6
console.log(sumDigits(9045)); // 13
console.log(sumDigits(3)); // 3
