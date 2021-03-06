// Задача
// Реализовать функцию в которую передается массив с числами, а функция возвращает массив, очищенный от дубллей.

// Моё решение 1
function unique(arr) {
  let newArr = [];

  arr.forEach((num) => {
    let exist = newArr.some((val) => val === num);

    if (!exist) newArr.push(num);
  });

  return newArr;
}

console.log(unique([1, 8, 1, 5, 9, 5, 8])); //[1, 8, 5, 9]

// 1. Створюю пустий масив
// 2. Перебераю головний массив по цифрам
// 3. Якщо цифра не рівна любій цифрі з пустого масиву то добавляєм в новий массив
