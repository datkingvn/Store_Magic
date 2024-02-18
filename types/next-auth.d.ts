import NextAuth, { DefaultSession, DefaultUser } from 'next-auth'

// Mở rộng kiểu Session trong next-auth
declare module 'next-auth' {
    // Mở rộng kiểu Session
    interface Session {
        // Thêm các thuộc tính tùy chỉnh vào user
        user: {
            _id?: string | null
            isAdmin?: boolean
        } & DefaultSession['user']
    }

    // Mở rộng kiểu User trong next-auth
    export interface User extends DefaultUser {
        // Thêm các thuộc tính tùy chỉnh
        _id?: string
        isAdmin?: boolean
    }
}