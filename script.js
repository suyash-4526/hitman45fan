const cricketQuotes = [
    "Cricket is not just a game, it's a way of life.",
    "You don't play for the crowd, you play for the country. - Mahendra Singh Dhoni",
    "Enjoy the game and chase your dreams. Dreams do come true. - Sachin Tendulkar",
    "A true batsman should in most of his strokes tell the truth about himself. - Neville Cardus",
    "The hallmark of a great captain is the ability to win the toss, at the right time. - Richie Benaud",
    "Cricket is a team game. If you want fame for yourself, go play an individual game. - Gautam Gambhir",
    "The joy of cricket comes from the camaraderie and the spirit of the game.",
    "In cricket, as in life, it is the small moments that make the big difference.",
    "The bat is not a toy, it's a weapon. It gives me everything in life, which helps me to do everything on the field. - Virat Kohli",
    "Cricket is a pressure game, and when it comes to an India-Pakistan match, the pressure is doubled. - Imran Khan"
];


function newQuote() {
    const randomIndex = Math.floor(Math.random() * cricketQuotes.length);
    const quoteDisplay = document.getElementById('quoteDisplay');
    quoteDisplay.textContent = cricketQuotes[randomIndex];
}


const rohitImages = [
    "https://i.pinimg.com/736x/1b/ee/78/1bee780739b6f3fa94bc8e002e30bdb8.jpg",
    "https://i.pinimg.com/736x/5c/b1/52/5cb1523bc6a14884d9e4ec1bd99acd97.jpg",
    "https://i.pinimg.com/736x/ba/64/d4/ba64d4d29e45c1f2e456887755b72131.jpg",
    
];


function startSlideshow() {
    const photoElement = document.getElementById("dynamicPhoto");
    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % rohitImages.length; 
        photoElement.src = rohitImages[currentIndex];
    }, 3000); 
}

window.onload = startSlideshow;