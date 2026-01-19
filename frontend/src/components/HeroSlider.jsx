import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const HeroSlider = () => {
    // Har image ke liye alag heading aur description
    const slides = [
        {
            url: "/images/slider/Gemini_Generated_Image_24fsgg24fsgg24fs.png",
            title: "Premium ACM Cladding",
            desc: "High-quality aluminum composite sheets for modern exteriors."
        },
        {
            url: "/images/slider/Gemini_Generated_Image_ifhf22ifhf22ifhf.png",
            title: "PSO Station Branding",
            desc: "Standardized corporate look with durable petrol pump finishes."
        },
        {
            url: "/images/slider/Gemini_Generated_Image_kcl35kcl35kcl35k.png",
            title: "Bank Alfalah Projects",
            desc: "Elegant and professional facade solutions for financial sectors."
        },
        {
            url: "/images/slider/Gemini_Generated_Image_p19n5pp19n5pp19n.png",
            title: "Architectural Excellence",
            desc: "Precision engineering in every panel installation."
        },
        {
            url: "/images/slider/Gemini_Generated_Image_tnzziutnzziutnzz.png",
            title: "Corporate Building Design",
            desc: "Transforming simple buildings into modern landmarks."
        }
    ];

    return (
        <div className="w-full h-[450px] md:h-[600px] relative overflow-hidden group">
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                effect={'fade'}
                speed={1200}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true, dynamicBullets: true }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                className="mySwiper w-full h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full">
                            {/* Cinematic Slow Zoom */}
                            <img
                                src={slide.url}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                                style={{ animation: 'slowZoom 15s infinite alternate linear' }}
                            />
                            
                            {/* Dark Professional Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>

                            {/* Content Text - Har slide ka apna text */}
                            <div className="absolute inset-0 flex flex-col items-start justify-center text-white z-10 container mx-auto px-10 md:px-24">
                                <div className="overflow-hidden">
                                    <p className="text-blue-400 font-bold tracking-[4px] uppercase text-xs md:text-sm mb-2 opacity-0 animate-[fadeInUp_0.5s_ease_forwards]">
                                        SA Construction & Cladding
                                    </p>
                                    <h2 className="text-3xl md:text-6xl font-black mb-4 leading-tight opacity-0 animate-[fadeInUp_0.8s_ease_0.2s_forwards]">
                                        {slide.title}
                                    </h2>
                                    <p className="text-sm md:text-xl font-medium text-gray-300 max-w-lg mb-8 border-l-2 border-blue-500 pl-4 opacity-0 animate-[fadeInUp_1s_ease_0.4s_forwards]">
                                        {slide.desc}
                                    </p>
                                    <div className="opacity-0 animate-[fadeInUp_1.2s_ease_0.6s_forwards]">
                                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-sm font-bold text-xs tracking-widest transition-all">
                                            EXPLORE NOW
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom CSS for Small Arrows and Zoom */}
            <style jsx global>{`
                @keyframes slowZoom {
                    from { transform: scale(1); }
                    to { transform: scale(1.1); }
                }
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                /* Arrows ko bilkul chota aur perfect karne ke liye */
                .swiper-button-next, .swiper-button-prev {
                    color: white !important;
                    width: 35px !important; /* Size chota kiya */
                    height: 35px !important;
                    background: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 4px; /* Square with slight roundness */
                    backdrop-filter: blur(8px);
                    transition: all 0.3s ease;
                }
                .swiper-button-next:hover, .swiper-button-prev:hover {
                    background: #2563eb;
                    border-color: #2563eb;
                }
                .swiper-button-next:after, .swiper-button-prev:after {
                    font-size: 14px !important; /* Icon size chota kiya */
                    font-weight: bold;
                }
                
                /* Pagination styling */
                .swiper-pagination-bullet-active {
                    background: #2563eb !important;
                    width: 25px !important;
                    border-radius: 4px !important;
                }
            `}</style>
        </div>
    );
};

export default HeroSlider;