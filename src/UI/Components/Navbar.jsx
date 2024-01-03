import React, { useEffect, useState } from 'react'
import Logo from '../assets/img/Logo.png'

export default function () {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    // set toggle Menu

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        useEffect(() => {
            const handleScroll = () => {
                if (window.scrollY > 100) {
                    setIsSticky(true);
                }
                else {
                    setIsSticky(false);
                }
            };
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.addEventListener('scroll', handleScroll);
            }
        });
    }

    const navItems = [
        { link: "Home", path: "home" },
        { link: "Service", path: "service" },
        { link: "About", path: "about" },
        { link: "Product", path: "product" },
        { link: "Testimonial", path: "testimonial" },
        { link: "FAQ", path: "faq" }
    ]

    return (
        <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
            <nav>
                <div>
                    asd
                    <a href=""><img src={Logo} alt="" /></a>
                </div>
            </nav>
        </header>
    )
}