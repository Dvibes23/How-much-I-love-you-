function showLoveMessage() {
    let confessionDiv = document.getElementById("confession");
    let loveMessage = document.getElementById("love-message");
    confessionDiv.classList.remove("hidden");
    confessionDiv.classList.add("show");

    // Typewriter effect
    let message = "Adunni, you are more beautiful than the stars, more radiant than the sun, and the most precious thing in my life. Every moment with you is magic. 💖 I love you endlessly, my queen. 👑";
    loveMessage.innerHTML = "";
    
    let i = 0;
    function typeWriter() {
        if (i < message.length) {
            loveMessage.innerHTML += message.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    typeWriter();

    // Start Floating Hearts
    createFloatingHearts();
}

// Floating hearts effect
function createFloatingHearts() {
    let container = document.getElementById("hearts-container");

    for (let i = 0; i < 15; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${2 + Math.random() * 4}s`;
        container.appendChild(heart);

        setTimeout(() => heart.remove(), 5000);
    }
}
