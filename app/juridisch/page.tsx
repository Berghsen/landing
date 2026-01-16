import Layout from '@/components/Layout'

export default function JuridischPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-white pt-20 md:pt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16">
        <h1 className="text-display font-sans text-apple-gray-900 mb-6">
          Juridische vermeldingen
        </h1>
        <p className="text-lg text-apple-gray-600 mb-12 font-light">
          Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section className="bg-apple-gray-50 rounded-2xl p-8 md:p-10 border border-apple-gray-200">
            <h2 className="text-heading font-sans text-apple-gray-900 mb-6">
              Bedrijfsgegevens
            </h2>
            <div className="space-y-3 text-lg text-apple-gray-600 leading-relaxed font-light">
              <p>
                <strong className="text-apple-gray-900">Bedrijf:</strong> Berghsen
              </p>
              <p>
                <strong className="text-apple-gray-900">Handelsnaam:</strong> StoryBeyond
              </p>
              <p>
                <strong className="text-apple-gray-900">Ondernemingsnummer / BTW:</strong> BE 1014.506.964
              </p>
              <p>
                <strong className="text-apple-gray-900">E-mail:</strong>{' '}
                <a href="mailto:hello@storybeyond.io" className="text-apple-blue-700 hover:underline">
                  hello@storybeyond.io
                </a>
              </p>
              <p>
                <strong className="text-apple-gray-900">Telefoon:</strong>{' '}
                <a href="tel:+32490198049" className="text-apple-blue-700 hover:underline">
                  +32 490 19 80 49
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-heading font-sans text-apple-gray-900 mb-4">
              Auteursrechten
            </h2>
            <p className="text-lg text-apple-gray-600 leading-relaxed font-light">
              Alle inhoud op deze website is eigendom van Berghsen / StoryBeyond en mag niet worden gekopieerd zonder toestemming.
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
