import { useEffect, useState } from 'react'
import {
  Award,
  CalendarCheck,
  Check,
  ChevronRight,
  Clock,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Scissors,
  ShieldCheck,
  Sparkles,
  Star,
  X
} from 'lucide-react'

const whatsappUrl =
  'https://wa.me/393339876543?text=Ciao%2C%20vorrei%20prenotare%20un%20appuntamento%20da%20Vanto%20Barber%20Studio'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Servizi', href: '#servizi' },
  { label: 'Galleria', href: '#galleria' },
  { label: 'Prezzi', href: '#prezzi' },
  { label: 'Recensioni', href: '#recensioni' },
  { label: 'Contatti', href: '#contatti' }
]

const images = {
  hero:
    'https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=2200&q=90',
  about:
    'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&w=1300&q=85',
  cta:
    'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?auto=format&fit=crop&w=1800&q=85'
}

const services = [
  {
    icon: Scissors,
    name: 'Taglio Uomo',
    price: '€25',
    duration: '30 min',
    description: 'Taglio personalizzato con consulenza e styling finale.'
  },
  {
    icon: Sparkles,
    name: 'Fade / Sfumatura',
    price: '€28',
    duration: '35 min',
    description: 'Sfumatura precisa con finitura professionale.'
  },
  {
    icon: ShieldCheck,
    name: 'Barba Premium',
    price: '€18',
    duration: '25 min',
    description: 'Modellatura barba con panno caldo e prodotti specifici.'
  },
  {
    icon: Award,
    name: 'Taglio + Barba',
    price: '€40',
    duration: '60 min',
    description: 'Servizio completo per un look curato e definito.'
  },
  {
    icon: Star,
    name: 'Grooming Deluxe',
    price: '€55',
    duration: '75 min',
    description: 'Taglio, barba, trattamento viso rapido e styling.'
  },
  {
    icon: CalendarCheck,
    name: 'Styling Evento',
    price: '€30',
    duration: '40 min',
    description: 'Preparazione capelli e barba per eventi o occasioni speciali.'
  }
]

const gallery = [
  {
    title: 'Fade preciso',
    image:
      'https://images.unsplash.com/photo-1593702288056-7927b442d0df?auto=format&fit=crop&w=900&q=85'
  },
  {
    title: 'Barba curata',
    image:
      'https://images.unsplash.com/photo-1519500528352-2d1460418d41?auto=format&fit=crop&w=900&q=85'
  },
  {
    title: 'Poltrona barber',
    image:
      'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=900&q=85'
  },
  {
    title: 'Strumenti premium',
    image:
      'https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?auto=format&fit=crop&w=900&q=85'
  },
  {
    title: 'Studio elegante',
    image:
      'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=900&q=85'
  },
  {
    title: 'Look moderno',
    image:
      'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=900&q=85'
  }
]

const benefits = [
  {
    icon: Check,
    title: 'Precisione nei dettagli',
    text: 'Ogni linea, sfumatura e finitura viene lavorata con metodo e attenzione.'
  },
  {
    icon: ShieldCheck,
    title: 'Ambiente riservato',
    text: 'Uno studio elegante, ordinato e pensato per un’esperienza senza fretta.'
  },
  {
    icon: Sparkles,
    title: 'Prodotti professionali',
    text: 'Selezioniamo cere, oli e trattamenti adatti al grooming maschile.'
  },
  {
    icon: MessageCircle,
    title: 'Prenotazione veloce',
    text: 'Contatto diretto su WhatsApp per scegliere servizio e orario in pochi minuti.'
  }
]

const testimonials = [
  {
    quote: 'Taglio perfetto, ambiente elegante e servizio molto professionale.',
    name: 'Luca R.'
  },
  {
    quote:
      'Finalmente una barberia curata nei dettagli. Ottima sfumatura e barba impeccabile.',
    name: 'Matteo G.'
  },
  {
    quote: 'Personale gentile, puntuale e molto preciso. Consigliatissimo.',
    name: 'Andrea P.'
  }
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [formSent, setFormSent] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity()
      return
    }
    setFormSent(true)
    event.currentTarget.reset()
  }

  return (
    <div className="min-h-screen overflow-hidden bg-carbon font-sans text-bone">
      <Header scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} closeMenu={closeMenu} />
      <main>
        <Hero />
        <About />
        <Services />
        <BookingCta />
        <Gallery />
        <Prices />
        <WhyChoose />
        <Reviews />
        <Contact formSent={formSent} handleSubmit={handleSubmit} />
      </main>
      <Footer />
    </div>
  )
}

