function showLoveMessage() {
    let confessionDiv = document.getElementById("confession");
    let loveMessage = document.getElementById("love-message");
    confessionDiv.classList.remove("hidden");
    confessionDiv.classList.add("show");

    // Typewriter effect for confession message
    let message = "Adunni, you are the most beautiful soul I have ever known. You shine brighter than the stars, and every moment with you is magical. My love for you grows every day. 💖 I love you endlessly, my queen. 👑";
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
