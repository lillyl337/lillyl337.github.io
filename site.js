document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav-links");

    if (menuButton && nav) {
        menuButton.addEventListener("click", () => {
            nav.classList.toggle("open");
        });
    }

    loadTermcard();
    loadLibrary();
});


// ===============================
// Weekly Termcard
// ===============================

const termcard = [
    {
        week: "Week 1",
        date: "Tuesday 7 October",
        event: "Welcome Night & Social Games",
        location: "Main Hall",
        time: "7:00 PM"
    },
    {
        week: "Week 2",
        date: "Tuesday 14 October",
        event: "One-Shot RPG Night",
        location: "Seminar Room 2",
        time: "7:00 PM"
    },
    {
        week: "Week 3",
        date: "Tuesday 21 October",
        event: "Board Game Evening",
        location: "Main Hall",
        time: "7:00 PM"
    },
    {
        week: "Week 4",
        date: "Tuesday 28 October",
        event: "Halloween Special",
        location: "Main Hall",
        time: "7:00 PM"
    }
];

function loadTermcard() {

    const container = document.getElementById("termcard");

    if (!container) return;

    container.innerHTML = "";

    termcard.forEach(item => {

        const card = document.createElement("div");
        card.className = "event-card";

        card.innerHTML = `
            <h3>${item.week}</h3>
            <p><strong>${item.event}</strong></p>
            <p>${item.date}</p>
            <p>${item.location}</p>
            <p>${item.time}</p>
        `;

        container.appendChild(card);
    });

}



// ===============================
// Board Game Library
// ===============================

const games = [

    {
        name: "Catan",
        players: "3–4",
        playtime: "90 mins"
    },

    {
        name: "Ticket to Ride",
        players: "2–5",
        playtime: "60 mins"
    },

    {
        name: "Terraforming Mars",
        players: "1–5",
        playtime: "120 mins"
    },

    {
        name: "Azul",
        players: "2–4",
        playtime: "45 mins"
    },

    {
        name: "Carcassonne",
        players: "2–5",
        playtime: "45 mins"
    },

    {
        name: "Pandemic",
        players: "2–4",
        playtime: "60 mins"
    }

];

function loadLibrary() {

    const list = document.getElementById("library-list");

    if (!list) return;

    displayGames(games);

    const search = document.getElementById("search");

    if (search) {

        search.addEventListener("input", function () {

            const value = this.value.toLowerCase();

            const filtered = games.filter(game =>
                game.name.toLowerCase().includes(value)
            );

            displayGames(filtered);

        });

    }

}

function displayGames(gameList) {

    const list = document.getElementById("library-list");

    list.innerHTML = "";

    if (gameList.length === 0) {

        list.innerHTML = "<p>No games found.</p>";
        return;

    }

    gameList.forEach(game => {

        const card = document.createElement("div");

        card.className = "game-card";

        card.innerHTML = `
            <h3>${game.name}</h3>
            <p><strong>Players:</strong> ${game.players}</p>
            <p><strong>Play Time:</strong> ${game.playtime}</p>
        `;

        list.appendChild(card);

    });

}