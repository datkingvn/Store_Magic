'use client'
import {useSession} from "next-auth/react";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";
import toast from "react-hot-toast";
import Image from 'next/image';
import {OrderItem} from "@/libs/models/OrderModel";
import Link from "next/link";

export default function OrderDetails({orderId, paypalClientId}: { orderId: string, paypalClientId: string }) {
    const {data: session} = useSession();
    const {data, error} = useSWR(`/api/orders/${orderId}`);

    if (error) return error.message;
    if (!data) return 'Loading...';

    const {
        paymentMethod,
        shippingAddress,
        items,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        isDelivered,
        deliveredAt,
        isPaid,
        paidAt,
    } = data;

    // @ts-ignore
    return (
        <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
            <div className="flex justify-start item-start space-y-2 flex-col">
                <h1 className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Order
                    #{orderId}</h1>
            </div>
            <div
                className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                    <div
                        className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                        <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">Customer’s
                            Cart</p>
                        {items.map((item: OrderItem) => (
                            <div key={item.slug}
                                 className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
                                <div className="pb-4 md:pb-8 w-full md:w-40">
                                    <img className="w-full hidden md:block" src={item.image}
                                         alt="dress"/>
                                </div>
                                <div
                                    className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                                    <div className="w-full flex flex-col justify-start items-start space-y-8">
                                        <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">{item.name}</h3>
                                        <div className="flex justify-start items-start flex-col space-y-2">
                                            <p className="text-sm dark:text-white leading-none text-gray-800"><span
                                                className="dark:text-gray-400 text-gray-300">Style: </span> {}
                                                Design</p>
                                            <p className="text-sm dark:text-white leading-none text-gray-800"><span
                                                className="dark:text-gray-400 text-gray-300">Size: </span> {item.size}
                                            </p>
                                            <p className="text-sm dark:text-white leading-none text-gray-800"><span
                                                className="dark:text-gray-400 text-gray-300">Color: </span> {item.color}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between space-x-8 items-start w-full">
                                        <p className="text-base dark:text-white xl:text-lg leading-6">Price:
                                            ${item.price}
                                            {/*<span className="text-red-300 line-through"> $45.00</span>*/}
                                        </p>
                                        <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">Qty: {item.qty}</p>
                                        <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">${item.price * item.qty}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div
                        className="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                        <div
                            className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                            <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Summary</h3>
                            <div
                                className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                <div className="flex justify-between w-full">
                                    <p className="text-base dark:text-white leading-4 text-gray-800">Subtotal</p>
                                    <p className="text-base dark:text-gray-300 leading-4 text-gray-600">${itemsPrice}</p>
                                </div>

                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base dark:text-white leading-4 text-gray-800">Tax</p>
                                    <p className="text-base dark:text-gray-300 leading-4 text-gray-600">${taxPrice}</p>
                                </div>

                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base dark:text-white leading-4 text-gray-800">Shipping Price</p>
                                    <p className="text-base dark:text-gray-300 leading-4 text-gray-600">${shippingPrice}</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">Total</p>
                                <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">${totalPrice}</p>
                            </div>
                        </div>
                        <div
                            className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">

                            <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">
                                Payment Method - &nbsp;
                                <span
                                    className="bg-gray-200 p-1 text-xs font-medium dark:bg-white dark:text-gray-800 leading-3 text-gray-800">{paymentMethod}</span>
                            </p>
                            <div className="flex items-center">
                                <>
                                    Status:
                                    {isPaid ? (
                                        <div
                                            className="text-green-600 border-[1px] border-green-500 rounded-md p-1 ml-2">
                                            Paid at {paidAt}
                                        </div>
                                    ) : (
                                        <div className="text-error border-[1px] border-red-500 rounded-md p-1 ml-2">
                                            Not Paid
                                        </div>
                                    )}
                                </>
                            </div>

                            <div className="w-full flex justify-center items-center">
                                <button
                                    className="hover:bg-black dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">Contact
                                    Support 24/7
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                    <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Customer</h3>
                    <div
                        className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                        <div className="flex flex-col justify-start items-start flex-shrink-0">
                            <div
                                className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                                <img src="https://i.ibb.co/5TSg7f6/Rectangle-18.png" alt="avatar"/>
                                <div className="flex justify-start items-start flex-col space-y-2">
                                    <p className="text-base dark:text-white font-semibold leading-4 text-left text-gray-800">{shippingAddress.fullName}</p>
                                    <p className="text-sm dark:text-gray-300 leading-5 text-gray-600">
                                        Customer
                                    </p>
                                </div>
                            </div>
                            <div
                                className="flex justify-center text-gray-800 dark:text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                                <img className="dark:hidden"
                                     src="https://tuk-cdn.s3.amazonaws.com/can-uploader/order-summary-3-svg1.svg"
                                     alt="email"/>
                                <img className="hidden dark:block"
                                     src="https://tuk-cdn.s3.amazonaws.com/can-uploader/order-summary-3-svg1dark.svg"
                                     alt="email"/>
                                {session?.user && (
                                    <p className="cursor-pointer text-sm leading-5 ">{session.user.email}</p>
                                )}
                            </div>
                        </div>
                        <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                            <div
                                className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                                <div
                                    className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
                                    <p className="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">Shipping
                                        Address</p>
                                    <p>
                                        {shippingAddress.address}, {shippingAddress.city},{' '}
                                        {shippingAddress.postalCode}, {shippingAddress.country}{' '}
                                    </p>
                                    {isDelivered ? (
                                        <div
                                            className="text-green-600 border-[1px] border-green-500 rounded-md p-1">Delivered
                                            at {deliveredAt}</div>
                                    ) : (
                                        <div className="text-error border-[1px] border-red-500 rounded-md p-1">
                                            Not Delivered
                                        </div>
                                    )}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}