import { Reveal } from '@/components/Reveal';

const items = [
  { icon: '🦷', text: 'زراعة الأسنان' },
  { icon: '✨', text: 'تبييض الأسنان' },
  { icon: '🪥', text: 'تنظيف وتلميع' },
  { icon: '😁', text: 'فينير وتجميل' },
  { icon: '🧒', text: 'أسنان الأطفال' },
  { icon: '🔧', text: 'تقويم الأسنان' },
  { icon: '🩺', text: 'علاج الجذور' },
  { icon: '🛡️', text: 'حشوات تجميلية' },
];

export function Marquee() {
  return (
    <section className="border-y border-ink-100 bg-ink-50/60 py-6">
      <div className="relative flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee items-center gap-4 pl-4">
          {[...items, ...items].map((it, i) => (
            <Reveal key={i} variant="up">
              <div className="flex items-center gap-2.5 whitespace-nowrap rounded-full border border-ink-100 bg-white px-5 py-2.5 text-sm font-bold text-ink-700 shadow-sm">
                <span className="text-lg">{it.icon}</span>
                {it.text}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
