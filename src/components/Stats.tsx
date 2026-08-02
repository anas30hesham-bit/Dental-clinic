import { useEffect, useState } from 'react';
import { ShieldCheck, Users, Award, Clock } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const stats = [
  { icon: Users, value: 8000, suffix: '+', label: 'مريض سعيد' },
  { icon: Award, value: 15, suffix: '+', label: 'سنة خبرة' },
  { icon: ShieldCheck, value: 100, suffix: '%', label: 'معقّمة وآمنة' },
  { icon: Clock, value: 12, suffix: 'س', label: 'ساعة عمل يوميًا' },
];

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    let raf = 0;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);
  return val;
}

function toArabicDigits(n: number): string {
  return n.toLocaleString('ar-EG');
}

function StatItem({ s, active, delay }: { s: (typeof stats)[number]; active: boolean; delay: number }) {
  const val = useCountUp(s.value, active);
  return (
    <Reveal variant="scale" delay={delay}>
      <div className="group flex flex-col items-center rounded-3xl border border-ink-100 bg-white p-7 text-center shadow-soft transition-all hover:-translate-y-1.5 hover:shadow-card">
        <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-100 text-brand-700 transition-all group-hover:bg-brand-600 group-hover:text-white">
          <s.icon className="h-7 w-7" />
        </span>
        <p className="mt-4 font-display text-3xl font-bold text-ink-950 sm:text-4xl">
          {toArabicDigits(val)}
          <span className="text-brand-600">{s.suffix}</span>
        </p>
        <p className="mt-1 text-sm font-medium text-ink-500">{s.label}</p>
      </div>
    </Reveal>
  );
}

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-brand-700 py-16">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-10" />
      <div className="container-x mx-auto grid grid-cols-2 gap-5 px-5 sm:px-8 lg:grid-cols-4 lg:px-12">
        {stats.map((s, i) => (
          <StatItem key={s.label} s={s} active delay={i * 100} />
        ))}
      </div>
    </section>
  );
}
