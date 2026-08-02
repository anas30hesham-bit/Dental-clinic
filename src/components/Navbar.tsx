import { useEffect, useState } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { useScrollY } from '@/hooks/useReveal';

const links = [
  { id: 'home', label: 'الرئيسية' },
  { id: 'services', label: 'خدماتنا' },
  { id: 'about', label: 'عن العيادة' },
  { id: 'doctors', label: 'الأطباء' },
  { id: 'testimonials', label: 'آراء المرضى' },
  { id: 'contact', label: 'تواصل معنا' },
];

export function Navbar() {
  const y = useScrollY();
  const scrolled = y > 30;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass shadow-soft py-2.5' : 'bg-transparent py-4'
      }`}
    >
      <nav className="container-x mx-auto flex items-center justify-between px-5 sm:px-8 lg:px-12">
        <button onClick={() => go('home')} className="flex items-center gap-2.5">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-soft">
            <span className="font-display text-xl font-bold">ب</span>
          </span>
          <span className="flex flex-col items-start leading-none">
            <span className={`text-lg font-extrabold ${scrolled ? 'text-ink-900' : 'text-ink-900'}`}>
              ابتسامة
            </span>
            <span className="text-[11px] font-medium text-brand-600">لطب وتجميل الأسنان</span>
          </span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className="group relative rounded-full px-4 py-2 text-sm font-bold text-ink-700 transition-colors hover:text-brand-700"
              >
                {l.label}
                <span className="absolute inset-x-3 -bottom-0.5 h-0.5 origin-right scale-x-0 rounded-full bg-brand-500 transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+966500000000"
            className="flex items-center gap-2 text-sm font-bold text-ink-700 transition-colors hover:text-brand-700"
          >
            <Phone className="h-4 w-4" />
            ٠٥٠٠٠٠٠٠٠
          </a>
          <button onClick={() => go('booking')} className="btn-primary !py-2.5 !text-sm">
            <Calendar className="h-4 w-4" />
            احجز موعد
          </button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-ink-200 bg-white text-ink-800 lg:hidden"
          aria-label="القائمة"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${
          open ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 bg-ink-950/40 transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute inset-y-0 right-0 w-[82%] max-w-sm bg-white p-6 shadow-card transition-transform duration-400 ease-out ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="text-lg font-extrabold text-ink-900">القائمة</span>
            <button
              onClick={() => setOpen(false)}
              className="grid h-10 w-10 place-items-center rounded-xl bg-ink-50 text-ink-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <ul className="mt-8 space-y-1">
            {links.map((l, i) => (
              <li
                key={l.id}
                style={{ transitionDelay: `${open ? i * 60 : 0}ms` }}
                className={`transform transition-all duration-500 ${
                  open ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'
                }`}
              >
                <button
                  onClick={() => go(l.id)}
                  className="flex w-full items-center rounded-2xl px-4 py-3.5 text-right text-base font-bold text-ink-800 transition-colors hover:bg-brand-50 hover:text-brand-700"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-3">
            <button onClick={() => go('booking')} className="btn-primary w-full">
              <Calendar className="h-5 w-5" />
              احجز موعدك الآن
            </button>
            <a
              href="tel:+966500000000"
              className="btn-ghost w-full"
            >
              <Phone className="h-5 w-5" />
              اتصل بنا
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
