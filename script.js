// List of 30 different love messages
const loveMessages = [
    // First 10 messages (kept from previous version)
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
    
    // 20 new messages focusing on her beauty and your deep love for her
    "Adunni, your beauty is more breathtaking than the most stunning sunset. 🌅",
    "Every time I see you, my heart whispers – 'there goes the most beautiful woman in the world.' 💕",
    "Your beauty is like the moonlight, shining softly yet powerfully in my life. 🌙",
    "If beauty had a face, it would be yours. You are the definition of perfection. 💗",
    "No diamond in the world can shine as brightly as your eyes when you smile. 💎",
    "Your beauty is endless, like the ocean – deep, mesmerizing, and full of wonder. 🌊",
    "You are more beautiful than the most exquisite flower in the garden of my heart. 🌸",
    "Your face is like poetry, every curve a verse, and every smile a masterpiece. 🎨",
    "The stars envy you because you shine brighter than all of them combined. ✨",
    "Your beauty is not just in your looks, but in the way you love, care, and make my world complete. 💞",
    "Looking at you is like gazing at a dream – too beautiful to be real. 💖",
    "Every time I blink, I miss a second of your beauty. That’s why I want to stare forever. 👀❤️",
    "Your presence makes even the dullest day feel full of light and happiness. ☀️",
    "Your face is my favorite sight, your voice my favorite sound, and your love my favorite feeling. 💓",
    "God took His time making you, because you are beyond perfect. 😍",
    "The way your eyes sparkle makes my world glow with happiness. ✨",
    "Even angels stop to admire how beautifully you were created. 👼💕",
    "No artist could ever paint a picture as beautiful as you. You are a masterpiece. 🎨❤️",
    "Your beauty is like a melody that plays in my heart over and over again. 🎶💖",
    "Your elegance, your smile, your kindness—everything about you is simply perfect. 💕",
    "Seeing your face is like witnessing the first light of dawn—pure, beautiful, and magical. 🌅💞",
    "Your beauty isn’t just in your appearance, but in your soul, your heart, and your love. 💗",
    "Even the most beautiful roses fade, but you remain timeless, my queen. 🌹",
    "No matter how many lifetimes, I will always find and love you, my most beautiful one. 💫",
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
