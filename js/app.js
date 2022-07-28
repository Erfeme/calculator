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
let oflag = false;
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
        
        if(oflag == false){

            operator = e.target.value;

             nflag = true;

             oflag = true;

        } else if (oflag == true){

            display.innerText = operation(n1,n2,operator);

            n1 = display.innerText;

            operator = e.target.value;

            n2 = '';

        }

        
        
    })

})

resetButton.addEventListener('click',e=>{
    nflag = false;
    n1 ="";
    n2 ="";
    display.innerText = "0";
})

resultButton.addEventListener('click', e=>{
    display.innerText = operation(n1,n2,operator)
    n1 = operation(n1,n2,operator);
    n2 = '0';
})

/* Functions */

const operation=(n1,n2,operator)=>{

    switch (operator){
        case '+':
            return sum(n1,n2);
        case'-':
            return sub(n1,n2);
        case'*':
            return prod(n1,n2);
        case'/':
            return div(n1,n2);
    }

}

const sum=(n1,n2)=>{
    return parseFloat(n1) + parseFloat(n2);
}

const sub=(n1,n2)=>{
    return parseFloat(n1) - parseFloat(n2);
}

const prod=(n1,n2)=>{
    return parseFloat(n1) * parseFloat(n2);
}

const div=(n1,n2)=>{
    return parseFloat(n1) / parseFloat(n2);
}
