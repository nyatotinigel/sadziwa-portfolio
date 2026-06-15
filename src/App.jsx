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
