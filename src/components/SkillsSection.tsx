import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level: number }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: '⟨/⟩',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'SQL', level: 85 },
      { name: 'R Programming', level: 70 },
    ],
  },
  {
    title: 'Visualization',
    icon: '◈',
    skills: [
      { name: 'Power BI', level: 85 },
      { name: 'Tableau', level: 75 },
      { name: 'Excel', level: 90 },
    ],
  },
  {
    title: 'Machine Learning',
    icon: '⬡',
    skills: [
      { name: 'Regression', level: 85 },
      { name: 'Classification', level: 75 },
      { name: 'Feature Engineering', level: 80 },
    ],
  },
  {
    title: 'Libraries',
    icon: '◎',
    skills: [
      { name: 'Pandas', level: 90 },
      { name: 'Matplotlib', level: 80 },
      { name: 'BeautifulSoup', level: 75 },
    ],
  },
];

const certifications = [
  { name: 'Data Analysis with R Programming', issuer: 'Google' },
  { name: 'Python for Data Science, AI & Development', issuer: 'IBM' },
  { name: 'Intro to Pandas', issuer: 'LeetCode' },
  { name: 'Intro to Machine Learning', issuer: 'Kaggle' },
  { name: 'Tools for Data Science', issuer: 'Coursera' },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 relative bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-primary uppercase mb-4">
            <span className="case-number">03</span> Arsenal
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The tools and technologies I deploy to decode data mysteries and deliver insights.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl text-primary">{category.icon}</span>
                <h3 className="font-display font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.3 }}
                        className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="font-display text-xl font-semibold text-center mb-8">
            Verified <span className="text-primary">Credentials</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 hover:border-primary/50 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm text-foreground">{cert.name}</span>
                <span className="text-xs text-muted-foreground">• {cert.issuer}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
