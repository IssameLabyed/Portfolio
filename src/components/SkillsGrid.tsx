import { motion } from 'framer-motion';
import { ISkill } from '../data/skills';
import { skills } from '../data/skills';
import { CodeBracketIcon, SparklesIcon, AdjustmentsHorizontalIcon, DevicePhoneMobileIcon, PaintBrushIcon, ServerIcon, ArrowPathIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const iconMap = {
  code: CodeBracketIcon,
  sparkles: SparklesIcon,
  'adjustments-horizontal': AdjustmentsHorizontalIcon,
  'device-phone-mobile': DevicePhoneMobileIcon,
  'paint-brush': PaintBrushIcon,
  server: ServerIcon,
  'git-branch': ArrowPathIcon,
  'document-text': DocumentTextIcon,
};

const SkillsGrid: React.FC = () => {
  const renderIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap];
    return IconComponent ? <IconComponent className="h-8 w-8 text-muted-green" /> : <span className="text-muted-green">{iconName}</span>;
  };

  return (
    <section id="skills" className="py-20 px-4 bg-light-muted-green/40 dark:bg-muted-green/20">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-orbitron text-center mb-12 text-muted-green"
        >
          Skills
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill: ISkill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ rotate: 5, boxShadow: '0 0 20px #6b8756' }}
              transition={{ delay: index * 0.1 }}
              className="bg-muted-green/20 dark:bg-muted-green/30 backdrop-blur-md rounded-lg p-6 pixel-border text-center"
            >
              <div className="mb-4">{renderIcon(skill.icon)}</div>
              <h3 className="text-xl font-pixel mb-2">{skill.name}</h3>
              <p className="text-sm text-gray-400">{skill.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;