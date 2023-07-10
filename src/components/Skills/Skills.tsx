import skills1 from '../../images/skills1.svg';
import skills2 from '../../images/skills2.svg';
import skills3 from '../../images/skills3.svg';
import skills4 from '../../images/skills4.svg';
import skills5 from '../../images/skills5.svg';
import skills6 from '../../images/skills6.svg';
import skills7 from '../../images/skills7.svg';
import skills8 from '../../images/skills8.svg';
import skills9 from '../../images/skills9.svg';
import skills10 from '../../images/skills10.svg';
import skills11 from '../../images/skills11.svg';

const Skills = () => (
  <section className="skills" id="skills">
    <h1 className="skills-title">Скиллы</h1>
    <div className="skills-container">
      <img
        className="skills-item"
        src={skills9.src}
        alt="HTML5"
        title="HTML5"
      />
      <img className="skills-item" src={skills1.src} alt="CSS3" title="CSS3" />
      <img
        className="skills-item"
        src={skills2.src}
        alt="JavaScript"
        title="JavaScript"
      />
      <img
        className="skills-item"
        src={skills3.src}
        alt="TypeScript"
        title="TypeScript"
      />
      <img
        className="skills-item"
        src={skills4.src}
        alt="React"
        title="React"
      />
      <img className="skills-item" src={skills5.src} alt="Git" title="Git" />
      <img
        className="skills-item"
        src={skills6.src}
        alt="Next.js"
        title="Next.js"
      />
      <img
        className="skills-item"
        src={skills7.src}
        alt="Bootstrap"
        title="Bootstrap"
      />
      <img
        className="skills-item"
        src={skills8.src}
        alt="Node.js"
        title="Node.js"
      />
      <img className="skills-item" src={skills10.src} alt="SCSS" title="SCSS" />
      <img
        className="skills-item"
        src={skills11.src}
        alt="Redux"
        title="Redux"
      />
    </div>
  </section>
);

export default Skills;
