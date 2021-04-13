//                                                                          ЛЕКЦИЯ 2
//                 Задача 1
(function getMod(mod=4) {
    let userData = check();
    for (let i = userData; i > 0; i-- ) {
        if (!(i%mod === 0)) {
            console.log(i);
        }
    }
});
//                  Задача 2.1 Рекурсия
(function getFactorial() {
    let userData = check();
    function factorial(userData) {
        return (userData != 1) ? userData * factorial(userData - 1) : 1;
    }
    console.log(factorial(userData));
});
//                  Задача 2.2 Цикл
(function getFactorial2() {
    let userData = check();
    let factorial = 1;
    while (userData > 1) {
        factorial = factorial * userData;
        userData--;
    };
    console.log(factorial);
});
//                   Задача 3
(function getSqr() {
    let userData = check();
    let sqr = 0;
    for (let i = 0; i < userData*userData; i++) {
        sqr++;
    };
    console.log(+userData,sqr);
});
//                  Ввод числа с проверкой (задача 4)
function check() {
    let userData = prompt('Введите число:');
    if (!(isNaN(userData))) {
        return userData;
    } else {
        while (isNaN(userData)) {
            alert('Это не число! Попробуйте еще раз.');
            userData = prompt('введите число:');
            if (!(isNaN(userData))) {
                return userData;
            }
        };
    };
};
//                  Ввод числа с проверкой (задача 4 вариант с рекурсией)
// function check() {
//     let userData = prompt('Введите число:');
//     if (!(isNaN(userData))) {
//         return userData;
//     } else {
//         alert('Это не число! Попробуйте еще раз.');
//         check();
//     };
// };
//                  Задача 5 
(function game() {
    let rand = Math.floor(1 + Math.random() * 10);
    console.log(rand);
    let userData = check();
    while (!(userData == rand)) {
        alert('Это не то число! Попробуйте еще раз.');
        userData = prompt('Введите число?');
    };
    alert('Вы угадали, поздравляю!')
});
//                                                                          ЛЕКЦИЯ 3
//                  Задача 1
(function checkAge() {
    let userData = check();
    if (userData >= 18) {
        alert('Вы подходящего возраста');
    } else {
        alert('Вы не достигли совершеннолетнго возраста, досведули');
        checkAge()
    };
});
//                  Задача 2
function getAdd(a = 2,b = 2) {
    return a + b;
};
function getSubtract(a = 5,b = 3) {
    return a - b;
};
function getDivide(a = 10,b = 2) {
    return a / b;
};
function getMultiply(a = 5,b = 3) {
    return a * b;
};
// Чистые функции, так как не влияют на вывод приложения на экран; не влияют на работу с html; всегда выводит одно значение, если с теми же аргументами.
//                  Задача 3
function addCreator(a) {
    return (b = 5) => {
        return a + b ;
    };
}
// const add = addCreator(5);
// console.log(add(5));
// console.log(addCreator(1)(3));
//                  Задача 4 
function counterCreator(step = 2) {
    let index = 0;
    return () => {
        index = index + step;
        return index;
    }
}
// let counter1 = counterCreator(-1);
// console.log(counter1());
// console.log(counter1());
// let counter2 = counterCreator(4);
// console.log(counter2());
// console.log(counter2());
// let counter3 = counterCreator();
// console.log(counter3());
// console.log(counter3());