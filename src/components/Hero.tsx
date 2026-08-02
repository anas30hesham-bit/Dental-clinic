import { ArrowLeft, Star, ShieldCheck, Sparkles, Play } from 'lucide-react';
import { useScrollY } from '@/hooks/useReveal';

const heroImg =
  'https://images.pexels.com/photos/4269268/pexels-photo-4269268.jpeg?auto=compress&cs=tinysrgb&w=1400';

export function Hero() {
  const y = useScrollY();
  const parallax = Math.min(y * 0.35, 160);

  return (
    <section id="home" className="relative overflow-hidden bg-grid pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-200/50 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -left-20 h-80 w-80 rounded-full bg-brand-100/60 blur-3xl" />

      <div className="container-x mx-auto grid items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-8 lg:px-12">
        {/* Text */}
        <div className="relative z-10 max-w-xl">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-bold text-brand-700">
            <Sparkles className="h-4 w-4" />
            عيادة متخصصة بطب وتجميل الأسنان
          </div>

          <h1
            className="animate-fade-up mt-6 text-balance font-display text-4xl font-bold leading-[1.15] text-ink-950 sm:text-5xl lg:text-6xl"
            style={{ animationDelay: '0.08s' }}
          >
            ابتسامتُك تبدأ من <span className="gradient-text">عيادة ابتسامة</span>
          </h1>

          <p
            className="animate-fade-up mt-5 max-w-lg text-lg leading-relaxed text-ink-600"
            style={{ animationDelay: '0.16s' }}
          >
            نقدّم رعاية أسنان متكاملة بأحدث التقنيات العالمية وفريق من أمهر الأطباء، لنمنحك
            ابتسامة صحية ومشرقة تدوم مدى الحياة.
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-wrap items-center gap-4"
            style={{ animationDelay: '0.24s' }}
          >
            <button
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-base"
            >
              احجز موعدك الآن
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center gap-3 text-base font-bold text-ink-800"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full border-2 border-brand-300 bg-white text-brand-600 transition-all group-hover:bg-brand-600 group-hover:text-white">
                <Play className="h-4 w-4" />
              </span>
              تعرّف على العيادة
            </button>
          </div>

          {/* stats */}
          <div
            className="animate-fade-up mt-12 grid grid-cols-3 gap-4 border-t border-ink-100 pt-8"
            style={{ animationDelay: '0.32s' }}
          >
            {[
              { n: '+١٥', l: 'سنة خبرة' },
              { n: '+٨٠٠٠', l: 'مريض سعيد' },
              { n: '٤.٩', l: 'تقييم المرضى' },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-3xl font-bold text-brand-700">{s.n}</p>
                <p className="mt-1 text-sm font-medium text-ink-500">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="relative z-0">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* floating badge: rating */}
            <div className="absolute -top-4 -right-2 z-20 animate-float rounded-2xl bg-white p-4 shadow-card sm:-right-6">
              <div className="flex items-center gap-1 text-gold-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-1 text-xs font-bold text-ink-700">تقييم ٤.٩ من ٥</p>
              <p className="text-[11px] text-ink-400">بناءً على +١٢٠٠ مراجعة</p>
            </div>

            {/* floating badge: trust */}
            <div className="absolute -bottom-5 -left-2 z-20 animate-float-slow rounded-2xl bg-white p-4 shadow-card sm:-left-6">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-100 text-brand-700">
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-extrabold text-ink-900">معقّمة ١٠٠٪</p>
                  <p className="text-[11px] text-ink-500">أعلى معايير السلامة</p>
                </div>
              </div>
            </div>

            {/* main image */}
            <div className="relative overflow-hidden rounded-4xl shadow-card">
              <img
                src={heroImg}
                alt="عيادة أسنان حديثة"
                className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[520px] lg:h-[580px]"
                style={{ transform: `translateY(${-parallax * 0.05}px)` }}
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/30 via-transparent to-transparent" />
            </div>

            {/* decorative ring */}
            <div className="absolute -bottom-8 -right-8 -z-10 h-40 w-40 rounded-full border-[14px] border-brand-100" />
          </div>
        </div>
      </div>
    </section>
  );
}
