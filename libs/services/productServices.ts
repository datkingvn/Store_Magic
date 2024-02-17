import {cache} from "react";
import dbConnect from "@/libs/dbConnect";
import ProductModel, {Product} from "@/libs/models/ProductModel";

export const revalidate = 3600

const getLatest = cache(async () => {
    await dbConnect()
    // lean convert to JavaScript
    const products = await ProductModel.find({}).sort({_id: -1}).limit(5).lean()
    return products as Product[]
})

const getFeatured = cache(async () => {
    await dbConnect()
    const products = await ProductModel.find({ isFeatured: true }).limit(2).lean()
    return products as Product[]
})

const getBySlug = cache(async (slug: string) => {
    await dbConnect()
    const product = await ProductModel.findOne({ slug }).lean()
    return product as Product
})

const productService = {
    getLatest, getFeatured, getBySlug
}

export default productService
