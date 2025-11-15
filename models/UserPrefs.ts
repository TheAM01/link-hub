import mongoose, { Document, Model } from "mongoose";

export interface ITheme extends Document {
    anchorTagClasses: string;
    fontFace: string;
    background: string;
    fontStyle: string;
    showExternalLinkIcon: boolean;
}

const ThemeSchema = new mongoose.Schema<ITheme>({
    anchorTagClasses: { type: String, required: true, default: "" },
    fontFace: { type: String, required: true, default: "" },
    background: { type: String, required: true, default: "" },
    fontStyle: { type: String, required: true, default: "" },
    showExternalLinkIcon: { type: Boolean, default: true }
});

const Theme: Model<ITheme> =
    mongoose.models.Theme as Model<ITheme> ||
    mongoose.model<ITheme>("Theme", ThemeSchema);

export default Theme;
