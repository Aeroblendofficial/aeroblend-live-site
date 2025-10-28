import Head from 'next/head'
import Header from '../components/Header'
import PreorderForm from '../components/PreorderForm'

export default function Home(){
  const instagram = process.env.NEXT_PUBLIC_IG || 'drink.aeroblend'
  const site = process.env.NEXT_PUBLIC_PREORDER_URL || '#'
  return (
    <>
      <Head>
        <title>AeroBlend — Biology in a Bottle</title>
        <meta name="description" content="AeroBlend — Nature's Oxygen Drink. Pre-order now." />
        <meta property="og:title" content="AeroBlend — Biology in a Bottle" />
        <meta property="og:description" content="Pre-order the AeroBlend glass bottle." />
        <meta property="og:image" content="/product.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen px-6 md:px-20 py-10">
        <Header instagram={instagram} />
        <section className="grid md:grid-cols-2 gap-8 items-center mt-6">
          <div>
            <h2 className="text-4xl font-extrabold">Biology in a Bottle — Nature's Oxygen Drink</h2>
            <p className="mt-4 text-gray-300">AeroBlend combines science and nature to create a wellness experience that refreshes your body at a biological level. Designed for modern living — clean, organic, and oxygen-rich.</p>
            <div className="mt-6"><PreorderForm liveUrl={site} /></div>
            <div className="mt-6 flex items-center gap-4">
              <img src="/instagram_qr.png" alt="instagram qr" className="w-24 h-24 rounded-md border" />
              <a href={'https://instagram.com/' + instagram} target="_blank" rel="noreferrer" className="text-sm text-gray-200">Follow @{instagram}</a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative">
              <img src="/product.png" alt="AeroBlend product" className="max-w-xs rounded-xl shadow-2xl" />
            </div>
          </div>
        </section>

        <footer className="mt-16 border-t border-gray-800 pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img src="/instagram_qr.png" alt="instagram qr" className="w-20 h-20 rounded-md border" />
              <div>
                <div className="text-sm">Follow us</div>
                <div className="text-lg font-semibold">@{instagram}</div>
              </div>
            </div>
            <div className="text-sm text-gray-400">© 2025 AeroBlend. All rights reserved.</div>
          </div>
        </footer>
      </main>
    </>
  )
}
