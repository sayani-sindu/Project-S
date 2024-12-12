//Task #pin Generation
const  pinGeneration = () => {
  const randomFourDigitNumber = Math.floor(
    Math.random() * (1000 - 9999) + 1000
  );
  const pin =
    randomFourDigitNumber > 0 ? randomFourDigitNumber : -randomFourDigitNumber;
  return pin;
}
module.exports = { pinGeneration };
