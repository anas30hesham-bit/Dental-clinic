import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-6 left-6 z-40 grid h-12 w-12 place-items-center rounded-full bg-brand-600 text-white shadow-glow transition-all duration-400 hover:bg-brand-700 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
      aria-label="العودة للأعلى"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
