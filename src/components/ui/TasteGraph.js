// Components for Taste Graph for Products //

'use client';
import { useEffect } from 'react';

export default function TasteGraph({ data, title }) {
  useEffect(() => {
    // Το animation logic σου εδώ
    const bars = document.querySelectorAll('.taste-bar');
    bars.forEach(bar => bar.style.width = bar.getAttribute('data-width'));
  }, []);

  return (
    <div id="taste-graph" className="w-full fade-reveal mt-12">
      <h3 className="text-lg font-light mb-8">{title}</h3>
      <div className="space-y-6">
        {data.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <div className="flex justify-between text-[11px] uppercase tracking-[0.2em]">
              <span>{item.label}</span>
              <span>{item.value}</span>
            </div>
            <div className="w-full h-[1px] bg-outline-variant/30 relative">
              <div className="taste-bar absolute top-0 left-0 h-[1px] bg-solar-ochre transition-all duration-1000" data-width={item.value} style={{ width: '0%' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}