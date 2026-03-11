"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./Reveal";

const technologies = [
    {
        name: "AWS",
        logo: (
            <svg viewBox="0 0 80 48" className="h-8 w-auto">
                <path d="M22.8 30.4c-2.3 1.7-5.6 2.6-8.5 2.6-4 0-7.6-1.5-10.3-4l-.4-.3 1.6-1.7.3.3c2.3 2 5.2 3.2 8.8 3.2 2.3 0 4.9-.5 7.3-1.5l.4-.2.8 1.4-.3.2z" fill="#F90"/>
                <path d="M24.6 27.9c-.5.7-1.6.9-2.9.9h-1.1c.1-.8.1-1.7.1-2.4v-8.8c0-3.5-2.3-5.3-6.3-5.3-1.7 0-3.5.2-5.2.7l-.4.1.2 1.7h.2c1.6-.4 3.2-.6 4.8-.6 3 0 4.4 1.2 4.4 3.8v.7c-3.4 0-7.8.8-7.8 4.8 0 3 2.2 4.7 5 4.7 2.2 0 3.5-.8 4.6-2.2.3.5.9 1.5 1.3 2l.3.3 1.5-1.1-.3-.4-.4-.9zm-4.8-.3c-.9 1.3-2.2 2-3.6 2-1.8 0-3.1-1-3.1-2.8 0-2.7 3.1-3.4 6.3-3.5l.4.1v4.2z" fill="#232F3E"/>
                <path d="M35.5 12.7l-2.1.5v4.3h-3v1.9h3v7.5c0 3.1 1.1 4.8 4.4 4.8 1 0 2-.2 2.9-.5l.3-.1v-1.8l-.4.1c-.7.3-1.5.4-2.3.4-2 0-2.7-1.2-2.7-3.2v-7.2h5v-1.9h-5l-.1-4.8z" fill="#232F3E"/>
                <path d="M50.8 16c-1.4-.4-2.5-.5-3.5-.5-3.7 0-6.5 2.4-6.5 7.3 0 5.1 2.8 7.4 6.2 7.4 1.3 0 2.7-.2 4-.7l.3-.1v-1.8l-.4.2c-1.2.4-2.5.7-3.7.7-2.6 0-4.2-1.8-4.2-5.5 0-3.9 1.7-5.6 4.3-5.6.7 0 1.4.1 2.2.3l1.5.5.3.1v-2l-.3-.2-.2-.1z" fill="#232F3E"/>
            </svg>
        ),
    },
    {
        name: "Google Cloud",
        logo: (
            <svg viewBox="0 0 100 20" className="h-5 w-auto">
                <path d="M13.2 5.6l1.4-1.4.1-.6C11.1.8 6.2 1.2 3.5 4.7 2.3 6.3 1.7 8.3 1.8 10.2l.5-.1 2.8-.5.2-.2c1.3-1.8 3.3-2.8 5.1-2.8.8 0 1.5.2 2.2.5l.6.5z" fill="#EA4335"/>
                <path d="M17.7 8.1c-.4-1.6-1.3-3-2.6-4L13.2 5.6c1.1.8 1.9 2 2.2 3.4.1.5.2 1 .2 1.5 0 .8-.2 1.6-.5 2.3l-3.7-2.9h-.1L9.2 8.4l3.9 3.1-.2.1c-.7.6-1.6.9-2.6.9-1.5 0-2.9-.8-3.6-2.1l-2.9 1.2-.5.2c1.2 2.5 3.8 4 6.6 4 1.5 0 2.9-.4 4.2-1.3 1.4-1 2.3-2.4 2.8-4 .3-.8.4-1.7.4-2.5 0-.6-.1-1.3-.2-1.9l-.4.1z" fill="#4285F4"/>
                <path d="M6.7 14.4c-1.6-.8-2.8-2.2-3.3-4-.3-1-.3-2 0-3l-3.3-1c-.4 1.2-.5 2.5-.3 3.8.5 3 2.5 5.5 5.2 6.7l1.7-2.5z" fill="#34A853"/>
                <path d="M6.7 5.6c1.6-.8 3.5-1 5.2-.3l1.9-1.9C11.3 1.8 8.5 1.4 6 2.4 4.7 2.9 3.6 3.8 2.9 4.8l3.3 1 .5-.2z" fill="#FBBC05"/>
                <text x="23" y="15" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#5F6368">Cloud</text>
            </svg>
        ),
    },
    {
        name: "Python",
        logo: (
            <svg viewBox="0 0 80 24" className="h-6 w-auto">
                <path d="M11.7 0C5.7 0 6.1 2.6 6.1 2.6l.0 2.7h5.7v.8H3.5S0 5.5 0 11.6s3.1 5.9 3.1 5.9h1.8v-2.8s-.1-3.1 3-3.1h5.2s3 0 3-2.9V3s.5-3-4.4-3zm-2.9 1.7c.5 0 .9.4.9.9s-.4.9-.9.9-.9-.4-.9-.9.4-.9.9-.9z" fill="#3776AB"/>
                <path d="M12.3 24c6 0 5.6-2.6 5.6-2.6v-2.7H12.2v-.8h8.3s3.5.6 3.5-5.5-3.1-5.9-3.1-5.9h-1.8v2.8s.1 3.1-3 3.1h-5.2s-3 0-3 2.9v5.7s-.5 3 4.4 3zm2.9-1.7c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z" fill="#FFD43B"/>
                <text x="28" y="16" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#3776AB">Python</text>
            </svg>
        ),
    },
    {
        name: "TensorFlow",
        logo: (
            <svg viewBox="0 0 90 20" className="h-5 w-auto">
                <path d="M3 4l7-4v4L7 5.6V16l-4 2.3V4z" fill="#FF6F00"/>
                <path d="M10 0l7 4v3.7l-4-2.3v4.3l-3 1.7V0z" fill="#FF6F00"/>
                <text x="22" y="14" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#FF6F00">TensorFlow</text>
            </svg>
        ),
    },
    {
        name: "Docker",
        logo: (
            <svg viewBox="0 0 80 20" className="h-5 w-auto">
                <path d="M13.5 5.4h2.5v2.3h1.3c.6 0 1.2-.1 1.7-.3.3-.1.6-.3.9-.5-.4-.5-.6-1.1-.6-1.8 0-.6.2-1.1.5-1.5l.2-.3.3.2c.7.5 1.2 1.2 1.4 2 .7-.2 1.5-.2 2.1.1l.3.1-.1.3c-.4 1.2-1.5 1.9-3 1.9H13.5c-.3 2.2-1.5 4.1-3.3 5.3-1 .7-2.3 1.1-3.5 1.2-.9.1-1.8 0-2.7-.2-1.4-.4-2.6-1.1-3.5-2.2l-.2-.3.3-.2c.8-.5 1.7-.8 2.6-.9 1-.1 2 .1 2.9.5l.2.1-.2.1c-.9.6-2 .9-3.1.8h-.4c.8.7 1.7 1.2 2.8 1.4.8.2 1.7.2 2.5.1 1-.1 2-.5 2.8-1.1 1.5-1 2.5-2.6 2.8-4.6z" fill="#2496ED"/>
                <rect x="4" y="5.4" width="2.2" height="2.1" fill="#2496ED"/>
                <rect x="6.8" y="5.4" width="2.2" height="2.1" fill="#2496ED"/>
                <rect x="9.6" y="5.4" width="2.2" height="2.1" fill="#2496ED"/>
                <rect x="6.8" y="3" width="2.2" height="2.1" fill="#2496ED"/>
                <rect x="9.6" y="3" width="2.2" height="2.1" fill="#2496ED"/>
                <rect x="9.6" y=".6" width="2.2" height="2.1" fill="#2496ED"/>
                <rect x="12.4" y="5.4" width="2.2" height="2.1" fill="#2496ED"/>
                <text x="26" y="14" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#2496ED">Docker</text>
            </svg>
        ),
    },
    {
        name: "PostgreSQL",
        logo: (
            <svg viewBox="0 0 100 20" className="h-5 w-auto">
                <path d="M14 2C10.7 2 8 4.7 8 8s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" fill="#336791"/>
                <text x="24" y="14" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#336791">PostgreSQL</text>
            </svg>
        ),
    },
    {
        name: "PyTorch",
        logo: (
            <svg viewBox="0 0 80 20" className="h-5 w-auto">
                <path d="M10 2L5 7.5l.7.7L7 6.9v8.6c0 1.4 1.1 2.5 2.5 2.5h1c1.4 0 2.5-1.1 2.5-2.5V3.8L10 2zm2 13.5c0 .7-.5 1.2-1.2 1.2h-.6c-.7 0-1.2-.5-1.2-1.2V6l1.5-1.5L12 6v9.5z" fill="#EE4C2C"/>
                <circle cx="11.5" cy="3" r="1" fill="#EE4C2C"/>
                <text x="18" y="14" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#EE4C2C">PyTorch</text>
            </svg>
        ),
    },
    {
        name: "Next.js",
        logo: (
            <svg viewBox="0 0 80 20" className="h-5 w-auto">
                <circle cx="10" cy="10" r="9" fill="none" stroke="#000" strokeWidth="1.5"/>
                <path d="M7 14V6l9 11" stroke="#000" strokeWidth="1.5" fill="none"/>
                <circle cx="14" cy="7" r="1.2" fill="#000"/>
                <text x="24" y="14" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#000">Next.js</text>
            </svg>
        ),
    },
];

export function TechLogos() {
    return (
        <FadeIn delay={0.2} direction="up" fullWidth>
            <div className="w-full flex flex-wrap justify-center items-center gap-8 md:gap-12 mt-4">
                {technologies.map((tech) => (
                    <motion.div
                        key={tech.name}
                        whileHover={{ scale: 1.05 }}
                        className="opacity-60 hover:opacity-100 transition-opacity cursor-default"
                        title={tech.name}
                    >
                        {tech.logo}
                    </motion.div>
                ))}
            </div>
        </FadeIn>
    );
}
