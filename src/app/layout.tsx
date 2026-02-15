export default async function RootLayout({
    children,
}: LayoutProps<"/">) {
    return children
}

export const metadata = {
    metadataBase: new URL('https://wiki.nik51.ru')
}