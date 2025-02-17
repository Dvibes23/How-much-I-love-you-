function showResult() {
    let resultText = document.getElementById("result");
    resultText.innerText = "More beautiful than words can describe ❤️";
    resultText.style.opacity = "1";
    resultText.style.transform = "scale(1)";

    setTimeout(() => {
        document.getElementById("confession").classList.add("show");
    }, 2000);

    createFloatingHearts();
}

// Floating hearts effect
function createFloatingHearts() {
    for (let i = 0; i < 10; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${2 + Math.random() * 3}s`;
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }
}
