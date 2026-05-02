import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Steps from '@/components/Steps'
import AppShowcase from '@/components/AppShowcase'
import StatsBand from '@/components/StatsBand'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <div className="divider" />
      <Steps />
      <AppShowcase />
      <StatsBand />
      <Pricing />
      <Footer />
    </>
  )
}
