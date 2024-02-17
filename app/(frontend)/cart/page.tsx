import React from 'react';
import CartDetails from "@/app/(frontend)/cart/CartDetails";

export const metadata = {
    title: "Shopping Cart"
}
const CartPage = () => {
    return (
        <div>
            <div className="text-sm breadcrumbs px-2 py-3">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/cart">My Cart</a>
                    </li>
                </ul>
            </div>

            <CartDetails/>
        </div>
    );
};

export default CartPage;
