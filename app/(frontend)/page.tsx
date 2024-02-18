import data from "@/libs/data";
import ProductItem from "@/components/products/ProductItem";
import {Metadata} from "next";
import productServices from "@/libs/services/productServices";
import Link from "next/link";

export const metadata: Metadata = {
    title: process.env.NEXT_PUBLIC_APP_NAME || 'DPay.vn | The Best Of Your Choice',
    description:
        process.env.NEXT_PUBLIC_APP_DESC || 'DPay Shop, clothes, quan ao, giay dep',
}

export default async function Home() {
    const featuredProducts = await productServices.getFeatured()
    const latestProducts = await productServices.getLatest()

    return (
        <div className="my-6">
            <h3 className="mb-4 text-4sm font-bold uppercase">Trending Products</h3>
            <div className="flex gap-4">
                {featuredProducts.map((product, index) => (
                    <Link
                        href={`/product/${product.slug}`}
                        className="relative flex-1 block group rounded-lg overflow-hidden border border-gray-300 grayscale-effect"
                        key={product._id}
                    >
                        <img
                            alt=""
                            src={product.banner}
                            className="object-cover w-full aspect-video group-hover:scale-105 transition-transform"
                        />
                        <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                            <h3 className="text-3xl font-bold text-white">{product.name}</h3>
                            <p className="max-w-lg py-3 text-white">
                                {product.description}
                            </p>
                            <button className="btn btn-secondary text-lg capitalize">Shop Now</button>
                        </div>
                    </Link>
                ))}
            </div>

            <br></br>

            <h3 className="mb-4 text-4sm font-bold uppercase">New Products</h3>
            <div className="grid grid-cols-5 gap-4">
                {
                    latestProducts.map((product) => (
                        <ProductItem product={product} key={product.slug}/>
                    ))
                }
            </div>
        </div>
    );
}
