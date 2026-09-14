// App — ordre LandingScrolly (âme) : hero → bandeau problème → scrolly 01–04 → solution
// → preuve → FAQ → footer CTA, sticky CTA en surimpression. Peau charte Consultant IA
// (7 couleurs, Public Sans) ; le grain papier vit dans styles/base.css — pas de 2e effet ici.
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProblemBanner } from './components/ProblemBanner'
import { ScrollySection } from './components/ScrollySection'
import { SolutionSection } from './components/SolutionSection'
import { ProofSection } from './components/ProofSection'
import { FAQSection } from './components/FAQSection'
import { FooterCTA } from './components/FooterCTA'
import { StickyCTA } from './components/StickyCTA'
import './App.css'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemBanner />
        <ScrollySection />
        <SolutionSection />
        <ProofSection />
        <FAQSection />
        <FooterCTA />
      </main>
      <StickyCTA />
    </>
  )
}
