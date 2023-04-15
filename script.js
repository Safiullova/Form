        //получаю элементы и записываю в переменные
        let userName = document.querySelector('.comment__name');
        let photo = document.querySelector('.comment__url');
        let comment = document.querySelector('.comment__text');
        const btn = document.querySelector('.button');
        let chat = document.querySelector('.user');
        let radio = document.querySelector ('#no');

        const arrAvatar = [ // создаю массив аватарок
            "./assets/pic1.jpg",
            "./assets/pic3.jpg",
            "./assets/pic3.webp",
            "./assets/pic4.png",
            "./assets/pic5.jpg",
            "./assets/pic7.jpg"
        ];
        let randIndex = Math.floor(Math.random() * arrAvatar.length); // определяю индекс радномного примитива из массива
let avatarURL = arrAvatar[randIndex]; // вывожу значение (url) радномного аватара

        btn.addEventListener('click', () => { //вешаю событие "клик" на кнопку, по клику сработает функция 

            let userName1 = userName.value; //Перезаписываю в новую переменную значение из inputa (ФИО)
            const arr = userName1.split(" "); //получаю массив из строки
            const ArrUpp = []; // новая переменная, пустышка для вставки отредактированного ФИО из функции
            for (let i = 0; i < arr.length; i++) { //перебираю элементы массива
                ArrUpp.push(arr[i] = arr[i].substring(0, 1).toUpperCase() + arr[i].substring(1)
                    .toLowerCase()); // push - добавляю в пустой массив ФИО в правильном регистре
            }; 
            let nameUp = "";

            if (radio.checked || userName1 === '') { // Проверяю заполнено ли поле ввода ФИО и радиокнопку "NO"
                nameUp = "username"
            }else {
                nameUp = ArrUpp.join(' ').replace(/viagra/gi, '***').replace(/xxx/gi, '***');  //объединение элементов массива строки ФИО, с антиспамом
            };
            let comment1 = comment.value.replace(/viagra/gi, '***').replace(/xxx/gi,
                '***'); //Перезаписываю в новую переменную значение из inputa (комментарий) с антиспамом.
            comment1 = comment1.substr(0, 1).toUpperCase() + comment1.substr(1)
                .toLowerCase(); //Перезаписываю в правильном регистре

                let avatarFinal = ""; // переменная для ссылки на аватар
                if (photo.value === '') { // Проверяю, заполнено поле ввода ссылки
                    avatarFinal = avatarURL // если нет - рандомный аватар
            } else {
                avatarFinal = photo.value // если да - тот, что указал user
            };
            

            chat.innerHTML = // создаю новую разметку в чате и передаю туда отредактированные значения ФИО и комментария
                `<div class="userX">
                <img src="${avatarFinal}" alt="add a link for a photo"> 
            <p id="name">${nameUp}</p> 
            <p id="date">${new Date()}</p>
            <p id="ask">${comment1}</p>
            </div>`
            


        })