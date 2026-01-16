import Layout from '@/components/Layout'

export default function PrivacyPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-white pt-20 md:pt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16">
        <h1 className="text-display font-sans text-apple-gray-900 mb-6">
          Privacyverklaring
        </h1>
        <p className="text-lg text-apple-gray-600 mb-12 font-light">
          Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-heading font-sans text-apple-gray-900 mb-4">
              Welke gegevens verzamelen we?
            </h2>
            <p className="text-lg text-apple-gray-600 leading-relaxed font-light">
              We verzamelen persoonlijke gegevens die u vrijwillig aan ons verstrekt, zoals naam, e-mailadres en telefoonnummer wanneer u contact met ons opneemt via het contactformulier of e-mail.
            </p>
          </section>

          <section>
            <h2 className="text-heading font-sans text-apple-gray-900 mb-4">
              Waarom we gegevens verzamelen
            </h2>
            <p className="text-lg text-apple-gray-600 leading-relaxed font-light">
              Uw gegevens worden uitsluitend gebruikt om uw vragen te beantwoorden, offertes te verstrekken en onze diensten te leveren.
            </p>
          </section>

          <section>
            <h2 className="text-heading font-sans text-apple-gray-900 mb-4">
              Bewaring en beveiliging
            </h2>
            <p className="text-lg text-apple-gray-600 leading-relaxed font-light">
              We bewaren uw gegevens niet langer dan nodig is en nemen passende technische en organisatorische maatregelen om ze te beschermen.
            </p>
          </section>

          <section>
            <h2 className="text-heading font-sans text-apple-gray-900 mb-4">
              Uw rechten
            </h2>
            <p className="text-lg text-apple-gray-600 leading-relaxed font-light">
              U heeft het recht om uw gegevens in te zien, te corrigeren of te laten verwijderen. U kunt dit doen door contact met ons op te nemen via de onderstaande gegevens.
            </p>
          </section>

          <section className="bg-apple-gray-50 rounded-2xl p-8 md:p-10 border border-apple-gray-200">
            <h2 className="text-heading font-sans text-apple-gray-900 mb-4">
              Contact
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
