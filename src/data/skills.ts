export interface ISkill {
    name: string;
    category: string;
    icon: string; 
  }

  export const skills: ISkill[] = [
    { name: 'HTML/CSS/JS', category: 'Web', icon: 'code' }, 
    // { name: 'React', category: 'Web', icon: 'sparkles' }, 
    { name: 'Tailwind', category: 'Web', icon: 'adjustments-horizontal' }, 
    { name: 'Flutter', category: 'Mobile', icon: 'device-phone-mobile' }, 
    { name: 'Python', category: 'Programming', icon: 'code' }, 
    { name: 'Node.js', category: 'Backend', icon: 'server' }, 
    { name: 'puppeteer', category: 'Automation', icon: 'code' }, 
    { name: 'Git', category: 'Version Control', icon: 'git-branch' }, 
    { name: 'TypeScript', category: 'Programming', icon: 'document-text' }, 
    { name: 'Docker', category: 'DevOps', icon: 'document-text' }, 
    { name: 'MariaDB', category: 'Databases', icon: 'server' }, 
    { name: 'MySQl', category: 'Databases', icon: 'server' }, 
    { name: 'C++', category: 'Programming', icon: 'code' }, 
    { name: 'C#', category: 'Programming', icon: 'code' }, 
    { name: 'C', category: 'Programming', icon: 'code' }, 
    { name: 'Shell', category: 'DevOps', icon: 'terminal' }, 
  ];
