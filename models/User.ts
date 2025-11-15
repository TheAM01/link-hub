import mongoose, { Document, Model } from "mongoose";


export interface IUser extends Document {
    username: string;
    password: string;
    createdAt: Date;
    fullName: string;
    profilePicUrl: string;
    themePrefs: string;
    // customizationPreferences: {
    //     theme: string;
    //     description: string;
    //     texture: string;
    // }
}

const UserSchema = new mongoose.Schema<IUser>({
    username: { type: String, unique: true, required: true, trim: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },

    fullName: { type: String, required: true, default: "User" },
    profilePicUrl: { type: String, default: "" },
    themePrefs: {
        type: String, default: "default",
    }
    // customizationPreferences: {
    //     theme: { type: String, default: "default" },
    //     description: { type: String, default: "" },
    //     texture: { type: String, default: "smooth" }
    // }
});


const User: Model<IUser> =
    mongoose.models.User as Model<IUser> ||
    mongoose.model<IUser>("User", UserSchema);

export default User;
