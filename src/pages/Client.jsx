import { useEffect, useRef } from 'react';
import anime from 'animejs';
import { useInView } from 'react-intersection-observer';

const clients = [
    { name: 'NTF India', industry: 'Automotive' },
    { name: 'Bundy India', industry: 'Manufacturing' },
    { name: 'Adhunik Cooling', industry: 'HVAC Systems' },
    { name: 'Inergy Automotive', industry: 'Auto Parts' },
    { name: 'ENCO Engineers', industry: 'Consulting' },
    { name: 'Global Partners', industry: '25+ Companies' },
];

export default function ClientsSection() {
    const sectionRef = useRef(null);
    const clientCardsRef = useRef([]);
    const { ref: inViewRef, inView } = useInView({ threshold: 0.2 });
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useEffect(() => {
        if (!inView) return;

        // Title animation
        anime({
            targets: titleRef.current,
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeOutExpo'
        });

        // Subtitle animation
        anime({
            targets: subtitleRef.current,
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 800,
            easing: 'easeOutExpo',
            delay: 300
        });

        // Client cards animation
        anime({
            targets: clientCardsRef.current,
            translateY: [100, 0],
            opacity: [0, 1],
            rotate: [15, 0],
            scale: [0.8, 1],
            duration: 1200,
            easing: 'easeOutElastic(1, .5)',
            delay: anime.stagger(100),
        });

        // Continuous floating animation
        anime({
            targets: clientCardsRef.current,
            translateY: -15,
            duration: 1500,
            easing: 'easeInOutQuad',
            direction: 'alternate',
            loop: true,
            delay: anime.stagger(100),
        });

        // Animated underline
        anime({
            targets: '.title-underline',
            scaleX: [0, 1],
            duration: 1200,
            easing: 'easeOutExpo',
            delay: 500
        });

    }, [inView]);

    return (
        <section
            ref={sectionRef}
            className="relative py-20 bg-primary-900 overflow-hidden"
        >
            {/* Animated background */}
            <div className="absolute inset-0 opacity-5 bg-gradient-to-r from-primary-600 to-primary-800 animate-texture" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Heading */}
                <div
                    ref={inViewRef}
                    className="max-w-2xl mx-auto text-center mb-16 overflow-hidden"
                >
                    <h2
                        ref={titleRef}
                        className="text-4xl md:text-5xl font-bold text-white mb-4 opacity-0"
                    >
                        Trusted Partners
                        <div className="title-underline w-24 h-1 bg-accent-500 mx-auto mt-4 transform origin-left scale-x-0" />
                    </h2>
                    <p
                        ref={subtitleRef}
                        className="text-xl text-primary-200 opacity-0"
                    >
                        Collaborating with industry innovators worldwide
                    </p>
                </div>

                {/* Clients Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                    {clients.map((client, index) => (
                        <div
                            key={client.name}
                            ref={el => clientCardsRef.current[index] = el}
                            className="client-card group relative p-6 w-full aspect-square flex flex-col items-center justify-center bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 opacity-0 transform transition-all duration-300 hover:border-accent-400 hover:bg-white/10 hover:shadow-xl"
                            onMouseEnter={(e) => {
                                anime({
                                    targets: e.currentTarget,
                                    scale: 1.05,
                                    duration: 300,
                                    easing: 'easeOutExpo'
                                });
                            }}
                            onMouseLeave={(e) => {
                                anime({
                                    targets: e.currentTarget,
                                    scale: 1,
                                    duration: 300,
                                    easing: 'easeOutExpo'
                                });
                            }}
                        >
                            <div className="mb-4">
                                <svg
                                    className="w-14 h-14 text-accent-400 opacity-90 group-hover:opacity-100 transition-opacity"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-semibold text-white text-center mb-1">
                                {client.name}
                            </h3>
                            <p className="text-sm text-accent-200 font-light text-center">
                                {client.industry}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Animated Scroll Indicator */}
                <div className="mt-16 flex justify-center">
                    <div className="cursor-pointer" onClick={() => window.scrollBy(0, window.innerHeight * 0.8)}>
                        <svg
                            className="w-8 h-8 text-white animate-pulse"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}