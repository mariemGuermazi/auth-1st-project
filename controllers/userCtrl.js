const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");


exports.register = async (req, res) => {

    try {
        const { username, email, password} = req.body;
        const findUser = await User.findOne({ email });
        if (findUser) {
            return res.status(400).send({errors:[{ msg: "email should be unique" }]});
        }
        const saltRound = 10;
        const hashedPassword = await bcrypt.hash(password, saltRound);
        const newUser = new User({ ...req.body });
        newUser.password = hashedPassword;
        await newUser.save();
        const token = jwt.sign(
            { 
                id: newUser._id 
            }, 
            process.env.SECRET_KEY, 
            {expiresIn: "12h"}
            );

        res.status(200).send({ msg: "user created successfully", user :newUser, token 
    });
    } catch (error) {
        res.status(400).send({errors: [{msg : "can not register user!!"}]});
    }
}


exports.signin = async (req, res) =>{

    try {
        const {email, password} = req.body;
        const findUser = await User.findOne({ email });
        if (!findUser) {
            return res.status(400).send({errors:[{ msg: "bad credentials" }]});
        }
        const comparePass = await bcrypt.compare(password, findUser.password);
        if (!comparePass) {
            return res.status(400).send({errors:[{ msg: "bad credentials" }]});
        }
        const token = jwt.sign(
            { id: findUser._id }, 
            process.env.SECRET_KEY, 
            { expiresIn: "12h"}
            );
        res.status(200).send({ msg: "successful login", user: findUser, token });
    } catch (error) {
        res.status(500).send({errors:[{ msg: "Can not login!!!" }]});
    }}

    
    exports.getUserInfo = async (req, res) =>{
        try {
            const user = await User.findById(req.user.id).select('-password')
            res.status(200).send({msg : "Here's the requested user", user});
        } catch (error) {
            res.status(500).send(error);
        }
    }
    
    exports.getAllUsersInfos = async (req, res) =>{
        try {
            const users = await User.find().select('-password')
            res.status(200).send({msg : "Users infos", users});
        } catch (error) {
            res.status(500).send(error);
        }
    }
    
    exports.updateUser = async (req, res) =>{
        try {
            const {username, avatar, about} = req.body
            const updatedUser = await User.findOneAndUpdate({_id: req.user.id}, { ...req.body})
            res.status(200).send({msg : "User updated ", updatedUser});
        } catch (error) {
            res.status(500).send(error);
        }
    }

    exports.updateUserRole = async (req, res) =>{
        try {
            const {role} = req.body

            await User.findOneAndUpdate({_id: req.params.id}, {
                role
            })
            res.status(200).send({msg : "User role updated "});
        } catch (error) {
            res.status(500).send(error);
        }
    }

    exports.deleteUser = async (req, res) =>{
        try {
            await User.findByIdAndDelete(req.params.id)
            res.status(200).send({msg : "User deleted "});
        } catch (error) {
            res.status(500).send(error);
        }
    }