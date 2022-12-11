const bcrypt=require('bcrypt');
cont CustomerModel=require('../models/Customer');
module.export.CreateUser= async(userInfo) =>{
    try{
        let hashedPassword= await bcrypt.hash(userInfo.password,12);
        const newUser=new CustomerModel({
            Name:userInfo.Name,
            Email:userInfo.Email,
            password:hashedPassword
        });
        await newUser.save();
    }catch(err){
        throw new Error ('Error creating new user, please try again');
    }
};
module.exports.doesUserexist=async(Email) =>{
    const existinguser= await CustomerModel.findOne({
        Email:Email
    });
    if(existinguser){
        return true;
    }else{
        return false;
    }
};
 module.exports.checkCredentials = async(Email,password) =>{
    try {
        const user= await CustomerModel.findOne({
            Email:Email
        });
    let isCorrectPassword = await bcrypt.compare(password, user.password);

    if(isCorrectPassword){
        return user;
    }else{
        return null;
    }
    }catch(error){
        throw new Error('Error logging in ');
    }
 };
 module.exports.generateJWT= (user) =>{
    const jwtPayload={
        custID:Customer._id,
        Email:Customer.Email
    };
    const jwtSecret= process.env.JWT_SECRET;
    try{
        let token= JWT.sign(jwtPayload,jwtSecret,{expiresIn:'1h'});
        return token;
    }catch(error){
        throw new Error('Failure to sign in');
    }
 };
 module.exports.postLogin = asyn (req,res) => {
    const {Email,password}= req.body;
    const user= await AuthService.checkCredentials(Email,password);
    if (!user) {
        return res.status (401) . send ({
        error:
       ' Invalid credentials'
        });
    }
        const jwt = await AuthService. generateJWT(user) ;
        res. send ({
        jwt: jwt, 
        message:
        'Logged in successfully.'
        });
    }catch (err) {
        res.status (500) . send ({
        error: error.message
        });
}