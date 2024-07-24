const ProjectCard = ({ link, src, title, description }) => {
  return (
    <a href={link}>
      <img style={{width: '220px'}} className="hover" src={src} alt={`${title} logo`} />
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  );
};

export default ProjectCard;
