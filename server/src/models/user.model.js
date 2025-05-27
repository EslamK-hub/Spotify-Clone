import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        fullName: {
            typeof: String,
            required: true,
        },
        imageUrl: {
            typeof: String,
            required: true,
        },
        clerkId: {
            typeof: String,
            required: true,
            unique: true,
        },
    },
    { timestamps: true }
);

export const User = mongoose.model("User", userSchema)