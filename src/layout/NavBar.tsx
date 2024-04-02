"use client"
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes"
import { IconGithub, IconLinkDin, IconMail, IconMoonStars, IconPhoneCall, IconSun, IconWhatsapp } from "@/lib/Icons";
import React from "react";
import Link from "next/link";
const NavBar = () => {
    const { setTheme } = useTheme()
    const handleChngeTheme = () => {
        const currentTheme = localStorage.getItem('theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }
    return (
        <nav className="p-2 fixed top-0 backdrop-blur-sm w-full flex justify-between items-center  pl-[60px]">
            <div className="flex space-x-4 pl-2">
                <Link href="https://wa.me/918925191383" target="_blank" >
                    <IconWhatsapp />
                </Link>
                <Link href="https://github.com/Raj-232" target="_blank" >
                    <IconGithub />
                </Link>
                <Link href="mailto:aaraj232@gmail.com" >
                    <IconMail />
                </Link>
                <Link href="tel:+918925191383" >
                    <IconPhoneCall />
                </Link>
                <Link href="https://www.linkedin.com/in/anandharaj-Link-821029229/" target="_blank" >
                    <IconLinkDin />
                </Link>
            </div>
            <Button onClick={handleChngeTheme} variant="outline">
                <IconSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <IconMoonStars className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
            </Button>
        </nav>
    );
};

export default NavBar;
