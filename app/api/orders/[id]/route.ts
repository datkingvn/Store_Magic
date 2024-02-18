import OrderModel from "@/libs/models/OrderModel";
import dbConnect from "@/libs/dbConnect";
import {auth} from "@/libs/auth";


export const GET = auth(async (...request: any) => {
    const [req, { params }] = request
    if (!req.auth) {
        return Response.json(
            { message: 'Unauthorized' },
            {
                status: 401,
            }
        )
    }
    await dbConnect()
    const order = await OrderModel.findById(params.id)
    return Response.json(order)
})