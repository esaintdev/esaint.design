/**
 * @copyright 2024 esaintmjay
 * @license Apache-2.0
 */

import { ButtonPrimary, ButtonOutline } from "./Button";







const Hero = () => {
  return (
    <section className="pt-28 lg:pt-36" id="home">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img
                src="/images/avatar-1.jpg"
                width={40}
                height={40}
                alt="esaint portrait"
                className="img-cover"
              
              />
            </figure>

            <div className="flex items-center gap-1.5 text-emerald-400 text-sm tracking-wide ">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for offer
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10 ">
            Building Scalable Modern Designs for the Future
          </h2>
          <div className="flex items-center gap-3">
            <ButtonPrimary label="Download CV"
            icon="download"
            target="_blank"
            rel="noopener noreferrer" download
            href={'images/Esaint-Mjay-CV.pdf'}
            />
            
            <ButtonOutline
            href="#about" 
            label={`Scroll down`}
            icon={`arrow_downward`}/>
          </div>
        </div>

        <div className=" lg:block">
          <figure className="w-full max-w-[480px] ml-auto overflow-hidden">
            <img
              src="/images/heroman.jpg"
              width={800}
              height={800}
              alt="esint Mjay"
              className="w-full rounded-full aspect-square object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
