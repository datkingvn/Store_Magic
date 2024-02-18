import { SessionProvider } from 'next-auth/react';
import { auth } from '@/libs/auth';
import ClientProviders from "@/components/ClientProviders";

export default async function Providers({ children }: { children: React.ReactNode }) {
    const session = await auth();

    return (
        <SessionProvider session={session}>
            <ClientProviders>
                {children}
            </ClientProviders>
        </SessionProvider>
    );
}