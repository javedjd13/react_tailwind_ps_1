import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer";
import { Outlet } from "react-router";
import Hero from "./pages/Hero";
import Quotes from "./component/Quotes";
import Banner from "./component/Banner";
import Banner2 from "./component/Banner2";
import FeatureSection from "./component/FeatureSection";

const App = () => {
  const [isPlay, setIsPlay] = React.useState(false);

  const togglePlay = () => {
    setIsPlay(!isPlay);
  };
  return (
    <main className="overflow-x-hidden bg-white dark:bg-black text-black dark:text-white duration-300">
      <Navbar />
      <Hero togglePlay={togglePlay} />
      <Quotes />
      <Banner togglePlay={togglePlay} />
      <Banner2 togglePlay={togglePlay} />
      <FeatureSection/>
      <Footer />
    </main>
  );
};

export default App;
