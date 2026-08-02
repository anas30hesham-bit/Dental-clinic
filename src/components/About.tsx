import { CheckCircle2, Award, HeartHandshake, Microscope } from 'lucide-react';
import { Reveal } from '@/components/Reveal';

const aboutImg =
  'https://images.pexels.com/photos/6809639/pexels-photo-6809639.jpeg?auto=compress&cs=tinysrgb&w=1200';

const features = [
  {
    icon: Award,
    title: 'خبرة موثوقة',
    desc: 'فريق من أطباء استشاريين حاصلين على شهادات عالمية مع +١٥ سنة خبرة.',
  },
  {
    icon: Microscope,
    title: 'أحدث التقنيات',
    desc: 'أجهزة رقمية ثلاثية الأبعاد وتصوير دقيق يضمن تشخيصًا وعلاجًا مثاليًا.',
  },
  {
    icon: HeartHandshake,
    title: 'رعاية إنسانية',
    desc: 'نهتم بأدق التفاصيل ونوفر بيئة مريحة لكل مريض دون قلق أو ألم.',
  },
];

const points = ['أشعة ثلاثية الأبعاد', 'تعقيم كامل', 'أطباء استشاريون', 'مواعيد مرنة'];

export function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden bg-gradient-to-b from-white to-brand-50/40">
      <div className="container-x mx-auto grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Image side */}
        <Reveal variant="scale" className="relative order-2 lg:order-1">
          <div className="relative">
            <div className="overflow-hidden rounded-4xl shadow-card">
              <img
                src={aboutImg}
                alt="عن العيادة"
                className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[500px]"
                loading="lazy"
              />
            </div>

            {/* experience badge */}
            <div className="absolute -bottom-6 right-6 rounded-3xl bg-brand-600 px-7 py-5 text-white shadow-glow">
              <p className="font-display text-4xl font-bold">+١٥</p>
              <p className="mt-1 text-sm font-medium text-brand-50">سنة من الخبرة</p>
            </div>

            {/* decorative dots */}
            <div className="absolute -left-5 -top-5 -z-10 grid grid-cols-5 gap-2.5">
              {[...Array(15)].map((_, i) => (
                <span key={i} className="h-2.5 w-2.5 rounded-full bg-brand-300" />
              ))}
            </div>
          </div>
        </Reveal>

        {/* Text side */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="inline-block rounded-full bg-brand-50 px-4 py-1.5 text-sm font-bold text-brand-700">
              عن العيادة
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink-950 sm:text-4xl lg:text-[2.75rem]">
              نحوّل زيارة طبيب الأسنان إلى تجربة مريحة ومطمئنة
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-lg leading-relaxed text-ink-600">
              في عيادة ابتسامة نؤمن أن كل ابتسامة تستحق رعاية استثنائية. نجمع بين الخبرة الطبية
              الواسعة والتقنيات العالمية الحديثة لنقدّم لك علاجًا دقيقًا ونتائج تدوم. هدفنا أن
              تغادر عيادتنا وأنت تبتسم بثقة.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 100}>
                <div className="rounded-2xl border border-ink-100 bg-white p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-100 text-brand-700">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 text-base font-extrabold text-ink-900">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm font-bold text-ink-800">
                  <CheckCircle2 className="h-5 w-5 text-brand-600" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
