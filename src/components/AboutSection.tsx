import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timeline = [
    {
      year: '2023',
      title: 'Started BCA Journey',
      description: 'Began Bachelor of Computer Applications with focus on Data Science at Yenepoya University',
    },
    {
      year: '2024',
      title: 'NEP Sarathi & Leadership',
      description: 'Appointed as UGC NEP Sarathi and IT Club Leader, driving educational initiatives',
    },
    {
      year: '2025',
      title: 'AI Data Analyst Internship',
      description: 'Completed internship at Excelerate, analyzing student engagement patterns',
    },
    {
      year: '2026',
      title: 'Expected Graduation',
      description: 'Completing degree with majors in Data Science, Big Data Analytics & Full-Stack Development',
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column - About text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-primary uppercase mb-4">
              <span className="case-number">01</span> Subject Profile
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-primary">Me</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm Arjun MM, an aspiring Data Scientist from Kozhikode, Kerala. My mission is to 
                transform complex datasets into actionable intelligence that drives strategic decisions.
              </p>
              <p>
                With hands-on experience in <span className="text-foreground">Python, SQL, Power BI</span>, 
                and <span className="text-foreground">machine learning</span>, I approach each dataset 
                as a case to be solved—uncovering hidden patterns and delivering insights that matter.
              </p>
              <p>
                Beyond analytics, I lead tech initiatives as the <span className="text-foreground">YENOVA IT Club Leader</span> and 
                serve as a <span className="text-foreground">UGC NEP Sarathi</span>, mentoring students 
                toward skill-based learning.
              </p>
            </div>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { label: 'Location', value: 'Kerala, India' },
                { label: 'Education', value: 'BCA Data Science' },
                { label: 'Focus', value: 'ML & Analytics' },
                { label: 'Status', value: 'Open to Work' },
              ].map((fact, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-4">
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                    {fact.label}
                  </div>
                  <div className="font-medium text-foreground">{fact.value}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-muted-foreground uppercase mb-4">
              Mission Timeline
            </span>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="relative pl-8"
                  >
                    {/* Dot */}
                    <div className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 ${
                      index === timeline.length - 1 
                        ? 'border-primary bg-primary/20' 
                        : 'border-border bg-background'
                    }`} />
                    
                    <div className="case-number text-sm text-primary font-medium mb-1">
                      {item.year}
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
