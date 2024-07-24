import React from "react";
import styles from "./ProjectStyles.module.css";
import cryptoPlace from "../../assets/crypto.png";
import netflix from "../../assets/netflix.png";
import giphy from "../../assets/giphy.png";
import expense from '../../assets/expense.png'
import spotify from "../../assets/spotify.png";
import carePulse from "../../assets/carepulse1.png";
import ProjectCard from "../../common/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectContainer}>
        <ProjectCard
          className="proCard"
          src={cryptoPlace}
          link="https://kryptoplace.netlify.app/"
          title="CryptoPlace"
          description="Crypto tracking App"
        />
        <ProjectCard
          src={netflix}
          link="https://redtube1.netlify.app/"
          title="Netflix"
          description="Streaming service"
        />
        <ProjectCard
          src={expense}
          link="https://uexpense.netlify.app/"
          title="Expense Tracker"
          description="Manage Expenses"
        />
        <ProjectCard
          src={giphy}
          link="https://giphclone.netlify.app/"
          title="GIPHY Clone"
          description="Share GIFs"
        />
        <ProjectCard
          src={spotify}
          link="https://dernfy.netlify.app/"
          title="Spotify Clone"
          description="Streaming service"
        />
        <ProjectCard
          src={carePulse}
          link="#"
          title="CarePulse"
          description="Coming Soon!"
        />
      </div>
    </section>
  );
};

export default Projects;
