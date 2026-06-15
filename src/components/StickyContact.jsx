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
