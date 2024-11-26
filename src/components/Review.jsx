/**
 * @copyright 2024 esaintmjay
 * @license Apache-2.0
 */

/**
 * Nodes
 */

import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

/**
 * Register gsap 
 */

gsap.registerPlugin(useGSAP, ScrollTrigger);



import ReviewCard from "./ReviewCard";

const reviews = [
    {
      content: 'Exceptional design! Delivered a seamless, this is beautiful.',
      name: 'Ivan Travels',
      imgSrc: '/images/people-1.jpg',
      company: 'Ivan Travels and Tour'
    },
    {
      content: 'Thanks for a beautiful job',
      name: 'Vivian Isong',
      imgSrc: '/images/people-2.jpg',
      company: 'Vee and Vee'
    },
    {
      content: 'Exceptional design! Delivered a seamless, this is beautiful.',
      name: 'Ivan Travels',
      imgSrc: '/images/ivas.png',
      company: 'Ivan Travels and Tours'
    },
    {
      content: 'Thanks for a beautiful job',
      name: 'Vivian Isong',
      imgSrc: '/images/vee.png',
      company: 'Vee and Vee'
    },
    {
      content: 'Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.',
      name: 'Ava Thompson',
      imgSrc: '/images/people-5.jpg',
      company: 'TechMosaic'
    },
    {
      content: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
      name: 'Jonathan',
      imgSrc: '/images/people-6.jpg',
      company: 'Skyline Digital'
    }
  ];

const Review = () => {

  useGSAP(() => {
    gsap.to('.scrub-slide', {
      scrollTrigger: {
        trigger: '.scrub-slide',
        start: '-200% 80%',
        end: '400% 80%',
        scrub: true,
      },
      x: '-1000'
    })
  })


  return (
    <section
        id="reviews"
        className="section overflow-hidden"
    >
    <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
        What our customers say
        </h2>

        <div className="flex items-stretch gap-3 w-fit scrub-slide">
            {reviews.map(({ content, name, imgSrc, company}, key) => (
                <ReviewCard
                    key={key}
                    name={name}
                    company={company}
                    imgSrc={imgSrc}
                    content={content}
                    
                />
            ))}
        </div>
    </div>

    </section>
  )
}



export default Review