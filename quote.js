const quoteBtn = document.getElementById("quotebtn");
const quoteCloseBtn = document.getElementById("quote-closebtn");
const quote = document.querySelector(".quote");

const quoteHeadingTitle = document.getElementById("quote-heading-title");


quoteBtn.addEventListener("click", () => {


    dashboard.style.display = "none";
    quote.style.display = "block";
    quoteHeadingTitle.textContent = "Quote Of The Day!"


getQuote();
});

quoteCloseBtn.addEventListener("click", () => {


    dashboard.style.display = "block";
    quote.style.display = "none";
})



const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");

async function getQuote(){
    const response = await fetch ("https://dummyjson.com/quotes/random");

    const data = await response.json();

    quoteText.textContent = `❝ ${data.quote} ❞`;

    quoteAuthor.textContent = `— ${data.author}`;

};

getQuote();