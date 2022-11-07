import Footer from './components/Footer'
import Header from './components/Header'
import './styles/app.scss'
import SiteProvider from './context/SiteContext'
import { Hero } from './components/Hero'

function App() {
  return (
    <SiteProvider>
      <div className="container">
        <Header />
        <Hero />
        <Footer />
      </div>
    </SiteProvider>
  )
}

export default App
