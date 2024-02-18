'use client'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/navigation'
import useCartService from "@/libs/hooks/useCartStore";
import CheckoutSteps from "@/components/CheckoutSteps";
import {GrFormNextLink} from "react-icons/gr";
import {FaBackward} from "react-icons/fa";

const Form = () => {
    const router = useRouter()
    const {savePaymentMethod, paymentMethod, shippingAddress} = useCartService()
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('')
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        savePaymentMethod(selectedPaymentMethod)
        router.push('/place-order')
    }

    useEffect(() => {
        if (!shippingAddress.address) {
            return router.push('/shipping')
        }
        setSelectedPaymentMethod(paymentMethod || 'PayPal')
    }, [paymentMethod, router, shippingAddress.address])

    return (
        <div>
            <CheckoutSteps current={2}/>

            <div className="max-w-sm mx-auto card bg-base-300 my-4">
                <div className="card-body">
                    <h1 className="card-title">Payment Method</h1>
                    <form onSubmit={handleSubmit}>
                        {['PayPal', 'VNPay', 'Stripe', 'CashOnDelivery'].map((payment) => (
                            <div key={payment}>
                                <label className="label cursor-pointer">
                                    <span className="label-text">{payment}</span>
                                    <input
                                        type="radio"
                                        name="paymentMethod"
                                        className="radio"
                                        value={payment}
                                        checked={selectedPaymentMethod === payment}
                                        onChange={() => setSelectedPaymentMethod(payment)}
                                    />
                                </label>
                            </div>
                        ))}

                        <div className="my-2">
                            <button type="submit" className="btn btn-primary w-full">
                                Next <GrFormNextLink style={{fontSize: "20px"}}/>
                            </button>
                        </div>
                        <div className="my-2">
                            <button
                                type="button"
                                className="btn w-full my-2"
                                onClick={() => router.back()}
                            >
                                <FaBackward style={{fontSize: "12px"}}/> Back
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form