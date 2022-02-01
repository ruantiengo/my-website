import type { NextPage } from 'next'
import { Head } from 'next/document'



import { AboutMe } from '../components/AboutMe'
import { Certificates } from '../components/Certificates'
import { Footer } from '../components/Footer'
import { Historic } from '../components/History'
import { Main } from '../components/Main'
import { Programming } from '../components/Programming'
import { Repositories } from '../components/Repositories'




const Home: NextPage = (props) => {
  console.log(props);

  return (
    <>  
      <Main />
      <AboutMe />
      <Repositories />
      <Historic />
      <Programming />
      <Certificates />
      <Footer />
    </>
  )
}

export default Home;

