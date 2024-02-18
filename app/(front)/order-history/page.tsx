import { Metadata } from 'next'
import MyOrders from './MyOrders'

export const metadata: Metadata = {
    title: 'Order History',
}
export default function OrderHistory() {
    return (
        <>
            <br></br>
            <h1 className="mb-4 text-4sm font-bold uppercase">Order History</h1>
            <MyOrders />
        </>
    )
}