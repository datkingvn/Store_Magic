import data from '@/libs/data'
import dbConnect from '@/libs/dbConnect'
import ProductModel from '@/libs/models/ProductModel'
import UserModel from '@/libs/models/UserModel'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
  const { users, products } = data
  await dbConnect()
  await UserModel.deleteMany()
  await UserModel.insertMany(users)

  await ProductModel.deleteMany()
  await ProductModel.insertMany(products)

  return NextResponse.json({
    message: 'seeded successfully',
    users,
    products,
  })
}
