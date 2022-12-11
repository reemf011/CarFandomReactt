const { Router } = require('express');
const authController = require(* ../controllers/auth');
const authrouter = Router ();
authRouter .post ('/signup', authcontroller. postUser);
authRouter .post ('/signup', authcontroller. postLogin);
module.exports = authRouter;