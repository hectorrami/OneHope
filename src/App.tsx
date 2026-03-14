import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SundayGathering from './components/SundayGatherings'
import Ministries from './components/Ministries'
import ThursdayGathering from './components/ThursdayGathering'
import Giving from './components/Giving'
import Sermons from './components/Setmons'

const App = () =>  {
  return (
    <>
      <Navbar />
      <Hero />
      <SundayGathering />
      <ThursdayGathering />
      <Ministries />
      <Giving />
      <Sermons/>
      <Footer />
    </>
  )
}

export default App
