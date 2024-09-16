import type {Metadata} from 'next';
import localFont from 'next/font/local';
import './globals.css';
import React from 'react';
import {Providers} from '@/app/providers';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
});

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html>
        <head>
            <title>Beregi</title>
            <meta name="viewport" content="width=device-width intial-scale=1"/>
            <link rel="icon" href="./favicon.ico"/>
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>{children}</Providers>
        </body>
        </html>
    );
}
