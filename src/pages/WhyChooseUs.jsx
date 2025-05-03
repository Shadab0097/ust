import { motion } from 'framer-motion';
import { StarIcon, ClockIcon, CurrencyDollarIcon, CpuChipIcon, PuzzlePieceIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const WhyChooseUs = () => {
    const reasons = [
        { icon: CurrencyDollarIcon, title: 'Cost efficient products' },
        { icon: StarIcon, title: 'Energy efficient range' },
        { icon: ClockIcon, title: 'Timely Delivery' },
        { icon: ShieldCheckIcon, title: 'Optimum quality' },
        { icon: CpuChipIcon, title: 'Advanced technology' },
        { icon: PuzzlePieceIcon, title: 'Customized solutions' },
    ];

    const clients = [
        "NTF India Pvt. Ltd Units I, II, III",
        "Bundy India Limited",
        "Auto Decor Private Limited",
        "Adhunik Cooling System Pvt. Ltd",
        "Inergy Automotive Systems India Pvt Ltd",
        "ENCO Engineers Combine Private Limited",
        "Aay Kay Technology",
        "Kuma Steel Tubes Pvt. Ltd",
        "Annu Industries Pvt. Ltd",
        "Casa Consulting Pvt. Ltd",
        "Modlama Exports",
        "Shivam Auto Tech Pvt. Ltd"
    ];

    return (
        <section className="relative overflow-hidden  bg-primary-900 py-20 px-4 sm:px-6 lg:px-8">
            {/* Retro Background Animation */}
            <div className="absolute inset-0 z-0 opacity-20">
                <div className="absolute inset-0 bg-[url('/svg/retro-grid.svg')] animate-pulse-slow"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/20 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold tracking-tight text-amber-400 sm:text-5xl font-vintage">
                        Why Choose Us?
                    </h2>
                    <p className="mt-4 text-xl text-amber-100 max-w-3xl mx-auto">
                        Renowned manufacturers & suppliers of Handling Trolleys, Industrial Hoods, Hopper Machines,
                        and more. Trusted for customized solutions using latest technology and premium materials.
                    </p>
                </motion.div>

                {/* Reasons Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-amber-400/20 hover:border-amber-400/40 transition-all"
                        >
                            <reason.icon className="h-12 w-12 text-amber-400 mb-4" />
                            <h3 className="text-2xl font-semibold text-amber-100 mb-2">{reason.title}</h3>
                            <p className="text-amber-100/80">Premium quality assurance with cutting-edge manufacturing processes</p>
                        </motion.div>
                    ))}
                </div>

                {/* Team & Clientele Section */}
                <div className="grid lg:grid-cols-2 gap-12 mb-20">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className="space-y-6"
                    >
                        <h3 className="text-3xl font-bold text-amber-400">Our Expert Team</h3>
                        <p className="text-amber-100 text-lg leading-relaxed">
                            Our skilled professionals manufacture premium Handling Trolleys, Industrial Hoods,
                            Hopper Machines, and JIB Cranes while adhering to strict quality standards.
                            Through continuous training and dedication, we consistently meet our clients'
                            diverse requirements while maintaining organizational excellence.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className="space-y-6"
                    >
                        <h3 className="text-3xl font-bold text-amber-400">Our Valued Clientele</h3>
                        <p className="text-amber-100 text-lg leading-relaxed">
                            Through client-centric practices and quality focus, we've become the preferred choice
                            for industry leaders. Our regular satisfaction surveys and future-focused approach
                            ensure we consistently deliver perfect solutions, resulting in exceptional
                            repeat business rates.
                        </p>
                    </motion.div>
                </div>

                {/* Client Marquee */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="relative overflow-hidden border-t border-b border-amber-400/20 py-8"
                >
                    <div className="flex animate-marquee whitespace-nowrap">
                        {[...clients, ...clients].map((client, index) => (
                            <div key={index} className="mx-8 text-2xl font-medium text-amber-100/80 hover:text-amber-400 transition-colors">
                                {client}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0.4; }
        }

        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        .animate-pulse-slow {
          animation: pulse-slow 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .font-vintage {
          font-family: 'Times New Roman', Times, serif;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
      `}</style>
        </section>
    );
};

export default WhyChooseUs;