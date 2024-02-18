import { Metadata } from 'next'
import Form from './Form'

export const metadata: Metadata = {
    title: 'Sign Up - DPay.vn',
}

export default async function SignIn() {
    return <Form />
}