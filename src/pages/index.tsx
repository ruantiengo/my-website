import type { NextPage } from "next";
import { AboutMe } from "../components/AboutMe";
import { Certificates } from "../components/Certificates";
import { Footer } from "../components/Footer";
import { Historic } from "../components/History";
import { Main } from "../components/Main";
import { Programming } from "../components/Programming";
import { Repositories } from "../components/Repositories";
import Meta from "../utils/Meta";
import { GA_TRACKING_ID } from "../lib/gtag";
const Home: NextPage = (props) => {
  return (
    <>
      <Meta />
      <Main />
      {console.log(GA_TRACKING_ID)}
      <AboutMe />
      <Repositories />
      <Historic />
      <Programming />
      <Certificates />
      <Footer />
    </>
  );
};

export default Home;
