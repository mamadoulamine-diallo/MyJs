async function orderPizza() {
  try {
    // 1. Appel de l'API
    const response = await fetch("/api/pizza"); // <- guillemets ajoutés

    // 2. Récupération de la réponse sous forme de texte
    const data = await response.text();

    // 3. Retourne le résultat
    return data;
  } catch (error) {
    // Gestion d'erreur
    console.log("Erreur", error);
  }
}
/////////////////////////////////////////////////////////////////

async function countOffers() {
  try {
    const response = await fetch("/api/offers");
    const data = await response.json();

    console.log(data);

    return data.length;
  } catch (error) {
    console.error("Erreur lors du fetch :", error);
  }
}
/////////////////////////////////////////////////////////////////

async function getCountries(continent) {
  try {
    const response = await fetch(`/api/countries/${continent}`);
    const data = await response.text(); // car ce n'est pas du JSON

    return data.split(";"); // ✅ transforme en tableau
  } catch (error) {
    console.error("Erreur lors du fetch :", error);
    return []; // sécurité
  }
}
/////////////////////////////////////////////////////////////////

const zodiacSymbols = {
  Bélier: "♈️",
  Taureau: "♉️",
  Gémeaux: "♊️",
  Cancer: "♋️",
  Lion: "♌️",
  Vierge: "♍️",
  Balance: "♎️",
  Scorpion: "♏️",
  Sagittaire: "♐️",
  Capricorne: "♑️",
  Verseau: "♒️",
  Poissons: "♓️",
};

const response = await fetch("/api/astrodev");
const data = await response.json();

const container = document.getElementById("profiles");

let html = "";
data.forEach((profile) => {
  const symbol = zodiacSymbols[profile.sign] || "";
  html += `
    <article>
      <h2>${symbol} ${profile.sign}</h2>
      <p>${profile.description}</p>
    </article>
  `;
});

container.innerHTML = html;
///////////////////////////////////////////////////////////

const flows = document.querySelector("#flows");
const sanskritButton = document.querySelector("#sanskrit");
const englishButton = document.querySelector("#english");
const emojisButton = document.querySelector("#emojis");

sanskritButton.addEventListener("click", async () => {
  sanskritButton.className = "selected";
  englishButton.className = "";
  emojisButton.className = "";

  const response = await fetch("/api/yoga-translator?language=sanskrit");
  const data = await response.json();

  let html = "";
  data.forEach((flow) => {
    html += `
            <article>
                <h2>${flow.title}</h2>
                <p>${flow.positions.join(", ")}</p>
            </article>
        `;
  });

  flows.innerHTML = html;
});

englishButton.addEventListener("click", async () => {
  sanskritButton.className = "";
  englishButton.className = "selected";
  emojisButton.className = "";

  const response = await fetch("/api/yoga-translator?language=english");
  const data = await response.json();

  let html = "";
  data.forEach((flow) => {
    html += `
            <article>
                <h2>${flow.title}</h2>
                <p>${flow.positions.join(", ")}</p>
            </article>
        `;
  });

  flows.innerHTML = html;
});

emojisButton.addEventListener("click", async () => {
  sanskritButton.className = "";
  englishButton.className = "";
  emojisButton.className = "selected";

  const response = await fetch("/api/yoga-translator?language=emojis");
  const data = await response.json();

  let html = "";
  data.forEach((flow) => {
    html += `
            <article>
                <h2>${flow.title}</h2>
                <p>${flow.positions.join(", ")}</p>
            </article>
        `;
  });

  flows.innerHTML = html;
});

sanskritButton.dispatchEvent(new MouseEvent("click"));
//////////////////////////////////////////////////
const promptInput = document.querySelector("#prompt");
const sendButton = document.querySelector("#send");
const messagesDiv = document.querySelector("#messages");

const sendPrompt = async () => {
  // Message de l'utilisateur
  const userMessage = document.createElement("p");
  userMessage.className = "user";
  userMessage.innerText = promptInput.value;
  messagesDiv.appendChild(userMessage);

  // Message du bot
  const botMessage = document.createElement("p");

  try {
    const response = await fetch("/api/fake-gpt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": "my_secret_key",
      },
      body: JSON.stringify({ prompt: promptInput.value }),
    });

    const data = await response.json();
    botMessage.innerText = data.message;

    // Si erreur côté serveur ou requête incorrecte
    if (!response.ok) {
      botMessage.classList.add("error");
    }
  } catch (error) {
    // Erreur réseau
    botMessage.innerText = "Erreur de connexion au serveur.";
    botMessage.classList.add("error");
  }

  messagesDiv.appendChild(botMessage);

  // Réinitialiser l'input
  promptInput.value = "";
};

// Envoi avec Entrée
promptInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendPrompt();
  }
});

