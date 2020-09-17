// В функцию передается масив целых чисел и число k. Необходимо написать функцию, которая вернет булево значение, true в случае если переданном массиве есть два числа, сумма которых равна k, иначе false.

//  Моё решение №1
function check(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    const difference = num - arr[i];
    return arr.some((item, index) => {
      if (item === difference && index !== i) {
        return true;
      }
    });
  }
}

console.log(check([10, 15, 3, 7], 17)); // true
console.log(check([10, 15, 3, 7], 20)); // false
