import Layout from '@/components/Layout'

export default function CookiesPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-white pt-20 md:pt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16">
        <h1 className="text-display font-sans text-apple-gray-900 mb-6">
          Cookieverklaring
        </h1>
        <p className="text-lg text-apple-gray-600 mb-12 font-light">
          Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <p className="text-lg text-apple-gray-600 leading-relaxed font-light">
              We gebruiken cookies om uw ervaring op onze website te verbeteren.
            </p>
          </section>

          <section>
            <h2 className="text-heading font-sans text-apple-gray-900 mb-4">
              Welke cookies gebruiken we?
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-apple-gray-900 mb-2">
                  Functionele cookies
                </h3>
                <p className="text-lg text-apple-gray-600 leading-relaxed font-light">
                  Noodzakelijk voor de werking van de site.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-apple-gray-900 mb-2">
                  Analytische cookies
                </h3>
                <p className="text-lg text-apple-gray-600 leading-relaxed font-light">
                  Voor het meten van websitebezoek en gebruik (bijv. Vercel Analytics).
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-heading font-sans text-apple-gray-900 mb-4">
              Uw keuzes
            </h2>
            <p className="text-lg text-apple-gray-600 leading-relaxed font-light">
              Bij het bezoeken van onze website krijgt u de mogelijkheid om cookies te accepteren of te weigeren. U kunt uw keuze altijd aanpassen in uw browserinstellingen.
            </p>
          </section>

          <section>
            <h2 className="text-heading font-sans text-apple-gray-900 mb-4">
              Duur van cookies
            </h2>
            <p className="text-lg text-apple-gray-600 leading-relaxed font-light">
              Cookies blijven maximaal 12 maanden actief, afhankelijk van het type cookie.
            </p>
          </section>
        </div>

          <div className="mt-12 pt-8 border-t border-apple-gray-200">
            <a href="/" className="text-apple-blue-700 hover:underline font-medium">
              ← Terug naar homepage
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
