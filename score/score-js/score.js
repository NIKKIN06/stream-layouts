fetch('../../user-info/user-info.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('left-team-name').textContent = data['ui-info']['ui-score']['teams'][0].name;
    document.getElementById('right-team-name').textContent = data['ui-info']['ui-score']['teams'][1].name;

    document.getElementById('left-team-points').textContent = data['ui-info']['ui-score']['teams'][0].points;
    document.getElementById('right-team-points').textContent = data['ui-info']['ui-score']['teams'][1].points;

    document.getElementById('left-team-players').textContent = data['ui-info']['ui-score']['teams'][0].players;
    document.getElementById('right-team-players').textContent = data['ui-info']['ui-score']['teams'][1].players;
    
    document.getElementById('format-text').textContent = data['ui-info']['format'];

    let minutes = data['ui-info']['ui-score']['timer'].minutes;
    let seconds = data['ui-info']['ui-score']['timer'].seconds;
    startTimer(minutes, seconds);
      
    updatePlayerText();
  })
  .catch(error => console.error('Error loading JSON:', error));

document.addEventListener("DOMContentLoaded", function () {
    updatePlayerText();
});

function updatePlayerText() {
    let players = document.querySelectorAll(".players-text");

    players.forEach(p => {
        let words = p.textContent.split(" • ");
        
        p.innerHTML = words.map(word => `<span>${word}</span><span>•</span>`).join("");

        let lastSpan = p.querySelector("span:last-child");
        if (lastSpan && lastSpan.textContent === "•") {
            lastSpan.remove();
        }
    });
}

function startTimer(minutes, seconds) {
    let timerElement = document.getElementById('timer-text');
    let totalSeconds = minutes * 60 + seconds;

    setInterval(function() {
        let minutesDisplay = Math.floor(totalSeconds / 60);
        let secondsDisplay = totalSeconds % 60;

        if (secondsDisplay < 10) {
            secondsDisplay = "0" + secondsDisplay;
        }

        if (minutesDisplay < 10) {
            minutesDisplay = "0" + minutesDisplay;
        }

        timerElement.textContent = minutesDisplay + ":" + secondsDisplay;
        if (totalSeconds > 0) {
            totalSeconds--;
        } else {
            timerElement.textContent = "soon";
            clearInterval();
        }
    }, 1000);
}
