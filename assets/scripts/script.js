// const body = document.querySelector("body")
// const btn = document.createElement("button")
// const input = document.querySelector("input")


// const p = document.createElement("p")

// body.append(btn)
// body.append(p)

// btn.innerText = "button" 
// p.innerText = "click to button"


// btn.addEventListener("mouse",() => {
//     p.innerText = "lox"
    
// })

// btn.addEventListener("click", () => {
    
    
// })



// const body = document.querySelector("body");
// const ul = document.createElement("ul");
// const btn = document.createElement("button");


// body.append(ul)
// body.append(btn)
// btn.innerText = "button"




// btn.addEventListener("click", () => {
//     const input = document.querySelector("input")
//     const ban = [input.value] 
//     const p = document.createElement("p")
    
    
//     body.append(p)
//     p.innerText = ban
    

// });

// group code

// const body = document.querySelector("body");
// const btn = document.querySelector ("button");

// body.append(btn);
// btn.innerText = "button";

// function fu(){
//     console.log("hi baby")
// };


// btn.addEventListener("click", fu);






// latest


// const form = document.querySelector('form');
// const input = document.querySelector('input');
// const list = document.querySelector('.list');

// const arr = [];

// // Обработчик отправки формы
// form.addEventListener('submit', (e) => {
//     e.preventDefault(); // Отменить стандартное поведение формы

//     const text = input.value.trim(); // Получить и обрезать пробелы по краям

//     // Если текст пустой, ничего не добавлять
//     if (text === '') {
//         alert('Введите текст задачи!');
//         return;
//     }

//     // Если текст не пустой, добавить его в массив
//     arr.push(text);

//     // Очистить input
//     input.value = '';

//     console.log(arr);

//     // Обновить список задач на странице
//     updateList();
// });

// // Обновление списка задач
// function updateList() {
//     list.innerHTML = ''; // Очистить текущий список

//     arr.forEach((item) => {
//         // Добавляем элемент в список
//         const p = document.createElement('p');
//         p.textContent = item;
//         list.appendChild(p);
//     });
// }

// // Обработчик события для нажатия клавиши Enter в input
// input.addEventListener('keydown', (e) => {
//     if (e.key === 'Enter') {
//         // Если клавиша Enter нажата, удалить старое значение
//         input.value = ''; // Очищаем input
//     }
// });

// to do braz

const form = document.querySelector('form');
const input = document.querySelector('input');
const button = document.querySelector("button")
const list = document.querySelector('.list');


const arrey = []


function fu(){
    // let userInput = input.value
    // userInput = ''

    input.value = ''
};



form.addEventListener('submit', (e) => {
    e.preventDefault()

    
    
    // const text = input.value

    const text = input.value

    if(text === ""){
	alert("empty")
	return;
    }
    
    arrey.push(text)
    console.table(arrey)

    
    
    list.innerHTML = ''
    arrey.forEach((c) => {
        list.innerHTML += `<li>${c}</li>`
    })

    fu();
});



    

