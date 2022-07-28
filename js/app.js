const numberButtons = document.querySelectorAll('.number');
const display = document.querySelector('.display');

let n1 = "";
let n2 = "";

numberButtons.forEach(btn=>{

    btn.addEventListener('click',(e)=>{
        n1 += e.target.value;
        display.innerText = n1;
    })

})
console.log(numberButtons)