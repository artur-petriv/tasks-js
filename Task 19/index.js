/*
В функцию передается строка, содержащая английские буквы, функция должна вернуть массив, содержащий все возможные комбинации букв. Повторяющихся строк в массиве быть не должно.
*/

// Моё решение 1

function getVariants(str) {
  let arr = [...str];
  let newArr = [];

  for (let i = 0; i < str.length * 6; i++) {
    // newArr.push(arr[])
  }
}

// ["asd", "ads", "sad", "sda", "das", "dsa"]
console.log(getVariants("asd"));
