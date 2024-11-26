/**
 * @copyright 2024 esaintmjay
 * @license Apache-2.0
 */

const skillItem = [
  {
    imgSrc: "/images/photoshop.png",
    label: "Adobe Photoshop",
    desc: "Design tool",
  },
  {
    imgSrc: "/images/coreldraw.png",
    label: "Corel Draw",
    desc: "Graphics Design tool",
  },
  {
    imgSrc: "/images/inkscape.png",
    label: "Inkscape",
    desc: "Line Art",
  },
  {
    imgSrc: "/images/illustrator.png",
    label: "illustrator",
    desc: "Logo design and Bitmaps",
  },
  {
    imgSrc: "/images/react.svg",
    label: "React",
    desc: "Framework",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },

];



import SkillCard from "./SkillCard";

const Skills = ({ imgSrc, label, desc}) => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essiential Tools I use</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Discover the powerful tools and technologies I use to create
          exceptional, high-quality designs and flyers.
        </p>
        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] ">
            {skillItem.map(({imgSrc, label, desc }, key) => 
            (
            <SkillCard
                key={key} 
                imgSrc={imgSrc} 
                label={label}
                desc={desc}
                classes="reveal-up"
                />
            ))
            }
        </div>
      </div>
    </section>
  );
};

export default Skills;
