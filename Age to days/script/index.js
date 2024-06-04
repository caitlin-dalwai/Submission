let age = document.getElementById('low')
let days = document.getElementById('high')
let answer = document.getElementById('calc')
let clear = document.getElementById('clr')

answer.addEventListener('click', (event)=>{
    days.innerText += parseFloat(eval(`${age.value}*365`))
})


clear.addEventListener('click', function() {
    clearSum();
});

function clearSum() {
    
    age.value = '';
    days.innerText = 'Days:';
    }
