const { signUpController, loginController } = require('../controller/authController');
const { createUserService, verifyUser } = require('../service/userService');
const { ApiResponse } = require('../utils/ApiResponse');
const { ApiError } = require('../utils/ApiError');

jest.mock('../service/userService');

describe('Auth Controller Tests', () => {
    let mockReq;
    let mockRes;
    beforeEach(() => {
        mockReq = {
          body: {
            firstName: 'John',
            lastName: 'Doe',
            emailId: 'john@example.com',
            password: 'StrongPass123!'
          }
        }
        mockRes = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
          };
        });
        describe('signUpController', () => {
            it('should successfully register a new user', async () => {
              const mockNewUser = {
                _id: '123',
                firstName: 'John',
                lastName: 'Doe',
                emailId: 'john@example.com'
              };
        
              createUserService.mockResolvedValue({
                newUser: mockNewUser,
                token: 'mock-token'
              });
        
              await signUpController(mockReq, mockRes);
        
              expect(mockRes.status).toHaveBeenCalledWith(200);
              expect(mockRes.json).toHaveBeenCalledWith(
                new ApiResponse(200, mockNewUser, 'User Registered ')
              );
            });
        
            it('should handle registration errors', async () => {
              const errorMessage = 'Email already exists';
              createUserService.mockRejectedValue(new Error(errorMessage));
        
              await signUpController(mockReq, mockRes);
        
              expect(mockRes.status).toHaveBeenCalledWith(400);
              expect(mockRes.json).toHaveBeenCalledWith(
                new ApiError(400, 'Error', errorMessage)
              );
            });
 });
});
        