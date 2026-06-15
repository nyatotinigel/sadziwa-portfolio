import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-dark)]/40 via-transparent to-[var(--color-darker)] z-10"></div>
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="https://res.cloudinary.com/ddoqatojj/video/upload/v1781539571/Simon_Sadziwa_hero_pocpcc.mp4" type="video/mp4" />
        </video>
      </div>
      
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          Precision <span className="text-[var(--color-primary)] drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]">Power</span>,<br/> Flawless Execution.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
        >
          Premium industrial & luxury residential electrical solutions in Letlhakane, Botswana.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#portfolio" className="px-8 py-4 bg-transparent border border-[var(--color-primary)] text-[var(--color-primary)] rounded-full font-bold hover:bg-[var(--color-primary)] hover:text-black transition-all shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_25px_rgba(0,240,255,0.5)]">
            Explore Work
          </a>
          <a href="#contact" className="px-8 py-4 bg-[var(--color-neon-safety)] text-black rounded-full font-bold hover:bg-yellow-400 transition-all shadow-[0_0_15px_rgba(255,187,0,0.2)] hover:shadow-[0_0_25px_rgba(255,187,0,0.5)]">
            Request Quote
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex gap-4 px-4 overflow-x-auto pb-4 justify-center z-20 snap-x">
        <div className="w-64 h-36 rounded-lg overflow-hidden border-2 border-white/10 hover:border-[var(--color-primary)] transition-colors shrink-0 snap-center relative group">
          <img src="https://res.cloudinary.com/ddoqatojj/image/upload/v1781539563/siting_room_light_vnutyw.jpg" alt="Luxury Lighting" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="w-64 h-36 rounded-lg overflow-hidden border-2 border-white/10 hover:border-[var(--color-primary)] transition-colors shrink-0 snap-center relative group">
          <img src="https://res.cloudinary.com/ddoqatojj/image/upload/v1781539563/ring_chandaler_s69cvr.jpg" alt="Ring Chandelier" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
      </div>
    </section>
  );
}

