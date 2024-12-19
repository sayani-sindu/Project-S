const { userCreation } = require("./testFunctions");
const User = require("../../models/user");



describe("User Repository Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks(); // Clear mocks before each test
  });

  test("should create a new user successfully", userCreation);
});