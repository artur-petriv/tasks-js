/*
Напиши функцию создания генератора. Она при вызове возвращает другую функцию-генератор, которая при каждом вызрве дает число на "second arg" большое, и так до бесконечности. Начальное число, с которого начинается отсчет, и шаг, задается при создании генератора. Шаг можно не указывать, тогда он будет равен одному. Начальное значение по умолчанию равно 0. Генераторов можно создать сколько угодно.
*/

// Моё решение 1
function sequence(val = 0, step = 1) {
	let sun = val;
	return function() {
		sun += step;
		return sum - step;
	}
}

const generator = sequence(10, 3);
const generator2 = sequence(7, 1);


console.log(generator()); // 10
console.log(generator()); // 13

console.log(generator()); // 7

console.log(generator()); // 16

console.log(generator()); // 8