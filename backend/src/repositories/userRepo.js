const User = require('../models/user.js')


const createUser = async (firstName, lastName, emailID, password) =>{
    try{
        const user = new user({
            firstName: firstName,
            lastName: lastName,
            emailID: emailID,
            password: password
            });
        await user.save();
    }
    catch(error){
        throw new Error('Provide the details correctly!!!');
    }
}
