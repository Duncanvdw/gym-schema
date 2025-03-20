function openModalSchema(event) {
    event.stopPropagation();
    const modal = document.getElementById('modalSchema');
    modal.classList.remove('hidden');
}

function closeModalSchema() {
    const modal = document.getElementById('modalSchema');
    modal.classList.add('hidden');
}

document.addEventListener('click', (event) => {
    const modal = document.getElementById('modalSchema');
    if (!modal.classList.contains('hidden') && !modal.contains(event.target)) {
        closeModalSchema();
    }
});

function populateOefeningenTable() {
    const oefeningen = {
        biceps: [
            { naam: "Hammer curl", uitleg: "Houd een dumbbell in elke hand met een neutrale grip. Buig je ellebogen en breng de gewichten omhoog tot schouderhoogte. Laat ze langzaam zakken en herhaal. Zorg ervoor dat je polsen recht blijven en je ellebogen dicht bij je lichaam blijven." },
            { naam: "Barbell curl", uitleg: "Pak een barbell vast met een onderhandse grip. Buig je ellebogen om de barbell omhoog te brengen tot schouderhoogte. Laat de barbell gecontroleerd zakken. Houd je rug recht en je ellebogen stabiel." },
            { naam: "Preacher curl", uitleg: "Gebruik een preacher bench om je armen te ondersteunen. Voer gecontroleerde biceps curls uit door de barbell of dumbbell omhoog te brengen en langzaam te laten zakken. Zorg ervoor dat je volledige bewegingsvrijheid gebruikt." }
        ],
        triceps: [
            { naam: "Tricep pushdown", uitleg: "Gebruik een kabelmachine met een rechte of V-vormige stang. Strek je ellebogen volledig terwijl je de stang naar beneden duwt. Houd je bovenarmen dicht bij je lichaam en je polsen recht." },
            { naam: "Overhead tricep extension", uitleg: "Houd een dumbbell met beide handen vast boven je hoofd. Buig je ellebogen om de dumbbell achter je hoofd te laten zakken. Strek je armen weer omhoog. Zorg ervoor dat je ellebogen naar voren wijzen en je rug recht blijft." },
            { naam: "Skullcrusher", uitleg: "Lig op een bankje en houd een EZ-bar vast met een onderhandse grip. Buig je ellebogen om de bar naar je voorhoofd te laten zakken. Strek je armen weer omhoog. Houd je bovenarmen stil en je ellebogen op dezelfde plaats." }
        ],
        borst: [
            { naam: "Bench press", uitleg: "Lig op een bankje en duw een barbell omhoog vanaf je borst. Laat de barbell gecontroleerd zakken tot je borst en duw hem weer omhoog. Houd je voeten plat op de grond en je rug licht gebogen." },
            { naam: "Dumbell press", uitleg: "Lig op een bankje en duw twee dumbbells omhoog vanaf je borst. Laat de dumbbells gecontroleerd zakken tot je borst en duw ze weer omhoog. Houd je polsen recht en je ellebogen iets naar buiten." },
            { naam: "Cable Fly", uitleg: "Gebruik een kabelmachine om je armen naar elkaar toe te brengen in een vliegbeweging. Houd je ellebogen licht gebogen en je handen op dezelfde hoogte als je borst. Breng de handgrepen langzaam terug naar de startpositie." }
        ],
        rug: [
            { naam: "Lat pulldown", uitleg: "Gebruik een lat pulldown machine om de stang naar je borst te trekken. Houd je handen op schouderbreedte en je rug recht. Laat de stang gecontroleerd terug omhoog gaan." },
            { naam: "Pull-ups", uitleg: "Gebruik een pull-up bar om je lichaam omhoog te trekken totdat je kin boven de bar is. Houd je handen op schouderbreedte en je benen gestrekt. Laat je lichaam gecontroleerd zakken." },
            { naam: "Cable row", uitleg: "Gebruik een kabelmachine om de handgreep naar je middel te trekken. Houd je rug recht en je knieën licht gebogen. Laat de handgreep gecontroleerd teruggaan naar de startpositie." }
        ],
        schouders: [
            { naam: "Shoulder press", uitleg: "Duw een barbell of dumbbells omhoog vanaf je schouders. Laat de gewichten gecontroleerd zakken tot je schouders en duw ze weer omhoog. Houd je rug recht en je knieën licht gebogen." },
            { naam: "Lateral raise", uitleg: "Houd dumbbells vast en til je armen zijwaarts op tot schouderhoogte. Laat de gewichten gecontroleerd zakken. Houd je ellebogen licht gebogen en je polsen recht." },
            { naam: "Face pull", uitleg: "Gebruik een kabelmachine om de handgreep naar je gezicht te trekken. Houd je ellebogen hoog en je schouderbladen samen. Laat de handgreep gecontroleerd teruggaan naar de startpositie." }
        ],
        benen: [
            { naam: "Squat", uitleg: "Buig je knieën en heupen om je lichaam te laten zakken en kom weer omhoog. Houd je rug recht en je knieën boven je voeten. Duw jezelf omhoog door je hielen in de grond te duwen." },
            { naam: "Leg press", uitleg: "Gebruik een leg press machine om je benen te strekken tegen weerstand. Houd je voeten op schouderbreedte en je knieën licht gebogen. Laat de gewichten gecontroleerd zakken en duw ze weer omhoog." },
            { naam: "Leg extension", uitleg: "Gebruik een leg extension machine om je knieën te strekken tegen weerstand. Houd je rug tegen de rugleuning en je knieën op dezelfde hoogte als de draaipunt van de machine. Laat de gewichten gecontroleerd zakken en strek je benen weer." }
        ],
        billen: [
            { naam: "Hip thrust", uitleg: "Lig met je bovenrug op een bankje en duw je heupen omhoog met een barbell over je heupen. Houd je knieën gebogen en je voeten plat op de grond. Laat je heupen gecontroleerd zakken en duw ze weer omhoog." },
            { naam: "Abductor", uitleg: "Gebruik een abductor machine om je benen zijwaarts te bewegen tegen weerstand. Houd je rug recht en je knieën licht gebogen. Laat de gewichten gecontroleerd teruggaan naar de startpositie." },
            { naam: "Glute bridge", uitleg: "Lig op je rug met gebogen knieën en duw je heupen omhoog. Houd je voeten plat op de grond en je schouderbladen tegen de grond. Laat je heupen gecontroleerd zakken en duw ze weer omhoog." }
        ],
        buik: [
            { naam: "Crunch", uitleg: "Lig op je rug en buig je bovenlichaam omhoog richting je knieën. Houd je handen achter je hoofd en je ellebogen naar buiten. Laat je bovenlichaam gecontroleerd zakken." },
            { naam: "Leg raise", uitleg: "Lig op je rug en til je benen omhoog tot een hoek van 90 graden. Houd je benen gestrekt en je handen onder je heupen. Laat je benen gecontroleerd zakken." },
            { naam: "Russian twist", uitleg: "Zit op de grond met gebogen knieën en draai je bovenlichaam van links naar rechts. Houd je handen samen en je voeten van de grond. Draai je bovenlichaam gecontroleerd." }
        ],
        cardio: [
            { naam: "Hardlopen", uitleg: "Ren op een loopband of buiten om je hartslag te verhogen. Houd een gelijkmatig tempo aan en adem diep in en uit." },
            { naam: "Fietsen", uitleg: "Gebruik een hometrainer of fiets buiten om je hartslag te verhogen. Houd een gelijkmatig tempo aan en adem diep in en uit." },
            { naam: "Roeien", uitleg: "Gebruik een roeimachine om je hartslag te verhogen. Houd je rug recht en je knieën licht gebogen. Trek de handgreep naar je borst en laat hem gecontroleerd teruggaan." }
        ]
    };

    const table = document.querySelector("#modalOefeningen table");
    table.innerHTML = `
        <tr>
            <th>Spier(groep)</th>
            <th>Oefening</th>
            <th>Uitleg</th>
        </tr>
    `;

    Object.entries(oefeningen).forEach(([spier, oefeningenLijst]) => {
        oefeningenLijst.forEach((oefening) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${spier}</td>
                <td>${oefening.naam}</td>
                <td>${oefening.uitleg}</td>
            `;
            table.appendChild(row);
        });
    });
}

function openModalOefeningen(event) {
    event.stopPropagation();
    const modal = document.getElementById('modalOefeningen');
    modal.classList.remove('hidden');
    populateOefeningenTable(); // Populate the table dynamically
    combineTableRows(); // Combine rows dynamically after populating
}

function closeModalOefeningen() {
    const modal = document.getElementById('modalOefeningen');
    modal.classList.add('hidden');
}

document.addEventListener('click', (event) => {
    const modal = document.getElementById('modalOefeningen');
    if (!modal.classList.contains('hidden') && !modal.contains(event.target)) {
        closeModalOefeningen();
    }
});


let tableProcessed = false; // Flag to track if the table has been processed

function combineTableRows() {
    if (tableProcessed) return; // Prevent reprocessing

    const table = document.querySelector("#modalOefeningen table");
    const rows = Array.from(table.rows).slice(1); // Exclude header row
    const spierColumnIndex = 0; // Index of "Spier(groep)" column
    let previousSpier = null;
    let rowspan = 0;

    rows.forEach((row, index) => {
        const currentSpier = row.cells[spierColumnIndex]?.innerText;

        if (currentSpier === previousSpier) {
            rowspan++;
            row.cells[spierColumnIndex]?.remove(); // Remove duplicate cell
            rows[index - rowspan].cells[spierColumnIndex].rowSpan = rowspan + 1; // Update rowspan
        } else {
            previousSpier = currentSpier;
            rowspan = 0;
        }
    });

    tableProcessed = true; // Mark table as processed
}

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
    closeModalSchema();
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