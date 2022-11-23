// selecting elements 
let buttons = Array.from(document.querySelectorAll('.btns'));
const number = document.querySelector('.number');


// add event listener 
buttons.map((btn)=>{
    btn.addEventListener('click', (e) =>{
    switch(e.target.textContent){
        case "C":
            number.textContent ="";
            break
        case "<-":
            if(number.textContent){
                number.textContent = number.textContent.slice(0,-1);
            }
            break
        case "=":
            try{
                number.textContent =  eval(number.textContent);
            } catch{
                number.textContent =  "Errors";
            }
            break
        default:
            number.textContent += e.target.textContent;
    }
    })
});