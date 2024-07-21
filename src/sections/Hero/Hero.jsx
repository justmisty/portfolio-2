import styles from "./Hero.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.png";
import moon from "../../assets/moon.png";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import resume from "../../assets/Resume.pdf";
import { useTheme } from "../../common/ThemesContext";

const Hero = () => {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section className={styles.container} id="hero">
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="profile picture of Kidochukwu Anyasi"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Kidochukwu <br />
          Anyasi
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://twitter.com/__justmisty" target="_blank">
            <img src={twitterIcon} alt="" />
          </a>
          <a href="https://github.com/justmisty" target="_blank">
            <img src={githubIcon} alt="" />
          </a>
          <a href="https://linkedin.com/in/brightanyasi" target="_blank">
            <img src={linkedinIcon} alt="" />
          </a>
        </span>
        <p className={styles.description}>
          A seasoned frontend developer with 3+ years of expertise. Developing
          modern web experience for private and commercial purposes.
        </p>
        <a href={resume} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
