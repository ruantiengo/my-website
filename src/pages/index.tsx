import type { NextPage } from 'next'



import { AboutMe } from '../components/AboutMe'
import { Main } from '../components/Main'
import { Programming } from '../components/Programming'
import { Repositories } from '../components/Repositories'




const Home: NextPage = (props) => {
  console.log(props);
  
  return (
    <>
      <Main/>
      <AboutMe/>
      <Repositories/>
      <Programming/>
    </>
  )
}

export default Home;

