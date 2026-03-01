"use client";
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const sectionTitleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const skillItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const SkillItem = ({ src, alt, name, hasInvert = true }) => (
  <motion.div
    className="text-center skill-item"
    variants={skillItemVariants}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
  >
    <motion.img
      src={src}
      alt={alt}
      className={`h-8 w-8 sm:h-16 sm:w-16 mx-auto ${hasInvert ? 'invert' : ''}`}
      whileHover={{ 
        scale: 1.1,
        filter: hasInvert ? "invert(1) sepia(1) saturate(5) hue-rotate(85deg)" : "sepia(1) saturate(5) hue-rotate(85deg)"
      }}
      transition={{ duration: 0.3 }}
    />
    <p className="mt-1 sm:mt-2 text-xs sm:text-base">{name}</p>
  </motion.div>
);

export default function Skills() {
  return (
    <section
      id="about"
      className="px-4 sm:px-35 bg-black text-white overflow-hidden pt-0"
    >
      <motion.h1
        className="text-3xl sm:text-5xl font-bold pb-6 sm:pb-10 mt-10 sm:mt-10 text-blue-400"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={titleVariants}
      >
        Skills
      </motion.h1>

      <div className="">
        {/* Programming Languages */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-xl sm:text-4xl font-semibold mb-6 sm:mb-12"
            variants={sectionTitleVariants}
          >
            <span className='text-xl sm:text-4xl text-green-400'>Languages</span> I Know,
          </motion.h2>
          <motion.div
            className="flex items-center space-x-4 sm:space-x-10 mb-6 sm:mb-12"
            variants={containerVariants}
          >
            <SkillItem src="/java.svg" alt="Java" name="Java" />
            <SkillItem src="/c.svg" alt="C" name="C" />
            <SkillItem src="/python.svg" alt="Python" name="Python" />
            <SkillItem src="/javascript.svg" alt="JavaScript" name="JavaScript" />
          </motion.div>
        </motion.div>

        {/* Frameworks */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-xl sm:text-4xl font-semibold mb-6 sm:mb-12"
            variants={sectionTitleVariants}
          >
            <span className='text-xl sm:text-4xl text-green-400'>Frameworks</span> I've Used,
          </motion.h2>
          <motion.div
            className="flex items-center space-x-4 sm:space-x-10 mb-6 sm:mb-12"
            variants={containerVariants}
          >
            <SkillItem src="/nextjs.svg" alt="Next.js" name="Next.js" />
            <SkillItem src="/react.svg" alt="React.js" name="React.js" />
            <SkillItem src="/nodejs.svg" alt="Node.js" name="Node.js" />
            <SkillItem src="/expressjs.svg" alt="Express.js" name="Express.js" />
          </motion.div>
        </motion.div>

        {/* Databases and Cloud */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-xl sm:text-4xl font-semibold mb-6 sm:mb-12"
            variants={sectionTitleVariants}
          >
            <span className='text-xl sm:text-4xl text-green-400'>Databases</span> and <span className='text-xl sm:text-4xl text-green-400'>Cloud</span> I've Used,
          </motion.h2>
          <motion.div
            className="flex items-center space-x-4 sm:space-x-10 mb-6 sm:mb-12"
            variants={containerVariants}
          >
            <SkillItem src="/mongodb.svg" alt="MongoDB" name="MongoDB" />
            <SkillItem src="/mysql.svg" alt="MySQL" name="MySQL" />
            <SkillItem src="/gcp.svg" alt="Google Cloud Platform" name="GCP" />
          </motion.div>
        </motion.div>

        {/* Developer & Designer Tools */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-xl sm:text-4xl font-semibold mb-6 sm:mb-12"
            variants={sectionTitleVariants}
          >
            <span className='text-xl sm:text-4xl text-green-400'>Developer/ Designer Tools</span> I've Worked With,
          </motion.h2>
          <motion.div
            className="flex items-center space-x-4 sm:space-x-10"
            variants={containerVariants}
          >
            <SkillItem src="/git.svg" alt="Git" name="Git" />
            <SkillItem src="/github.svg" alt="GitHub" name="GitHub" />
            <SkillItem src="/figma.svg" alt="Figma" name="Figma" />
            <SkillItem src="/vercel.svg" alt="Vercel" name="Vercel" hasInvert={false} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}