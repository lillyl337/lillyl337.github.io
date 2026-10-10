// Oxford Board Games Society - site data and small interactive behaviours.
// Edit the arrays below to add your real committee, termcard and documents.
// Board games are stored separately in data/games.yaml.

const committee = [
  {
    role: "President",
    name: "Oscar Clement",
    college: "St Hilda's College",
    email: "oscar.clement@st-hildas.ox.ac.uk"
  },
  {
    role: "Secretary",
    name: "Lilly Sefton",
    college: "Jesus College",
    email: "lilly.sefton@jesus.ox.ac.uk"
  },
  {
    role: "Treasurer",
    name: "Rory Armstrong-Ortiz",
    college: "Merton College",
    email: "rory.armstrong-ortiz@merton.ox.ac.uk"
  },
  {
    role: "Welfare Officer",
    name: "Lilly Sefton",
    college: "Jesus College",
    email: "lilly.sefton@jesus.ox.ac.uk"
  },
  {
    role: "Webmaster",
    name: "Lilly Sefton",
    college: "Jesus College",
    email: "lilly.sefton@jesus.ox.ac.uk"
  }
];

const termcard = [
  {
    week: "Week 0",
    date: "Saturday",
    event: "Board Games",
    time: "7–11 PM",
    location: "None",
    notes: "There will be **no** session on week 0 Saturday"
  },
  {
    week: "Week 1",
    date: "Wednesday",
    event: "Board Games",
    time: "7–11 PM",
    location: "St Hilda's, Vernon Harcourt Room",
    notes: ""
  },
  {
    week: "Week 1",
    date: "Saturday",
    event: "Board Games",
    time: "7–11 PM",
    location: "St Hilda's, Vernon Harcourt Room",
    notes: ""
  },
  {
    week: "Week 2",
    date: "Wednesday",
    event: "Board Games",
    time: "7–11 PM",
    location: "St Hilda's, Vernon Harcourt Room",
    notes: ""
  },
  {
    week: "Week 2",
    date: "Saturday",
    event: "Board Games",
    time: "7–11 PM",
    location: "St Hilda's, Vernon Harcourt Room",
    notes: ""
  },
  {
    week: "Week 3",
    date: "Wednesday",
    event: "Board Games",
    time: "7–11 PM",
    location: "St Hilda's, Vernon Harcourt Room",
    notes: ""
  },
  {
    week: "Week 3",
    date: "Saturday",
    event: "Board Games",
    time: "7–11 PM",
    location: "St Hilda's, Vernon Harcourt Room",
    notes: ""
  },
  {
    week: "Week 4",
    date: "Wednesday",
    event: "Board Games",
    time: "7–11 PM",
    location: "St Hilda's, Vernon Harcourt Room",
    notes: ""
  },
  {
    week: "Week 4",
    date: "Saturday",
    event: "Board Games",
    time: "7–11 PM",
    location: "St Hilda's, Vernon Harcourt Room",
    notes: ""
  },
  {
    week: "Week 5",
    date: "Wednesday",
    event: "Board Games",
    time: "7–11 PM",
    location: "St Hilda's, Vernon Harcourt Room",
    notes: ""
  },
  {
    week: "Week 5",
    date: "Saturday",
    event: "Board Games",
    time: "7–11 PM",
    location: "St Hilda's, Vernon Harcourt Room",
    notes: ""
  },
  {
    week: "Week 6",
    date: "Wednesday",
    event: "Board Games",
    time: "7–11 PM",
    location: "St Hilda's, Vernon Harcourt Room",
    notes: ""
  },
  {
    week: "Week 6",
    date: "Saturday",
    event: "Board Games",
    time: "7–11 PM",
    location: "St Hilda's, Vernon Harcourt Room",
    notes: ""
  },
  {
    week: "Week 7",
    date: "Wednesday",
    event: "Board Games",
    time: "7–11 PM",
    location: "St Hilda's, Vernon Harcourt Room",
    notes: ""
  },
  {
    week: "Week 7",
    date: "Saturday",
    event: "Board Games",
    time: "7–11 PM",
    location: "St Hilda's, Vernon Harcourt Room",
    notes: ""
  },
  {
    week: "Week 8",
    date: "Wednesday",
    event: "Board Games",
    time: "7–11 PM",
    location: "St Hilda's, Vernon Harcourt Room",
    notes: ""
  },
  {
    week: "Week 8",
    date: "Saturday",
    event: "Board Games",
    time: "7–11 PM",
    location: "St Hilda's, Vernon Harcourt Room",
    notes: ""
  }
];

const documents = [
  {
    title: "Constitution",
    description: "The constitution governing the Oxford Board Games Society.",
    url: "documents/Oxford Board Games Society Constitution.pdf"
  },
  {
    title: "Code of Conduct",
    description: "The society's Code of Conduct, setting out the standards of behaviour expected of members and visitors.",
    url: "documents/Oxford Board Games Society Code of Conduct.pdf"
  },
  {
    title: "Complaints Procedure",
    description: "The procedure for making and handling complaints within the society.",
    url: "documents/Oxford Board Games Society Complaints Procedure.pdf"
  }
];

let games = [];

function renderCommittee() {
  const container = document.getElementById("committee-list");
  if (!container) return;

  container.innerHTML = committee.map(member => `
    <div class="col-md-6 col-lg-4">
      <article class="card h-100 border-0 shadow-sm">
        <div class="card-body p-4">
          <p class="eyebrow mb-2">${escapeHtml(member.role)}</p>
          <h2 class="h4">${escapeHtml(member.name)}</h2>
          <p class="text-secondary mb-2">${escapeHtml(member.college)}</p>
          <a href="mailto:${escapeHtml(member.email)}">${escapeHtml(member.email)}</a>
        </div>
      </article>
    </div>
  `).join("");
}