function Header({ scrolled, menuOpen, setMenuOpen, closeMenu }) {
  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-carbon/86 shadow-2xl shadow-black/40 backdrop-blur-xl'
          : 'bg-carbon/72 backdrop-blur-md'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" onClick={closeMenu} className="group leading-none">
          <span className="block font-display text-xl font-bold tracking-wide text-bone md:text-2xl">
            Vanto Barber Studio
          </span>
          <span className="mt-1 block text-[0.66rem] font-bold uppercase tracking-[0.36em] text-champagne">
            Premium Grooming
          </span>
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-semibold text-bone/72 transition hover:text-champagne">
              {link.label}
            </a>
          ))}
        </div>
        <div className="hidden lg:block">
          <Button href={whatsappUrl} external compact>
            Prenota Ora
          </Button>
        </div>
        <button
          type="button"
          aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
          className="grid size-11 place-items-center border border-white/10 bg-white/5 text-bone transition hover:border-champagne/40 hover:text-champagne lg:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      <div className={`grid border-t border-white/10 bg-carbon/96 transition-all duration-300 lg:hidden ${menuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-5">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu} className="border-b border-white/[0.08] py-4 text-base font-semibold text-bone/82">
                {link.label}
              </a>
            ))}
            <Button href={whatsappUrl} external className="mt-4 w-full justify-center">
              Prenota Ora
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] overflow-hidden pt-24">
      <div className="absolute inset-0 scale-105 bg-cover bg-center" style={{ backgroundImage: `url(${images.hero})` }} />
      <div className="absolute inset-0 bg-gradient-to-r from-carbon via-carbon/84 to-carbon/38" />
      <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/20 to-black/20" />
      <div className="relative mx-auto flex min-h-[calc(92vh-6rem)] max-w-7xl items-center px-5 py-16 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-3 border border-champagne/35 bg-black/30 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-champagne backdrop-blur">
            <Clock size={16} />
            Aperto dal martedì alla domenica · 09:00 - 20:00
          </div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.38em] text-bone/70">
            Dal 2021 · Barberia moderna italiana
          </p>
          <h1 className="font-display text-5xl font-bold leading-[0.98] text-bone md:text-7xl lg:text-8xl">
            Stile preciso. Esperienza premium.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-bone/78 md:text-xl">
            Tagli professionali, cura della barba e grooming maschile in un ambiente elegante e riservato.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button href={whatsappUrl} external>
              Prenota su WhatsApp
            </Button>
            <Button href="#servizi" variant="secondary">
              Scopri i Servizi
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <Section id="chi-siamo" eyebrow="Chi siamo" title="Un rituale maschile costruito con precisione.">
      <div className="grid items-center gap-10 lg:grid-cols-[1.04fr_0.96fr]">
        <div>
          <p className="max-w-3xl text-lg leading-9 text-bone/74">
            Vanto Barber Studio nasce per offrire un’esperienza di grooming maschile curata in ogni dettaglio. Dalla consulenza iniziale al taglio finale, ogni servizio è pensato per valorizzare lo stile personale del cliente con precisione, eleganza e professionalità.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {['Consulenza personalizzata', 'Tecniche moderne', 'Ambiente premium'].map((chip) => (
              <div key={chip} className="premium-ring bg-white/[0.035] px-5 py-4 text-sm font-bold text-bone/84">
                {chip}
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 border border-champagne/18" />
          <img src={images.about} alt="Barbiere professionale al lavoro in uno studio elegante" className="relative aspect-[4/5] w-full object-cover" />
          <div className="absolute bottom-5 left-5 right-5 border border-white/10 bg-carbon/78 p-5 backdrop-blur">
            <p className="font-display text-3xl font-bold text-champagne">2021</p>
            <p className="mt-1 text-sm font-semibold text-bone/72">Metodo moderno, atmosfera italiana, cura sartoriale.</p>
          </div>
        </div>
      </div>
    </Section>
  )
}

function Services() {
  return (
    <Section id="servizi" eyebrow="Servizi" title="Tagli, barba e trattamenti per un look definito." intro="Servizi essenziali e deluxe, pensati per chi vuole uscire dallo studio con uno stile chiaro, pulito e personale.">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => <ServiceCard key={service.name} service={service} />)}
      </div>
    </Section>
  )
}

