import { TUser } from "@/types/user";
import mongoose from "mongoose";

interface IUserDocument extends TUser, Document {};

const UserSchema: mongoose.Schema<IUserDocument> = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
    },
    accountType: {
        type: String,
        required: true,
        enum: ["superAdmin", "admin", "seller", "user"],
    },
    isSocialLogin: {
        type: Boolean,
        required: true,
        default: false,
    },
    phoneNumber: {
        type: String,
    },
    billingAddress: {
        type: String,
    },
    shippingAddress: {
        type: String,
    },
},
    {
        timestamps: true,
    }
);

const User: mongoose.Model<IUserDocument> = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;