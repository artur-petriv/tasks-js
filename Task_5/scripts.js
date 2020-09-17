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

// Моё решение №2
function numbers2(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 !== 0) {
      count += arr[i];
    }
  }

  return count;
}

console.log(numbers([5, 0, -5, 20, 88, 17, -32])); // 22
console.log(numbers2([5, 0, -5, 20, 88, 17, -32])); // 22
