// -------------------------------
// Ne supprime pas ces variables !
// -------------------------------

// -------------------------------

const getCandyPrice = (candyType) => {
  if (candyType === "lollipop" || candyType === "chewing gum") {
    return 2;
  }
  if (candyType === "caramel") {
    return 3;
  }
  if (candyType === "chocolate") {
    return 4;
  }
  return 0;
};

const buyCandy = (candyType) => {
  const price = getCandyPrice(candyType);
  
  if (price === 0) return "Nous ne vendons pas ce type de bonbon dsl.";
  if (!isOpen) return "Le magasin est fermé.";
  if (numberOfCandies === 0 || wallet < price) return "Tu ne peux pas acheter ce bonbon dsl.";

  wallet -= price;
  numberOfCandies -= 1;

  return `${candyType} acheté !`;
};

