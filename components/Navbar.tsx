"use client";
import { useEffect, useState } from "react";
const navitems = [
    { id: "home", label: "Home"},
    { id: "about", label: "About"},
    { id: "projects", label: "Projects"},
    { id: "contact", label: "Contact"},
]



export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            const sections = navitems.map((item) =>
                document.getElementById(item.id)
            );

            const scrollPosition = window.scrollY + window.innerHeight / 2;
            for (const section of sections) {
                if (section) {
                    const rect = section.getBoundingClientRect();
                    const top = rect.top + window.scrollY;
                    const bottom = top + section.offsetHeight;

                    if (scrollPosition >= top && scrollPosition < bottom) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, []);

    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50"> 
            <div className="bg-nav-bg/40 backdrop-blur-xl border border-nav-border px-6 py-3 rounded-full flex items-center gap-6 shadow-lg">
                {navitems.map((item) => (
                    <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`transition font-medium ${
                            activeSection === item.id
                                ? "text-white"
                                : "text-foreground hover:text-white/70"
                            }`}
                    >
                        {item.label}
                    </a>
                ))}
            </div>
        </nav>
    )

}