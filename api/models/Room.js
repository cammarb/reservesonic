import mongoose from 'mongoose';

// const { Schema } = mongoose;

const RoomSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        capacity: {
            type: Number,
            required: true
        },
        maxPeople: {
            type: Number,
            required: true
        },
        photos: {
            type: [String],
            required: true
        },
        description: {
            type: String,
            required: true
        },
        unavailableDates: {
            type: [Date]
        }
    },
    { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);