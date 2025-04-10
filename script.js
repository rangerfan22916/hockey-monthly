// Sample roster array
const roster = [
  { name: "Drew Lichtenthal", position: "Goalie", image: "drew.jpg" },
  { name: "John Doe", position: "Forward", image: "john.jpg" },
  // More players can be added here
];

const accomplishments = [
  "State Championship Winners 2022",
  "Regional Tournament Champions 2023",
  "Most Improved Team Award 2021",
  // More accomplishments can be added here
];

// Populate the roster page dynamically
const rosterList = document.getElementById("roster-list");
roster.forEach((player) => {
  const card = document.createElement("div");
  card.classList.add("col-lg-3", "col-md-4", "col-sm-6", "mb-4");
  card.innerHTML = `
      <div class="card">
          <img src="${player.image}" class="card-img-top" alt="${player.name}">
          <div class="card-body">
              <h5 class="card-title">${player.name}</h5>
              <p class="card-text">${player.position}</p>
          </div>
      </div>
  `;
  rosterList.appendChild(card);
});

// Populate the accomplishments page dynamically
const accomplishmentsContainer = document.querySelector(".row");
accomplishments.forEach((item) => {
  const card = document.createElement("div");
  card.classList.add("col-lg-4", "col-md-6", "mb-4");
  card.innerHTML = `
      <div class="card">
          <div class="card-body">
              <h5 class="card-title">Accomplishment</h5>
              <p class="card-text">${item}</p>
          </div>
      </div>
  `;
  accomplishmentsContainer.appendChild(card);
});
