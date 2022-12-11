const AuthService = require(' ../services/auth') ;
module.exports.postUser = async (reg, res) => {
try
const userInfo = {
Email: req. body.Email, 
password: req. body.password, 
Name: req. body. Name
};
const userExists = await AuthService.doesUserExist (userInfo.Email) ;
if (userExists) {
return res.status (422) . send ({
error: 'A user with the same username already exists.'
});
await AuthService.createUser (userInfo) ;
}catch (error) {
res.status (500) . send({
error: error.message
});
}
};