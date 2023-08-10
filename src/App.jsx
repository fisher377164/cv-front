import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar, Banner, Projects, Footer, Contact, Skills } from './components'

function App() {
    return (
        <div className="App">
            <NavBar />
            <Banner />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
