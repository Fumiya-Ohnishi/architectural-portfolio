import { Header } from '@/widgets/header'
import { Hero } from '@/widgets/hero'
import { Philosophy } from '@/widgets/philosophy'
import { Works } from '@/widgets/works'
import { Process } from '@/widgets/process'
import { Expertise } from '@/widgets/expertise'
import { Message } from '@/widgets/message'
import { Contact } from '@/widgets/contact'
import { Footer } from '@/widgets/footer'

export const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Philosophy />
        <Works />
        <Process />
        <Expertise />
        <Message />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
