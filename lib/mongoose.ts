import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
    throw new Error("Please set the MONGODB_URI environment variable.");
}


interface MongooseCache {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
}

declare global {
    var mongooseCache: MongooseCache;
}

const cached = global.mongooseCache || { conn: null, promise: null };

async function connectToDB(): Promise<typeof mongoose> {
    
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => mongoose);
    }

    cached.conn = await cached.promise;
    global.mongooseCache = cached;
    return cached.conn;
}

export default connectToDB;