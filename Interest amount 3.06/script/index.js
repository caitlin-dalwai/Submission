let value1 = document.getElementById('mass')
let interest = document.getElementById('length')
let calc = document.getElementById('calculateBut')
let refresh = document.getElementById('clear')
let result = document.getElementById('answer')

calc.addEventListener('click', ()=>{
    calc.innerHTML =parseFloat(eval(`${value1.value}*${interest.value}/100`)).toFixed(2)
})





refresh.addEventListener('click', function() {
    clearSum();
});

function clearSum() {
    
    calc.innerText = 'Calculate final amount';
    value1.value = ''
    interest.value = '' 

}