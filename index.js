const getPrice = (numberOfTickets, hasPopcorn, hasDiscount) => {
  let price = 10 * numberOfTickets;

  if (hasPopcorn) {
    price += 15;
  }

  if (hasDiscount) {
    price *= 0.8;
  }

  return price;
};
