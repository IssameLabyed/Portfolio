export interface ISkill {
    name: string;
    category: string;
    icon: string; // Heroicon name or SVG
  }

  export const skills: ISkill[] = [
    { name: 'HTML/CSS/JS', category: 'Web', icon: 'code' }, // Represents coding (e.g., Heroicons code-bracket)
    { name: 'React', category: 'Web', icon: 'sparkles' }, // Use React's logo or specific icon
    { name: 'Tailwind', category: 'Web', icon: 'adjustments-horizontal' }, // Represents styling (e.g., Heroicons color-swatch)
    { name: 'Flutter', category: 'Mobile', icon: 'device-phone-mobile' }, // Mobile-related icon (e.g., Heroicons device-mobile)
    { name: 'Python', category: 'Programming', icon: 'code' }, // Python logo or specific icon
    { name: 'Node.js', category: 'Backend', icon: 'server' }, // Server-related icon (e.g., Heroicons server-stack)
    { name: 'puppeteer', category: 'Automation', icon: 'code' }, // Server-related icon (e.g., Heroicons server-stack)
    { name: 'Git', category: 'Version Control', icon: 'git-branch' }, // Git-specific icon (already good)
    { name: 'TypeScript', category: 'Programming', icon: 'document-text' }, // TypeScript logo or specific icon
    { name: 'Docker', category: 'DevOps', icon: 'document-text' }, // Represents containers (e.g., Heroicons cube)
    { name: 'MariaDB', category: 'Databases', icon: 'server' }, // Database-related icon (e.g., Heroicons database)
    { name: 'C++', category: 'Programming', icon: 'code' }, // Generic code icon for low-level languages
    { name: 'C', category: 'Programming', icon: 'code' }, // Same as C++ for consistency
    { name: 'Shell', category: 'DevOps', icon: 'terminal' }, // Terminal-related icon (e.g., Heroicons terminal)
  ];