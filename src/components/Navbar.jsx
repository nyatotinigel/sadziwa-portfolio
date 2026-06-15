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
            <span className="text-white font-medium hidden sm:block">Sadziwa Electrical Solutions</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {links.map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-gray-300 hover:text-[var(--color-primary)] px-3 py-2 rounded-md text-sm font-medium transition-colors">
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
              <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-[var(--color-primary)] block px-3 py-2 rounded-md text-base font-medium">
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
