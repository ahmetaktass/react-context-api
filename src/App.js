import Footer from './components/Footer'
import Header from './components/Header'
import './styles/app.scss'
import SiteProvider from './context/SiteContext'

function App() {
  return (
    <SiteProvider>
      <h1>REACT CONTEXT APİ TUTORİAL</h1>
     
      <Header />
      <h1>App</h1>
      <Footer />
    </SiteProvider>
  )
}

export default App
