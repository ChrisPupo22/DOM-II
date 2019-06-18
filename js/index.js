// Your code goes here
let colorNav = document.querySelector('nav');
console.log(colorNav)

colorNav.addEventListener('mouseover', event =>{
    event.target.style.color = 'yellow'; 
});

colorNav.addEventListener('mouseout', event =>{
    event.target.style.color = 'black';
});

let btnColor = document.querySelector('.btn');
console.log(btnColor);


btnColor.addEventListener('dblclick', event =>{
    event.target.style.background = 'firebrick';
});

let bottomImg = document.querySelector('.boat-pic');
console.log(bottomImg);

bottomImg.addEventListener('click', event =>{
    event.target.style.border = '2px dashed orange';
});

bottomImg.addEventListener('dblclick', event =>{
    event.target.style.border = '5px dotted black'
});
