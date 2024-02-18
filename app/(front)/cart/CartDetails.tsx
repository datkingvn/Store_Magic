'use client'

import useCartService from '@/libs/hooks/useCartStore'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import {RiAddFill, RiDeleteBin2Line, RiLock2Line, RiShieldCheckFill, RiSubtractFill} from "react-icons/ri";
import {IoReturnUpBack} from "react-icons/io5";
import {FaBagShopping} from "react-icons/fa6";

export default function CartDetails() {
  const router = useRouter()
  const { items, itemsPrice, decrease, increase } = useCartService()

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <></>

  return (
      <>
        <div className="my-2">
          <h3 className="mb-4 text-xl font-medium flex items-center">
            <FaBagShopping className="mr-2" />
            <span>Your Cart ({items.reduce((a, c) => a + c.qty, 0)})</span>
          </h3>
          <div className="flex gap-6">
            <div className="flex-1 rounded-lg border border-gray-300 p-4 bg-white flex flex-col gap-6">
              {items.length === 0 ? (
                  <div>
                    Cart is empty. <Link href="/">Go Shopping Now</Link>
                  </div>
              ) : (
                  items.map((item) => (
                      <div className="flex gap-6" key={item.slug}>
                        <div
                            className="w-[7rem] h-[7rem] rounded-lg overflow-hidden border border-gray-300">
                          <img src={item.image} alt="" className="w-full h-full object-cover"/>
                        </div>
                        <div className="flex flex-col flex-1">
                          <h2 className="text-lg">{item.name}</h2>
                          <div className="text-sm text-gray-400">
                            <p>Seller: Nice Seller Ltd</p>
                            <p>Brand: Nike</p>
                            {/*<p>Color: {item.color} | Size: {item.size}</p>*/}
                          </div>
                          <div className="flex items-center gap-3 mt-2">
                            <button className="btn btn-sm btn-outline capitalize btn-error">Remove
                            </button>
                            <button className="btn btn-sm btn-outline capitalize btn-primary">Save for
                              later
                            </button>
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <strong className="font-semibold text-lg">${item.price * item.qty}</strong>
                          <div className="join pt-2">
                            <button className="join-item btn btn-sm px-2 border border-gray-300"
                                    onClick={() => decrease(item)}>
                              <RiSubtractFill fontSize={20}/>
                            </button>
                            <button
                                className="btn btn-sm px-4 join-item pointer-events-none bg-white border border-gray-300">
                              {item.qty}
                            </button>
                            <button className="join-item btn btn-sm px-2 border border-gray-300"
                                    onClick={() => increase(item)}>
                              <RiAddFill fontSize={20}/>
                            </button>
                          </div>
                        </div>
                      </div>
                  ))
              )}

              <div className="mt-2 flex justify-between">
                {items.length !== 0 && (
                    <button className="btn btn-sm btn-error btn-outline capitalize">
                      <RiDeleteBin2Line fontSize={20}/> Remove All
                    </button>
                )}
                <button className="btn btn-sm btn-secondary btn-outline capitalize"
                        onClick={() => router.push("/")}
                >
                  <IoReturnUpBack fontSize={20}/> Continue Shopping
                </button>
              </div>
            </div>
            <div className="w-[20rem] flex flex-col gap-6">
              <div className="rounded-lg border border-gray-300 p-4 bg-white text-gray-600 flex flex-col">
                <span className="pb-2">Have Coupon?</span>
                <div className="join">
                  <input
                      type="text"
                      className="w-full input input-bordered input-sm join-item"
                      placeholder="Enter Coupon Code"
                  />
                  <button className="join-item btn btn-sm btn-outline">Apply</button>
                </div>
              </div>
              <div
                  className="rounded-lg border border-gray-300 p-4 bg-white text-gray-600 flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span>Subtotal:</span>
                  <span>${itemsPrice}</span>
                </div>

                <hr className="my-2"/>
                <div className="flex items-center justify-between font-semibold my-2">
                  <span>Total:</span>
                  <span>${itemsPrice}</span>
                </div>
                <button className="btn btn-secondary capitalize text-base"
                        onClick={() => router.push("/shipping")}
                >
                  <RiLock2Line fontSize={20}/> Checkout
                </button>
                <div className="pt-4 flex items-center gap-3 text-xs text-gray-500">
                  <RiShieldCheckFill fontSize={22}/>
                  Safe and Secure Payments. Easy returns.
                </div>
              </div>
            </div>
          </div>
          {/*<RecommendedProducts />*/}
        </div>
      </>
  );
}