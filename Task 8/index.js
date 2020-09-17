// Задача:
// Функция принимает массив чиссел, необходимо реализовать функцию так, чтобы она вернула количество элементов переданного массива, которые отличаются от найбольшего элемента не больше 10%

// Моё решение №1
function func(arr) {
  const biggest = Math.max.apply(null, arr);
  const num = biggest - Math.floor(biggest / 10);

  return arr.filter((number) => number > num && number < biggest);
}

console.log(func([5, 88, 95, 100, 77, 21, 92])); // [95, 92]
console.log(func([2, 13, 55, 29, 19, 5, -5])); // []
