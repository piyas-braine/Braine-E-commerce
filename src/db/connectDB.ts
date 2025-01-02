import mongoose from "mongoose";

const mongo_uri: string = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fuichu5.mongodb.net/?retryWrites=true&w=majority`;

export const connectDB = async (): Promise<void> => {
    if (mongoose.connection.readyState === 1) {
        console.log("Already connected to the database.");
        return;
    }

    try {
        await mongoose.connect(mongo_uri, { dbName: process.env.DB_NAME });
        console.log("Connected to MongoDB.");
    } catch (error) {
        console.error("Database Connection Failed:", (error as Error).message);
        throw new Error("Database Connection Failed!");
    }
};