// Envoi avec le bouton
sendButton.addEventListener("click", sendPrompt);

//////////////////////////////////////////////////
let flavor = "blackTea";
let firstname = "";
let sugar = 30;
let withIce = false;
let withTapioca = false;

/**
 * @type {HTMLDialogElement}
 */
const commandDialog = document.querySelector("#command");

/**
 * @type {HTMLDivElement}
 */
const messageEl = document.querySelector("#message");

document.querySelector("#orderBtn").addEventListener("click", async () => {
  // On prépare les données à envoyer
  const orderData = {
    flavor,
    firstname,
    sugar,
    withIce,
    withTapioca,
  };

  try {
    const response = await fetch("/api/orderbbt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    });

    const result = await response.json();

    // On affiche le message dans la div #message
    messageEl.textContent = result.message;

    // Si le statut n'est pas 200, on ajoute la classe error
    if (!response.ok) {
      messageEl.classList.add("error");
    } else {
      messageEl.classList.remove("error");
    }

    // On ouvre la boîte de dialogue
    commandDialog.showModal();
  } catch (error) {
    // En cas d'erreur réseau
    messageEl.textContent = "Erreur de connexion au serveur.";
    messageEl.classList.add("error");
    commandDialog.showModal();
  }
});

const flavorEls = document.querySelectorAll("#flavors > div");
for (const flavorEl of flavorEls) {
  flavorEl.addEventListener("click", (event) => {
    for (const el of flavorEls) {
      el.classList.remove("selected");
    }
    event.currentTarget.classList.add("selected");
    flavor = event.currentTarget.dataset.flavor;
  });
}

document.querySelector("#firstnameInput").addEventListener("input", (event) => {
  firstname = event.currentTarget.value;
  console.log("firstname: ", firstname);
});

const sugarEl = document.querySelector("#sugar > .value");
const sugars = [0, 30, 50, 100];
let sugarIndex = 1;
document.querySelector("#sugar > .minus").addEventListener("click", () => {
  sugarIndex = sugarIndex === 0 ? 0 : sugarIndex - 1;
  sugar = sugars[sugarIndex];
  sugarEl.innerText = sugar + "%";
});
document.querySelector("#sugar > .plus").addEventListener("click", () => {
  sugarIndex = sugarIndex >= sugars.length - 1 ? sugarIndex : sugarIndex + 1;
  sugar = sugars[sugarIndex];
  sugarEl.innerText = sugar + "%";
});

document.querySelector("#iceInput").addEventListener("change", (event) => {
  withIce = event.currentTarget.checked;
});
document.querySelector("#tapiocaInput").addEventListener("change", (event) => {
  withTapioca = event.currentTarget.checked;
});

//////////Closures///////////////////

function createCounter(start, end) {
  let current = start;

  function getValue() {
    return current;
  }

  function increase() {
    if (current < end) {
      current++;
    }
  }

  return [getValue, increase];
}
//////////////Compte à Rebours/////////////////////////////////////////

const inputEl = document.getElementById("choice");
const form = document.getElementById("form");
const countDisplay = document.getElementById("countdownDisplay");

const playTimer = (minutes, seconds) => {
  countDisplay.textContent =
    minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);

  const timer = setInterval(() => {
    if (seconds > 0) {
      seconds--;
    } else {
      if (minutes > 0) {
        minutes--;
        seconds = 59;
      } else {
        clearInterval(timer);
        countDisplay.textContent = "Terminé !";
        return;
      }
    }

    countDisplay.textContent =
      minutes + ":" + (seconds < 10 ? "0" + seconds : seconds);
  }, 1000);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let value = inputEl.value;
  let minutes = value;
  let seconds = 0;

  playTimer(minutes, seconds);
});

////////////////////////////////Dates////////////////////////////////

// Convert today date to input format
const today = new Date().toISOString().split("T")[0];
start_date.value = today;
start_date.min = today;

// tomorrow date calc
let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

// Convert to input format
let tomorrowFormat = tomorrow.toISOString().split("T")[0];
console.log(tomorrowFormat);

end_date.value = tomorrowFormat;
end_date.min = tomorrowFormat;

start_date.addEventListener("change", (e) => {
  let day = new Date(e.target.value);

  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() + 1);
    end_date.value = day.toISOString().split("T")[0];
  }
});

end_date.addEventListener("change", (e) => {
  let day = new Date(e.target.value);

  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() - 1);
    start_date.value = day.toDateString().split("T")[0];
  }
});

const bookingCalc = () => {
  let diffTime = Math.abs(
    new Date(end_date.value) - new Date(start_date.value)
  );
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  total.textContent = diffDays * nightPrice.textContent;
};

start_date.addEventListener("change", bookingCalc);
end_date.addEventListener("change", bookingCalc);

bookingCalc();
