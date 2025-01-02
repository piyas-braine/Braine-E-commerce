import { connectDB } from "@/db/connectDB";
import User from "@/models/User";
import { TUser } from "@/types/user";
import { NextRequest, NextResponse } from "next/server";


export const loginUser = async (req: NextRequest) => {
    const {email, password} = await req.json();

    try {
        await connectDB();
        const user = await User.findOne({ email: email });

        if (!user) {
            return new NextResponse("User not found!", { status: 404 });
        }

        if (user.password !== password) {
            return new NextResponse("Incorrect password!", { status: 401 });
        }

        return new NextResponse(JSON.stringify({
            message: "User logged in successfully!",
            user: user
        }), { status: 200 });
    } catch (error: unknown) {
        console.error("Error logging in user:", error);

        return new NextResponse("Error logging in user: " + (error instanceof Error ? error.message : "Unknown error"), { status: 500 });
    }
};

export const createUser = async (req: NextRequest) => {
    const userInfo: TUser = await req.json();

    const newUser = new User(userInfo);

    try {
        await connectDB();
        const user = await newUser.save();

        return new NextResponse(JSON.stringify({
            message:"User created successfully!",
            user: user
        }), { status: 201 });
    } catch (error: unknown) {
        console.error("Error creating user:", error);

        return new NextResponse("Error creating user: " + (error instanceof Error ? error.message : "Unknown error"), { status: 500 });
    }
};

export const getAllUsers = async () => {
    try {
        await connectDB();
        const users = await User.find({});

        return new NextResponse(JSON.stringify(users), { status: 200 });
    } catch (error: unknown) {
        console.error("Error getting all users:", error);

        return new NextResponse("Error getting all users: " + (error instanceof Error ? error.message : "Unknown error"), { status: 500 });
    }
};