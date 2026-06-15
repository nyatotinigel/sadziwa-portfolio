const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
}

const files = {
  'Navbar.jsx': \
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = ['Home', 'Portfolio', 'About', 'Contact'];

  return (
    <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-[var(--color-primary)]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-neon-safety)] bg-clip-text text-transparent">SES</span>
            <span className="text-white font-medium hidden sm:block">Sadziwa Electrical</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {links.map((link) => (
                <a key={link} href={\#\\} className="text-gray-300 hover:text-[var(--color-primary)] px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black/95 border-b border-[var(--color-primary)]/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <a key={link} href={\#\\} onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-[var(--color-primary)] block px-3 py-2 rounded-md text-base font-medium">
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
\,

  'Hero.jsx': \
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[var(--color-darker)] z-10"></div>
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
\,

  'About.jsx': \
import { motion } from 'framer-motion';
import { Award, Zap, ShieldCheck } from 'lucide-react';
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
              With years of dedicated experience across industrial and residential sectors, I ensure that every circuit is safe, every panel is neat, and every light fixture is perfectly placed. Based in Letlhakane, Botswana.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 py-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)]">
                  <ShieldCheck />
                </div>
                <div>
                  <h4 className="text-white font-bold">Certified</h4>
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

            <button 
              onClick={() => setShowCert(true)}
              className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-colors"
            >
              <Award size={20} className="text-[var(--color-primary)]" />
              View Official Certificate
            </button>
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
\,

  'Portfolio.jsx': \
import { useState } from 'react';
import { motion } from 'framer-motion';
import BeforeAfterSlider from './BeforeAfterSlider';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('industrial');

  const residentialImages = [
    { src: 'https://res.cloudinary.com/ddoqatojj/image/upload/v1781539557/db_closed_tic0ja.jpg', title: 'Main DB Board Closed View' },
    { src: 'https://res.cloudinary.com/ddoqatojj/image/upload/v1781539562/main_outside_distribution_board_jmq618.jpg', title: 'Outside DB Board Closed View' },
    { src: 'https://res.cloudinary.com/ddoqatojj/image/upload/v1781539558/distribution_board_pbx1qx.jpg', title: 'Outside DB Board Opened Interior' },
    { src: 'https://res.cloudinary.com/ddoqatojj/image/upload/v1781539561/led_down_lights_ckwxed.jpg', title: 'LED Downlights Accent' },
    { src: 'https://res.cloudinary.com/ddoqatojj/image/upload/v1781539564/sitting_room_light1_nk42ot.jpg', title: 'Lounge Main Fixture 1' },
    { src: 'https://res.cloudinary.com/ddoqatojj/image/upload/v1781539563/meshed_light_q26cbj.jpg', title: 'Meshed Ceiling Fixture' },
    { src: 'https://res.cloudinary.com/ddoqatojj/image/upload/v1781539522/light_k3dapz.jpg', title: 'Custom Light Detail' },
    { src: 'https://res.cloudinary.com/ddoqatojj/image/upload/v1781539561/launch_light_trovgq.jpg', title: 'Architectural Hallway Launch Light' },
    { src: 'https://res.cloudinary.com/ddoqatojj/image/upload/v1781539560/kitchen_light1_uaurrr.jpg', title: 'Modern Kitchen Fixture' }
  ];

  return (
    <section id="portfolio" className="py-24 bg-[var(--color-darker)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Project <span className="text-[var(--color-primary)]">Showcase</span></h2>
          <div className="flex justify-center gap-4 mt-8 bg-[var(--color-dark)] p-2 rounded-xl inline-flex border border-white/5">
            <button 
              onClick={() => setActiveTab('industrial')}
              className={\\\px-6 py-3 rounded-lg font-bold transition-all \\\\}
            >
              Industrial
            </button>
            <button 
              onClick={() => setActiveTab('residential')}
              className={\\\px-6 py-3 rounded-lg font-bold transition-all \\\\}
            >
              Residential
            </button>
          </div>
        </div>

        {activeTab === 'industrial' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-2">Industrial 3-Phase Panel Installation & Warehouse Wiring</h3>
              <p className="text-gray-400 mb-6 max-w-3xl">Heavy-duty industrial breaker panel wiring, neat conduit layout, and phase safety testing.</p>
              
              <div className="aspect-video rounded-2xl overflow-hidden border border-[var(--color-primary)]/30 shadow-2xl relative bg-black">
                <video controls className="w-full h-full object-contain">
                  <source src="https://res.cloudinary.com/ddoqatojj/video/upload/v1781539559/warehouse_wiring_q3bcxm.mp4" type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {['warehouse_wiring2_dekcng.jpg', 'warehouse_wiring1_l1ykly.jpg', 'warehouse_wiring_cimaci.jpg'].map((img, i) => (
                <div key={i} className="group overflow-hidden rounded-xl border border-white/10 hover:border-[var(--color-primary)] transition-all">
                  <img src={\\\https://res.cloudinary.com/ddoqatojj/image/upload/v1781539557/\\\\} alt="Warehouse Wiring" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'residential' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
             <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-2">Premium Residential Service Upgrades & Luxury Lighting</h3>
              <p className="text-gray-400 mb-8 max-w-3xl">Comprehensive home distribution board overhauls, seamless circuit updates, precision cable management, and high-end residential architectural lighting setups.</p>
              
              <h4 className="text-xl font-bold text-[var(--color-primary)] mb-6 uppercase tracking-wider text-sm">Process & Walkthroughs</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
                <video controls className="w-full aspect-[9/16] object-cover rounded-xl border border-white/10" poster=""><source src="https://res.cloudinary.com/ddoqatojj/video/upload/v1781539575/Simon_Sadziwa_chopping_zf57jz.mp4" type="video/mp4" /></video>
                <video controls className="w-full aspect-[9/16] object-cover rounded-xl border border-white/10"><source src="https://res.cloudinary.com/ddoqatojj/video/upload/v1781539566/distribution_box_opiie3.mp4" type="video/mp4" /></video>
                <video controls className="w-full aspect-[9/16] object-cover rounded-xl border border-white/10"><source src="https://res.cloudinary.com/ddoqatojj/video/upload/v1781539568/lighting_launch_oasktk.mp4" type="video/mp4" /></video>
                <video controls className="w-full aspect-[9/16] object-cover rounded-xl border border-white/10"><source src="https://res.cloudinary.com/ddoqatojj/video/upload/v1781539566/lighting_kitchen_vsm1j9.mp4" type="video/mp4" /></video>
                <video controls className="w-full aspect-[9/16] object-cover rounded-xl border border-white/10"><source src="https://res.cloudinary.com/ddoqatojj/video/upload/v1781539567/light_testing_uxfhsg.mp4" type="video/mp4" /></video>
              </div>

              <h4 className="text-xl font-bold text-[var(--color-primary)] mb-6 uppercase tracking-wider text-sm">Before & After Comparisons</h4>
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <BeforeAfterSlider 
                  title="Ground Wiring to Kitchen Lights"
                  before="https://res.cloudinary.com/ddoqatojj/image/upload/v1781539564/wiring_from_ground_z7k8iz.jpg" 
                  after="https://res.cloudinary.com/ddoqatojj/image/upload/v1781539559/kitchen_down_lights_gurc6q.jpg" 
                />
                <BeforeAfterSlider 
                  title="Main DB Panel Assembly"
                  before="https://res.cloudinary.com/ddoqatojj/image/upload/v1781539559/distribution_box_wiring_zl5kol.jpg" 
                  after="https://res.cloudinary.com/ddoqatojj/image/upload/v1781539558/db_agg79i.jpg" 
                />
                <BeforeAfterSlider 
                  title="Secondary DB Panel Layout"
                  before="https://res.cloudinary.com/ddoqatojj/image/upload/v1781539557/db_wiring1_xlfrhq.jpg" 
                  after="https://res.cloudinary.com/ddoqatojj/image/upload/v1781539557/db_complete_udp4q7.jpg" 
                />
                <BeforeAfterSlider 
                  title="Outside Distribution Setup"
                  before="https://res.cloudinary.com/ddoqatojj/image/upload/v1781539558/db_outside_s4htfi.jpg" 
                  after="https://res.cloudinary.com/ddoqatojj/image/upload/v1781539558/distribution_box_outside_setup_wn4eln.jpg" 
                />
              </div>

              <h4 className="text-xl font-bold text-[var(--color-primary)] mb-6 uppercase tracking-wider text-sm">Lighting Craftsmanship Gallery</h4>
              <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
                {residentialImages.map((img, i) => (
                  <div key={i} className="break-inside-avoid relative group rounded-xl overflow-hidden border border-white/10 hover:border-[var(--color-primary)] transition-colors">
                    <img src={img.src} alt={img.title} className="w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                      <span className="text-white text-sm font-medium">{img.title}</span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
\,

  'BeforeAfterSlider.jsx': \
import { useState, useRef } from 'react';
import { ArrowLeftRight } from 'lucide-react';

export default function BeforeAfterSlider({ before, after, title }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  return (
    <div className="flex flex-col gap-2">
      <h5 className="text-gray-300 font-medium text-sm">{title}</h5>
      <div 
        ref={containerRef}
        className="relative w-full aspect-video rounded-xl overflow-hidden cursor-ew-resize select-none border border-white/10"
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchEnd={() => setIsDragging(false)}
        onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
        onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
      >
        <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" draggable={false} />
        
        <div 
          className="absolute inset-0 overflow-hidden bg-gray-900"
          style={{ width: \\\\%\\\ }}
        >
          <img src={before} alt="Before" className="absolute top-0 left-0 h-full w-full object-cover max-w-none" style={{ width: \\\calc(100% * (100 / \))\\\ }} draggable={false} />
        </div>

        <div 
          className="absolute top-0 bottom-0 w-1 bg-[var(--color-primary)] cursor-ew-resize flex items-center justify-center shadow-[0_0_10px_rgba(0,240,255,0.8)]"
          style={{ left: \\\calc(\% - 2px)\\\ }}
        >
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg text-[var(--color-darker)]">
            <ArrowLeftRight size={16} />
          </div>
        </div>

        <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded text-xs font-bold pointer-events-none">BEFORE</div>
        <div className="absolute top-4 right-4 bg-[var(--color-primary)]/90 text-black px-3 py-1 rounded text-xs font-bold pointer-events-none">AFTER</div>
      </div>
    </div>
  );
}
\,

  'StickyContact.jsx': \
import { MessageCircle, Mail } from 'lucide-react';

export default function StickyContact() {
  const whatsappUrl = "https://wa.me/26774548724";
  const emailUrl = "mailto:simomosad@gmail.com";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <a 
        href={emailUrl} 
        className="w-12 h-12 bg-[var(--color-dark)] text-white border border-[var(--color-primary)]/50 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Email Us"
      >
        <Mail size={20} />
      </a>
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform"
        aria-label="WhatsApp Chat"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
}
\
};

for (const [filename, content] of Object.entries(files)) {
  fs.writeFileSync(path.join(componentsDir, filename), content.trim());
}

const appContent = \
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import StickyContact from './components/StickyContact';

function App() {
  return (
    <div className="bg-[var(--color-darker)] min-h-screen text-white font-sans selection:bg-[var(--color-primary)] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
      </main>
      
      <footer id="contact" className="bg-black py-12 border-t border-[var(--color-primary)]/20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-white">Sadziwa <span className="text-[var(--color-primary)]">Electrical Solutions</span></h2>
          <p className="text-gray-400 mb-8">Professional electrical installations, wiring, and premium lighting for industrial and residential projects in Letlhakane, Botswana.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 text-lg">
            <a href="tel:+26774548724" className="text-gray-300 hover:text-[var(--color-primary)] transition-colors">+267 74 548 724</a>
            <a href="mailto:simomosad@gmail.com" className="text-gray-300 hover:text-[var(--color-primary)] transition-colors">simomosad@gmail.com</a>
          </div>
          <p className="text-gray-600 mt-12 text-sm">&copy; {new Date().getFullYear()} Sadziwa Electrical Solutions. All rights reserved.</p>
        </div>
      </footer>

      <StickyContact />
    </div>
  );
}

export default App;
\;
fs.writeFileSync(path.join(__dirname, 'src', 'App.jsx'), appContent.trim());

console.log('Done!');
