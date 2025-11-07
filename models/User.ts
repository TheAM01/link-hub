import mongoose, { Document, Model } from "mongoose";

export interface IUser extends Document {
    username: string;
    password: string;
    createdAt: Date;
}

const UserSchema = new mongoose.Schema<IUser>({
    username: { type: String, unique: true, required: true, trim: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const User: Model<IUser> =
    mongoose.models.User as Model<IUser> ||
    mongoose.model<IUser>("User", UserSchema);

export default User;
