import React from 'react';
import data from "@/libs/data";
import Link from "next/link"
import {RiAddFill, RiCheckboxCircleFill, RiShieldCheckFill, RiSubtractFill} from "react-icons/ri"

function ProductDetails({params}: { params: { slug: string } }) {
    const product = data.products.find((x) => x.slug === params.slug)
    if (!product) {
        return <div>Sản phẩm này không tồn tại!</div>
    }
    return (
        <>
            <div className="text-sm breadcrumbs px-2 py-3">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a>{product.category}</a>
                    </li>
                    <li>{product.name}</li>
                </ul>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-300 flex gap-6">
                <div>
                    <div className="w-[32rem] aspect-[4/3] overflow-hidden rounded-lg border border-gray-300">
                        <div className="max-w-full">
                            <img src={product.image} alt="" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <h2 className="font-medium text-xl">{product.name}</h2>
                    <p className="text-sm">
                        Brand:{" "}
                        <Link href="#" className="link link-primary no-underline">
                            {product.brand}
                        </Link>
                    </p>
                    <div className="pb-3 pt-1 text-sm text-gray-400">{product.countInStock} In Stock</div>
                    <div className="pt-1 flex items-center gap-3">
                        <strong className="text-2xl font-medium text-gray-800">${product.price.toFixed(2)}</strong>
                        <span
                            className="font-medium text-gray-500 line-through">${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}</span>
                        <span className="text-green-500 text-sm font-semibold">{product.discountPercentage}%</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="rating rating-sm disabled">
                            {[1, 2, 3, 4, 5].map((rating) => (
                                <input
                                    key={product.rating}
                                    type="radio"
                                    className={`mask mask-star-2 ${
                                        Math.floor(product.rating) >= product.rating ? "bg-orange-400" : "bg-gray-300"
                                    }`}
                                />
                            ))}
                        </div>
                        <span className="text-orange-400">{product.rating}</span>
                        <span className="text-green-500 ml-2">Free Shipping</span>
                        <span className="badge badge-lg bg-emerald-600 text-white ml-2 gap-2 pl-1.5">
                            <RiCheckboxCircleFill fontSize={18}/> Assured
                        </span>
                    </div>
                    <div className="py-4 max-w-lg">
                        <p>{product.description}</p>
                    </div>
                    <div className="join py-4">
                        <button className="join-item btn btn-sm px-2 border border-gray-300">
                            <RiAddFill fontSize={20}/>
                        </button>
                        <button
                            className="btn btn-sm px-4 join-item pointer-events-none bg-white border border-gray-300">
                            2
                        </button>
                        <button className="join-item btn btn-sm px-2 border border-gray-300">
                            <RiSubtractFill fontSize={20}/>
                        </button>
                    </div>
                    <div className="flex gap-3">
                        <Link href="/cart" className="btn btn-secondary capitalize">
                            Buy Now
                        </Link>
                        <Link href="/cart" className="btn btn-accent capitalize text-[#D6D7EF]">
                            Add To Cart
                        </Link>
                    </div>
                    <div className="pt-4 flex items-center gap-3 text-sm text-gray-500">
                        <RiShieldCheckFill fontSize={22}/>
                        Safe and Secure Payments. Easy returns.
                    </div>
                </div>
            </div>

        </>
    );
}

export default ProductDetails;