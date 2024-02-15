import { useState } from 'react'
import Footer from './Footer'
import Content from './Content'
import Header from './Header'
import dave from './assets/dave.png'
import daveandcia from './assets/daveandcia.png'
import daveline from './assets/davelive.jpg'
import Hamburger_icon from './assets/Hamburger_icon.png'
import logodanielb from './assets/logo-daniel-b.png'
import logodaniel from './assets/logo-daniel.png'
import logodaniel1 from './assets/logo-daniel1.png'
import noodle from './assets/noodle.png'
import danielfoo from './assets/daniel-foo.jpg'
import buttomdown from './assets/button-down.svg'
import './assets/css/main.css'
import './assets/css/style.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Header/>
    <Content/>
    <Footer/>
    </div>
  )
}



export default App
