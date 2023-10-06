import Image from 'next/image'
import Navbar from '@/components/navbar'
import Main from '../components/Main'
import About from '../components/About'


export default function Home() {
  return (
      <div id='about'>
        <Navbar />
        <Main />
        <About />
      </div>
  )
}


//npm add react-icons to add icons