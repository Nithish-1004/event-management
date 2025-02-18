document.addEventListener("DOMContentLoaded", () => {
    const events = [
        { name: "Tech Conference", date: "2025-04-10" },
        { name: "Music Festival", date: "2025-05-15" },
        { name: "AI Workshop", date: "2025-06-20" }
    ];

    const eventList = document.getElementById("event-list");
    const eventSelect = document.getElementById("eventSelect");

    // Populate Events
    events.forEach(event => {
        const eventCard = document.createElement("div");
        eventCard.classList.add("event-card");
        eventCard.innerHTML = `<h3>${event.name}</h3><p>📅 Date: ${event.date}</p>`;
        eventList.appendChild(eventCard);

        const option = document.createElement("option");
        option.value = event.name;
        option.textContent = event.name;
        eventSelect.appendChild(option);
    });

    // Registration Handling
    document.getElementById("eventForm").addEventListener("submit", (e) => {
        e.preventDefault();
        alert("You are successfully registered!");
    });

    // Dark Mode Toggle
    document.getElementById("toggleDarkMode").addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
