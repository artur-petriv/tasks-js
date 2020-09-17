/* Задание:
В функцию передается массив, функция должна вернуть сумму всех нечетных чисел больше нуля.
*/

// Моё решение №1
function numbers(arr) {
  return arr.reduce((accumulator, currentValue) =>
    currentValue >= 0 && currentValue % 2 !== 0
      ? accumulator + currentValue
      : accumulator
  );
}

console.log(numbers([5, 0, -5, 20, 88, 17, -32])); // 22
