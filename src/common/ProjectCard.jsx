
const ProjectCard = ({ link, src, title, description }) => {
  return (
    <a href={link}>
      <img className="hover" src={src} alt={`${title} logo`} />
      <h3>{title}</h3>
      <p className="description">{description}</p>
    </a>
  );
};

export default ProjectCard;
