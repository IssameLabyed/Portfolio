import { motion } from 'framer-motion';

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-light-muted-green/40 dark:bg-muted-green/20">
      <div className="container mx-auto max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-orbitron text-center mb-12 text-muted-green"
        >
          Contact
        </motion.h2>
        <div className="text-center space-y-6">
          <p className="text-xl font-pixel text-muted-green">
            Email: <a href="mailto:lbydissam@gmail.com" className="underline hover:text-light-muted-green" rel="noopener noreferrer">lbydissam@gmail.com</a>
          </p>
          <p className="text-xl font-pixel text-muted-green">
            Phone: <a href="tel:+212706220480" className="underline hover:text-light-muted-green" rel="noopener noreferrer">+212706220480</a>
          </p>
        </div>
        <div className="flex justify-center space-x-6 mt-8">
          <a href="https://www.linkedin.com/in/issame-labyed-307808221/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-muted-green transition-colors">
            LinkedIn
          </a>
          <a href="https://github.com/IssameLabyed" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-muted-green transition-colors">
            GitHub
          </a>
          {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-muted-green transition-colors">
            Twitter
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default ContactForm; 
