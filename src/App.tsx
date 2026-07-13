import Footer from './components/Footer'
import Nav from './components/Nav'
import Accommodation from './sections/Accommodation'
import ArtsCulture from './sections/ArtsCulture'
import CorporateWellness from './sections/CorporateWellness'
import Dinacharya from './sections/Dinacharya'
import Hero from './sections/Hero'
import KailasaPavilion from './sections/KailasaPavilion'
import Philosophy from './sections/Philosophy'
import Programmes from './sections/Programmes'
import Recreation from './sections/Recreation'
import Therapies from './sections/Therapies'
import WhyChooseUs from './sections/WhyChooseUs'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Philosophy />
        <Programmes />
        <Dinacharya />
        <Therapies />
        <KailasaPavilion />
        <Accommodation />
        <Recreation />
        <CorporateWellness />
        <ArtsCulture />
        <WhyChooseUs />
      </main>
      <Footer />
    </>
  )
}

export default App
