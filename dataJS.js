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
