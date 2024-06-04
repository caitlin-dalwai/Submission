let weight = document.getElementById('mass')
let height = document.getElementById('length')
let calc = document.getElementById('calculateBut')
let refresh = document.getElementById('clear')
let result = document.getElementById('answer')

calc.addEventListener('click', ()=>{
    calc.innerHTML =parseFloat(eval(`(${weight.value}*0,5)*${height.value}`)).toFixed(2)
})





refresh.addEventListener('click', function() {
    clearSum();
});

function clearSum() {
    
    calc.innerText = 'Calculate Area';
    weight.value = ''
    height.value = ''

}
