// Varriables

let btn =document.querySelector('#new-quote');
let quote= document.querySelector('.quote');
let person= document.querySelector('.person');

const quotes =[{
    quote:`"You must be the change you wish to see in the world."`,
    person:`Mahatma Gandhi`
},  {
    quote:`"Spread love everywhere you go. Let no one ever come to you without leaving happier."`,
    person:`Mother Teresa`
},  {
    quote:`. "The only thing we have to fear is fear itself." `,
    person:`Franklin D. Roosevelt`
},  {
    quote:`"Do one thing every day that scares you."`,
    person:`Eleanor Roosevelt`
},  ];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random()* quotes.length);

quote.innerText=quotes[random].quote;
person.innerText=quotes[random].person;

})