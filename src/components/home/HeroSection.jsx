import { useEffect, useRef, useCallback, Suspense } from 'react';
import { Link } from 'react-router-dom';
import anime from 'animejs';
import gsap from 'gsap';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import Button from '../ui/Button';
import ustVideo from '../video/ust-video.mp4';
import '../home/hero.css'


class FireParticle {
  constructor(ctx, width, height) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.x = Math.random() * width;
    this.y = height - 50 + Math.random() * 100;
    this.radius = 1 + Math.random() * 4;
    this.baseAlpha = 0.7 + Math.random() * 0.3;
    this.alpha = this.baseAlpha;
    this.velocity = {
      x: -1 + Math.random() * 2,
      y: -4 - Math.random() * 3
    };
    this.color = `hsla(${15 + Math.random() * 10}, 100%, 60%, ${this.alpha})`;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = this.color;
    this.ctx.globalAlpha = this.alpha;
    this.ctx.fill();
  }

  update() {
    this.x += this.velocity.x + Math.sin(Date.now() * 0.002) * 0.5;
    this.y += this.velocity.y;
    this.alpha = this.baseAlpha * Math.min(this.y / this.height, 1);
    this.radius *= 0.98;
    this.draw();
  }
}

function Steel3D() {
  return (
    <mesh rotation={[0.4, 0.8, 0]} position={[0, 0, 0]}>
      <boxGeometry args={[2, 0.2, 0.2]} />
      <meshStandardMaterial metalness={0.8} roughness={0.2} color="#cccccc" />
    </mesh>
  );
}

export default function HeroSection() {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const videoRef = useRef(null);
  const fireCanvasRef = useRef(null);
  const particles = useRef([]);
  const animationFrameId = useRef(null);

  // Fire Animation Setup
  const initFireCanvas = useCallback(() => {
    const canvas = fireCanvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.scale(dpr, dpr);
  }, []);

  const createParticles = useCallback(() => {
    particles.current = [];
    const count = Math.floor(window.innerWidth / 50);

    for (let i = 0; i < count; i++) {
      particles.current.push(
        new FireParticle(
          fireCanvasRef.current.getContext('2d'),
          fireCanvasRef.current.width,
          fireCanvasRef.current.height
        )
      );
    }
  }, []);

  const animateFire = useCallback(() => {
    const ctx = fireCanvasRef.current?.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    particles.current.forEach((particle, index) => {
      if (particle.y < -100 || particle.alpha <= 0) {
        particles.current.splice(index, 1);
      } else {
        particle.update();
      }
    });

    if (particles.current.length < Math.floor(window.innerWidth / 50)) {
      particles.current.push(
        new FireParticle(
          ctx,
          fireCanvasRef.current.width,
          fireCanvasRef.current.height
        )
      );
    }

    animationFrameId.current = requestAnimationFrame(animateFire);
  }, []);

  // Main useEffect
  useEffect(() => {
    // Video autoplay handling
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay blocked, adding click listener');
        document.addEventListener('click', () => videoRef.current?.play(), { once: true });
      });
    }

    // Fire animation setup
    initFireCanvas();
    createParticles();
    animateFire();

    // Scroll effect
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      gsap.to(heroRef.current, {
        backgroundPositionY: `${scrollPos * 0.15}px`,
        ease: 'none',
        duration: 0.1
      });
    };

    // Text animations
    anime.timeline({ easing: 'easeOutExpo' })
      .add({
        targets: contentRef.current.querySelector('.hero-heading'),
        translateY: [80, 0],
        opacity: [0, 1],
        duration: 1200
      })
      .add({
        targets: contentRef.current.querySelector('.hero-subheading'),
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 800
      }, '-=800')
      .add({
        targets: contentRef.current.querySelectorAll('.hero-cta button'),
        translateY: [30, 0],
        opacity: [0, 1],
        duration: 600,
        delay: anime.stagger(100)
      }, '-=400');

    // Event listeners
    window.addEventListener('scroll', handleScroll);
    const resizeHandler = () => {
      cancelAnimationFrame(animationFrameId.current);
      initFireCanvas();
      createParticles();
      animateFire();
    };
    window.addEventListener('resize', resizeHandler);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', resizeHandler);
      cancelAnimationFrame(animationFrameId.current);
      document.removeEventListener('click', () => videoRef.current?.play());
    };
  }, [initFireCanvas, createParticles, animateFire]);

  return (
    <div ref={heroRef} className="relative h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={ustVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 3D Steel Object */}
      {/* <Suspense fallback={null}>
        <Canvas className="absolute inset-0 z-10" camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.7} />
          <pointLight position={[10, 10, 10]} />
          <Steel3D />
          <OrbitControls enableZoom={false} />
          <Environment
            files="https://unpkg.com/@pmndrs/assets@latest/hdri/kiara_1_dawn_1k.hdr"
            background
          />
        </Canvas>
      </Suspense> */}

      {/* Fire Canvas */}
      <canvas
        ref={fireCanvasRef}
        className="absolute inset-0 w-full h-full z-20 pointer-events-none"
        style={{ mixBlendMode: 'plus-lighter' }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90 z-30" />

      {/* Content Section */}
      <div ref={contentRef} className="container-custom text-white relative z-40 p-4">
        <h1 className="hero-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl">
          High-Strength Industrial Solutions Since 1970
        </h1>
        <p className="hero-subheading text-xl md:text-2xl mb-8 max-w-2xl text-gray-200">
          Trusted manufacturers of premium quality handling equipment, storage solutions, and industrial machinery.
        </p>
        <div className="hero-cta flex flex-wrap gap-4">
          <Button
            to="/products"
            variant="accent"
            size="lg"
            className="font-semibold hover:scale-105 transition-transform"
          >
            Explore Products
          </Button>
          <Button
            to="/contact"
            variant="outline"
            size="lg"
            className="text-white border-white/80 hover:border-white hover:bg-white/10 backdrop-blur-sm"
          >
            Get in Touch
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-40">
        <div className="animate-bounce w-10 h-16 border-2 border-white/50 rounded-full flex items-center justify-center">
          <svg
            className="w-6 h-6 text-white animate-pulse"
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
  );
}