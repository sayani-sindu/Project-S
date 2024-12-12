const { pinGeneration } = require("../../utils/pinGeneration");
describe("Pin Generation Function Testing", () => {
  test("Generate Pin ", () => {
    expect(pinGeneration()).toBeDefined();
  });
  test("Generate Pin  to be less than 9999 ", () => {
    expect(pinGeneration()).toBeLessThan(9999);
  });
  test("Generate Pin  to be Greater than 1000 ", () => {
    expect(pinGeneration()).toBeGreaterThan(999);
  });
});
