// Задача
// Необходимо перебрать массив с конца в начало и вывести в консоль сообщение вида:
// "Под свойством 5 лежит значение 35"
// "Под свойством 4 лежит значение 2"
// и тд

// Моё решение 1
const arr = [51, 8, 99, 71, 2, 35];

function func(arr) {
  arr.reduceRight(
    (accum, value, index) =>
      console.log(`Под свойством ${index} лежит значение ${value}`),
    0
  );
}

// Моё решение 2
function func2(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log("Под свойством " + i + " лежит значение " + arr[i]);
  }
}

func(arr);
func2(arr);
