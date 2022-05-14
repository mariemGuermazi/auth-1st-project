const User = require("../models/User")

const authAdmin = async (req, res, next) => {
    try {
        const user = await User.findOne({_id: req.user.id})

        if(user.role !== 1){
            return res.status(401).send({errors:[{ message: " you are not authorized as an admin!!" }]});
        }
        next()
    } catch (err) {
        return res.status(500).send({errors:[{ message: "Something went worng!!" }]});
    }
}

module.exports = authAdmin