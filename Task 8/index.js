// Задача:
// Функция принимает массив чиссел, необходимо реализовать функцию так, чтобы она вернула элементы переданного массива, которые отличаются от найбольшего элемента не больше 10%

// Моё решение №1
function func(arr) {
  const biggest = Math.max.apply(null, arr);
  const min = biggest - Math.floor(biggest / 10);

  return arr.filter((number) => number > min && number < biggest);
}

// Моё решение №2
function func2(arr) {
  const max = Math.max(...arr);
  const min = Math.floor(max * 0.9);

  return arr.filter((num) => num > min && num < max);
}

console.log(func([5, 88, 95, 100, 77, 21, 92])); // [95, 92]
console.log(func([2, 13, 55, 29, 19, 5, -5])); // []

console.log(func2([5, 88, 95, 100, 77, 21, 92])); // [95, 92]
console.log(func2([2, 13, 55, 29, 19, 5, -5])); // []
