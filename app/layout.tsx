import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css'

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Thitiwas Nupan Portfolio",
    description: "Software Developer",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}
