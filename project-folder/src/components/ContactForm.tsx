// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { EnvelopeIcon, UserIcon } from '@heroicons/react/24/outline';

// const ContactForm: React.FC = () => {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Placeholder for EmailJS
//     console.log('Form submitted:', formData);
//     setIsSubmitted(true);
//     // Reset after 3s
//     setTimeout(() => setIsSubmitted(false), 3000);
//   };

//   const typewriterEffect = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   return (
//     <section id="contact" className="py-20 px-4 bg-light-muted-green/40 dark:bg-muted-green/20">
//       <div className="container mx-auto max-w-2xl">
//         <motion.h2
//           initial={{ opacity: 0, y: -50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="text-4xl font-orbitron text-center mb-12"
//         >
//           Contact
//         </motion.h2>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             className="flex items-center space-x-3 bg-light-muted-green/20 dark:bg-muted-green/30 rounded px-4 py-3 pixel-border"
//           >
//             <UserIcon className="h-5 w-5 text-muted-green" />
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="bg-transparent outline-none flex-1 text-gray-900 dark:text-gray-100 placeholder-gray-500"
//               required
//             />
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             className="flex items-center space-x-3 bg-light-muted-green/20 dark:bg-muted-green/30 rounded px-4 py-3 pixel-border"
//           >
//             <EnvelopeIcon className="h-5 w-5 text-muted-green" />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="bg-transparent outline-none flex-1 text-gray-900 dark:text-gray-100 placeholder-gray-500"
//               required
//             />
//           </motion.div>
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             className="bg-light-muted-green/20 dark:bg-muted-green/30 rounded px-4 py-3 pixel-border"
//           >
//             <textarea
//               name="message"
//               placeholder="Your Message"
//               value={formData.message}
//               onChange={handleChange}
//               rows={4}
//               className="bg-transparent outline-none w-full text-gray-900 dark:text-gray-100 placeholder-gray-500 resize-none"
//               required
//             />
//           </motion.div>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             type="submit"
//             className="w-full bg-muted-green text-white py-4 rounded pixel-border font-orbitron"
//           >
//             {isSubmitted ? 'Sent!' : 'Send Message'}
//           </motion.button>
//         </form>
//         {isSubmitted && (
//           <motion.p
//             variants={typewriterEffect}
//             initial="hidden"
//             animate="visible"
//             className="text-center text-muted-green mt-4 font-pixel"
//           >
//             Message sent! I'll get back to you soon.
//           </motion.p>
//         )}
//         <div className="flex justify-center space-x-6 mt-8">
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-muted-green transition-colors">
//             LinkedIn
//           </a>
//           <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-muted-green transition-colors">
//             GitHub
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-muted-green transition-colors">
//             Twitter
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;
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
          {/* <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-muted-green transition-colors">
            GitHub
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-muted-green transition-colors">
            Twitter
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default ContactForm; // Add this line to export the component