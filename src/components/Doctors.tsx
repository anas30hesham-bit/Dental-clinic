import { Quote, Star } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const doctors = [
  {
    name: 'د. سارة الأحمدي',
    role: 'استشارية تجميل الأسنان',
    img: 'https://images.pexels.com/photos/31043312/pexels-photo-31043312.jpeg?auto=compress&cs=tinysrgb&w=800',
    exp: '١٢ سنة خبرة',
  },
  {
    name: 'د. خالد المنصور',
    role: 'استشاري زراعة الأسنان',
    img: 'https://images.pexels.com/photos/37458054/pexels-photo-37458054.jpeg?auto=compress&cs=tinysrgb&w=800',
    exp: '١٥ سنة خبرة',
  },
  {
    name: 'د. ليان الحربي',
    role: 'أخصائية تقويم الأسنان',
    img: 'https://images.pexels.com/photos/31043311/pexels-photo-31043311.jpeg?auto=compress&cs=tinysrgb&w=800',
    exp: '٩ سنوات خبرة',
  },
  {
    name: 'د. عمر الشهري',
    role: 'استشاري جراحة الفم',
    img: 'https://images.pexels.com/photos/6812464/pexels-photo-6812464.jpeg?auto=compress&cs=tinysrgb&w=800',
    exp: '١٤ سنة خبرة',
  },
];

export function Doctors() {
  return (
    <section id="doctors" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-brand-100/40 blur-3xl" />

      <div className="container-x mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="inline-block rounded-full bg-brand-50 px-4 py-1.5 text-sm font-bold text-brand-700">
              فريقنا
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-3xl font-bold text-ink-950 sm:text-4xl lg:text-5xl">
              أطباء على أعلى مستوى من الكفاءة
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-lg text-ink-600">
              نخبة من الاستشاريين والمختصين بخبرات عالمية، يضعون راحتك وصحتك في المقام الأول.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((d, i) => (
            <Reveal key={d.name} variant="scale" delay={i * 90}>
              <article className="group relative overflow-hidden rounded-3xl bg-white shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-card">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/10 to-transparent" />
                  <div className="absolute bottom-4 right-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-brand-700 backdrop-blur">
                    {d.exp}
                  </div>
                </div>
                <div className="p-5 text-center">
                  <h3 className="text-lg font-extrabold text-ink-900">{d.name}</h3>
                  <p className="mt-1 text-sm font-medium text-brand-600">{d.role}</p>
                  <div className="mt-3 flex items-center justify-center gap-1 text-gold-500">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: 'نورة العتيبي',
    role: 'مريضة زراعة أسنان',
    text: 'تجربة رائعة من أولها لآخرها. الدكتورة سارة كانت محترفة ولطيفة جدًا، والنتيجة فاقت توقعاتي. ابتسامتي عادت أجمل من قبل!',
    rating: 5,
  },
  {
    name: 'فهد القحطاني',
    role: 'مريض تبييض',
    text: 'أفضل عيادة أسنان جربتها. المكان نظيف ومنظم، والأطباء يشرحون كل خطوة. التبييض طلع نتيجة ممتازة في جلسة واحدة.',
    rating: 5,
  },
  {
    name: 'ريم الدوسري',
    role: 'مريضة تقويم',
    text: 'ابنتي كانت خايفة من طبيب الأسنان، لكن هنا تعاملوا معها بحب وصبر. الآن تطالبني بزيارة العيادة! شكرًا عيادة ابتسامة.',
    rating: 5,
  },
  {
    name: 'سلطان الغامدي',
    role: 'مريض علاج جذور',
    text: 'كنت أعاني من ألم شديد، والحمدلله بعد جلسة واحدة انتهى الألم. الطاقم محترف والأجهزة حديثة جدًا. أنصح بها بشدة.',
    rating: 5,
  },
  {
    name: 'أمل الزهراني',
    role: 'مريضة فينير',
    text: 'عملت فينير والنتيجة طبيعية وجميلة جدًا. كل من شافني مدح ابتسامتي. الفريق متعاون من الاستقبال للأطباء.',
    rating: 5,
  },
  {
    name: 'تركي السبيعي',
    role: 'مريض حشوات تجميلية',
    text: 'سرعة في الإنجاز ودقة في العمل. الحشوات طلعت بلون السن تمامًا ما تفرّق. أسعار مناسبة مقابل الخدمة العالية.',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section-pad relative overflow-hidden bg-ink-950">
      {/* decorative */}
      <div className="pointer-events-none absolute -top-20 right-10 h-72 w-72 rounded-full bg-brand-700/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />

      <div className="container-x mx-auto relative">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="inline-block rounded-full bg-brand-500/20 px-4 py-1.5 text-sm font-bold text-brand-300">
              آراء المرضى
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              ثقة مرضانا هي أغلى ما نملك
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-lg text-ink-300">
              أكثر من ٨٠٠٠ مريض اختاروا ابتسامة. هذه بعض تجاربهم.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} variant="up" delay={i * 80}>
              <article className="group relative h-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-400/40 hover:bg-white/10">
                <Quote className="h-9 w-9 text-brand-400/60" />
                <div className="mt-3 flex items-center gap-1 text-gold-400">
                  {[...Array(t.rating)].map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-base leading-relaxed text-ink-100">{t.text}</p>
                <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-400 to-brand-700 font-bold text-white">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <p className="font-bold text-white">{t.name}</p>
                    <p className="text-xs text-ink-400">{t.role}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
