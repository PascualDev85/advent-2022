const packOfGifts = ["book", "doll", "ball"];
const reindeers = ["dasher", "dancer"];

const distributeGifts = (packOfGifts, reindeers) => {
  const weightPack = packOfGifts.join("").length;
  const weightReindeers = reindeers.join("").length * 2;

  return parseInt(weightReindeers / weightPack);
};

// function distributeGifts(packOfGifts, reindeers) {
//   let sumaGifts = 0;
//   let sumaReindeers = 0;
//   packOfGifts.forEach((gift) => {
//     sumaGifts += gift.length;
//   });

//   reindeers.forEach((r) => {
//     sumaReindeers += r.length * 2;
//   });

//   return parseInt(sumaReindeers / sumaGifts);
// }

console.log(distributeGifts(packOfGifts, reindeers));
