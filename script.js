// Define the oefeningen object globally
const oefeningen = {
    biceps: [
        { naam: "Hammer curl", link: "https://www.youtube.com/watch?v=zC3nLlEvin4&t=23s&ab_channel=ScottHermanFitness", uitleg: "Houd een dumbbell in elke hand met een neutrale grip. Buig je ellebogen en breng de gewichten omhoog tot schouderhoogte. Laat ze langzaam zakken en herhaal. Zorg ervoor dat je polsen recht blijven en je ellebogen dicht bij je lichaam blijven." },
        { naam: "Barbell curl", link: "https://www.youtube.com/watch?v=kwG2ipFRgfo&ab_channel=Howcast", uitleg: "Pak een barbell vast met een onderhandse grip. Buig je ellebogen om de barbell omhoog te brengen tot schouderhoogte. Laat de barbell gecontroleerd zakken. Houd je rug recht en je ellebogen stabiel." },
        { naam: "Preacher curl", link: "https://www.youtube.com/watch?v=02TvQZiVdic&ab_channel=Men%27sHealth", uitleg: "Gebruik een preacher bench om je armen te ondersteunen. Voer gecontroleerde biceps curls uit door de barbell of dumbbell omhoog te brengen en langzaam te laten zakken. Zorg ervoor dat je volledige bewegingsvrijheid gebruikt." }
    ],
    triceps: [
        { naam: "Tricep pushdown", link: "https://www.youtube.com/watch?v=2-LAMcpzODU&ab_channel=ScottHermanFitness", uitleg: "Gebruik een kabelmachine met een rechte of V-vormige stang. Strek je ellebogen volledig terwijl je de stang naar beneden duwt. Houd je bovenarmen dicht bij je lichaam en je polsen recht." },
        { naam: "Overhead tricep extension", link: "https://www.youtube.com/watch?v=-Vyt2QdsR7E&ab_channel=ScottHermanFitness", uitleg: "Houd een dumbbell met beide handen vast boven je hoofd. Buig je ellebogen om de dumbbell achter je hoofd te laten zakken. Strek je armen weer omhoog. Zorg ervoor dat je ellebogen naar voren wijzen en je rug recht blijft." },
        { naam: "Skullcrusher", link: "https://www.youtube.com/watch?v=d_KZxkY_0cM&ab_channel=ScottHermanFitness", uitleg: "Lig op een bankje en houd een EZ-bar vast met een onderhandse grip. Buig je ellebogen om de bar naar je voorhoofd te laten zakken. Strek je armen weer omhoog. Houd je bovenarmen stil en je ellebogen op dezelfde plaats." }
    ],
    borst: [
        { naam: "Bench press", link: "https://www.youtube.com/watch?v=0cXAp6WhSj4&ab_channel=JeremyEthier", uitleg: "Lig op een bankje en duw een barbell omhoog vanaf je borst. Laat de barbell gecontroleerd zakken tot je borst en duw hem weer omhoog. Houd je voeten plat op de grond en je rug licht gebogen." },
        { naam: "Dumbell press", link: "https://www.youtube.com/watch?v=1V3vpcaxRYQ&ab_channel=DavisDiley", uitleg: "Lig op een bankje en duw twee dumbbells omhoog vanaf je borst. Laat de dumbbells gecontroleerd zakken tot je borst en duw ze weer omhoog. Houd je polsen recht en je ellebogen iets naar buiten." },
        { naam: "Cable Fly", link: "https://www.youtube.com/watch?v=Iwe6AmxVf7o", uitleg: "Gebruik een kabelmachine om je armen naar elkaar toe te brengen in een vliegbeweging. Houd je ellebogen licht gebogen en je handen op dezelfde hoogte als je borst. Breng de handgrepen langzaam terug naar de startpositie." }
    ],
    rug: [
        { naam: "Lat pulldown", link: "https://www.youtube.com/watch?v=AOpi-p0cJkc&ab_channel=SilverSneakers", uitleg: "Gebruik een lat pulldown machine om de stang naar je borst te trekken. Houd je handen op schouderbreedte en je rug recht. Laat de stang gecontroleerd terug omhoog gaan." },
        { naam: "Pull-ups", link: "https://www.youtube.com/watch?v=ZPG8OsHKXLw&ab_channel=JeremyEthierShorts", uitleg: "Gebruik een pull-up bar om je lichaam omhoog te trekken totdat je kin boven de bar is. Houd je handen op schouderbreedte en je benen gestrekt. Laat je lichaam gecontroleerd zakken." },
        { naam: "Cable row", link: "https://www.youtube.com/watch?v=GZbfZ033f74", uitleg: "Gebruik een kabelmachine om de handgreep naar je middel te trekken. Houd je rug recht en je knieën licht gebogen. Laat de handgreep gecontroleerd teruggaan naar de startpositie." }
    ],
    schouders: [
        { naam: "Shoulder press", link: "https://www.youtube.com/watch?v=qEwKCR5JCog&ab_channel=ScottHermanFitness", uitleg: "Duw een barbell of dumbbells omhoog vanaf je schouders. Laat de gewichten gecontroleerd zakken tot je schouders en duw ze weer omhoog. Houd je rug recht en je knieën licht gebogen." },
        { naam: "Lateral raise", link: "https://www.youtube.com/watch?v=geenhiHju-o&ab_channel=LIVESTRONG.COM", uitleg: "Houd dumbbells vast en til je armen zijwaarts op tot schouderhoogte. Laat de gewichten gecontroleerd zakken. Houd je ellebogen licht gebogen en je polsen recht." },
        { naam: "Face pull", link: "https://www.youtube.com/watch?v=eFxMixk_qPQ&ab_channel=Men%27sHealth", uitleg: "Gebruik een kabelmachine om de handgreep naar je gezicht te trekken. Houd je ellebogen hoog en je schouderbladen samen. Laat de handgreep gecontroleerd teruggaan naar de startpositie." }
    ],
    benen: [
        { naam: "Squat", link: "https://www.youtube.com/watch?v=MLoZuAkIyZI&ab_channel=DavisDiley", uitleg: "Buig je knieën en heupen om je lichaam te laten zakken en kom weer omhoog. Houd je rug recht en je knieën boven je voeten. Duw jezelf omhoog door je hielen in de grond te duwen." },
        { naam: "Leg press", link: "https://www.youtube.com/watch?v=nDh_BlnLCGc&ab_channel=JeffNippard", uitleg: "Gebruik een leg press machine om je benen te strekken tegen weerstand. Houd je voeten op schouderbreedte en je knieën licht gebogen. Laat de gewichten gecontroleerd zakken en duw ze weer omhoog." },
        { naam: "Leg extension", link: "https://www.youtube.com/watch?v=YyvSfVjQeL0&ab_channel=ScottHermanFitness", uitleg: "Gebruik een leg extension machine om je knieën te strekken tegen weerstand. Houd je rug tegen de rugleuning en je knieën op dezelfde hoogte als de draaipunt van de machine. Laat de gewichten gecontroleerd zakken en strek je benen weer." }
    ],
    billen: [
        { naam: "Hip thrust", link: "https://www.youtube.com/watch?v=Zp26q4BY5HE&ab_channel=GirlsGoneStrong", uitleg: "Lig met je bovenrug op een bankje en duw je heupen omhoog met een barbell over je heupen. Houd je knieën gebogen en je voeten plat op de grond. Laat je heupen gecontroleerd zakken en duw ze weer omhoog." },
        { naam: "Abductor", link: "https://www.youtube.com/watch?v=h3eHvBqwnJQ&ab_channel=FIT.nl", uitleg: "Gebruik een abductor machine om je benen zijwaarts te bewegen tegen weerstand. Houd je rug recht en je knieën licht gebogen. Laat de gewichten gecontroleerd teruggaan naar de startpositie." },
        { naam: "Glute bridge", link: "https://www.youtube.com/watch?v=pUPrP05DvCE", uitleg: "Lig op je rug met gebogen knieën en duw je heupen omhoog. Houd je voeten plat op de grond en je schouderbladen tegen de grond. Laat je heupen gecontroleerd zakken en duw ze weer omhoog." }
    ],
    buik: [
        { naam: "Crunch", link: "https://www.youtube.com/watch?v=DxYpFbYBPR0", uitleg: "Lig op je rug en buig je bovenlichaam omhoog richting je knieën. Houd je handen achter je hoofd en je ellebogen naar buiten. Laat je bovenlichaam gecontroleerd zakken." },
        { naam: "Leg raise", link: "https://www.youtube.com/watch?v=JB2oyawG9KI&ab_channel=LIVESTRONG.COM", uitleg: "Lig op je rug en til je benen omhoog tot een hoek van 90 graden. Houd je benen gestrekt en je handen onder je heupen. Laat je benen gecontroleerd zakken." },
        { naam: "Russian twist", link: "https://www.youtube.com/watch?v=wkD8rjkodUI", uitleg: "Zit op de grond met gebogen knieën en draai je bovenlichaam van links naar rechts. Houd je handen samen en je voeten van de grond. Draai je bovenlichaam gecontroleerd." }
    ],
    cardio: [
        { naam: "Hardlopen", link: "https://www.youtube.com/watch?v=brFHyOtTwH4", uitleg: "Ren op een loopband of buiten om je hartslag te verhogen. Houd een gelijkmatig tempo aan en adem diep in en uit." },
        { naam: "Fietsen", link: "https://www.youtube.com/watch?v=GyLlw1CgXf8", uitleg: "Gebruik een hometrainer of fiets buiten om je hartslag te verhogen. Houd een gelijkmatig tempo aan en adem diep in en uit." },
        { naam: "Roeien", link: "https://www.youtube.com/watch?v=H0r_ZPXJLtg", uitleg: "Gebruik een roeimachine om je hartslag te verhogen. Houd je rug recht en je knieën licht gebogen. Trek de handgreep naar je borst en laat hem gecontroleerd teruggaan." }
    ]
};

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
    const table = document.querySelector("#modalOefeningen table");
    table.innerHTML = `
        <tr>
            <th>Oefening</th>
            <th>Uitleg</th>
        </tr>
    `;

    Object.entries(oefeningen).forEach(([spier, oefeningenLijst]) => {
        const headerRow = document.createElement("tr");
        const headerCell = document.createElement("th");
        headerCell.colSpan = 2;
        headerCell.innerText = spier.charAt(0).toUpperCase() + spier.slice(1);
        headerRow.appendChild(headerCell);
        table.appendChild(headerRow);

        oefeningenLijst.forEach((oefening) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td><a href="${oefening.link}" target="_blank">${oefening.naam}</a></td>
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
                <p>${index + 1}. <a href="${oefening.link}" target="_blank">${oefening.naam}</a></p>
            </div>
        `;
        schemaDiv.appendChild(oefeningDiv);
    });
}

function openModalRecords(event) {
    event.stopPropagation();
    const modal = document.getElementById('modalRecords');
    modal.classList.remove('hidden');

    // Load and display records from local storage
    const recordsList = document.getElementById("recordsList");
    const records = JSON.parse(localStorage.getItem("gymRecords")) || [];
    displayRecords(recordsList, records);

    // Load and display doelen from local storage
    const doelenList = document.getElementById("doelenList");
    const doelen = JSON.parse(localStorage.getItem("gymDoelen")) || [];
    displayDoelen(doelenList, doelen);
}

function closeModalRecords() {
    const modal = document.getElementById('modalRecords');
    modal.classList.add('hidden');
}

document.addEventListener('click', (event) => {
    const modal = document.getElementById('modalRecords');
    if (!modal.classList.contains('hidden') && !modal.contains(event.target)) {
        closeModalRecords();
    }
});

function saveRecords() {
    const input = document.getElementById("records");
    const recordsList = document.getElementById("recordsList");

    // Get existing records from local storage or initialize an empty array
    const records = JSON.parse(localStorage.getItem("gymRecords")) || [];

    // Add the new record if the input is not empty
    if (input.value.trim() !== "") {
        records.push(input.value.trim());
        localStorage.setItem("gymRecords", JSON.stringify(records)); // Save updated records to local storage
        input.value = ""; // Clear the input field
    }

    // Update the displayed records
    displayRecords(recordsList, records);
}

function displayRecords(recordsList, records) {
    // Clear the current list
    recordsList.innerHTML = "";

    // Add each record as a list item
    records.forEach((record, index) => {
        const recordItem = document.createElement("div");
        recordItem.className = "mt-2 text-[16px] flex items-center justify-between";

        // Record text
        const recordText = document.createElement("span");
        recordText.innerText = record;
        recordText.className = "flex-grow";

        // Add double-click event to edit the record
        recordText.addEventListener("dblclick", () => {
            const input = document.createElement("input");
            input.type = "text";
            input.value = record;
            input.className = "w-[70%] h-8 mt-2 border border-gray-300 rounded";

            // Replace the record text with the input field
            recordItem.innerHTML = "";
            recordItem.appendChild(input);

            // Save the updated record on blur or Enter key
            const saveUpdatedRecord = () => {
                const updatedValue = input.value.trim();
                if (updatedValue) {
                    records[index] = updatedValue; // Update the record in the array
                    localStorage.setItem("gymRecords", JSON.stringify(records)); // Save updated records to local storage
                    displayRecords(recordsList, records); // Refresh the displayed records
                }
            };

            input.addEventListener("blur", saveUpdatedRecord);
            input.addEventListener("keydown", (event) => {
                if (event.key === "Enter") {
                    saveUpdatedRecord();
                }
            });

            input.focus(); // Focus on the input field
        });

        // Trashcan icon
        const deleteIcon = document.createElement("button");
        deleteIcon.innerHTML = "🗑️";
        deleteIcon.className = "ml-4 text-red-500 hover:text-red-700";
        deleteIcon.addEventListener("click", () => {
            records.splice(index, 1); // Remove the record from the array
            localStorage.setItem("gymRecords", JSON.stringify(records)); // Update local storage
            displayRecords(recordsList, records); // Refresh the displayed records
        });

        // Append text and delete icon to the record item
        recordItem.appendChild(recordText);
        recordItem.appendChild(deleteIcon);

        recordsList.appendChild(recordItem);
    });
}

// Load and display records on page load
window.addEventListener("load", () => {
    const recordsList = document.getElementById("recordsList");
    const records = JSON.parse(localStorage.getItem("gymRecords")) || [];
    displayRecords(recordsList, records);
});

function saveDoelen() {
    const input = document.getElementById("doelen");
    const doelenList = document.getElementById("doelenList");

    // Get existing records from local storage or initialize an empty array
    const doelen = JSON.parse(localStorage.getItem("gymDoelen")) || [];

    // Add the new record if the input is not empty
    if (input.value.trim() !== "") {
        doelen.push(input.value.trim());
        localStorage.setItem("gymDoelen", JSON.stringify(doelen)); // Save updated records to local storage
        input.value = ""; // Clear the input field
    }

    // Update the displayed records
    displayDoelen(doelenList, doelen);
}

function displayDoelen(doelenList, doelen) {
    // Clear the current list
    doelenList.innerHTML = "";

    // Add each doel as a list item
    doelen.forEach((doel, index) => {
        const doelenItem = document.createElement("div");
        doelenItem.className = "mt-2 text-[16px] flex items-center justify-between";

        // Doel text
        const doelenText = document.createElement("span");
        doelenText.innerText = doel;
        doelenText.className = "flex-grow";

        // Add double-click event to edit the doel
        doelenText.addEventListener("dblclick", () => {
            const input = document.createElement("input");
            input.type = "text";
            input.value = doel;
            input.className = "w-[70%] h-8 mt-2 border border-gray-300 rounded";

            // Replace the doel text with the input field
            doelenItem.innerHTML = "";
            doelenItem.appendChild(input);

            // Save the updated doel on blur or Enter key
            const saveUpdatedDoelen = () => {
                const updatedValue = input.value.trim();
                if (updatedValue) {
                    doelen[index] = updatedValue; // Update the doel in the array
                    localStorage.setItem("gymDoelen", JSON.stringify(doelen)); // Save updated doelen to local storage
                    displayDoelen(doelenList, doelen); // Refresh the displayed doelen
                }
            };

            input.addEventListener("blur", saveUpdatedDoelen);
            input.addEventListener("keydown", (event) => {
                if (event.key === "Enter") {
                    saveUpdatedDoelen();
                }
            });

            input.focus(); // Focus on the input field
        });

        // Trashcan icon
        const deleteIcon = document.createElement("button");
        deleteIcon.innerHTML = "🗑️";
        deleteIcon.className = "ml-4 text-red-500 hover:text-red-700";
        deleteIcon.addEventListener("click", () => {
            doelen.splice(index, 1); // Remove the doel from the array
            localStorage.setItem("gymDoelen", JSON.stringify(doelen)); // Update local storage
            displayDoelen(doelenList, doelen); // Refresh the displayed doelen
        });

        // Append text and delete icon to the doelen item
        doelenItem.appendChild(doelenText);
        doelenItem.appendChild(deleteIcon);

        doelenList.appendChild(doelenItem);
    });
}

// Load and display records on page load
window.addEventListener("load", () => {
    const doelenList = document.getElementById("doelenList");
    const doelen = JSON.parse(localStorage.getItem("gymDoelen")) || [];
    displayDoelen(doelenList, doelen);
});