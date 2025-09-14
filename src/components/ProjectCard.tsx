import { motion } from 'framer-motion';
import { IProject } from '../data/projects';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

interface ProjectCardProps {
  project: IProject;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(147, 112, 219, 0.3)' }}
      className="bg-white/10 dark:bg-gray-800/50 backdrop-blur-md rounded-lg overflow-hidden pixel-border"
    >
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
      <div className="p-6">
        <h3 className="text-xl font-orbitron mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-1 bg-vapor-purple/20 text-vapor-purple rounded text-sm">
              {t}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-vapor-pink hover:text-vapor-purple">
            GitHub <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center text-vapor-pink hover:text-vapor-purple">
              Demo <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;