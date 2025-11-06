import mongoose, { Document, Model } from "mongoose";


export interface ILink extends Document {
    title: string;
    url: string;
    clicks: number;
    order: number;
    createdAt: Date;
    user: string;
}

const LinkSchema = new mongoose.Schema<ILink>({
    title: { type: String, required: true },
    url: { type: String, required: true },
    clicks: { type: Number, default: 0 },
    order: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now },
    user: { type: String, default: "johndoe" }
});

const Link: Model<ILink> = mongoose.models.Link as Model<ILink> || mongoose.model<ILink>("Link", LinkSchema);


export default Link;