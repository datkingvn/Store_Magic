import bcrypt from 'bcryptjs'
import {auth} from "@/libs/auth";
import dbConnect from "@/libs/dbConnect";
import UserModel from "@/libs/models/UserModel";

export const PUT = auth(async (req) => {
    if (!req.auth) {
        return Response.json({ message: 'Not Authenticated' }, { status: 401 })
    }
    const { user } = req.auth
    const { name, email, password } = await req.json()
    await dbConnect()
    try {
        const dbUser = await UserModel.findById(user._id)
        if (!dbUser) {
            return Response.json(
                { message: 'User Not Found!' },
                {
                    status: 404,
                }
            )
        }
        dbUser.name = name
        dbUser.email = email
        dbUser.password = password ? await bcrypt.hash(password, 5) : dbUser.password
        await dbUser.save()
        return Response.json({ message: 'User Has Been Updated!' })
    } catch (err: any) {
        return Response.json(
            { message: err.message },
            {
                status: 500,
            }
        )
    }
})