function renderTermcard() {
  const tbody = document.getElementById("termcard-body");
  if (!tbody) return;

  tbody.innerHTML = termcard.map(event => `
    <tr>
      <td><strong>${escapeHtml(event.week)}</strong></td>
      <td>${escapeHtml(event.date)}</td>
      <td>${escapeHtml(event.event)}</td>
      <td>${escapeHtml(event.time)}</td>
      <td>${escapeHtml(event.location)}</td>
      <td>${escapeHtml(event.notes)}</td>
    </tr>
  `).join("");
}

function renderDocuments() {
  const container = document.getElementById("documents-list");
  if (!container) return;

  container.innerHTML = documents.map(doc => `
    <div class="col-md-6">
      <article class="card h-100 border-0 shadow-sm">
        <div class="card-body p-4">
          <h2 class="h4">${escapeHtml(doc.title)}</h2>
          <p class="text-secondary">${escapeHtml(doc.description)}</p>
          <a class="btn btn-outline-primary" href="${escapeAttribute(doc.url)}">Open document</a>
        </div>
      </article>
    </div>
  `).join("");
}

async function loadGames() {
  const response = await fetch("data/games.yaml");

  if (!response.ok) {
    throw new Error(`Could not load games (${response.status})`);
  }

  const yaml = await response.text();
  const loadedGames = jsyaml.load(yaml);

  if (!Array.isArray(loadedGames)) {
    throw new Error("The games YAML must contain a list");
  }

  games = loadedGames;
}

function formatPlayers(minPlayers, maxPlayers) {
  const min = Number(minPlayers);
  const max = Number(maxPlayers);

  if (min === max) {
    return `${min} ${min === 1 ? "player" : "players"}`;
  }

  return `${min}–${max} players`;
}

function formatPlaytime(minPlaytime, maxPlaytime) {
  const min = Number(minPlaytime);
  const max = Number(maxPlaytime);

  if (min === max) {
    return `${min} min`;
  }

  return `${min}–${max} min`;
}

function formatComplexity(complexity) {
  const value = String(complexity || "");

  if (!value) return "";

  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
}

function renderGames() {
  const container = document.getElementById("library-list");
  if (!container) return;

  const search = document.getElementById("game-search");
  const playerFilter = document.getElementById("player-filter");
  const complexityFilter = document.getElementById("complexity-filter");

  const query = (search?.value || "").trim().toLowerCase();
  const requiredPlayers = Number(playerFilter?.value || 0);
  const requiredComplexity = complexityFilter?.value || "";

  const filtered = games.filter(game => {
    const haystack =
      `${game.name} ${game.complexity} ${game.description}`.toLowerCase();

    const matchesQuery =
      !query || haystack.includes(query);

    const minPlayers = Number(game.minPlayers);
    const maxPlayers = Number(game.maxPlayers);

    const matchesPlayers =
      !requiredPlayers ||
      (
        minPlayers <= requiredPlayers &&
        maxPlayers >= requiredPlayers
      );

    const matchesComplexity =
      !requiredComplexity ||
      game.complexity == requiredComplexity;

    return matchesQuery && matchesPlayers && matchesComplexity;
  });

  if (!filtered.length) {
    container.innerHTML = `
      <div class="col-12">
        <div class="alert alert-secondary">
          No games match your search.
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(game => {
    const players = formatPlayers(
      game.minPlayers,
      game.maxPlayers
    );

    const playtime = formatPlaytime(
      game.minPlaytime,
      game.maxPlaytime
    );

    const complexity = formatComplexity(game.complexity);

    return `
      <div class="col-md-6 col-lg-4">
        <article class="card game-card h-100 border-0 shadow-sm">
          <div class="card-body p-4">
            <h2 class="h4 mb-2">${escapeHtml(game.name)}</h2>

            <p class="small text-secondary mb-3">
              <strong>${escapeHtml(players)}</strong>
              <span aria-hidden="true"> · </span>
              ${escapeHtml(playtime)}
              <span aria-hidden="true"> · </span>
              ${escapeHtml(complexity)} complexity
            </p>

            <p class="text-secondary mb-0">
              ${escapeHtml(game.description)}
            </p>
          </div>
        </article>
      </div>
    `;
  }).join("");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

document.addEventListener("DOMContentLoaded", () => {
  renderCommittee();
  renderTermcard();
  renderDocuments();
  renderGames();

  document.querySelectorAll("[data-current-year]").forEach(element => {
    element.textContent = new Date().getFullYear();
  });

  if (document.getElementById("library-list")) {
    loadGames()
      .then(renderGames)
      .catch(error => {
        document.getElementById("library-list").innerHTML =
          `<div class="col-12"><div class="alert alert-danger">The game list could not be loaded.</div></div>`;
        console.error(error);
      });

    document.getElementById("game-search")?.addEventListener("input", renderGames);
    document.getElementById("player-filter")?.addEventListener("change", renderGames);
    document.getElementById("complexity-filter")?.addEventListener("change", renderGames);
  }

  document.querySelector("form[data-placeholder-form]")?.addEventListener("submit", event => {
    event.preventDefault();
    alert("This is a template form. Connect it to your mailing-list provider before publishing.");
  });
});