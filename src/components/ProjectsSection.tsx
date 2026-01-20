import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  metrics: { label: string; value: string; highlight?: boolean }[];
  tools: string[];
  status: 'Completed' | 'In Progress';
}

const projects: Project[] = [
  {
    id: 'CASE-001',
    title: 'Ed-Tech Learning Analytics Dashboard',
    category: 'Predictive Analytics',
    description: 'Analyzed student academic and engagement data to identify GPA drivers and academic risk. Built a Random Forest regression model achieving exceptional predictive accuracy.',
    metrics: [
      { label: 'R² Score', value: '0.93', highlight: true },
      { label: 'MAE', value: '0.19' },
      { label: 'Dashboard Pages', value: '3' },
    ],
    tools: ['Python', 'SQL', 'Power BI', 'Random Forest'],
    status: 'Completed',
  },
  {
    id: 'CASE-002',
    title: 'AniMatch: Recommendation System',
    category: 'Machine Learning',
    description: 'Built an end-to-end anime recommendation system with similarity-based logic and interactive UI. Integrated web scraping for real-time data collection.',
    metrics: [
      { label: 'Features', value: '5+' },
      { label: 'Data Points', value: '10K+' },
      { label: 'User Flow', value: 'Complete' },
    ],
    tools: ['Python', 'BeautifulSoup', 'Requests', 'Web UI'],
    status: 'Completed',
  },
  {
    id: 'CASE-003',
    title: 'World Layoffs EDA',
    category: 'Exploratory Analysis',
    description: 'Conducted comprehensive exploratory data analysis using SQL to analyze worldwide layoff patterns by industry, country, and company.',
    metrics: [
      { label: 'Industries', value: '15+' },
      { label: 'Countries', value: 'Global' },
      { label: 'Analysis Type', value: 'SQL EDA', highlight: true },
    ],
    tools: ['SQL', 'MySQL Workbench', 'Data Cleaning'],
    status: 'Completed',
  },
  {
    id: 'CASE-004',
    title: 'Bike Buyers Analysis Dashboard',
    category: 'Business Intelligence',
    description: 'Interactive Excel dashboard analyzing bike buyer behavior through data cleaning, pivot-table analysis, and customer segmentation.',
    metrics: [
      { label: 'Segments', value: '4+' },
      { label: 'Insights', value: 'Actionable' },
      { label: 'Tool', value: 'Excel' },
    ],
    tools: ['Excel', 'Pivot Tables', 'VBA', 'Charts'],
    status: 'Completed',
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300"
    >
      {/* Case header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-card-elevated">
        <div className="flex items-center gap-3">
          <span className="case-number text-primary font-bold text-sm">{project.id}</span>
          <span className="text-xs text-muted-foreground uppercase tracking-wider">{project.category}</span>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full ${
          project.status === 'Completed' 
            ? 'bg-primary/10 text-primary' 
            : 'bg-accent text-accent-foreground'
        }`}>
          {project.status}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {project.metrics.map((metric, i) => (
            <div 
              key={i} 
              className={`text-center p-3 rounded-lg ${
                metric.highlight ? 'bg-primary/10 border border-primary/20' : 'bg-muted/50'
              }`}
            >
              <div className={`font-display text-lg font-bold ${
                metric.highlight ? 'text-primary' : 'text-foreground'
              }`}>
                {metric.value}
              </div>
              <div className="text-xs text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className="flex flex-wrap gap-2">
          {project.tools.map((tool, i) => (
            <span 
              key={i}
              className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Hover accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest text-primary uppercase mb-4">
            <span className="case-number">02</span> Case Files
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Project <span className="text-primary">Archive</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each case represents a strategic data mission—from hypothesis to insight, 
            prediction to outcome.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
