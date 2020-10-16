/*
Функция принимает массив с целыми числами, необходимо реализовать функцию так, чтобы она возвращала значение большего элемента массива,
который записан в четном индексе включая 0.
*/

// Моё решение 1

function getElem(arr) {
	const newArr = arr.filter((elem, i) => id % 2 === 0)

	return Math.max(...newArr);
}

console.log(getElem([5, 7, -1, 12, 3, 0])); // 5
console.log(getElem([4, -12, 29, 6, 31, 92, -50])); // 31