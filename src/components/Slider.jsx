import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

import gradients from "../constants/gradients";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export default function Slider() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="relative min-h-screen text-white overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-top"
                style={{
                    backgroundImage: "url(/images/slider-font.webp)",
                }}
            />

            <div
                className={`absolute inset-0 transition-all duration-1000 bg-gradient-to-br ${gradients[activeIndex]}`}
            />

            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(circle at 50% 25%, rgba(255,255,255,0.15), transparent 60%)",
                }}
            />

            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)
                    `,
                    backgroundSize: "56px 56px",
                    maskImage:
                        "radial-gradient(ellipse 65% 55% at 50% 20%, black 60%, transparent 100%)",
                    WebkitMaskImage:
                        "radial-gradient(ellipse 65% 55% at 50% 20%, black 60%, transparent 100%)",
                }}
            />

            <div className="absolute inset-0 bg-black/60" />

            <Swiper
                modules={[Pagination, Autoplay, EffectFade]}
                effect="fade"
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                loop
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                className="relative z-10 min-h-screen"
            >
                <SwiperSlide>
                    <SlideContent
                        isActive={activeIndex === 0}
                        title={
                            <>
                                Desarrollo web
                                <br />
                                ultra rápido para{" "}
                                <span className="text-accent">vender</span>
                            </>
                        }
                        subtitle="Webs modernas optimizadas para conversión, SEO y velocidad real en 2025."
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <SlideContent
                        isActive={activeIndex === 1}
                        title={
                            <>
                                Software a
                                <br />
                                medida para{" "}
                                <span className="text-secondary">escalar</span>
                            </>
                        }
                        subtitle="Aplicaciones robustas, seguras y listas para crecer con tu negocio."
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <SlideContent
                        isActive={activeIndex === 2}
                        title={
                            <>
                                SEO + Velocidad
                                <br />
                                fórmula{" "}
                                <span className="text-accent">LeoryenSoft</span>
                            </>
                        }
                        subtitle="Posicionamiento técnico y rendimiento extremo para destacar en Google."
                    />
                </SwiperSlide>
            </Swiper>
        </section>
    );
}

function SlideContent({ isActive, title, subtitle }) {
    return (
        <div className="min-h-[100dvh] flex items-center justify-center text-center px-6">
            <motion.div
                variants={fadeUp}
                initial="hidden"
                animate={isActive ? "show" : "hidden"}
                className="max-w-5xl mx-auto"
            >
                <span className="inline-block mb-6 text-xl tracking-widest text-white/70 uppercase">
                    Agencia digital · 2025
                </span>

                <h2
                    className="text-5xl sm:text-6xl md:text-[5.5rem] lg:text-[6.5rem] xl:text-[7.5rem] leading-[0.95] font-bold tracking-tight mb-8 bg-gradient-to-br from-white via-white to-white/50 text-transparent bg-clip-text"
                >
                    {title}
                </h2>

                <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-white/75 mb-12">
                    {subtitle}
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="/contacto"
                        className="
                            py-3 px-8
                            bg-accent text-primary
                            rounded-full
                            font-bold
                            hover:scale-105
                            transition
                            flex items-center gap-2
                            justify-center
                        "
                    >
                        🚀 Cotizar proyecto
                        <HiArrowNarrowRight />
                    </a>

                    <a
                        href="/portafolio"
                        className="
                            py-3 px-8
                            border-2 border-secondary
                            text-secondary
                            rounded-full
                            font-bold
                            hover:bg-secondary
                            hover:text-primary
                            transition
                            flex items-center gap-2
                            justify-center
                        "
                    >
                        Ver portafolio
                        <HiArrowNarrowRight />
                    </a>
                </div>
            </motion.div>
        </div>
    );
}