import dbConnect from "@/libs/dbConnect";
import { NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import UserModel from "@/libs/models/UserModel";

export const POST = async (request: NextRequest) => {
    const { name, email, password } = await request.json();
    await dbConnect();

    try {
        // Kiểm tra xem người dùng đã tồn tại trong cơ sở dữ liệu chưa
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return Response.json(
                {
                    message: "User Already Exists!",
                },
                { status: 400 }
            );
        }

        // Tiến hành mã hóa mật khẩu
        const hashedPassword = await bcrypt.hash(password, 10);

        // Tạo người dùng mới
        const newUser = new UserModel({
            name,
            email,
            password: hashedPassword,
        });

        // Lưu người dùng vào cơ sở dữ liệu
        await newUser.save();

        return Response.json(
            {
                message: "User has been created",
            },
            { status: 201 }
        );
    } catch (error: any) {
        return Response.json(
            {
                message: error.message || "An error occurred",
            },
            { status: 500 }
        );
    }
};