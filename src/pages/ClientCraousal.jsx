import { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

const ClientsSection = () => {
    const carouselRef = useRef(null);
    const animationRef = useRef(null);
    const clients = [
        "NTF India",
        "Bundy India",
        "Adhunik Cooling",
        "Inergy Automotive",
        "ENCO Engineers"
    ];

    useEffect(() => {
        const setupAnimation = () => {
            const screenWidth = window.innerWidth;
            const baseDuration = 20000;
            const duration = screenWidth < 768 ? baseDuration * 0.75 : baseDuration;

            animationRef.current = anime({
                targets: carouselRef.current,
                translateX: ['0%', '-50%'],
                duration: duration,
                easing: 'linear',
                loop: true
            });
        };

        setupAnimation();
        window.addEventListener('resize', setupAnimation);

        return () => {
            window.removeEventListener('resize', setupAnimation);
            if (animationRef.current) animationRef.current.pause();
        };
    }, []);

    const handleHover = (shouldPause) => {
        if (animationRef.current) {
            shouldPause ? animationRef.current.pause() : animationRef.current.play();
        }
    };

    return (
        <section className="section bg-primary-700 text-white py-16">
            <div className="container mx-auto px-4">
                <SectionHeading
                    title="Our Clients"
                    subtitle="Trusted by industry leaders across India and beyond"
                    centered
                    light
                />

                <div
                    className="overflow-x-hidden py-8 relative"
                    onMouseEnter={() => handleHover(true)}
                    onMouseLeave={() => handleHover(false)}
                >
                    <div
                        ref={carouselRef}
                        className="flex w-[200%] gap-8 items-center"
                    >
                        {[...clients, ...clients].map((client, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 text-xl md:text-2xl font-bold text-white opacity-80
                          w-[calc(16.666%-2rem)] px-4 text-center transition-opacity
                          hover:opacity-100 hover:cursor-pointer"
                            >
                                {client}
                            </div>
                        ))}
                    </div>

                    {/* Gradient overlays */}
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-primary-700 to-transparent" />
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-primary-700 to-transparent" />
                </div>
            </div>
        </section>
    );
};

// Example SectionHeading component (you might need to adjust this based on your actual implementation)
const SectionHeading = ({ title, subtitle, centered, light }) => (
    <div className={`${centered ? 'text-center' : ''} mb-12`}>
        <h2 className={`text-3xl md:text-4xl font-bold ${light ? 'text-white' : 'text-gray-900'} mb-4`}>
            {title}
        </h2>
        <p className={`text-lg ${light ? 'text-white/80' : 'text-gray-600'}`}>
            {subtitle}
        </p>
    </div>
);

export default ClientsSection;