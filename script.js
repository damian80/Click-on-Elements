// -1-  get a 'button' from DOM (document object model)
const btn = document.querySelector('button');
// create a let to change a numbers after click
let number = 1;
const addElement = ()=>{
    
    const div = document.createElement('div');
    div.textContent = number;
    if(number % 5 == 0){
        div.classList.add('circle')
    }
    document.body.appendChild(div);
    number++;

}
// get listener for a const btn
btn.addEventListener('click', addElement)

