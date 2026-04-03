import Header from "./components/Header"
import Intro from "./components/Intro"
import Gallery from "./components/Gallery"
import About from "./components/About"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Gallery />
        <About />
      </main>
      <Footer />
    </>
  )
}

export default App
