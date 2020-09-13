/* Задание:
В функцию 'sumAge' передается структура, в которой описан человек и его дети.
Необходимо реализовать функцию 'sumAge' так, чтобы она возвращала сумму человека и всех его детей.
*/

// Моё решение №1
const arr = [];

function sumAge(user) {
	if (user.children) {
		user.children.forEach(child => {
			if (child.children) {
				return sumAge(child)
      }
			return arr.push(child.age)
		})
	}
	arr.push(user.age)
	return arr.reduce((sum, number) => sum + number)
}

const user = {
	name: 'Петр',
	age: 49,
	children: [{
			name: 'Нина',
			age: 25,
			children: [{
					name: 'Андрей',
					age: 3,
				},
				{
					name: 'Олег',
					age: 1,
				},
			],
		},
		{
			name: 'Александр',
			age: 22,
		},
	],
};


console.log(sumAge(user)); // 100