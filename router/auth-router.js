const express = require('express');
const authcontrollers = require("../controllers/auth-controller");
const router = express.Router();
const {signupSchema,loginSchema} = require('../validators/auth-validators');
const validate = require('../middlewares/validator-middleware');
const authMiddleware = require('../middlewares/auth-middleware')



router.route('/').get(authcontrollers.home);

router.route('/register').post( validate(signupSchema),  authcontrollers.register);

router.route('/login').post(validate(loginSchema), authcontrollers.login);
router.route('/user').get(authMiddleware, authcontrollers.user);


module.exports = router;  