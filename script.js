// Playoff History Array
const playoffHistory = [
  {
    year: "2024–2025",
    achievement: "Reached state finals for the first time in program history",
    details:
      "Secured a 4-2 victory over Governor Livingston, ending the Highlanders' pursuit of a fourth consecutive trip to the state finals.",
  },
  {
    year: "2010–2011",
    achievement: "Handchen Cup Finalists",
    details:
      "The Mustangs reached the Handchen Cup finals, showing their competitive growth in the Shore Conference.",
  },
  {
    year: "1990s",
    achievement: "Sectional Titles",
    details:
      "Marlboro Mustangs clinched sectional titles, establishing a strong presence in the New Jersey high school ice hockey landscape.",
  },
];

// Function to display playoff accomplishments on the webpage
function displayPlayoffHistory() {
  const historyContainer = document.getElementById("playoff-history");

  playoffHistory.forEach((item) => {
    const historyItem = document.createElement("div");
    historyItem.classList.add("history-item");

    const year = document.createElement("h3");
    year.innerText = `Year: ${item.year}`;
    historyItem.appendChild(year);

    const achievement = document.createElement("h4");
    achievement.innerText = `Achievement: ${item.achievement}`;
    historyItem.appendChild(achievement);

    const details = document.createElement("p");
    details.innerText = `Details: ${item.details}`;
    historyItem.appendChild(details);

    historyContainer.appendChild(historyItem);
  });
}

// JavaScript for Roster
const roster = [
  {
    name: "Nick Silacci",
    position: "G",
    class: "Sophomore",
    height: "",
    weight: "",
  },
  {
    name: "Rob Imburgia",
    position: "F",
    class: "Senior",
    height: "",
    weight: "",
  },
  {
    name: "Joshua Kopach",
    position: "",
    class: "Senior",
    height: "",
    weight: "",
  },
  {
    name: "Zachary Price",
    position: "D",
    class: "Senior",
    height: "",
    weight: "",
  },
  {
    name: "Vincent Sasso",
    position: "D",
    class: "Junior",
    height: "",
    weight: "",
  },
  {
    name: "Aiden Maryams",
    position: "",
    class: "Junior",
    height: "",
    weight: "",
  },
  {
    name: "Colton Klobuchar",
    position: "F",
    class: "Junior",
    height: "",
    weight: "",
  },
  {
    name: "Alen Grigorian",
    position: "F",
    class: "Senior",
    height: "",
    weight: "",
  },
  {
    name: "Sasha Saks",
    position: "F",
    class: "Sophomore",
    height: "",
    weight: "",
  },
  {
    name: "Philip Revzin",
    position: "F",
    class: "Sophomore",
    height: "",
    weight: "",
  },
  {
    name: "Ethan Cash",
    position: "F",
    class: "Senior",
    height: "",
    weight: "",
  },
  {
    name: "Kyle Rabkin",
    position: "F",
    class: "Senior",
    height: "",
    weight: "",
  },
  {
    name: "T.J. Wesch",
    position: "D",
    class: "Sophomore",
    height: "",
    weight: "",
  },
  {
    name: "Cameron Estok",
    position: "F",
    class: "Senior",
    height: "",
    weight: "",
  },
  {
    name: "Lincoln Maikos",
    position: "D",
    class: "Junior",
    height: "",
    weight: "",
  },
  {
    name: "Tyler Scarpino",
    position: "D",
    class: "Sophomore",
    height: "",
    weight: "",
  },
  {
    name: "Matthew McLaughlin",
    position: "D",
    class: "Senior",
    height: "",
    weight: "",
  },
  {
    name: "Josh Cacciapalle",
    position: "D",
    class: "Senior",
    height: "",
    weight: "",
  },
  {
    name: "Dennis Revzin",
    position: "D",
    class: "Senior",
    height: "",
    weight: "",
  },
  {
    name: "Zachary Levin",
    position: "F",
    class: "Senior",
    height: "",
    weight: "",
  },
  {
    name: "Drew Lichtenthal",
    position: "G",
    class: "Junior",
    height: "",
    weight: "",
  },
  {
    name: "David Furman",
    position: "G",
    class: "Junior",
    height: "",
    weight: "",
  },
  {
    name: "Justin Gerashenko",
    position: "F",
    class: "Senior",
    height: "",
    weight: "",
  },
  { name: "John Drew", position: "F", class: "Senior", height: "", weight: "" },
  {
    name: "Aiden Moreira",
    position: "F",
    class: "Senior",
    height: "",
    weight: "",
  },
  {
    name: "Joseph Sottile",
    position: "F",
    class: "Senior",
    height: "",
    weight: "",
  },
];

// Function to display roster
function displayRoster() {
  const rosterContainer = document.getElementById("roster");

  roster.forEach((player) => {
    const playerItem = document.createElement("div");
    playerItem.classList.add("player-item");

    const name = document.createElement("h3");
    name.innerText = player.name;
    playerItem.appendChild(name);

    const position = document.createElement("p");
    position.innerText = `Position: ${player.position}`;
    playerItem.appendChild(position);

    const playerClass = document.createElement("p");
    playerClass.innerText = `Class: ${player.class}`;
    playerItem.appendChild(playerClass);

    const height = document.createElement("p");
    height.innerText = `Height: ${player.height}`;
    playerItem.appendChild(height);

    const weight = document.createElement("p");
    weight.innerText = `Weight: ${player.weight}`;
    playerItem.appendChild(weight);

    rosterContainer.appendChild(playerItem);
  });
}

// Call functions to display data when the page loads
window.onload = function () {
  displayPlayoffHistory();
  displayRoster();
};
