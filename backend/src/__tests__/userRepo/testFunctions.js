const { createUser } = require("../../repositories/userRepo");
jest.mock("../../models/user");
const User = require("../../models/user");

const userCreation = async () => {
  const mockUser = { firstName: "John Doe",lastName:"Debrosky", emailID: "john@example.com" ,Password:"skodnjfnvodf"};
  User.mockImplementation(() => ({
    save: jest.fn().mockResolvedValue(mockUser),
  }));
  const inputData = { name: "John Doe", emailID: "john@example.com" };
  const result = await createUser(inputData);
  expect(User).toHaveBeenCalledWith(inputData);
  expect(result).toEqual(mockUser);
};
module.exports = { userCreation };
