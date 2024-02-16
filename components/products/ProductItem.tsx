import React from 'react';
import {Product} from "@/libs/models/ProductModel";
import Link from "next/link";
import Image from "next/image"

function ProductItem({product}: { product: Product }) {
    return (
            <Link
                href={`/product/${product.slug}`}
                className="group hover:shadow-sm rounded-lg bg-white border border-gray-300 flex flex-col gap-2 py-3 px-3"
            >
                <div className="group-hover:scale-105 transition-transform">
                    <Image src={product.image} width={200} height={200} alt={product.name}/>
                </div>
                <strong className="block font-medium text-gray-900">${product.price}</strong>
                <p className="leading-tight text-gray-400 font-normal">{product.name}</p>
            </Link>
    );
}

export default ProductItem;