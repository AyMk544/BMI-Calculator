// 'use strict';

// let weight = document.querySelector('.weight').value;
// let height = document.querySelector('.height').value;
// const clc = document.querySelector('.Calculate');
// let mess = document.querySelector('.message');
// let mess_con = document.querySelector('.message-container');
// let form = document.getElementsByTagName('form');

// clc.addEventListener('click', function () {
//     let BMI = weight / (height * height);
//     let str = ""
//     if (BMI < 18.5) {
//         str = "underweight";
//     } else if (BMI >= 18.5 && BMI <= 24.9) {
//         str = "healthy";
//     } else if (BMI >= 25 && BMI <= 29.9) {
//         str = "overweight";

//     } else if (BMI >= 30) {
//         str = "obesity";
//         form.style.backgroundColor = "red";
//     } else {
//         str = "invalid BMI";
//     }
//     mess.textContent = `BMI = ${BMI} ` + str;
// });

// 'use strict';

// const clc = document.querySelector('.Calculate');
// let mess = document.querySelector('.message');
// let mess_con = document.querySelector('.message-container');
// let form = document.querySelector('form'); // Use querySelector to get a single element

// clc.addEventListener('click', function () {
//     // Retrieve the values inside the event listener
//     let weight = parseFloat(document.querySelector('.weight').value);
//     let height = parseFloat(document.querySelector('.height').value);

//     // Check if weight and height are valid numbers
//     if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
//         mess.textContent = 'Please enter valid weight and height.';
//         return;
//     }

//     let BMI = weight / (height * height);
//     let str = "";

//     if (BMI < 18.5) {
//         str = "underweight";
//     } else if (BMI >= 18.5 && BMI <= 24.9) {
//         str = "healthy";
//     } else if (BMI >= 25 && BMI <= 29.9) {
//         str = "overweight";
//     } else if (BMI >= 30) {
//         str = "obesity";
//         form.style.backgroundColor = "red";
//     } else {
//         str = "invalid BMI";
//     }

//     mess.textContent = `BMI = ${BMI} ` + str;
// });

'use strict';

const clc = document.querySelector('#Calculate');
let mess = document.querySelector('.message');
let mess_con = document.querySelector('.message-container');
let form = document.querySelector('#form');

clc.addEventListener('click', function () {
    event.preventDefault();
    // Retrieve the values inside the event listener
    let weight = parseFloat(document.querySelector('#weight').value);
    let height = parseFloat(document.querySelector('#height').value);

    // // Check if weight and height are valid numbers
    // if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    //     mess.textContent = 'Please enter valid weight and height.';
    //     // Ensure the message container is visible
    //     mess_con.classList.remove('none');
    //     return;
    // }
    // console.log(weight);

    let BMI = weight / (height * height);
    let str = "";

    if (BMI < 18.5 && BMI > 0) {
        str = "underweight";
        let color = 'rgb(255, 208, 0)';
        form.style.backgroundColor = color;
        mess.style.color = color;
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        str = "healthy";
        let color = '#40c057';
        form.style.backgroundColor = color;
        mess.style.color = color;
    } else if (BMI >= 25 && BMI <= 29.9) {
        str = "overweight";
        let color = '#f76707';
        form.style.backgroundColor = color;
        mess.style.color = color;
    } else if (BMI >= 30) {
        str = "obesity";
        let color = 'red';
        form.style.backgroundColor = color;
        mess.style.color = color;
    } else {
        str = "invalid input";
        let color = '#99e9f2';
        form.style.backgroundColor = color;
        mess.style.color = "black";
    }
    BMI = BMI.toFixed(2);
    console.log(BMI);
    mess.innerHTML = `BMI = ${BMI}, ` + str;
    mess_con.classList.remove('none');
});
