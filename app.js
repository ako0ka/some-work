const quotes = [
 {
    quote:
    "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    name: "Benjamin Franklin",
 },
{
    quote:
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart", 
    name: "Helen Keller",
},
{
 quote:
      "It is during our darkest moments that we must focus to see the light.",
       name: "Aristotle",

},
{
        quote:
   "Whoever is happy will make othershappy too.",
    name: "Anne Frank",
},
{
 quote:
        "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
  name: "Dr. Seuss",
},
{
        quote:
        "Life is a succession of lessons which must be lived to be understood.", name:"Ralph Waldo Emerson",
},
 ];
  
const btn = document.querySelector("#btn");
const quote = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#quoteAuthor");

console.log(btn);
console.log(quote);
console.log(quoteAuthor);

btn.addEventListener("click", displayQuote);
  
function displayQuote() {
    let number = Math.floor(Math.random() * quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
} 
  
