// // №1
// function changeSize() {
//     const div1 = document.getElementById("div1");
//     div1.style.width = "400px";
//     div1.style.height = "300px";
//   }
  
//   // №2
//   function getDimensions() {
//     const elem = document.getElementById("elem");
//     const width = parseInt(elem.style.width);
//     const height = parseInt(elem.style.height);
//     console.log("Width:", width, "Height:", height);
//   }
  
//   // №3
//   function getFontSize() {
//     const elem2 = document.getElementById("elem2");
//     const fontSize = parseFloat(elem2.style.fontSize);
//     console.log("Font Size:", fontSize);
//   }

// //   2.1------------------

// let elem = document.querySelector('div');
// let currentFontSize = parseInt(elem.style.fontSize); 
// elem.style.fontSize = (currentFontSize + 2) + 'px'; 

// // 2.2

// let elem = document.querySelector('div');
// let currentFontSize = parseInt(elem.style.fontSize); 
// elem.style.fontSize = (currentFontSize + 2) + 'px'; 

// // 2.3

// let elem = document.querySelector('div');
// let currentFontSize = parseFloat(elem.style.fontSize); 
// elem.style.fontSize = (currentFontSize + 2) + 'em';

// // 2.4

// function increaseSize() {
//     let elem = document.getElementById('elem');
//     let currentWidth = parseInt(elem.style.width); 
//     let currentHeight = parseInt(elem.style.height); 
//     elem.style.width = (currentWidth + 50) + 'px'; 
//     elem.style.height = (currentHeight + 50) + 'px'; 
// }

// // 2.5

// function increaseSize() {
//     let elem = document.getElementById('elem');
//     let currentWidth = elem.offsetWidth; 
//     let currentHeight = elem.offsetHeight; 
//     elem.style.width = (currentWidth * 1.1) + 'px'; 
//     elem.style.height = (currentHeight * 1.1) + 'px'; 
// }

// // 3.1

// const elem = document.getElementById('elem');
// const button = document.getElementById('btn');

 
// button.addEventListener('click', function() {
    
//     const borderStyle = window.getComputedStyle(elem).border;
    
    
//     const parts = borderStyle.split(' ');

    
//     const thickness = parts[0];
//     const borderType = parts[1];
//     const color = parts[2];

   
//     alert(`Толщина границы: ${thickness}\nТип границы: ${borderType}\nЦвет границы: ${color}`);
// });

// // 4.1


// const elem = document.getElementById('elem');
// const hideBtn = document.getElementById('hideBtn');
// const showBtn = document.getElementById('showBtn');


// hideBtn.addEventListener('click', function() {
//     elem.style.display = 'none'; 
// });


// showBtn.addEventListener('click', function() {
//     elem.style.display = ''; 
// });

// // 4.2


// const elem = document.getElementById('elem');
// const colorBtn = document.getElementById('colorBtn');
// const resetColorBtn = document.getElementById('resetColorBtn');


// colorBtn.addEventListener('click', function() {
//     elem.style.backgroundColor = 'red'; 
// });


// resetColorBtn.addEventListener('click', function() {
//     elem.style.backgroundColor = ''; 
// });

// // 5.1

// elem.style.cssText = 'width: 100px; height: 100px; margin: 10px auto; color: red;';

// // 6.1


// const elem = document.getElementById('elem');
// const getSizeBtn = document.getElementById('getSizeBtn');


// getSizeBtn.addEventListener('click', function() {
   
//     const computedStyle = getComputedStyle(elem);
    
   
//     alert(`Ширина элемента: ${computedStyle.width}\nВысота элемента: ${computedStyle.height}`);
// });

// // 6.2


// const elem = document.getElementById('elem');
// const doubleSizeBtn = document.getElementById('doubleSizeBtn');


// doubleSizeBtn.addEventListener('click', function() {
    
