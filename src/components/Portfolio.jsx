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
              className={`px-6 py-3 rounded-lg font-bold transition-all ${activeTab === 'industrial' ? 'bg-[var(--color-primary)] text-black shadow-[0_0_15px_rgba(0,240,255,0.3)]' : 'text-gray-400 hover:text-white'}`}
            >
              Industrial
            </button>
            <button 
              onClick={() => setActiveTab('residential')}
              className={`px-6 py-3 rounded-lg font-bold transition-all ${activeTab === 'residential' ? 'bg-[var(--color-neon-safety)] text-black shadow-[0_0_15px_rgba(255,187,0,0.3)]' : 'text-gray-400 hover:text-white'}`}
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
                  <img src={`https://res.cloudinary.com/ddoqatojj/image/upload/v1781539557/${img}`} alt="Warehouse Wiring" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
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
                <video controls className="w-full aspect-[9/16] object-cover rounded-xl border border-white/10"><source src="https://res.cloudinary.com/ddoqatojj/video/upload/v1781539575/Simon_Sadziwa_chopping_zf57jz.mp4" type="video/mp4" /></video>
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
