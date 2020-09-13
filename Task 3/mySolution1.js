/* Задание:
Реальзовать функцию, которая будет работать при любом количестве вызовов верно.
Внутрь функции всегда передается число, проверять не нужно.
*/

// Моё решение №1

function add(n) {
	if (n === undefined) return 0
	let sum = n
	return function second(b) {
		if (b === undefined) return sum
		sum += b
		return second;
	}
}

console.log(add()); // 0
console.log(add(2)()); // 2
console.log(add(2)(1)()); // 3
console.log(add(5)(-1)(2)()); // 6