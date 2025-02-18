// List of 10+ different love messages
const loveMessages = [
    "Adunni, you are my sunshine on the cloudiest days. Your smile lights up my world. ☀️",
    "Every heartbeat of mine whispers your name. You are my love, my life, my everything. ❤️",
    "Your love is like magic, making every ordinary moment extraordinary. ✨",
    "If love had a name, it would be yours. You are the most beautiful person inside and out. 💖",
    "You are my dream come true, my angel, my forever love. 😍",
    "Every time I see you, my heart skips a beat. You are my greatest gift from God. 🎁",
    "Loving you is like breathing – I can’t live without it. You are my heart’s greatest treasure. 💎",
    "Your beauty isn’t just in your looks, but in your kind and loving heart. 💕",
    "My love for you is like the stars, shining bright even in the darkest nights. ✨",
    "No poem or song could ever describe how much I love and adore you, my queen. 👑",
    "Your love fills my soul with joy, and your presence makes my world complete. 🌎",
    "You are the missing piece that completes my heart. Forever and always, I am yours. 💘",
    "No matter how many lifetimes, I will always find and love you, my soulmate. 🌹",
];

// Function to generate a random love message
function getRandomLoveMessage() {
    return loveMessages[Math.floor(Math.random() * loveMessages.length)];
}

// Function to show love message with animated typing effect
function showLoveMessage() {
    let confessionDiv = document.getElementById("confession");
    let loveMessage = document.getElementById("love-message");

    // Get a new random love message each time
    let message = getRandomLoveMessage();
    
    confessionDiv.classList.remove("hidden");
    confessionDiv.classList.add("show");

    loveMessage.innerHTML = "";
    loveMessage.style.opacity = 1; // Ensure it's visible

    let i = 0;
    function typeWriter() {
        if (i < message.length) {
            let span = document.createElement("span");
            span.textContent = message.charAt(i);
            span.classList.add("fade-in-text");
            loveMessage.appendChild(span);
            i++;
            setTimeout(typeWriter, 50); // Speed of typing effect
        }
    }
    typeWriter();

    // Start Floating Hearts Again
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
