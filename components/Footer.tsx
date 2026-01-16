export default function Footer() {
  return (
    <footer className="section-divider px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16 bg-apple-gray-900 text-apple-gray-400">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mb-8 md:mb-12">
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">StoryBeyond</h3>
            <p className="text-apple-gray-500 text-sm leading-relaxed font-light mb-2">
              Digital agency voor kleine bedrijven en zelfstandigen.
            </p>
            <p className="text-apple-gray-500 text-sm font-light">
              1014.506.964
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4 text-sm">Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#work" className="text-apple-gray-500 hover:text-white transition-colors font-light">Wat wij doen</a></li>
              <li><a href="/#contact" className="text-apple-gray-500 hover:text-white transition-colors font-light">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4 text-sm">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#contact" className="text-apple-gray-500 hover:text-white transition-colors font-light">Neem contact op</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-apple-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-apple-gray-500 font-light">
            StoryBeyond by Berghsen
          </p>
          <p className="text-apple-gray-500 text-sm font-light">
              BE 1014.506.964
            </p>
          <div className="flex flex-wrap gap-4 text-sm text-apple-gray-500 font-light">
            <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/cookies" className="hover:text-white transition-colors">Cookies</a>
            <a href="/juridisch" className="hover:text-white transition-colors">Juridisch</a>
            <a href="/voorwaarden" className="hover:text-white transition-colors">Voorwaarden</a>
          </div>
          <p className="text-sm text-apple-gray-500 font-light">
            © {new Date().getFullYear()} StoryBeyond. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
