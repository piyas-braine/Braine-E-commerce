import mongoose from "mongoose";

const mongo_uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.0ezrv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


export const connectDB = async (): Promise<void> => {
    if (mongoose.connection.readyState === 1) {
        console.log("Already connected to the database.");
        return;
    }

    try {
        await mongoose.connect(mongo_uri, {
            dbName: "braineECommerceDB"
        });
        console.log("Connected to MongoDB.");
    } catch (error) {
        console.error("Database Connection Failed:", (error as Error).message);
        throw new Error("Database Connection Failed!");
    }
};