import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import BonusProgram from './components/BonusProgram/BonusProgram'
import BonusConditions from './components/BonusConditions/BonusConditions'
import BonusCTA from './components/BonusCTA/BonusCTA'
import Benefits from './components/Benefits/Benefits'
import WhoFits from './components/WhoFits/WhoFits'
import Conditions from './components/Conditions/Conditions'
import Steps from './components/Steps/Steps'
import FAQ from './components/FAQ/FAQ'
import FinalCTA from './components/FinalCTA/FinalCTA'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <BonusProgram />
        <BonusConditions />
        <BonusCTA />
        <Benefits />
        <WhoFits />
        <Conditions />
        <Steps />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
