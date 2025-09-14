import { motion } from 'framer-motion';
import { projects, IProject } from '../data/projects';
import ProjectCard from './ProjectCard';

const ProjectsGrid: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-light-muted-green/40 dark:bg-muted-green/20">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-orbitron text-center mb-12 text-muted-green"
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project: IProject) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;