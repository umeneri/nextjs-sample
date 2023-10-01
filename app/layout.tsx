import './globals.css'
import {Inter} from 'next/font/google'

import {ReactNode} from "react";
import Header from "@/header";

interface Props {
    children: ReactNode;
}

const inter = Inter({subsets: ['latin']})

export default function RootLayout({children}: Props) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <main>
            <Header/>
            {children}
            <footer>
                <p>footer</p>
                <hr/>
            </footer>
        </main>
        </body>
        </html>
    )
}
