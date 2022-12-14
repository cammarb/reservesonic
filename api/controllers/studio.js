import Studio from "../models/Studio.js";

export const createStudio = async (req, res, next) => {
    const newStudio = new Studio(req.body);
    try {
        const savedStudio = await newStudio.save();
        res.status(200).json(savedStudio);
    }
    catch (err) {
        next(err);
    }
};

export const updateStudio = async (req, res, next) => {
    try {
        const updatedStudio = await Studio.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(updatedStudio);
    }
    catch (err) {
        next(err);
    }
};

export const deleteStudio = async (req, res, next) => {
    try {
        await Studio.findByIdAndDelete(req.params.id);
        res.status(200).json("Studio has been deleted.");
    }
    catch (err) {
        next(err);
    }
};

export const getStudio = async (req, res, next) => {
    try {
        const studio = await Studio.findById(req.params.id);
        res.status(200).json(studio);
    }
    catch (err) {
        next(err);
    }
};

export const getAllStudios = async (req, res, next) => {

    // const failed = true;

    // if (failed) {
    //     return next(
    //         createError(
    //             401,
    //             "Sorry! You are not authenticated.")
    //     );
    // }

    try {
        const studios = await Studio.find();
        res.status(200).json(studios);
    }
    catch (err) {
        next(err);
    }
};