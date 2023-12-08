// 2. **Задание: Анализ оценок студентов**
    
//     Вам необходимо написать программу, которая проведёт анализ оценок студентов и выполнит несколько операций с использованием методов массивов.
    
//     Шаги выполнения:
    
//     1. Создайте пустой массив с именем `grades` и заполните массив случайными оценками от 1 до 100 для 12 студентов. Для генерации случайных оценок, используйте функцию `Math.random()`.

const grades = []; //создание пустого массива:
console.log(grades);

//функция генерации случайной оценки от 1 до 100:
let getRandomGrade = (min, max) => { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
  }  
console.log (`случайная оценка: ${getRandomGrade(1, 100)}`);

const arr = new Array(12).fill(0); //создание промежуточного массива длиной 12 (по числу студентов), заполнен нулями (для реализации метода fill)
console.log(arr);
const generateArray = arr.map(() => getRandomGrade(1, 100)); //создание нового массива на основе предыдущего, где нули заменены рандомнымыи оценками
console.log(generateArray);

generateArray.forEach(element => grades.push(element)); //добавляем элементы из предыдущего массива с рандомными оценками в самый первый созданный пустой массив grades
console.log(grades);
document.writeln(`Оценки студентов: ${grades.join(', ')}.`);

//     2. Рассчитайте и выведите средний балл студентов, используя методы массивов.

const getAverageGrades = () => {
    const sumGrades = grades.reduce((accumulator, currentValue) => accumulator + currentValue); //фигурные скобки и return можно не писать, поскольку тело функции состоит из одной строки (одного выражения)
    const length = grades.length;
    return sumGrades / length; //делим сумму всех оценок на количество студентов
}
console.log(getAverageGrades(grades));
document.writeln(`</br> Средний балл студентов: ${getAverageGrades(grades)}.`);

//     3. Найдите и выведите максимальный балл среди студентов, используя соответствующий метод массива.

const maxGrade = Math.max(...grades);
console.log(maxGrade);
document.writeln(`</br> Максимальный балл студентов: ${maxGrade}.`);

//     4. Найдите и выведите минимальный балл среди студентов, используя соответствующий метод массива.

const minGrade = Math.min(...grades);
console.log(minGrade);
document.writeln(`</br> Максимальный балл студентов: ${minGrade}.`);

//     5. Посчитайте и выведите количество студентов, получивших положительную оценку (балл выше или равен 60). Используйте метод массива, который фильтрует оценки и оставляет только те, которые соответствуют заданному условию. Затем посчитайте количество оставшихся оценок и выведите результат.

const sortBestGrades = grades.filter((bestGrade) => bestGrade >= 60);
console.log (sortBestGrades);
console.log (sortBestGrades.length);
document.writeln(`</br> Количество студентов, получивших оценку 60 и выше: ${sortBestGrades.length}.`);

const restGrades = grades.slice(sortBestGrades.length);
console.log(restGrades.length);
document.writeln(`</br> Оставшиеся студенты: ${restGrades.length}.`);

//     6. Посчитайте и выведите количество студентов, получивших отрицательную оценку (балл ниже 60). Используйте аналогичный подход, как в предыдущем шаге.

const sortWorstGrades = grades.filter((bestGrade) => bestGrade <= 60);
console.log (sortWorstGrades.length);
document.writeln(`</br> Количество студентов, получивших оценку ниже 60: ${sortWorstGrades.length}.`);

//     7. Преобразуйте числовые оценки в формат буквенных оценок A/B/C/D/E, используя следующие правила:
//         - Если оценка находится в диапазоне от 80 до 100, преобразуйте её в "A"
//         - Если оценка находится в диапазоне от 60 до 79, преобразуйте её в "B"
//         - Если оценка находится в диапазоне от 40 до 59, преобразуйте её в "C"
//         - Если оценка находится в диапазоне от 20 до 39, преобразуйте её в "D"
//         - Если оценка ниже 20, преобразуйте её в "E"

const gradesToLetters = grades.map (element => {
    if (element >=80 && element <= 100) {
        return 'A'
    }
    if (element >=60 && element <= 79) {
        return 'B'
    }
    if (element >=40 && element <= 59) {
        return 'C'
    }
    if (element >=20 && element <= 39) {
        return 'D'
    }
    if (element <=20) {
        return 'E'
    }
});
console.log(gradesToLetters);
document.writeln(`</br> Оценки студентов: ${gradesToLetters.join(', ')}.`);