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
///////////////// Conditions//////////////

const isGoldenHour = (hour) => {
    return (hour >= 5 && hour <= 6 ) || (hour >= 18 && hour <= 19 )
    
}

const hotOrCold = (color) => {
  if (color === 'vert' || color === 'bleu' || color === 'indigo' || color === 'violet') {
    return 'cold';
  } else if (color === 'jaune' || color === 'rouge' || color === 'orange') {
    return 'hot';
  }
};
