import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";

export const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({
            username: req.body.username,
            password: hash,
            name: req.body.name,
            age: req.body.age,
            email: req.body.email,
            isAdmin: req.body.isAdmin,
        });

        await newUser.save();

        res.status(200).send("User has been created.");
    }
    catch (err) {
        next(err);
    }
};

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({
            username: req.body.username
        });

        if (!user) {
            return next(createError(404, "User was not found."));
        }

        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!isPasswordCorrect) {
            return next(createError(404, "Wrong username or password."));

        }

        const { password, isAdmin, ...otherDetails } = user;
        res.status(200).json({ ...otherDetails });
    }
    catch (err) {
        next(err);
    }
};