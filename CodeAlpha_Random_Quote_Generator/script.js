const quotes = [
    {
        quote: "The future depends on what you do today.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "Success is not final, failure is not fatal.",
        author: "Winston Churchill"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        quote: "Dream big and dare to fail.",
        author: "Norman Vincent Peale"
    },
    {
        quote: "Great things are done by a series of small things.",
        author: "Vincent van Gogh"
    },
    {
        quote: "Start where you are. Use what you have. Do what you can.",
        author: "Arthur Ashe"
    },
    {
        quote: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    }
];

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const newQuoteBtn = document.getElementById("newQuoteBtn");

let currentQuoteIndex = -1;

function showRandomQuote() {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === currentQuoteIndex && quotes.length > 1);

    currentQuoteIndex = randomIndex;

    const selectedQuote = quotes[randomIndex];

    quoteElement.textContent = `"${selectedQuote.quote}"`;
    authorElement.textContent = `— ${selectedQuote.author}`;
}

newQuoteBtn.addEventListener("click", showRandomQuote);

showRandomQuote();