import Layout from '@/components/Layout'

export default function VoorwaardenPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-white pt-20 md:pt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16">
        <h1 className="text-display font-sans text-apple-gray-900 mb-6">
          Algemene Voorwaarden
        </h1>
        <p className="text-lg text-apple-gray-600 mb-12 font-light">
          Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-heading font-sans text-apple-gray-900 mb-4">
              Toepasselijkheid
            </h2>
            <p className="text-lg text-apple-gray-600 leading-relaxed font-light">
              Deze algemene voorwaarden zijn van toepassing op alle diensten die StoryBeyond levert aan haar klanten.
            </p>
          </section>

          <section>
            <h2 className="text-heading font-sans text-apple-gray-900 mb-4">
              Diensten
            </h2>
            <p className="text-lg text-apple-gray-600 leading-relaxed font-light mb-4">
              StoryBeyond levert:
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-apple-gray-600 leading-relaxed font-light ml-4">
              <li>Websites (WordPress, Shopify, one-pagers)</li>
              <li>Merk- en communicatieadvies</li>
              <li>Visuele materialen zoals visitekaartjes en flyers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-heading font-sans text-apple-gray-900 mb-4">
              Offertes en prijzen
            </h2>
            <p className="text-lg text-apple-gray-600 leading-relaxed font-light">
              Alle offertes zijn vrijblijvend. Prijzen worden bevestigd in een offerte of contract en zijn exclusief btw tenzij anders vermeld.
            </p>
          </section>

          <section>
            <h2 className="text-heading font-sans text-apple-gray-900 mb-4">
              Betaling
            </h2>
            <p className="text-lg text-apple-gray-600 leading-relaxed font-light">
              Betaling dient te geschieden binnen de in de offerte of factuur vermelde termijn.
            </p>
          </section>

          <section>
            <h2 className="text-heading font-sans text-apple-gray-900 mb-4">
              Annulering en wijzigingen
            </h2>
            <p className="text-lg text-apple-gray-600 leading-relaxed font-light">
              Annuleringen of wijzigingen in de opdracht dienen schriftelijk te worden doorgegeven. StoryBeyond behoudt zich het recht voor om bij wijzigingen extra kosten in rekening te brengen.
            </p>
          </section>

          <section>
            <h2 className="text-heading font-sans text-apple-gray-900 mb-4">
              Aansprakelijkheid
            </h2>
            <p className="text-lg text-apple-gray-600 leading-relaxed font-light">
              StoryBeyond spant zich in om diensten professioneel en zorgvuldig uit te voeren, maar is niet aansprakelijk voor indirecte schade of verlies van inkomsten.
            </p>
          </section>

          <section className="bg-apple-gray-50 rounded-2xl p-8 md:p-10 border border-apple-gray-200">
            <h2 className="text-heading font-sans text-apple-gray-900 mb-4">
              Contact voor voorwaarden
            </h2>
            <p className="text-lg text-apple-gray-600 leading-relaxed font-light mb-4">
              Tompa – StoryBeyond (by Berghsen)
            </p>
            <p className="text-lg text-apple-gray-600 leading-relaxed font-light">
              E-mail: <a href="mailto:hello@storybeyond.io" className="text-apple-blue-700 hover:underline">hello@storybeyond.io</a>
            </p>
            <p className="text-lg text-apple-gray-600 leading-relaxed font-light">
              Telefoon: <a href="tel:+32490198049" className="text-apple-blue-700 hover:underline">+32 490 19 80 49</a>
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
