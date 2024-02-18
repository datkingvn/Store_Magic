'use client'
import { Order } from '@/libs/models/OrderModel'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import useSWR from 'swr'

export default function MyOrders() {
    const router = useRouter()
    const { data: orders, error } = useSWR(`/api/orders/mine`)

    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return <></>

    if (error) return 'An error has occurred.'
    if (!orders) return 'Loading...'

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
                <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal text-left">
                    <th className="py-3 px-4">ID</th>
                    <th className="py-3 px-4">DATE</th>
                    <th className="py-3 px-4">TOTAL</th>
                    <th className="py-3 px-4">PAID</th>
                    <th className="py-3 px-4">DELIVERED</th>
                    <th className="py-3 px-4">ACTION</th>
                </tr>
                </thead>
                <tbody>
                {orders.map((order: Order) => (
                    <tr key={order._id} className="border-b border-gray-200 hover:bg-gray-100">
                        <td className="py-3 px-4">{order._id.substring(18, 24)}</td>
                        <td className="py-3 px-4">
                            {order.createdAt.substring(8, 10)}-{order.createdAt.substring(5, 7)}-{order.createdAt.substring(0, 4)}
                        </td>
                        <td className="py-3 px-4">${order.totalPrice}</td>
                        <td className="py-3 px-4">
                            {order.isPaid && order.paidAt ? (
                                <span className="border border-green-500 px-2 py-1 rounded-md text-green-600">
                                    {`${order.paidAt.substring(8, 10)}-${order.paidAt.substring(5, 7)}-${order.paidAt.substring(0, 4)}`}
                                </span>
                            ) : (
                                <span className="border border-red-400 px-2 py-1 rounded-md text-red-500">Not Paid</span>
                            )}
                        </td>

                        <td className="py-3 px-4">
                            {order.isDelivered && order.deliveredAt
                                ? `${order.deliveredAt.substring(0, 10)}`
                                : 'Not Delivered'}
                        </td>
                        <td className="py-3 px-4">
                            <Link href={`/order/${order._id}`} className="btn btn-sm btn-warning join-item rounded-r-lg capitalize" passHref>
                                Details
                            </Link>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}