import { Stethoscope, Sparkles, Baby, Smile, Activity, Wrench, Shield, Crown } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const services = [
  {
    icon: Stethoscope,
    title: 'زراعة الأسنان',
    desc: 'تعويض الأسنان المفقودة بزرعات عالمية تدوم مدى الحياة بمظهر طبيعي تمامًا.',
    color: 'from-brand-500 to-brand-700',
  },
  {
    icon: Sparkles,
    title: 'تبييض الأسنان',
    desc: 'تقنيات تبييض حديثة تمنحك ابتسارة أكثر إشراقًا في جلسة واحدة دون ألم.',
    color: 'from-sky-500 to-brand-500',
  },
  {
    icon: Smile,
    title: 'فينير وتجميل',
    desc: 'قشور فينير خزفية فائقة الدقة لتصحيح شكل ولون الأسنان والحصول على ابتسامة هوليود.',
    color: 'from-gold-500 to-gold-600',
  },
  {
    icon: Baby,
    title: 'أسنان الأطفال',
    desc: 'رعاية متخصصة لأسنان الأطفال في بيئة ودودة تساعدهم على الاطمئنان.',
    color: 'from-pink-400 to-brand-400',
  },
  {
    icon: Activity,
    title: 'علاج الجذور',
    desc: 'علاج دقيق لجذور الأسنان بأحدث الأجهزة الرقمية لإنهاء الألم والحفاظ على سنك.',
    color: 'from-brand-600 to-ink-700',
  },
  {
    icon: Wrench,
    title: 'تقويم الأسنان',
    desc: 'تقويم معدني وشفاف لتصفيف الأسنان وتصحيح الإطباع بنتائج مضمونة.',
    color: 'from-brand-400 to-brand-600',
  },
  {
    icon: Shield,
    title: 'حشوات تجميلية',
    desc: 'حشوات بلون الأسنان الطبيعي تعيد للسن وظيفتها وجمالها بدون أثر.',
    color: 'from-sky-400 to-brand-500',
  },
  {
    icon: Crown,
    title: 'تركيبات وتيجان',
    desc: 'تيجان وجسور خزفية عالية الجودة تستعيد شكل الابتسامة والقدرة على المضغ.',
    color: 'from-gold-400 to-gold-600',
  },
];

export function Services() {
  return (
    <section id="services" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute top-20 right-0 h-72 w-72 rounded-full bg-brand-100/50 blur-3xl" />

      <div className="container-x mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="inline-block rounded-full bg-brand-50 px-4 py-1.5 text-sm font-bold text-brand-700">
              خدماتنا
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-3xl font-bold text-ink-950 sm:text-4xl lg:text-5xl">
              رعاية شاملة لابتسامتك
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-lg text-ink-600">
              باقة متكاملة من خدمات طب وتجميل الأسنان بأحدث التقنيات وأمهر الأطباء، تحت سقف واحد.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} variant="scale" delay={i * 70}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-ink-100 bg-white p-6 shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-card">
                <div
                  className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${s.color} text-white shadow-soft transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
                >
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-extrabold text-ink-900">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-500">{s.desc}</p>
                <div className="mt-5 flex items-center gap-2 text-sm font-bold text-brand-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  اعرف المزيد
                  <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
                </div>
                {/* hover glow */}
                <div className="pointer-events-none absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-brand-200/0 blur-2xl transition-all duration-500 group-hover:bg-brand-200/60" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
