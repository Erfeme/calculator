/* DOM Objects */
const numberButtons = document.querySelectorAll('.number');
const display = document.querySelector('.display');
const operatorButtons = document.querySelectorAll('.operator');
const resetButton = document.querySelector('.reset');
const resultButton = document.querySelector('.result');

/* Auxiliar variables */ 
let n1 = "";
let n2 = "";
let nflag = false;
let operator = "";

/* Event Listeners */ 
numberButtons.forEach(btn=>{

    btn.addEventListener('click',(e)=>{

        if (nflag == false){
                n1 += e.target.value;
                display.innerText = n1;
        } else if(nflag == true){
                n2 +=e.target.value;
                display.innerText = n2;
        }
    })
})

operatorButtons.forEach(btn=>{

    btn.addEventListener('click',e=>{
        
        operator = e.target.value;

        nflag = true;
        
    })

})

resetButton.addEventListener('click',e=>{
    nflag = false;
    n1 = "";
    n2 ="";
    display.innerText = "0";
})

resultButton.addEventListener('click', e=>{
    display.innerText = operation(n1,n2,operator)
    console.log(n1,n2,operator);
})

/* Functions */

const operation=(n1,n2,operator)=>{

    switch (operator){
        case '+':
            return sum(n1,n2);

    }

}

const sum=(n1,n2)=>{
    return parseInt(n1) + parseInt(n2);
}