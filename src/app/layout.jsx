import "../styles/globals.css";
import {ServiceProvider} from "@/context/context";

export const metadata = {
    title: "SWYPD MEDIA - Digital Experiences That Grow Your Business",
    description: "From design to development and marketing, our team helps you turn ideas into powerful digital solutions.",
    robots: "index, follow",
    icons: {
        icon: "/favicon.ico",
    },
    openGraph: {
        url: "https://swypd-next.vercel.app",
        type: "website",
        title: "SWYPD MEDIA - Digital Experiences That Grow Your Business",
        description: "From design to development and marketing, our team helps you turn ideas into powerful digital solutions.",
        images: ["https:/swypd-next.vercel.app/ArtBoard3.jpg"],
    },
    twitter: {
        card: "summary_large_image",
        title: "SWYPD MEDIA - Digital Experiences That Grow Your Business",
        description: "From design to development and marketing, our team helps you turn ideas into powerful digital solutions.",
        images: ["https:/swypd-next.vercel.app/ArtBoard3.jpg"],
    },
    alternates: {
        canonical: "https://swypd-next.vercel.app",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <ServiceProvider>
                <body>{children}</body>
            </ServiceProvider>
        </html>
    );
}
