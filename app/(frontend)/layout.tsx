export default function FrontendLayout({
                                           children,
                                       }: Readonly<{
    children: React.ReactNode;
}>) {
    return <main className="layout-w">{children}</main>;
}
