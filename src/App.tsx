import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Services from './components/Services'
import ExecutiveFitness from './components/ExecutiveFitness'
import WhyUs from './components/WhyUs'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Hours from './components/Hours'
import FreePTSession from './components/FreePTSession'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import { useLanguage } from './lib/i18n'

export default function App() {
  const { lang } = useLanguage()

  return (
    <>
      <a className="skip-link" href="#main">
        {lang === 'ar' ? 'تجاوز إلى المحتوى' : 'Skip to content'}
      </a>

      <Header />

      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <ExecutiveFitness />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <Hours />
        <FreePTSession />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  )
}