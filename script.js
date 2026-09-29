let flashcards = [
    {
        question: "What is HTML?",
        answer: "HTML stands for HyperText Markup Language."
    },
    {
        question: "What is CSS?",
        answer: "CSS is used to style and design web pages."
    },
    {
        question: "What is JavaScript?",
        answer: "JavaScript is a programming language used to make web pages interactive."
    }
];

let currentIndex = 0;

// Get HTML elements
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const showAnswerBtn = document.getElementById("showAnswerBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const cardNumber = document.getElementById("cardNumber");
const addBtn = document.getElementById("addBtn");
const editBtn = document.getElementById("editBtn");
const deleteBtn = document.getElementById("deleteBtn");

// Display current flashcard
function displayFlashcard() {
    const card = flashcards[currentIndex];

    questionElement.textContent = card.question;
    answerElement.textContent = card.answer;

    answerElement.classList.add("hidden");
    showAnswerBtn.textContent = "Show Answer";

    cardNumber.textContent = `${currentIndex + 1} / ${flashcards.length}`;
}

// Show or hide answer
showAnswerBtn.addEventListener("click", function () {
    if (answerElement.classList.contains("hidden")) {
        answerElement.classList.remove("hidden");
        showAnswerBtn.textContent = "Hide Answer";
    } else {
        answerElement.classList.add("hidden");
        showAnswerBtn.textContent = "Show Answer";
    }
});

// Previous flashcard
prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
        currentIndex--;
        displayFlashcard();
    } else {
        alert("This is the first flashcard.");
    }
});

// Next flashcard
nextBtn.addEventListener("click", function () {
    if (currentIndex < flashcards.length - 1) {
        currentIndex++;
        displayFlashcard();
    } else {
        alert("This is the last flashcard.");
    }
});

// Add new flashcard
addBtn.addEventListener("click", function () {
    const question = prompt("Enter the question:");

    if (!question || question.trim() === "") {
        return;
    }

    const answer = prompt("Enter the answer:");

    if (!answer || answer.trim() === "") {
        return;
    }

    flashcards.push({
        question: question.trim(),
        answer: answer.trim()
    });

    currentIndex = flashcards.length - 1;

    saveFlashcards();
    displayFlashcard();

    alert("Flashcard added successfully!");
});

// Edit current flashcard
editBtn.addEventListener("click", function () {
    const currentCard = flashcards[currentIndex];

    const newQuestion = prompt(
        "Edit question:",
        currentCard.question
    );

    if (!newQuestion || newQuestion.trim() === "") {
        return;
    }

    const newAnswer = prompt(
        "Edit answer:",
        currentCard.answer
    );

    if (!newAnswer || newAnswer.trim() === "") {
        return;
    }

    currentCard.question = newQuestion.trim();
    currentCard.answer = newAnswer.trim();

    saveFlashcards();
    displayFlashcard();

    alert("Flashcard updated successfully!");
});

// Delete current flashcard
deleteBtn.addEventListener("click", function () {
    if (flashcards.length === 1) {
        alert("At least one flashcard must remain.");
        return;
    }

    const confirmation = confirm(
        "Are you sure you want to delete this flashcard?"
    );

    if (!confirmation) {
        return;
    }

    flashcards.splice(currentIndex, 1);

    if (currentIndex >= flashcards.length) {
        currentIndex = flashcards.length - 1;
    }

    saveFlashcards();
    displayFlashcard();

    alert("Flashcard deleted successfully!");
});

// Save flashcards in browser
function saveFlashcards() {
    localStorage.setItem(
        "flashcards",
        JSON.stringify(flashcards)
    );
}

// Load saved flashcards
function loadFlashcards() {
    const savedFlashcards = localStorage.getItem("flashcards");

    if (savedFlashcards) {
        flashcards = JSON.parse(savedFlashcards);
    }
}

// Start application
loadFlashcards();
displayFlashcard();