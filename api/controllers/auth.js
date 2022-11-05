import User from "../models/User.js";

export const register = async (req, res, next) => {
    try {
        const newUser = new User({
            username: req.body.username,
            password: req.body.password,
            name: req.body.name,
            age: req.body.age,
            email: req.body.email,
            isAdmin: req.body.isAdmin,
        });

        await newUser.save();

        res.status(200).send("User has been created.");
        // res.send("This is the auth endpoint.");
    }
    catch (err) {
        next(err);
    }
};