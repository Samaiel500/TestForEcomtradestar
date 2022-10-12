//=========DATA=======
const currentData = new Date();
var oneMonthAgo = new Date(
    new Date().getFullYear(),
    new Date().getMonth() - 1, 
    new Date().getDate()
);
const curSpanData = document.querySelector('.description__time-cur');
const lowSpanData = document.querySelector('.description__time-low');
curSpanData.innerHTML = currentData.toLocaleDateString();
lowSpanData.innerHTML = oneMonthAgo.toLocaleDateString();

//========CALCulator=======
const output = document.querySelector('.output');
const num = document.querySelectorAll('.calculator__btn-num');
const ac = document.querySelectorAll('.calculator__btn-ac');
const doSum = document.querySelectorAll('.calculator__btn-do');
const btnCalc = document.querySelector('.btn-calc');
const overlayCalc = document.querySelector('.overlay-calc');

btnCalc.addEventListener('click', e => {
    e.preventDefault();
    overlayCalc.style.display = 'block';
})

const zero = '0';
let cur = '';
num.forEach(elem => {
    elem.addEventListener('click',e => {
        e.preventDefault();
        cur += e.target.dataset.ac;
        output.innerHTML = cur;
    })
})
ac.forEach(elem => {
    elem.addEventListener('click',e => {
        e.preventDefault();
        output.innerHTML = zero;
        cur = '';
    })
})
doSum.forEach(elem => {
    elem.addEventListener('click',e => {
        e.preventDefault();
        output.innerHTML = zero;
        cur = '';
    })
})

//=======FORM=======
const formMain = document.querySelector('.form');
const formBtn = document.querySelector('.form__btn');
const overlay = document.querySelector('.overlay');
const readyForm = document.querySelector('.ready-form__done');
const inputName = document.getElementById('name');
const inputNumber = document.getElementById('number');
const readyName = document.getElementById('readyName');
const readyNumber = document.getElementById('readyNumber');
const imgForm = document.querySelectorAll('.ready-form__img');

formBtn.addEventListener('click', e => {
    e.preventDefault();
    overlay.style.display = 'block';
    readyName.value = inputName.value;
    readyNumber.value = inputNumber.value;
})

imgForm.forEach(elem => {
    elem.addEventListener('click', e => {
        e.preventDefault();
        e.target.classList.toggle('ready-form__img--ok');

        if (e.target.previousElementSibling.disabled == true) {
            e.target.previousElementSibling.removeAttribute("disabled");
        } else {
            e.target.previousElementSibling.setAttribute('disabled', 'disabled');
        }
    })
})