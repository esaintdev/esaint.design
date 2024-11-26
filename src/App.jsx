/**
 * @copyright 2024 esaintmjay
 * @license Apache-2.0
 */

/**
 * Nodes
 */

import { ReactLenis } from "lenis/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

/**
 * Register gsap 
 */

gsap.registerPlugin(useGSAP, ScrollTrigger);

import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Review from "./components/Review";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {

  useGSAP(() => {
    const elements = gsap.utils.toArray('.reveal-up');

    console.log(elements);

    elements.forEach((element) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
            scrub: true, 
            start: '-200 bottom' ,
            end: ';bottom 80%',
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out'
      })
    })
  })
  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Review />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
};

export default App;
