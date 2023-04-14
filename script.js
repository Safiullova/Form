        //получаю элементы и записываю в переменные
        let userName = document.querySelector('.comment__name');
        let photo = document.querySelector('.comment__url');
        let comment = document.querySelector('.comment__text');
        const btn = document.querySelector('.button');
        let chat = document.querySelector('.user');

        btn.addEventListener('click', () => { //вешаю событие "клик" на кнопку, по клику сработает функция 
            let userName1 = userName.value; //Перезаписываю в новую переменную значение из inputa (ФИО)
            const arr = userName1.split(" "); //получаю массив из строки
            const ArrUpp = []; // новая переменная, пустышка для вставки отредактированного ФИО из функции
            for (let i = 0; i < arr.length; i++) { //перебираю элементы массива
                ArrUpp.push(arr[i] = arr[i].substring(0, 1).toUpperCase() + arr[i].substring(1)
                    .toLowerCase()); // push - добавляю в пустой массив ФИО в правильном регистре
            };
            let nameUp = ArrUpp.join(' '); //объединение элементов массива строки ФИО

            let comment1 = comment.value.replace(/viagra/gi, '***').replace(/xxx/gi,
                '***'); //Перезаписываю в новую переменную значение из inputa (комментарий) с антиспамом.
            comment1 = comment1.substr(0, 1).toUpperCase() + comment1.substr(1)
                .toLowerCase(); //Перезаписываю в правильном регистре

            chat.innerHTML = // создаю новую разметку в чате и передаю туда отредактированные значения ФИО (с антиспамом) и комментария
                `<img src="${photo.value}" alt="add a link for a photo"> 
            <p id="name">${nameUp.replace(/viagra/gi, '***').replace(/xxx/gi, '***')}</p> 
            <p id="date">${new Date()}</p>
            <p id="ask">${comment1}</p>`
            


        })