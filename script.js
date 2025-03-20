function openModal(event) {
    event.stopPropagation();
    const modal = document.getElementById('modal');
    modal.classList.remove('hidden');
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
}

document.addEventListener('click', (event) => {
    const modal = document.getElementById('modal');
    if (!modal.classList.contains('hidden') && !modal.contains(event.target)) {
        closeModal();
    }
});

var slider = document.getElementById("aantalOefeningen");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

function koppelSpierEnHoeveel() {
    let spier1 = document.getElementById("spier1").value;
    let spier2 = document.getElementById("spier2").value;
    let spier3 = document.getElementById("spier3").value;

    let nummer1 = document.getElementById("nummer1").value;
    let nummer2 = document.getElementById("nummer2").value;
    let nummer3 = document.getElementById("nummer3").value;

    // I want the value of the selected spier to be the same as the value of the selected nummer
    document.getElementById("nummer1").innerText = spier1;
    document.getElementById("nummer2").value = spier2;
    document.getElementById("nummer3").value = spier3;
}

function updateSpierText(spierId, nummerId) {
    const spierElement = document.getElementById(spierId);
    const nummerElement = document.getElementById(nummerId);

    // Update the text immediately on page load
    nummerElement.innerText = spierElement.value;

    // Add event listener to update text when the dropdown value changes
    spierElement.addEventListener("change", () => {
        nummerElement.innerText = spierElement.value;
    });
}

// Initialize event listeners for all spier and nummer pairs
updateSpierText("spier1", "nummer1");
updateSpierText("spier2", "nummer2");
updateSpierText("spier3", "nummer3");

function watGaanWeDoen() {
    let aantalOefeningen = document.getElementById("aantalOefeningen").value;

    let spier1 = document.getElementById("spier1").value;
    let spier2 = document.getElementById("spier2").value;
    let spier3 = document.getElementById("spier3").value;

    let hoeveel1 = document.getElementById("hoeveel1").value;
    let hoeveel2 = document.getElementById("hoeveel2").value;
    let hoeveel3 = document.getElementById("hoeveel3").value;

    const data = {
        aantalOefeningen,
        spier1,
        spier2,
        spier3,
        hoeveel1,
        hoeveel2,
        hoeveel3
    };

    localStorage.setItem("gymSchemaData", JSON.stringify(data));
}

document.querySelector(".letsGo button").addEventListener("click", (event) => {
    event.preventDefault();
    watGaanWeDoen();
});

function loadFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem("gymSchemaData"));
    if (data) {
        document.getElementById("aantalOefeningen").value = data.aantalOefeningen;
        document.getElementById("demo").innerText = data.aantalOefeningen;

        document.getElementById("spier1").value = data.spier1;
        document.getElementById("spier2").value = data.spier2;
        document.getElementById("spier3").value = data.spier3;

        document.getElementById("hoeveel1").value = data.hoeveel1;
        document.getElementById("hoeveel2").value = data.hoeveel2;
        document.getElementById("hoeveel3").value = data.hoeveel3;

        // Update the nummer spans
        document.getElementById("nummer1").innerText = data.spier1;
        document.getElementById("nummer2").innerText = data.spier2;
        document.getElementById("nummer3").innerText = data.spier3;
    }
}

// Call the function to load data on page load
window.addEventListener("load", loadFromLocalStorage);

function maakSchema() {
    closeModal();
    let aantalOefeningen = document.getElementById("aantalOefeningen").value;

    let spier1 = document.getElementById("spier1").value;
    let spier2 = document.getElementById("spier2").value;
    let spier3 = document.getElementById("spier3").value;

    let hoeveel1 = parseInt(document.getElementById("hoeveel1").value);
    let hoeveel2 = parseInt(document.getElementById("hoeveel2").value);
    let hoeveel3 = parseInt(document.getElementById("hoeveel3").value);

    const oefeningen = {
        biceps: ["Hammer curl", "Barbell curl", "Preacher curl"],
        triceps: ["Tricep pushdown", "Overhead tricep extension", "Skullcrusher"],
        borst: ["Bench press", "Dumbell press", "Cable Fly"],
        rug: ["Lat pulldown", "Pull-ups", "Cable row"],
        schouders: ["Shoulder press", "Lateral raise", "Face pull"],
        benen: ["Squat", "Leg press", "Leg extension"],
        billen: ["Hip thrust", "Abductor", "Glute bridge"],
        buik: ["Crunch", "Leg raise", "Russian twist"],
        cardio: ["Hardlopen", "Fietsen", "Roeien"]
    };

    let hoeveelBijElkaar = hoeveel1 + hoeveel2 + hoeveel3;
    if (hoeveelBijElkaar !== parseInt(aantalOefeningen)) {
        alert("Het aantal oefeningen moet gelijk zijn aan het aantal sets!");
        openModal();
        return;
    }

    // Select exercises based on the selected muscles and counts
    let schema = [];
    if (spier1 !== "-") schema.push(...oefeningen[spier1].slice(0, hoeveel1));
    if (spier2 !== "-") schema.push(...oefeningen[spier2].slice(0, hoeveel2));
    if (spier3 !== "-") schema.push(...oefeningen[spier3].slice(0, hoeveel3));

    // Clear the schema div
    const schemaDiv = document.getElementById("schema");
    schemaDiv.innerHTML = "";

    // Insert the schema into the schema div
    schema.forEach((oefening, index) => {
        const oefeningDiv = document.createElement("div");
        oefeningDiv.innerHTML = `
            <div class="text-[20px] font-semibold mt-4">
                <p class="">${index + 1}. ${oefening}</p>
            </div>
        `;
        schemaDiv.appendChild(oefeningDiv);
    });
}