import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import heroSpace from '@/assets/hero-space.jpg';
import arjunPhoto from '@/assets/arjun-photo.jpeg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroSpace} 
          alt="" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-primary/50 shadow-lg shadow-primary/20">
                <img 
                  src={arjunPhoto} 
                  alt="Arjun MM" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
            </div>
          </motion.div>
          {/* Case file intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-muted-foreground uppercase">
              <span className="w-8 h-px bg-primary" />
              Subject File: Data Analyst
              <span className="w-8 h-px bg-primary" />
            </span>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            <span className="text-foreground">ARJUN</span>
            <span className="text-primary"> MM</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Transforming raw data into strategic insights. Specializing in 
            <span className="text-foreground"> predictive analytics</span>, 
            <span className="text-foreground"> machine learning</span>, and 
            <span className="text-foreground"> data visualization</span>.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12"
          >
            {[
              { value: '4+', label: 'Case Studies' },
              { value: '0.93', label: 'Best R² Score' },
              { value: '5+', label: 'Technologies' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="group relative px-8 py-3 bg-primary text-primary-foreground font-medium rounded-lg overflow-hidden transition-all hover:shadow-lg animate-pulse-glow"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Case Files
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-border text-foreground font-medium rounded-lg hover:border-primary hover:text-primary transition-all"
            >
              Initiate Contact
            </a>
            <a
              href="/ArjunsResume.pdf"
              download="ArjunsResume.pdf"
              className="px-8 py-3 border border-primary/50 text-primary font-medium rounded-lg hover:bg-primary/10 transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-px h-8 bg-gradient-to-b from-primary to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
