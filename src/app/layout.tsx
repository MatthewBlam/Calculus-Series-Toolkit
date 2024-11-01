import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Sidebar from "@/components/sidebar-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Calculus Series Tests",
    description:
        "All convergence and divergence tests for sequences and series",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Sidebar>{children}</Sidebar>
            </body>
        </html>
    );
}
