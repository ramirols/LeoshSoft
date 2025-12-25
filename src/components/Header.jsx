import React, { useState, useEffect, useRef } from "react";
import {
    FiMenu,
    FiX,
    FiGrid,
    FiBriefcase,
    FiBookOpen,
    FiMail
} from "react-icons/fi";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const panelRef = useRef(null);

    const navLinks = [
        { name: "Servicios", href: "/servicios", icon: <FiGrid /> },
        { name: "Portafolio", href: "/portafolio", icon: <FiBriefcase /> },
        { name: "Blog", href: "/blog", icon: <FiBookOpen /> },
    ];

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isOpen && panelRef.current && !panelRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <header
            className={`
                fixed top-0 left-0 w-full z-[100]
                transition-all duration-500
                ${scrolled
                    ? "bg-black/60 backdrop-blur-xs"
                    : "bg-transparent"}
            `}
        >
            <div className="max-w-6xl mx-auto px-6 py-3 flex items-center">
                <a
                    href="/"
                    className="text-3xl font-black tracking-wider flex-shrink-0"
                >
                    <span className="text-secondary">Leoryen</span>
                    <span className="text-white">Soft</span>
                </a>

                <nav className="hidden md:flex flex-1 justify-center items-center gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="
                                flex items-center gap-2
                                text-white/90 text-lg font-medium
                                hover:text-secondary
                                transition-all
                            "
                        >
                            <span className="text-xl">{link.icon}</span>
                            {link.name}
                        </a>
                    ))}
                </nav>

                <div className="hidden md:flex">
                    <a
                        href="/contacto"
                        className="
                            flex items-center gap-2
                            py-2.5 px-6
                            text-lg font-bold
                            rounded-full
                            bg-accent text-primary
                            hover:bg-secondary hover:text-white
                            transition-all
                        "
                    >
                        <FiMail className="text-xl" />
                        Contacto
                    </a>
                </div>

                <button
                    className="md:hidden ml-auto text-white"
                    onClick={() => setIsOpen(true)}
                >
                    <FiMenu className="w-8 h-8" />
                </button>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div className="fixed inset-0 h-[100dvh] bg-black/30 backdrop-blur-sm z-[110]" />
            )}

            {/* Panel móvil */}
            <div
                ref={panelRef}
                className={`
                    fixed top-0 right-0
                    h-[100dvh] w-[75%]
                    bg-black/80 backdrop-blur-sm
                    z-[120]
                    p-10 pt-14
                    flex flex-col gap-10
                    transition-transform duration-300
                    ${isOpen ? "translate-x-0" : "translate-x-full"}
                    md:hidden
                `}
            >
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-6 right-6 text-white"
                >
                    <FiX className="w-8 h-8" />
                </button>

                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="
                            flex items-center gap-4
                            text-white text-3xl font-semibold
                            hover:text-secondary
                            transition
                        "
                    >
                        <span className="text-3xl">{link.icon}</span>
                        {link.name}
                    </a>
                ))}

                <a
                    href="/contacto"
                    onClick={() => setIsOpen(false)}
                    className="
                        mt-10
                        flex items-center justify-center gap-3
                        py-4 px-8
                        text-xl font-bold
                        rounded-full
                        bg-accent text-primary
                        hover:bg-secondary hover:text-white
                        transition
                    "
                >
                    <FiMail className="text-2xl" />
                    Contacto
                </a>
            </div>
        </header>
    );
};

export default Header;