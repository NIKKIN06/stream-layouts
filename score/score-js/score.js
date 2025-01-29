document.addEventListener("DOMContentLoaded", function () {
    let players = document.querySelectorAll(".players-text");

    players.forEach(p => {
        let words = p.textContent.split(" • ");
        
        p.innerHTML = words.map(word => `<span>${word}</span><span>•</span>`).join("");

        let lastSpan = p.querySelector("span:last-child");
        if (lastSpan && lastSpan.textContent === "•") {
            lastSpan.remove();
        }
    });
});