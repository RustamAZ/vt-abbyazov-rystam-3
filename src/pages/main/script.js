// //                                                                          ЛЕКЦИЯ 2
// //                 Задача 1
// (function getMod(mod=4) {
//     let userData = check();
//     for (let i = userData; i > 0; i-- ) {
//         if (!(i%mod === 0)) {
//             console.log(i);
//         }
//     }
// });
// //                  Задача 2.1 Рекурсия
// (function getFactorial() {
//     let userData = check();
//     function factorial(userData) {
//         return (userData != 1) ? userData * factorial(userData - 1) : 1;
//     }
//     console.log(factorial(userData));
// });
// //                  Задача 2.2 Цикл
// (function getFactorial2() {
//     let userData = check();
//     let factorial = 1;
//     while (userData > 1) {
//         factorial = factorial * userData;
//         userData--;
//     };
//     console.log(factorial);
// });
// //                   Задача 3
// (function getSqr() {
//     let userData = check();
//     let sqr = 0;
//     for (let i = 0; i < userData*userData; i++) {
//         sqr++;
//     };
//     console.log(+userData,sqr);
// });
// //                  Ввод числа с проверкой (задача 4)
// function check() {
//     let userData = prompt('Введите число:');
//     if (!(isNaN(userData))) {
//         return userData;
//     } else {
//         while (isNaN(userData)) {
//             alert('Это не число! Попробуйте еще раз.');
//             userData = prompt('введите число:');
//             if (!(isNaN(userData))) {
//                 return userData;
//             }
//         };
//     };
// };
// //                  Ввод числа с проверкой (задача 4 вариант с рекурсией)
// // function check() {
// //     let userData = prompt('Введите число:');
// //     if (!(isNaN(userData))) {
// //         return userData;
// //     } else {
// //         alert('Это не число! Попробуйте еще раз.');
// //         check();
// //     };
// // };
// //                  Задача 5 
// (function game() {
//     let rand = Math.floor(1 + Math.random() * 10);
//     console.log(rand);
//     let userData = check();
//     while (!(userData == rand)) {
//         alert('Это не то число! Попробуйте еще раз.');
//         userData = prompt('Введите число?');
//     };
//     alert('Вы угадали, поздравляю!')
// });
// //                                                                          ЛЕКЦИЯ 3
// //                  Задача 1
// (function checkAge() {
//     let userData = check();
//     if (userData >= 18) {
//         alert('Вы подходящего возраста');
//     } else {
//         alert('Вы не достигли совершеннолетнго возраста, досведули');
//         checkAge()
//     };
// });
// //                  Задача 2
// function getAdd(a = 2,b = 2) {
//     return a + b;
// };
// function getSubtract(a = 5,b = 3) {
//     return a - b;
// };
// function getDivide(a = 10,b = 2) {
//     return a / b;
// };
// function getMultiply(a = 5,b = 3) {
//     return a * b;
// };
// // Чистые функции, так как не влияют на вывод приложения на экран; не влияют на работу с html; всегда выводит одно значение, если с теми же аргументами.
// //                  Задача 3
// function addCreator(a) {
//     return (b = 5) => {
//         return a + b ;
//     };
// }
// // const add = addCreator(5);
// // console.log(add(5));
// // console.log(addCreator(1)(3));
// //                  Задача 4 
// function counterCreator(step = 2) {
//     let index = 0;
//     return () => {
//         index = index + step;
//         return index;
//     }
// }
// // let counter1 = counterCreator(-1);
// // console.log(counter1());
// // console.log(counter1());
// // let counter2 = counterCreator(4);
// // console.log(counter2());
// // console.log(counter2());
// // let counter3 = counterCreator();
// // console.log(counter3());
// // console.log(counter3());
// //                                                     ЛЕКЦИЯ 4
// //              Задача 1
// const developers = [
//     {
//         index:0,
//         name:"Брендан Эйх",
//         work: "специалист в области информатики, программист, технический директор"
//     },
//     {
//         index:2,
//         name: "Джеймс Гослинг",
//         work: "специалист в области информационных технологий"
//     },
//     {
//         index:3,
//         name: "Бьёрн Страуструп",
//         work: "программист"
//     }
// ]
// const data = [
//     {
//         name:"JavaScript",
//         year: 1995,
//         filenameExtensions: "js, mjs",
//         influencedBy: ["AWK", "C", "HyperTalk", "Java", "Lua", "Perl", "Python", "Scheme", "Self"],
//         affectedBy: ["ActionScript", "AtScript", "CoffeeScript", "Dart", "JScript .NET", "LiveScript", "Objective-J", "Opa", "QML", "Raku", "TypeScript"],
//         developerIndex:0,
//     },
//     {
//         name:"Java",
//         year: 1995,
//         filenameExtensions: "java, class, jar, jad, jmod",
//         influencedBy: ["C++", "Си", "Ада", "Simula 67", "Smalltalk", "Objective-C", "Object Pascal", "Оберон", "Eiffel", "Модула-3", "Mesa", "Симула", "C#", "UCSD Pascal"],
//         affectedBy: ["Ada 2005", "BeanShell", "C#", "Chapel", "Clojure", "ECMAScript", "Fantom", "Gambas", "Groovy", "Hack", "Haxe", "J#", "Kotlin", "PHP", "Python", "Scala", "Seed7", "Vala"],
//         developerIndex: 2,
//     },
//     {
//         name:"C++",
//         year: 1983,
//         filenameExtensions: "cc, cpp, cxx, c, c++, h, hpp, hh, hxx, h++",
//         influencedBy: ["C++", "Си", "Ада", "Simula 67", "Smalltalk", "Objective-C", "Object Pascal", "Оберон", "Eiffel", "Модула-3", "Mesa", "Симула", "C#", "UCSD Pascal"],
//         affectedBy: ["Ada", "C", "Modula-2", "Simula"],
//         developerIndex: 3,
//     },
// ];

