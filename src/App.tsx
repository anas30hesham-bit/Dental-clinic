import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { Services } from '@/components/Services';
import { About } from '@/components/About';
import { Stats } from '@/components/Stats';
import { Doctors, Testimonials } from '@/components/Doctors';
import { Booking } from '@/components/Booking';
import { Footer } from '@/components/Footer';
import { ScrollTop } from '@/components/ScrollTop';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <About />
        <Stats />
        <Doctors />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;