//     const computedStyle = getComputedStyle(elem);
//     const currentWidth = parseInt(computedStyle.width);
//     const currentHeight = parseInt(computedStyle.height);
    
    
//     elem.style.width = (currentWidth * 2) + 'px';
//     elem.style.height = (currentHeight * 2) + 'px';
// });

// // 7.1


// const elem = document.getElementById('elem');
// const getFontSizeBtn = document.getElementById('getFontSizeBtn');


// getFontSizeBtn.addEventListener('click', function() {
//     const tempSpan = document.createElement('span');
//     tempSpan.textContent = elem.textContent;
//     tempSpan.style.fontSize = getComputedStyle(elem).fontSize;
//     document.body.appendChild(tempSpan);
//     const fontSize = tempSpan.offsetHeight;
//     document.body.removeChild(tempSpan);

//     alert(`Размер шрифта элемента: ${fontSize}px`);
// });

// // 8.1

// const paragraphs = document.querySelectorAll('p');

// paragraphs.forEach(paragraph => {
//     const number = parseInt(paragraph.textContent);
//     if (number % 2 === 0) {
//         paragraph.classList.add('even');
//     } else {
//         paragraph.classList.add('odd');
//     }
// });

// // 9.1


// const paragraphs = document.querySelectorAll('p');


// paragraphs.forEach(paragraph => {
//     let isRed = false; 
    
//     paragraph.addEventListener('click', function() {
        
//         if (isRed) {
//             paragraph.classList.remove('active');
//         } else {
//             paragraph.classList.add('active');
//         }
        
//         isRed = !isRed;
//     });
// });

// // 10.1


// const inputField = document.getElementById('inputField');


// inputField.addEventListener('blur', function() {
   
//     const inputValue = inputField.value;
    
 
//     if (inputValue.length <= 9) {
//         inputField.classList.remove('invalid');
//         inputField.classList.add('valid');
//     } else {
//         inputField.classList.remove('valid');
//         inputField.classList.add('invalid');
//     }
// });

// // 10.2

// const inputField = document.getElementById('inputField');


// inputField.addEventListener('blur', function() {

//     const inputValue = parseInt(inputField.value);
    
//     if (!isNaN(inputValue)) {
//         if (inputValue < 10) {
//             inputField.dataset.type = 'less-than-10';
//         } else if (inputValue >= 10 && inputValue <= 20) {
//             inputField.dataset.type = 'between-10-and-20';
//         } else {
//             inputField.dataset.type = 'more-than-20';
//         }
//     }
// });


// // 11.1


// let testElem = document.querySelector('#testElem');

// // 12.1

// const elem = document.getElementById('elem');
// const btn = document.getElementById('btn');


// btn.addEventListener('click', function() {

//     console.log('Ширина элемента:', elem.clientWidth);
//     console.log('Высота элемента:', elem.clientHeight);
// });

// // 13.1


// const elem = document.getElementById('elem');
// const btn = document.getElementById('btn');


// btn.addEventListener('click', function() {
    
//     console.log('Полная ширина элемента:', elem.offsetWidth);
//     console.log('Полная высота элемента:', elem.offsetHeight);


//     const extraWidth = elem.offsetWidth - elem.clientWidth;
//     const extraHeight = elem.offsetHeight - elem.clientHeight;
//     console.log('Дополнительная ширина (padding, border):', extraWidth);
//     console.log('Дополнительная высота (padding, border):', extraHeight);
// });

// // 14.1

// const elem = document.getElementById('elem');
// const btn = document.getElementById('btn');

// btn.addEventListener('click', function() {
//     console.log('Прокрутка по вертикали:', elem.scrollTop);
// });

// // 14.2

// const elem = document.getElementById('elem');
// const btn = document.getElementById('btn');

// btn.addEventListener('click', function() {
//     if (elem.scrollTop > 0) {
//         console.log('Элемент прокручен по вертикали');
//     } else {
//         console.log('Элемент не прокручен по вертикали');
//     }
// });

