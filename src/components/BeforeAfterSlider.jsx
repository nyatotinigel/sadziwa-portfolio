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
          style={{ width: `${sliderPosition}%` }}
        >
          <img src={before} alt="Before" className="absolute top-0 left-0 h-full w-full object-cover max-w-none" style={{ width: `calc(100% * (100 / ${sliderPosition}))` }} draggable={false} />
        </div>

        <div 
          className="absolute top-0 bottom-0 w-1 bg-[var(--color-primary)] cursor-ew-resize flex items-center justify-center shadow-[0_0_10px_rgba(0,240,255,0.8)]"
          style={{ left: `calc(${sliderPosition}% - 2px)` }}
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
