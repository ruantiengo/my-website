import type { NextPage } from 'next'



import { AboutMe } from '../components/AboutMe'
import { Historic } from '../components/History'
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
      <Historic/>
      <Programming/>
    </>
  )
}

export default Home;

