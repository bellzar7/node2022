const {Router} = require('express');

const {userController} = require("../controllers");
const {userMiddleware} = require("../middlewares");

const userRouter = Router();

userRouter.get('/', userController.getAllUsers);
userRouter.post('/', userMiddleware.checkIsUserBodyValid ,userController.createUser);
userRouter.get('/:userId', userController.getUserById);
userRouter.put('/:userId', userController.updateUserById);
userRouter.delete('/:userId', userController.deleteUserById);

module.exports = userRouter