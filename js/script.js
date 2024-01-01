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
const equme = document.getElementById('equity');
const ubame = document.getElementById('uba');
const ecome = document.getElementById('ecobank');
const rawme = document.getElementById('rawbank');
var compte


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
});

equme.addEventListener('click', () => {
    compte = "EQUITY BANK"
    document.getElementById('ok').innerHTML = compte
    
});

ubame.addEventListener('click', () => {
    compte = "UBA"
    document.getElementById('ok').innerHTML = compte
    
});

ecome.addEventListener('click', () => {
    compte = "ECOBANK"
    document.getElementById('ok').innerHTML = compte
    
});

rawme.addEventListener('click', () => {
    compte = "RAWBANK"
    document.getElementById('ok').innerHTML = compte
    
});


function cutmatr(){
    var matricule = document.getElementById("email").value;
    document.getElementById('ok').innerHTML = matricule.slice(0, 7).toUpperCase();
};