// const influenced = data.map(item => item.influencedBy);
// const affected = data.map(item => item.affectedBy);
// (function history(idx = 0) {
//     let i = 10;
//     let getAffectedBy;
//     let unshiftFileName = data[idx].filenameExtensions.split(',');
//     const interval = setInterval(() => {
//         if (i > 0) {
//             console.log(`Ожидание ${i--}...`)
//         }
//     },1 * 1000);
//     if (affected[idx].length > 5) {
//         getAffectedBy = affected[idx].slice(0,4).join(', ') + ' и дургие...';
//     } else {
//         getAffectedBy = affected[idx].join(', ');
//     }
//     unshiftFileName.unshift('');
//     setTimeout(() => {
//         clearTimeout(interval);
//         console.log(`${data[idx].name} - язык программирвоания выпущенный в ${data[idx].year} году.\nАвтором языка стал ${developers[idx].name} - ${developers[idx].work}.\nФайлы программ, написанных на ${data[idx].name}, могут иметь расширения:${unshiftFileName.join(' .')}.\n${data[idx].name} испытал влияние ${data[idx].influencedBy.length} языков программирования: ${influenced[idx].join(', ')}.\n${data[idx].name} повлиял на ${getAffectedBy}.`)
//     }, 10 * 1000);
// });

        // Прогрессбар
const progressBarValue = document.querySelectorAll('.progress-bar__value');
const progressBarBody = document.querySelectorAll('.progress-bar__body');
for (let i = 0; i < 5; i++){
    let qwe = progressBarValue[i].innerHTML;
    progressBarBody[i].style.setProperty('--bar-width', qwe)
}


//         // Открытие модальных окон

const modalLinks = document.querySelectorAll('modal-link')



function showModal(elementClass, modalClass, modalModifier, closeClass) {

    // Static variables.
    const mainButton = document.querySelector(`.${elementClass}`);
    const form = document.querySelector(`.${modalClass}`);
    const formModifier = document.querySelector(`.${modalModifier}`);
    const closeButton = document.querySelector(`.${closeClass}`);
    
    // Main function.
    mainButton.addEventListener('click', function(e) {
        form.style.top = `${window.pageYOffset}px`;
        form.classList.add(`${modalModifier}`);
        document.body.style.overflow = 'hidden';
        e.preventDefault();
    
        closeButton.addEventListener('click', hideModal);
        window.addEventListener('keydown', hideEscModal);
        
        function hideModal(e) {
            form.classList.remove(`${modalModifier}`);
            document.body.style.overflow = '';
            closeButton.removeEventListener('click', hideModal);
        }
    
        function hideEscModal(e) {
            if (e.keyCode == 27 ) {
                form.classList.remove(`${modalModifier}`);
                document.body.style.overflow = '';
                closeButton.removeEventListener('click', hideModal);
            } else {
                return;
            }
        }
    })
}
document.addEventListener("DOMContentLoaded", () => {
    showModal('signin_js', 'sign-in', 'open-modal', 'sign-in__close');
    showModal('register_js', 'register', 'open-modal', 'register__close');
    showModal('message_js', 'message', 'open-modal', 'message__close');
    })
        // Слайдер 