// // 14.3

// const elem = document.getElementById('elem');
// const btn = document.getElementById('btn');

// btn.addEventListener('click', function() {
//     console.log('Полная прокрутка по вертикали:', elem.scrollHeight);
// });


// // 14.4

// const elem = document.getElementById('elem');

// const diff = elem.scrollHeight - elem.scrollTop;

// console.log('Разница между scrollHeight и полной прокруткой:', diff);

// // 15.5 

// const elem = document.getElementById('elem');

// const diff = elem.offsetHeight + elem.scrollTop - elem.scrollHeight;

// console.log('Разница между offsetHeight и scrollHeight:', diff);

// //20.1

// document.getElementById('scrollButton').addEventListener('click', function() {
//     const elem = document.getElementById('scrollableElement');
//     elem.scrollTop += 100;
//     elem.scrollLeft += 50;
//   });
  
//   //20.2 

//   document.getElementById('scrollButton').addEventListener('click', function() {
//     const elem = document.getElementById('scrollableElement');
//     elem.scrollTop += 50;
//   });

//   //20.3

//   document.getElementById('scrollButton').addEventListener('click', function() {
//     const elem = document.getElementById('scrollableElement');
//     elem.scrollTop = 0;
//   });

//   //20.4

//   document.getElementById('scrollButton').addEventListener('click', function() {
//     const elem = document.getElementById('scrollableElement');
//     elem.scrollTop = elem.scrollHeight - elem.clientHeight;
//   });
  
//   //21.1

//   document.getElementById('scrollButton').addEventListener('click', function() {
//     const elem = document.getElementById('scrollableElement');
//     elem.scrollTop = elem.scrollHeight - elem.clientHeight;
//   }
//   //21.2 

//   document.getElementById('scrollCheckButton').addEventListener('click', function() {
//     const elem = document.getElementById('scrollableElement');
//     const isScrolledToEnd = elem.scrollHeight - elem.scrollTop === elem.clientHeight;
//     if (isScrolledToEnd) {
//       alert('Элемент прокручен до конца по вертикали.');
//     } else {
//       alert('Элемент не прокручен до конца по вертикали.');
//     }
//   });

//   //22.1

//   document.getElementById('expandButton').addEventListener('click', function() {
//     const elem = document.getElementById('expandableElement');
//     elem.style.height = elem.scrollHeight + 'px';
//   });

//   //23.1

//   document.getElementById('scrollbarWidthButton').addEventListener('click', function() {
//     let div = document.createElement('div');
//     div.style.overflowY = 'scroll';
//     div.style.width = '50px';
//     div.style.height = '50px';
//     document.body.append(div);
    
//     let scrollbarWidth = div.offsetWidth - div.clientWidth;
//     console.log('Ширина полосы прокрутки: ' + scrollbarWidth + 'px');
    
//     div.remove();
//   });

// //24.1

// document.getElementById('sizeButton').addEventListener('click', function() {
//     let width = window.innerWidth;
//     let height = window.innerHeight;
//     console.log('Ширина окна: ' + width + 'px');
//     console.log('Высота окна: ' + height + 'px');
//   });

//   //24.2

//   document.getElementById('verticalScrollButton').addEventListener('click', function() {
//     let hasVerticalScroll = document.documentElement.scrollHeight > window.innerHeight;
//     if (hasVerticalScroll) {
//       console.log('Вертикальная прокрутка присутствует.');
//     } else {
//       console.log('Вертикальная прокрутка отсутствует.');
//     }
//   });
  

// //24.3

// document.getElementById('horizontalScrollButton').addEventListener('click', function() {
//     let hasHorizontalScroll = document.documentElement.scrollWidth > window.innerWidth;
//     if (hasHorizontalScroll) {
//       console.log('Горизонтальная прокрутка присутствует.');
//     } else {
//       console.log('Горизонтальная прокрутка отсутствует.');
//     }
//   });
// //25.1

