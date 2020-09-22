/*
В функцию передается строка, содержащая английские буквы, функция должна вернуть массив, содержащий все возможные комбинации букв. Повторяющихся строк в массиве быть не должно.
*/

// Моё решение 1

function getVariants(str) {
  if (str.length === 1) {
    return [str];
  }

  let arr = [];
  for (let i = 0; i < str.length; i++) {
    const vars = getVariants(str.slice(0, i) + str.slice(i + 1));
    for (const option of vars) {
      if (!arr.includes(str[i] + variant)) {
        arr.push(str[i] + option);
      }
    }
  }
}

// ["asd", "ads", "sad", "sda", "das", "dsa"]
console.log(getVariants("asd"));
