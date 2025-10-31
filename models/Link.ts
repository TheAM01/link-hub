import mongoose, { Document, Model } from "mongoose";


export interface ILink extends Document {
    title: string;
    url: string;
    clicks: number;
    order: number;
    createdAt: Date;
}

const LinkSchema = new mongoose.Schema<ILink>({
    title: { type: String, required: true },
    url: { type: String, required: true },
    clicks: { type: Number, default: 0 },
    order: { type: Number, default: 0 },
    createdAt: { type: Date, default: Date.now }
});

const Link: Model<ILink> = mongoose.models.Link || mongoose.model<ILink>("link", LinkSchema);

export default Link;