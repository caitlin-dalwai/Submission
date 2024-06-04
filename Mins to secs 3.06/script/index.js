let minutes = document.getElementById('low')
let seconds = document.getElementById('high')
let answer = document.getElementById('calc')
let clear = document.getElementById('clr')

answer.addEventListener('click', (event)=>{
    seconds.innerText += parseFloat(eval(`${minutes.value}*60`))
})


clear.addEventListener('click', function() {
    clearSum();
});

function clearSum() {
    
    minutes.value = '';
    seconds.innerText = 'Seconds:';
    }