// document.getElementById('scrollHeightButton').addEventListener('click', function() {
//     let scrollHeight = Math.max(
//       document.body.scrollHeight, document.documentElement.scrollHeight,
//       document.body.offsetHeight, document.documentElement.offsetHeight,
//       document.body.clientHeight, document.documentElement.clientHeight
//     );
//     console.log('Высота окна с учетом прокрутки: ' + scrollHeight + 'px');
//   });
  
//   //25.2 

//   document.getElementById('scrollWidthButton').addEventListener('click', function() {
//     let scrollWidth = Math.max(
//       document.body.scrollWidth, document.documentElement.scrollWidth,
//       document.body.offsetWidth, document.documentElement.offsetWidth,
//       document.body.clientWidth, document.documentElement.clientWidth
//     );
//     console.log('Ширина окна с учетом прокрутки: ' + scrollWidth + 'px');
//   });
  
//   //25.3

//   document.getE

// // 26.1

// document.getElementById('btn').addEventListener('click', function() {
    
//     let scrollTop = window.pageYOffset;
//     console.log("Прокрутка окна по вертикали: " + scrollTop + "px");
// });

// // 26.2


// document.getElementById('btn').addEventListener('click', function() {
//     let scrollTop = window.pageYOffset;
//     let scrollHeight = document.documentElement.scrollHeight;
//     let windowHeight = window.innerHeight;
//     let remainingScroll = scrollHeight - windowHeight - scrollTop;
//     console.log("Осталось прокрутить до конца: " + remainingScroll + "px");
// });


// // 27.1

// document.getElementById('btn').addEventListener('click', function() {
//     document.documentElement.scrollTop = 300;
// });

// // 27.2

// document.getElementById('btn').addEventListener('click', function() {
//     document.documentElement.scrollTop = document.documentElement.scrollHeight - window.innerHeight - 100;
// });

// // 27.3

// document.getElementById('btn').addEventListener('click', function() {
    
//     document.documentElement.scrollTop = 0;
// });

// // 27.4


// document.getElementById('btn').addEventListener('click', function() {
//     document.documentElement.scrollTop = document.documentElement.scrollHeight - window.innerHeight;
// });


// // 28.1


// document.getElementById('btn').addEventListener('click', function() {
    
//     window.scrollTo(0, 300);
// });

// // 28.2


// document.getElementById('btn').addEventListener('click', function() {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// });

// // 28.3


// document.getElementById('btn').addEventListener('click', function() {
//     window.scrollTo({
//         top: document.documentElement.scrollHeight,
//         behavior: 'smooth'
//     });
// });


// // 29.1


// document.getElementById('btn').addEventListener('click', function() {
//     window.scrollBy(0, 100);
// });

// // 29.2


// document.getElementById('btn').addEventListener('click', function() {  
//     window.scrollBy(0, -100);
// });

// // 29.3

// document.getElementById('btn').addEventListener('click', function() {
//     window.scrollBy({
//         top: 300,
//         behavior: 'smooth'
//     });
// });

// // 29.4

// document.getElementById('btn').addEventListener('click', function() {
//     window.scrollBy({
//         top: -300,
//         behavior: 'smooth'
//     });
// });

// // 30

// const elem = document.getElementById('elem');
// const btn = document.getElementById('btn');


// btn.addEventListener('click', function() {
//     elem.scrollIntoView();
// });


// btn.addEventListener('click', function() {
    
//     elem.scrollIntoView({
//         behavior: 'smooth', 
//         block: 'start',     
//         inline: 'end'       
//     });
// });

// // 31

// window.addEventListener('scroll', function() {
//     const documentHeight = document.documentElement.scrollHeight;
//     const scrollHeight = window.pageYOffset + window.innerHeight;

//     if (scrollHeight === documentHeight) {
//         console.log('Страница прокручена до конца!');
//     }
// });