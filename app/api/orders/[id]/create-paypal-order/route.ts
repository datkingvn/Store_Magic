import {auth} from "@/libs/auth";
import OrderModel from "@/libs/models/OrderModel";
import {paypal} from "@/libs/paypal";
import dbConnect from "@/libs/dbConnect";

export const POST = auth(async (...request: any) => {
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
    if (order) {
        try {
            const paypalOrder = await paypal.createOrder(order.totalPrice)
            return Response.json(paypalOrder)
        } catch (err: any) {
            return Response.json(
                { message: err.message },
                {
                    status: 500,
                }
            )
        }
    } else {
        return Response.json(
            { message: 'Order Not Found' },
            {
                status: 404,
            }
        )
    }
})
