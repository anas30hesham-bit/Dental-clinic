import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { Reveal } from '@/components/Reveal';

const contactInfo = [
  { icon: Phone, label: 'الهاتف', value: '٠٥٠٠٠٠٠٠٠', href: 'tel:+966500000000' },
  { icon: Mail, label: 'البريد الإلكتروني', value: 'info@ebtisama.com', href: 'mailto:info@ebtisama.com' },
  { icon: MapPin, label: 'العنوان', value: 'الرياض، حي العليا، طريق الملك فهد', href: '#' },
  { icon: Clock, label: 'ساعات العمل', value: 'السبت - الخميس: ٩ص - ٩م', href: '#' },
];

const services = [
  'زراعة الأسنان',
  'تبييض الأسنان',
  'فينير وتجميل',
  'تقويم الأسنان',
  'علاج الجذور',
  'أسنان الأطفال',
  'حشوات تجميلية',
  'فحص دوري',
];

export function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    service: services[0],
    date: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  return (
    <section id="booking" className="section-pad relative overflow-hidden bg-gradient-to-b from-brand-50/40 to-white">
      <div className="pointer-events-none absolute -top-10 left-0 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl" />

      <div className="container-x mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="inline-block rounded-full bg-brand-50 px-4 py-1.5 text-sm font-bold text-brand-700">
              احجز موعد
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-4 font-display text-3xl font-bold text-ink-950 sm:text-4xl lg:text-5xl">
              احجز موعدك في دقائق
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-4 text-lg text-ink-600">
              املأ النموذج وسيتواصل معك فريقنا لتأكيد الموعد. ابتسامتك تستحق الرعاية.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Contact info */}
          <Reveal className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between gap-6 rounded-3xl bg-brand-700 p-8 text-white shadow-card">
              <div>
                <h3 className="font-display text-2xl font-bold">معلومات التواصل</h3>
                <p className="mt-2 text-brand-100">
                  نحن هنا للإجابة على كل استفساراتك ومساعدتك في حجز الموعد المناسب.
                </p>
              </div>
              <ul className="space-y-5">
                {contactInfo.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      className="group flex items-start gap-4 transition-colors hover:text-brand-200"
                    >
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-600 text-brand-100 transition-all group-hover:bg-brand-500">
                        <c.icon className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block text-xs text-brand-200">{c.label}</span>
                        <span className="text-base font-bold">{c.value}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl bg-brand-600/60 p-4 text-sm text-brand-50">
                في حالات الطوارئ اتصل بنا مباشرة على الرقم الموحد. نستقبل الحالات الطارئة على مدار الساعة.
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal variant="scale" delay={120} className="lg:col-span-3">
            <div className="rounded-3xl border border-ink-100 bg-white p-8 shadow-card">
              {submitted ? (
                <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                  <span className="grid h-20 w-20 place-items-center rounded-full bg-brand-100 text-brand-700 animate-scale-in">
                    <CheckCircle2 className="h-10 w-10" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-bold text-ink-950">تم استلام طلبك!</h3>
                  <p className="mt-3 max-w-sm text-ink-600">
                    شكرًا لك يا {form.name || 'عزيزي'}. سيتواصل معك فريق عيادة ابتسامة خلال ٢٤ ساعة
                    لتأكيد موعدك.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: '', phone: '', service: services[0], date: '', notes: '' });
                    }}
                    className="btn-ghost mt-8"
                  >
                    إرسال طلب آخر
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="الاسم الكامل">
                      <input
                        required
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                        placeholder="اكتب اسمك"
                        className="input"
                      />
                    </Field>
                    <Field label="رقم الجوال">
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        placeholder="05xxxxxxxx"
                        className="input"
                      />
                    </Field>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="الخدمة المطلوبة">
                      <select
                        value={form.service}
                        onChange={(e) => update('service', e.target.value)}
                        className="input"
                      >
                        {services.map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </Field>
                    <Field label="التاريخ المفضل">
                      <input
                        type="date"
                        value={form.date}
                        onChange={(e) => update('date', e.target.value)}
                        className="input"
                      />
                    </Field>
                  </div>
                  <Field label="ملاحظات (اختياري)">
                    <textarea
                      value={form.notes}
                      onChange={(e) => update('notes', e.target.value)}
                      rows={3}
                      placeholder="أخبرنا بأي تفاصيل إضافية..."
                      className="input resize-none"
                    />
                  </Field>
                  <button type="submit" className="btn-primary w-full text-base">
                    <Send className="h-5 w-5" />
                    تأكيد الحجز
                  </button>
                  <p className="text-center text-xs text-ink-400">
                    بإرسالك الطلب فإنك توافق على سياسة الخصوصية الخاصة بنا.
                  </p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          border-radius: 0.875rem;
          border: 1.5px solid #e3ebee;
          background: #f9fbfb;
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          font-weight: 500;
          color: #1f2a30;
          transition: all 0.25s ease;
          outline: none;
          font-family: inherit;
        }
        .input::placeholder { color: #9fb0b8; font-weight: 400; }
        .input:focus {
          border-color: #14c28e;
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(20, 194, 142, 0.12);
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-ink-800">{label}</span>
      {children}
    </label>
  );
}
