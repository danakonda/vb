// ✅ Define the footballTeam object exactly as required
const footballTeam = {
  team: "SVCE",
  year: 2025,
  headCoach: "MOHAN",
  players: [
    { name: "dhileep", position: "counter", isCaptain: false,number:7 },
    { name: "skyraj", position: "counter", isCaptain: false ,number:2},
    { name: "vishnu", position: "middleblocker", isCaptain: false,number:3 },
    { name: "hementh", position: "middleblocker", isCaptain: false,number:8 },
    { name: "tiru", position: "defender", isCaptain: false ,number:17},
    { name: "sathish", position: "defender", isCaptain: false ,number:1},
    { name: "vivek", position: "setter/universal", isCaptain: false,number:5 },
    { name: "hari", position: "counter", isCaptain: false ,number:4},
    { name: "anil", position: "setter/universal", isCaptain: true,number:11 },
    { name: "yogesh", position: "defender", isCaptain: false ,number:12}
  ]
};

// ✅ Display team details
document.getElementById("team").textContent = footballTeam.team;
document.getElementById("year").textContent = footballTeam.year;
document.getElementById("head-coach").textContent = footballTeam.headCoach;

// ✅ Display players inside #player-cards
function displayPlayers(playersArray) {
  const container = document.getElementById("player-cards");
  container.innerHTML = ""; // Clear existing content

  playersArray.forEach(player => {
    const card = document.createElement("div");
    card.className = "player-card";

    const h2 = document.createElement("h2");
    h2.textContent = player.isCaptain ? `(Captain) ${player.name}\n#${player.number}` : `${player.name}\n#${player.number}`;

    const p = document.createElement("p");
    p.textContent = `Position: ${player.position}\nNumber: ${player.number}`;

    card.appendChild(h2);
    card.appendChild(p);
    container.appendChild(card);
  });
}

// ✅ Show all players by default
displayPlayers(footballTeam.players);

// ✅ Filter players on dropdown change
document.getElementById("players").addEventListener("change", function () {
  const selected = this.value;

  if (selected === "all") {
    displayPlayers(footballTeam.players);
  } else {
    const filteredPlayers = footballTeam.players.filter(player => player.position === selected);
    displayPlayers(filteredPlayers);
  }
});
