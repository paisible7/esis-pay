const container0 = document.querySelector('.cont0');
const container1 = document.querySelector('.cont1');
const container2 = document.querySelector('.cont2');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const wrap = document.querySelector('.wrapper');
const banks = document.querySelector('.bankme');
const mobiles = document.querySelector('.mobime');
const drap = document.querySelector('.drapper');

btn1.addEventListener('click', () => {
    container0.classList.add('mover');
});

mobiles.addEventListener('click', () => {
    document.querySelector('.form1').style.display = "none"
    document.querySelector('.form2').style.display = "block"
});

banks.addEventListener('click', () => {
    document.querySelector('.form2').style.display = "none"
    document.querySelector('.form1').style.display = "block"
});

btn2.addEventListener('click', () => {
    container2.classList.add('deplacer')
})
