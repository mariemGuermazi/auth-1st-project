const express = require("express");
const { register, signin, getUserInfo, getAllUsersInfos, updateUser, updateUserRole, deleteUser } = require("../controllers/userCtrl");
const auth = require("../middleware/auth");
const authAdmin = require("../middleware/authAdmin");
const { registerValidator, validation, loginValidator } = require("../middleware/userValidation");

const userRouter = express.Router();

userRouter.post('/register', registerValidator(), validation, register)
userRouter.post('/login',loginValidator(), validation, signin)
userRouter.get('/current', auth, (req, res) =>{
    res.send(req.user)
})
userRouter.get('/userInfo',auth, getUserInfo)
userRouter.get('/AllUsersInfos',auth, getAllUsersInfos)
userRouter.patch('/update', auth, updateUser)
userRouter.patch('/updateRole/:id', auth, authAdmin, updateUserRole)
userRouter.delete('/delete/:id', auth, authAdmin, deleteUser)

module.exports = userRouter