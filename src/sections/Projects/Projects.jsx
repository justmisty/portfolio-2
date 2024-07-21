import React from "react";
import styles from "./ProjectStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectContainer}>
        <ProjectCard
          src={viberr}
          link="#"
          title="Viberr"
          description="Streaming App"
        />
        <ProjectCard
          src={freshBurger}
          link="#"
          title="Fresh Burger"
          description="Hamburger Resturant"
        />
        <ProjectCard
          src={hipster}
          link="#"
          title="Hipster"
          description="Glasses and frames"
        />
        <ProjectCard
          src={fitLift}
          link="#"
          title="FitLift"
          description="Fitness App"
        />
      </div>
    </section>
  );
};

export default Projects;
