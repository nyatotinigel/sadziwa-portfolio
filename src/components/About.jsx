import { motion } from 'framer-motion';
import { Award, Zap, ShieldCheck, FileText } from 'lucide-react';
import { useState } from 'react';

export default function About() {
  const [showCert, setShowCert] = useState(false);

  return (
    <section id="about" className="py-24 bg-[var(--color-dark)] relative border-t border-[var(--color-primary)]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-sm font-bold text-[var(--color-primary)] uppercase tracking-widest">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Simon Sadziwa <br/>
              <span className="text-gray-400 text-2xl md:text-3xl">Lead Electrician</span>
            </h3>
            <p className="text-gray-300 text-lg">
              With 15 years of dedicated experience across industrial and residential sectors, including working at 6 different companies before becoming independent, I ensure that every circuit is safe, every panel is neat, and every light fixture is perfectly placed. Based in Letlhakane, Botswana.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 py-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)]">
                  <ShieldCheck />
                </div>
                <div>
                  <h4 className="text-white font-bold">15 Years Exp.</h4>
                  <p className="text-sm text-gray-400">Licensed Expert</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[var(--color-neon-safety)]/10 flex items-center justify-center text-[var(--color-neon-safety)]">
                  <Zap />
                </div>
                <div>
                  <h4 className="text-white font-bold">Industrial & Home</h4>
                  <p className="text-sm text-gray-400">Full Spectrum</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setShowCert(true)}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-colors"
              >
                <Award size={20} className="text-[var(--color-primary)]" />
                View Certificate
              </button>
              
              <a 
                href="/reference_letter.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-[var(--color-primary)]/30 hover:border-[var(--color-primary)] rounded-lg text-white transition-colors shadow-[0_0_10px_rgba(0,240,255,0.1)]"
              >
                <FileText size={20} className="text-[var(--color-primary)]" />
                Client Reference
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-2xl overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-darker)] via-transparent to-transparent z-10"></div>
            <img 
              src="https://res.cloudinary.com/ddoqatojj/image/upload/v1781539568/Simon_Sadziwa_-hero_image_gz5hn6.jpg" 
              alt="Simon Sadziwa" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            
            <div className="absolute bottom-6 left-6 right-6 z-20 flex gap-4">
              <img src="https://res.cloudinary.com/ddoqatojj/image/upload/v1781539568/Simon_Sadziwa_wlb229.jpg" alt="Headshot" className="w-20 h-20 rounded-lg border-2 border-[var(--color-primary)] object-cover shadow-lg" />
              <img src="https://res.cloudinary.com/ddoqatojj/image/upload/v1781539566/at_work_f6reqn.jpg" alt="Team Work" className="w-20 h-20 rounded-lg border-2 border-white/20 object-cover shadow-lg" />
            </div>
          </motion.div>

        </div>
      </div>

      {showCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4" onClick={() => setShowCert(false)}>
          <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <button className="absolute -top-12 right-0 text-white hover:text-[var(--color-primary)]" onClick={() => setShowCert(false)}>Close (Esc)</button>
            <img src="https://res.cloudinary.com/ddoqatojj/image/upload/v1781539567/certificate_dr0p3x.jpg" alt="Official Certificate" className="w-full rounded-lg shadow-2xl border border-[var(--color-primary)]/30" />
          </div>
        </div>
      )}
    </section>
  );
}
