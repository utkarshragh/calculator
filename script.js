let input=document.getElementById('inputBox')
let buttons=document.querySelectorAll('button')

console.log(buttons);
let string="";//to store result

let arr=Array.from(buttons)
// console.log(arr)
arr.forEach(button => {
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string= eval(string);
            // eval is inbuilt uncion in JS jo hmae sing me jo chanes hone usko evaluate krke de dega mathematically 

            input.value=string

        }

        else if(e.target.innerHTML == 'AC')
        {
            string = '';
            input.value=string
        }
        else if(e.target.innerHTML == 'DEL')
        {
            string = string.substring(0,string.length-1)
            input.value=string;
        }
        else{
            string+=e.target.innerHTML
            input.value=string;
        }
    })
})