function ServiceCard({ service }) {
  const Icon = service.icon
  return (
    <article className="group premium-ring bg-white/[0.035] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06] hover:shadow-glow">
      <div className="mb-6 flex items-center justify-between">
        <div className="grid size-12 place-items-center bg-champagne/12 text-champagne"><Icon size={23} /></div>
        <span className="font-display text-3xl font-bold text-champagne">{service.price}</span>
      </div>
      <h3 className="font-display text-2xl font-bold text-bone">{service.name}</h3>
      <p className="mt-3 min-h-14 text-sm leading-6 text-bone/66">{service.description}</p>
      <div className="mt-6 flex items-center gap-2 text-sm font-bold text-steel"><Clock size={16} /> Durata: {service.duration}</div>
    </article>
  )
}

function BookingCta() {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${images.cta})` }} />
      <div className="absolute inset-0 bg-carbon/86" />
      <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-5 lg:flex-row lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.32em] text-champagne">Prenotazioni</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-bone md:text-5xl">Pronto per rinnovare il tuo stile?</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-bone/72">Prenota il tuo appuntamento su WhatsApp e scegli il servizio più adatto a te.</p>
        </div>
        <Button href={whatsappUrl} external>Prenota su WhatsApp</Button>
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <Section id="galleria" eyebrow="Galleria" title="Dettagli, atmosfera e stile.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((item) => (
          <figure key={item.title} className="group relative overflow-hidden bg-ink">
            <img src={item.image} alt={item.title} className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/86 to-transparent p-5">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-champagne">{item.title}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  )
}

function Prices() {
  return (
    <Section id="prezzi" eyebrow="Prezzi" title="Listino chiaro, esperienza premium." intro="Una proposta semplice da consultare, con servizi pensati per appuntamenti rapidi o percorsi completi.">
      <div className="overflow-hidden border border-white/10 bg-white/[0.035]">
        {services.map((service, index) => (
          <div key={service.name} className={`grid gap-3 px-5 py-5 sm:grid-cols-[1fr_auto_auto] sm:items-center md:px-7 ${index !== services.length - 1 ? 'border-b border-white/10' : ''}`}>
            <div>
              <h3 className="font-display text-2xl font-bold text-bone">{service.name}</h3>
              <p className="mt-1 text-sm text-bone/60">{service.description}</p>
            </div>
            <span className="text-sm font-bold text-steel">Durata: {service.duration}</span>
            <span className="font-display text-3xl font-bold text-champagne">{service.price}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-bone/52">I prezzi possono variare in base alla consulenza e al servizio richiesto.</p>
    </Section>
  )
}

function WhyChoose() {
  return (
    <Section id="perche" eyebrow="Perché scegliere Vanto" title="La differenza si vede prima ancora dello styling.">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {benefits.map((benefit) => {
          const Icon = benefit.icon
          return (
            <article key={benefit.title} className="premium-ring bg-white/[0.035] p-6 transition hover:bg-white/[0.06]">
              <Icon className="text-champagne" size={28} />
              <h3 className="mt-5 font-display text-2xl font-bold text-bone">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-6 text-bone/64">{benefit.text}</p>
            </article>
          )
        })}
      </div>
    </Section>
  )
}

function Reviews() {
  return (
    <Section id="recensioni" eyebrow="Recensioni" title="Clienti che cercano precisione, non compromessi.">
      <div className="grid gap-5 lg:grid-cols-3">
        {testimonials.map((review) => (
          <article key={review.name} className="premium-ring bg-white/[0.035] p-6">
            <div className="text-lg tracking-[0.18em] text-champagne">★★★★★</div>
            <p className="mt-5 text-base leading-8 text-bone/78">“{review.quote}”</p>
            <p className="mt-6 font-bold text-bone">{review.name}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}

function Contact({ formSent, handleSubmit }) {
  return (
    <Section id="contatti" eyebrow="Contatti e Prenotazioni" title="Prenota il tuo prossimo appuntamento.">
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="space-y-5">
          <ContactItem icon={MapPin} title="Indirizzo" text="Via Garibaldi 18, Cagliari, Italia" />
          <ContactItem icon={Clock} title="Orari" text="Martedì - Domenica: 09:00 - 20:00 · Lunedì: Chiuso" />
          <ContactItem icon={Phone} title="Telefono" text="+39 333 987 6543" />
          <ContactItem icon={Mail} title="Email" text="info@vantobarber.it" />
          <Button href={whatsappUrl} external className="w-full justify-center sm:w-auto">Prenota su WhatsApp</Button>
          <div className="premium-ring relative min-h-72 overflow-hidden bg-[#181614]">
            <iframe title="Mappa Cagliari" src="https://www.google.com/maps?q=Cagliari%2C%20Italia&output=embed" className="h-72 w-full border-0 opacity-70 grayscale" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-carbon/95 to-transparent p-5">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-champagne">Cagliari · Italia</p>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="premium-ring bg-white/[0.035] p-5 md:p-7">
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Nome" name="name" placeholder="Il tuo nome" required />
            <Field label="Email" name="email" placeholder="nome@email.it" type="email" required />
            <Field label="Servizio desiderato" name="service" as="select" required />
            <Field label="Data preferita" name="date" type="date" required />
            <Field label="Messaggio" name="message" placeholder="Scrivi la tua richiesta" as="textarea" required className="md:col-span-2" />
          </div>
          {formSent && <div className="mt-5 border border-champagne/30 bg-champagne/10 px-4 py-3 text-sm font-semibold text-bone">Richiesta inviata con successo. Ti contatteremo presto.</div>}
          <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-champagne px-6 py-4 text-sm font-extrabold uppercase tracking-[0.16em] text-carbon transition hover:bg-bone sm:w-auto">
            Richiedi appuntamento <ChevronRight size={18} />
          </button>
        </form>
      </div>
    </Section>
  )
}

function Field({ label, name, as, className = '', ...props }) {
  const inputClass = 'mt-2 w-full border border-white/10 bg-carbon/70 px-4 py-3 text-bone outline-none transition placeholder:text-bone/34 focus:border-champagne/60'
  return (
    <label className={`block text-sm font-bold text-bone/76 ${className}`}>
      {label}
      {as === 'textarea' ? (
        <textarea name={name} rows="5" className={inputClass} {...props} />
      ) : as === 'select' ? (
        <select name={name} className={inputClass} defaultValue="" {...props}>
          <option value="" disabled>Scegli un servizio</option>
          {services.map((service) => <option key={service.name} value={service.name}>{service.name}</option>)}
        </select>
      ) : (
        <input name={name} className={inputClass} {...props} />
      )}
    </label>
  )
}

function ContactItem({ icon: Icon, title, text }) {
  return (
    <div className="premium-ring flex gap-4 bg-white/[0.035] p-5">
      <Icon className="mt-1 shrink-0 text-champagne" size={22} />
      <div>
        <h3 className="font-bold text-bone">{title}</h3>
        <p className="mt-1 text-sm leading-6 text-bone/64">{text}</p>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#080807] px-5 py-12 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <h2 className="font-display text-3xl font-bold text-bone">Vanto Barber Studio</h2>
          <p className="mt-4 max-w-md text-sm leading-6 text-bone/62">Barberia premium per tagli moderni, barba e grooming maschile.</p>
          <p className="mt-5 text-xs uppercase tracking-[0.22em] text-champagne">Website demo realizzato per presentazione commerciale.</p>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.24em] text-bone">Links rapidi</h3>
          <div className="mt-4 grid gap-3">
            {navLinks.map((link) => <a key={link.href} href={link.href} className="text-sm text-bone/62 transition hover:text-champagne">{link.label}</a>)}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.24em] text-bone">Social</h3>
          <div className="mt-4 grid gap-3">
            {['Instagram', 'TikTok', 'Facebook'].map((social) => (
              <a key={social} href="#home" className="inline-flex items-center gap-2 text-sm text-bone/62 transition hover:text-champagne"><Instagram size={16} />{social}</a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-bone/48">© 2026 Vanto Barber Studio. Tutti i diritti riservati.</div>
    </footer>
  )
}

function Section({ id, eyebrow, title, intro, children }) {
  return (
    <section id={id} className="px-5 py-20 md:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.34em] text-champagne">{eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-bone md:text-6xl">{title}</h2>
          {intro && <p className="mt-5 text-base leading-8 text-bone/66 md:text-lg">{intro}</p>}
        </div>
        {children}
      </div>
    </section>
  )
}

function Button({ href, children, external = false, compact = false, variant = 'primary', className = '' }) {
  const styles = variant === 'primary' ? 'bg-champagne text-carbon hover:bg-bone' : 'border border-white/[0.18] bg-white/[0.08] text-bone hover:border-champagne/60 hover:text-champagne'
  return (
    <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} className={`inline-flex items-center gap-2 ${compact ? 'px-5 py-3' : 'px-6 py-4'} text-sm font-extrabold uppercase tracking-[0.16em] transition ${styles} ${className}`}>
      {children}<ChevronRight size={18} />
    </a>
  )
}

export default App
