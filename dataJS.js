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

