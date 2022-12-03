const year = 2023;
const holidays = ["01/06", "04/01", "12/25"]; // formato MM/DD

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

// const countHours = (year, holidays) => {
//   const weeksDays = [1, 2, 3, 4, 5]; // lunes a viernes
//   let date = new Date();
//   let hoursExtra = 0;

//   for (let holiday of holidays) {
//     date.setTime(Date.parse(holiday + "/" + year));
//     weeksDays.includes(date.getDay()) && (hoursExtra += 2);
//   }

//   return hoursExtra;
// };

const countHours = (year, holidays) => {
  const workingDays = [1, 2, 3, 4, 5];
  return (
    holidays.filter((day) =>
      workingDays.includes(new Date(day + "/" + year).getDay())
    ).length * 2
  );
};

console.log(countHours(year, holidays));
