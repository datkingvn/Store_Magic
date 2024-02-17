import { Metadata } from 'next'
import Form from './Form'

export const metadata: Metadata = {
    title: 'Sign In - DPay.vn',
}

export default async function SignIn() {
    return <Form />
}