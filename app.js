const tournaments = {
  "FULL MAP": [
    {
      name: "Full Map Tournament #1",
      entry: "₹35",
      reward: "₹28 / kill + ₹650 Booyah"
    },
    {
      name: "Full Map Tournament #2",
      entry: "₹35",
      reward: "₹28 / kill + ₹650 Booyah"
    }
  ],

  "LONWOLF 1 VS 1": [
    {
      name: "Lonwolf 1 VS 1 #1",
      entry: "₹50",
      reward: "₹80 Winner"
    }
  ],

  "CLASH SQUAD 2 VS 2": [
    {
      name: "Clash Squad 2 VS 2 #1",
      entry: "₹50",
      reward: "₹80 each for 2 winning players"
    }
  ],

  "LONWOLF 2 VS 2": [
    {
      name: "Lonwolf 2 VS 2 #1",
      entry: "₹50",
      reward: "₹80 each for winning players"
    }
  ]
};

function hideAll() {
  document.querySelectorAll("main section")
    .forEach(section => section.classList.add("hidden"));
}

function goHome() {
  hideAll();
  document.getElementById("home").classList.remove("hidden");
}

function openCategory(category) {
  hideAll();

  document.getElementById("details").classList.remove("hidden");
  document.getElementById("categoryTitle").textContent = category;

  const list = document.getElementById("tournamentList");
  list.innerHTML = "";

  const categoryTournaments = tournaments[category] || [];

  categoryTournaments.forEach(tournament => {
    const box = document.createElement("div");
    box.className = "tournament";

    box.innerHTML = `
      <h3>${tournament.name}</h3>
      <span class="tag">Entry ${tournament.entry}</span>
      <p>${tournament.reward}</p>
      <button class="back" onclick="demoJoin()">
        View / Join
      </button>
    `;

    list.appendChild(box);
  });
}

function demoJoin() {
  alert("Demo only: payment/joining abhi connect nahi hai.");
}

function showWallet() {
  hideAll();
  document.getElementById("wallet").classList.remove("hidden");
}

function openSocial(which) {
  const title = which === "instagram"
    ? "Instagram"
    : "YouTube";

  document.getElementById("modalTitle").textContent = title;

  document.getElementById("modalBody").innerHTML = `
    <p>Social link next step mein connect karenge.</p>
  `;

  document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
    }
