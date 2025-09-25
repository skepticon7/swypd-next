// app/page.jsx
import { Hero, How, Navbar, Pricing, Projects, Values, CTA, Footer, FAQ } from "../components";
import { Toaster } from "react-hot-toast";

export default function HomePage() {
    return (
        <div className="relative min-h-screen overflow-hidden z-0 bg-secondary-black">
            <Navbar />
            <Hero />
            <Values />
            <Projects />
            <How />
            <Pricing />
            <FAQ />
            <div className="bg-primary-red">
                <CTA />
            </div>
            <Footer />
            <Toaster toastOptions={{ style: { background: "#D9D9D9" } }} />
        </div>
    );
}
