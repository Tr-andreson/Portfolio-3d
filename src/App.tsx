import { FeatureWork } from "./components/FeatureWork"
import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import "./index.css"

const App = () => {
  return (
    <div className="space-y-4 my-8 ">
      <Navbar />
      <Hero />
      <FeatureWork />
      <Footer />
    </div>
  )
}

export default App
