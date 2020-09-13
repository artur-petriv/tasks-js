// Задание:
// 1. Создать функцию 'encode', которая будет принимать строку с буквами, необходимо возвращать с функции строку, где гласные буквы заменить на цыфры
// console.log(encode('hello'));

// 2. Создать вторую функцию 'decode', для возврата зашифрованой строки обратно
// console.log(decode(encode('hello')));

// ============================================

// Моё решение №1

// Encode
function encode(str) {
  let arr = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "a") {
      arr[i] = "1";
    } else if (str[i] === "e") {
      arr[i] = "2";
    } else if (str[i] === "i") {
      arr[i] = "3";
    } else if (str[i] === "o") {
      arr[i] = "4";
    } else if (str[i] === "u") {
      arr[i] = "5";
    } else {
      arr[i] = str[i];
    }
  }
  return oneWord(arr);
}

// Decode
function decode(str) {
  let arr = [];
  for (var i = 0; i < str.length; i++) {
    if (str[i] === "1") {
      arr[i] = "a";
    } else if (str[i] === "2") {
      arr[i] = "e";
    } else if (str[i] === "3") {
      arr[i] = "i";
    } else if (str[i] === "4") {
      arr[i] = "o";
    } else if (str[i] === "5") {
      arr[i] = "u";
    } else {
      arr[i] = str[i];
    }
  }
  return oneWord(arr);
}

// Збираєм массив в строку
function oneWord(arr) {
  return arr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
}

console.log('Solution #1');
console.log(encode("hello"));
console.log(decode(encode("hello")));
