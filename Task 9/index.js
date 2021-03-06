// Задача 1
// Код ниже получает из массива строк новый массив, содержащий их длины:

// Моё решение
var array = ["Есть", "жизнь", "на", "Марсе"];

function arrLength(arr) {
  return arr.map((str) => str.length);
}

console.log(arrLength(array)); // 4,5,2,5

// ========================================

// Задача 2
// На входе массив чисел, например: arr = [1,2,3,4,5].
// Напишите функцию getSums(arr), которая возвращает массив его частичных сумм.
// Иначе говоря, вызов getSums(arr) должен возвращать новый массив из такого же числа элементов, в котором на каждой позиции должна быть сумма элементов arr до этой позиции включительно.

// Моё решение 1
arr = [1, 2, 3, 4, 5];

function getSums(arr) {
  let newArr = [];

  arr.reduce((sum, num, i) => {
    return (newArr[i] = sum + num);
  }, 0);

  return newArr;
}

console.log(getSums(arr)); // [ 1, 3, 6, 10, 15 ]
