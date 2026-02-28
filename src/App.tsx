import Hero from './components/Hero'
import Navbar from './components/Navbar'
import EventList from './components/EventList'
import Footer from './components/Footer'
import Schedule from './components/Schedule'

const App = () =>  {
  return (
    <>
      <Navbar />
      <Hero />
      <Schedule />
      <EventList />
      <Footer />
    </>
  )
}

export default App
