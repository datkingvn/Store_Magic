"use client"
import {OrderItem} from "@/libs/models/OrderModel";
import {useRouter} from "next/navigation";
import useCartService from "@/libs/hooks/useCartStore";
import React, {useEffect, useState} from "react";
import {RiAddFill, RiSubtractFill} from "react-icons/ri";
import Link from "next/link";
import {FaCartPlus} from "react-icons/fa";

function AddToCart({item}: { item: OrderItem }) {
    const router = useRouter()
    const {items, increase, decrease} = useCartService()
    const [existItem, setExistItem] = useState<OrderItem | undefined>()

    useEffect(() => {
        setExistItem(items.find((x) => x.slug === item.slug))
    }, [item, items]);

    const addToCartHandler = () => {
        increase(item)
    }

    return existItem ? (
        <div className="join py-4">
            <button className="join-item btn btn-sm px-2 border border-gray-300" onClick={() => decrease(existItem)}>
                <RiSubtractFill fontSize={20}/>
            </button>
            <button
                className="btn btn-sm px-4 join-item pointer-events-none bg-white border border-gray-300">
                {existItem.qty}
            </button>
            <button className="join-item btn btn-sm px-2 border border-gray-300" onClick={() => increase(existItem)}>
                <RiAddFill fontSize={20}/>
            </button>
        </div>
    ) : (
        <div className="flex gap-3">
            <button className="btn btn-secondary capitalize" onClick={addToCartHandler}>
                <FaCartPlus /> Add To Cart
            </button>
        </div>
    )
}

export default AddToCart;