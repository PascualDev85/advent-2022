function wrapping(gifts) {
  return gifts.map((gift) => {
    const wraps = "*".repeat(gift.length + 2);
    return `${wraps}\n*${gift}*\n${wraps}`;
  });
}

const gifts = ["book", "game", "socks"];
console.log(wrapping(gifts));
