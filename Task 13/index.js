// Задача
// Необходимо реализовать функцию, которая принимает массив с обьектами, в которых записаны точки на осях координат. Необходимо сделать так, чтобы из функции возвращался массив, очищенный от дублей точек.

// Моё решение 1

function uniPoints(arr) {
  const newArr = [];

  arr.forEach((obj) => {
    const result = newArr.some((elem) => obj.x === elem.x && obj.y === elem.y);

    if (!result) newArr.push(obj);
  });

  return newArr;
}

const arr = [
  { x: 5, y: 10 },
  { x: 1, y: 15 },
  { x: 7, y: -5 },
  { x: 16, y: 33 },
  { x: 1, y: 15 },
  { x: 7, y: -5 },
  { x: 4, y: 12 },
];

console.log(uniPoints(arr));

/* [
	{ x: 5, y: 10 },
  { x: 1, y: 15 },
  { x: 7, y: -5 },
  { x: 16, y: 33 },
  { x: 4, y: 12 },
]
*/
