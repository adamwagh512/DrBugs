import Image from 'next/image'
import Navbar from '@/components/navbar'
import Main from '../components/Main'
import About from '../components/About'
import Contact from '../components/Contact'
import Services from '@/components/Services'


export default function Home() {
  return (
      <div id='about'>
        <Navbar />
        <Main />
        <About />
        <Services />
        <Contact />
      </div>
  )
}


//npm add react-icons to add icons