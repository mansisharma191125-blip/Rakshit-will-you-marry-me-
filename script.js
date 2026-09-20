const messages = [
    "Are you sure? 🥺",
    "Really sure?? 😭",
    "Pookie please... 🥹",
    "Don't do this to me 💔",
    "I'll buy you chocolates! 🍫",
    "I'll give you my hoodie! 🧸",
    "I'll let you win every game! 🎮",
    "Pleaseeeee say yes 🥺",
    "My heart is breaking 💔",
    "I'm literally crying rn 😭",
    "Think again, pookie 🎀",
    "Pretty please? 🍒",
    "Just one little YES? 💗",
    "Okay... last chance 🥹",
    "SAY YES POOKIE! 💍❤️"
];

let messageIndex = 0;

function handleNoClick() {

    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    // Change No button text
    noButton.textContent = messages[messageIndex];

    messageIndex = (messageIndex + 1) % messages.length;

    // Make YES button bigger
    const currentSize =
        parseFloat(window.getComputedStyle(yesButton).fontSize);

    yesButton.style.fontSize = `${currentSize * 1.25}px`;

    // Move the NO button
    noButton.style.position = "fixed";

    const maxX = window.innerWidth - noButton.offsetWidth - 20;
    const maxY = window.innerHeight - noButton.offsetHeight - 20;

    const randomX = Math.max(10, Math.random() * maxX);
    const randomY = Math.max(10, Math.random() * maxY);

    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

function handleYesClick() {

    // Little celebration before going to the YES page
    document.body.classList.add("celebrating");

    setTimeout(() => {
        window.location.href = "yes_page.html";
    }, 500);
}
