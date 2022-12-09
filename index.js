// ВЕКТОРЫ

// const arr = [
//     {x: 25, y: 2},
//     {x: -5, y: 45},
//     {x: 5, y: 2},
//     {x: 15, y: 54},
//     {x: -35, y: 23},
//     {x: -3, y: 33}
// ];

// let x_main = 0
// let y_main = 0

// for (let i = 0; i < 6; i++){
//     console.log(arr[i])
//     x_main += arr[i].x
//     y_main += arr[i].y
    
// }
// const final_shit = {x: x_main, y: y_main}
// console.log("финалка =", final_shit)

//УДАЛЕНИЕ КНОПКИ

// function deleteButton(){
//     const button = document.getElementById("button_test")
//     button.remove() //удалили нахуй эту грязную шлюху
//     //console.log(button) - показать
// }
// //deleteButton() //вызов функции

// ФОРМА ДЛЯ ОБРАТНОЙ СВЯЗИ

function processForm(){
    const nameField = document.getElementById("FUCKINGNAME");
    const mailField = document.getElementById("FUCKINGMAIL");
    const feedbackField = document.getElementById("FUCKINGFEEDBACK");
    
    return{
        name: nameField.value,
        mail: mailField.value,
        feedback: feedbackField.value
        // объект со всей инфой
    }
}

function sendForm(){
    const form = document.getElementById("FUCKINGFORM");
    form.submit();
}

