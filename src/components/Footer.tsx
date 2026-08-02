import { Phone, Mail, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';

const quickLinks = [
  { id: 'home', label: 'الرئيسية' },
  { id: 'services', label: 'خدماتنا' },
  { id: 'about', label: 'عن العيادة' },
  { id: 'doctors', label: 'الأطباء' },
  { id: 'testimonials', label: 'آراء المرضى' },
  { id: 'contact', label: 'تواصل معنا' },
];

const serviceLinks = [
  'زراعة الأسنان',
  'تبييض الأسنان',
  'فينير وتجميل',
  'تقويم الأسنان',
  'علاج الجذور',
  'أسنان الأطفال',
];

export function Footer() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative overflow-hidden bg-ink-950 pt-16 pb-8 text-ink-300">
      <div className="pointer-events-none absolute -top-10 right-1/4 h-60 w-60 rounded-full bg-brand-700/20 blur-3xl" />

      <div className="container-x mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
                <span className="font-display text-xl font-bold">ب</span>
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-lg font-extrabold text-white">ابتسامة</span>
                <span className="text-[11px] font-medium text-brand-400">لطب وتجميل الأسنان</span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-ink-400">
              عيادة متخصصة بطب وتجميل الأسنان، نقدّم رعاية متكاملة بأحدث التقنيات وأمهر الأطباء
              لنمنحك ابتسامة صحية ومشرقة.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-ink-300 transition-all hover:-translate-y-1 hover:bg-brand-600 hover:text-white"
                  aria-label="تواصل اجتماعي"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-base font-bold text-white">روابط سريعة</h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    className="group flex items-center gap-2 text-sm text-ink-400 transition-colors hover:text-brand-400"
                  >
                    <span className="h-1 w-1 rounded-full bg-brand-500 transition-all group-hover:w-3" />
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base font-bold text-white">خدماتنا</h4>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <span className="group flex items-center gap-2 text-sm text-ink-400 transition-colors hover:text-brand-400">
                    <span className="h-1 w-1 rounded-full bg-brand-500 transition-all group-hover:w-3" />
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-base font-bold text-white">تواصل معنا</h4>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 text-sm text-ink-400">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-500" />
                الرياض، حي العليا، طريق الملك فهد
              </li>
              <li>
                <a href="tel:+966500000000" className="flex items-center gap-3 text-sm text-ink-400 transition-colors hover:text-brand-400">
                  <Phone className="h-5 w-5 shrink-0 text-brand-500" />
                  ٠٥٠٠٠٠٠٠٠
                </a>
              </li>
              <li>
                <a href="mailto:info@ebtisama.com" className="flex items-center gap-3 text-sm text-ink-400 transition-colors hover:text-brand-400">
                  <Mail className="h-5 w-5 shrink-0 text-brand-500" />
                  info@ebtisama.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-ink-500">
            © ٢٠٢٦ عيادة ابتسامة لطب وتجميل الأسنان. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-6 text-xs text-ink-500">
            <a href="#" className="transition-colors hover:text-brand-400">سياسة الخصوصية</a>
            <a href="#" className="transition-colors hover:text-brand-400">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
