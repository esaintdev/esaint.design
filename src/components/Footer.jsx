/**
 * @copyright 2024 esaintmjay
 * @license Apache-2.0
 */

import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Reviews",
    href: "#reviews",
  },
  {
    label: "Contact me",
    href: "https://wa.me/2348121855275?text=I%20have%20an%20offer%20for%20you",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/esaint-dev",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/esaint-mjay-50875b247/",
  },
  {
    label: "Twitter X",
    href: "https://x.com/villandaddy",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/esaint.de/",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/2348121855275?text=I%20have%20an%20offer%20for%20you",
  },
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">

        <div className="lg:grid lg:grid-cols-2 ">

          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-[12ch] reveal-up ">Let&apos;s work together today</h2>

            <ButtonPrimary
              href="mailto:esaint.song@gmail.com"
              target="_blank"
              label="Start project"
              icon="arrow_right"
              classes='reveal-up'
            />
          </div>

          <div className="">

            <div className="grid grid-cols-2 gap-4 lg:pl-20">

              <div>
                <p className="mb-2 reveal-up">Sitemap</p>

                <ul>
                  {sitemap.map(({ label, href }, key) => (
                    <li key={key}>
                      <a href={href} 
                        className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="mb-2 reveal-up">Socials</p>
                <ul>
                  {socials.map(({ label, href }, key) => (
                    <li key={key}>
                      <a 
                        href={href} 
                        target="_blank"
                        className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>


          </div>
        </div>


        <div className="flex items-center justify-between pt-10  mb-8 ">
            <a 
                href="/" 
                className="logo reveal-up"
            >
                <img 
                    src="/images/esant.svg"
                    width={40} 
                    height={40}
                    alt="Logo" 
                    className="" 
                />
            </a>
            <p className="text-zinc-500 text-sm reveal-up">
                &copy; 2024 <span className="text-zinc-200">esaintmjay</span>
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
