
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Catalog from '@/components/Catalog'
import Reviews from '@/components/Reviews'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Chatham Liquor Store</title>
        <meta name="description" content="Your premium liquor destination in Chatham, MA." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-50 text-gray-900" >
        <Navbar />
        <Hero />
        <About />
        <Catalog />
        <Reviews />
        <Contact />
      </main>
    </>
  )
} 