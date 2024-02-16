import data from "@/libs/data";
import ProductItem from "@/components/products/ProductItem";


export default function Home() {
    return (
        <div className="my-6">
            <h3 className="mb-4 text-4sm font-bold uppercase">Sản Phẩm Mới Nhất</h3>
            <div className="grid grid-cols-5 gap-4">
                {
                    data.products.map((product) => (
                        <ProductItem product={product} key={product.slug}/>
                    ))
                }
            </div>
        </div>
    );
}
