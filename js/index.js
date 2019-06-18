// Your code goes here
let colorNav = document.querySelector('nav');
console.log(colorNav)

colorNav.addEventListener('mouseover', event =>{
    event.target.style.color = 'yellow'; 
});

colorNav.addEventListener('mouseout', event =>{
    event.target.style.color = 'black';
});

let funBusAnim = document.querySelector('h1');
console.log(funBusAnim);

funBusAnim.addEventListener('select', event =>{
    event.target.style.color = 'red';
})