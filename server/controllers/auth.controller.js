import User from "../models/user.model.js";

export const authCallback = async (req, res, next) => {
    try {
        const { id, firstName, lastName, imageUrl } = req.body;

        const user = await User.findOne({ clerkId: id });

        if (!user) {
            await User.create({
                clerkId: id,
                fullName: `${firstName} ${lastName}`,
                imageUrl: imageUrl || "",
            });
        }

        res.status(200).json({
            success: true,
            message: "User authenticated successfully",
        });
    } catch (error) {
        console.error("Error in auth callback:", error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
        next(error);
    }
};