const wrapper = document.querySelector('.slider__wrapper_js');
const innerWrapper = wrapper.querySelector('.slider__inner-wrapper_js');
const slides = innerWrapper.querySelectorAll('.slider__slide_js');
const buttonBack = document.querySelector('.slider__button-back_js');
const buttonNext = document.querySelector('.slider__button-next_js');
const paginationBox = document.querySelector('.slider__pagination_js');

const timeAnimation = 500;
const maxIndex = slides.length - 1;
let width = wrapper.clientWidth;
let activeIndex = 0;
let dots = [];
let timer = null;
let isTouch = false;
let position = {x: 0, y: 0};
let newPosition = {x: 0, y: 0};

wrapper.addEventListener('touchstart', (e) => {
  if(e.touches.length !== 1) {
    isTouch = false;
  } else {
    isTouch = true;
    position = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  }
});

wrapper.addEventListener('touchmove', (e) => {
  if(!isTouch) {
    return;
  }
  if(e.touches.length !== 1) {
    isTouch = false;
  } else {
    isTouch = true;
    newPosition = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  }
});

window.addEventListener('touchend', (e) => {
  if(!isTouch) {
    return;
  }
  isTouch = false;
  if(position.x - newPosition.x > 100) {
    setActiveSlide(activeIndex + 1);
  }
  if(position.x - newPosition.x < -100) {
    setActiveSlide(activeIndex - 1);
  }
});


wrapper.addEventListener('mousedown', (e) => {
  isTouch = true;
  position = {
    y: e.offsetY,
    x: e.offsetX,
  };
});

wrapper.addEventListener('mouseout', (e) => {
  if(!isTouch) {
    return;
  }
  isTouch = false;
  if(position.x - e.offsetX > 100) {
    setActiveSlide(activeIndex + 1);
  }
  if(position.x - e.offsetX < -100) {
    setActiveSlide(activeIndex - 1);
  }
});

wrapper.addEventListener('mouseup', (e) => {
  if(!isTouch) {
    return;
  }
  isTouch = false;
  if(position.x - e.offsetX > 100) {
    setActiveSlide(activeIndex + 1);
  }
  if(position.x - e.offsetX < -100) {
    setActiveSlide(activeIndex - 1);
  }
});


for(let index = 0; index < slides.length; index++) {
  let dot = createDot(index === activeIndex);
  dots.push(dot);
  dot.addEventListener('click', () => {
    setActiveSlide(index);
  });
  paginationBox.insertAdjacentElement('beforeend', dot);
}

function initWidthSlides() {
  width = wrapper.clientWidth;
  for(let slide of slides) {
    slide.style.width = `${width}px`;
  }
}
initWidthSlides();

function setActiveSlide(index, withAnimation = true) {
  if(index < 0) {
    return;
  }
  if(index > maxIndex) {
    return;
  }
  setDisableButton(buttonNext);
  setDisableButton(buttonBack);

  innerWrapper.style.transform = `translateX(${index * width * (-1)}px)`;
  if(withAnimation) {
    innerWrapper.style.transition = `transform ${timeAnimation}ms`;
    clearTimeout(timer);
    timer = setTimeout(() => {
      innerWrapper.style.transition = ``;
    }, timeAnimation);
  }


  dots[activeIndex].classList.remove('hero__slider-dot_active');
  dots[index].classList.add('hero__slider-dot_active');
  if(index !== 0) {
    setDisableButton(buttonBack, false);
  }
  if(index !== maxIndex) {
    setDisableButton(buttonNext, false);
  }
  activeIndex = index;
}

buttonNext.addEventListener('click', () => {
  setActiveSlide(activeIndex + 1);
});

buttonBack.addEventListener('click', () => {
  setActiveSlide(activeIndex - 1);
});

setActiveSlide(activeIndex);

window.addEventListener('resize', () => {
  initWidthSlides();
  setActiveSlide(activeIndex, false);
});

function createDot(isActive) {
  let dot = document.createElement("button");
  dot.classList.add(`hero__slider-dot`);
  if(isActive) {
    dot.classList.add(`hero__slider-dot_active`);
  }
  return dot;
}

function setDisableButton(button, disable = true) {
  if(disable) {
    button.setAttribute('disabled', '');
  } else {
    button.removeAttribute('disabled');
  }
}



