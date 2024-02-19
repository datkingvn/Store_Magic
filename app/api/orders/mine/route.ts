import {auth} from "@/libs/auth";
import dbConnect from "@/libs/dbConnect";
import OrderModel from "@/libs/models/OrderModel";

export const GET = auth(async (req: any) => {
    if (!req.auth) {
        return Response.json(
            { message: 'Unauthorized' },
            {
                status: 401,
            }
        )
    }
    const { user } = req.auth
    await dbConnect()
    const orders = await OrderModel.find({ user: user._id })
    return Response.json(orders)
}) as any