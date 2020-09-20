// Задача
// Реализовать функцию, которой передается число, функция должна возвращать ближайшее целое число что было передано, без остатка делящееся на 5.

// Моё решение 1

function round5(val) {
  let lower = 0;
  let bigger = 0;

  for (let i = val; i > val - 5; i--) {
    if (i % 5 === 0) {
      lower = i;
    }
  }

  for (let i = val; i < val + 5; i++) {
    if (i % 5 === 0) {
      bigger = i;
    }
  }

  if (bigger - val < 3) {
    return bigger;
  } else {
    return lower;
  }
}

console.log(round5(0)); // 0
console.log(round5(2)); // 0
console.log(round5(3)); // 5
console.log(round5(11)); // 10
console.log(round5(14)); // 15
console.log(round5(50)); // 50
console.log(round5(-2)); // 0
console.log(round5(-3)); // -5
