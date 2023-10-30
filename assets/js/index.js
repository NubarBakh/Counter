
let decrease= document.querySelector('.decrease');
let increase= document.querySelector('.increase');
let reset= document.querySelector('.reset');
let value= document.querySelector('#value');
 let btn =document.querySelectorAll('.btn')
let count =0;


decrease.addEventListener('click', function(){
count--;
value.innerHTML=count;

})

reset.addEventListener('click', function(){
    count=0;
    value.innerHTML=count;
    })

increase.addEventListener('click', function(){
        count++
        value.innerHTML=count;
        })





btn.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        btn.style.backgroundColor = 'black';
        btn.style.color = 'white';
    });

    btn.addEventListener('mouseleave', function() {
        btn.style.backgroundColor = 'white';
        btn.style.color = 'black';
    });
})