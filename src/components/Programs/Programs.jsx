// src/components/Programs/Programs.jsx
import './Programs.css';

const ProgramCard = ({ title, description, icon, color }) => {
  return (
    <div className="program-card" style={{ borderColor: color }}>
      <div className="card-icon" style={{ backgroundColor: color }}>
        {icon}
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p className="card-description">{description}</p>
        <a href="#" className="learn-more">Learn More</a>
      </div>
    </div>
  );
};

const Programs = () => {
  const programsData = [
    { 
      title: 'Agricultural Support', 
      description: 'Training and resources for modern, sustainable farming practices.', 
      icon: '🌾', 
      color: '#28a745' 
    },
    { 
      title: 'Clean Water Initiative', 
      description: 'Developing clean water sources and distribution systems.', 
      icon: '💧', 
      color: '#007bff' 
    },
    { 
      title: 'Education Programs', 
      description: 'Schools, vocational training, and adult literacy programs.', 
      icon: '📚', 
      color: '#ffc107' 
    },
    { 
      title: 'Healthcare Access', 
      description: 'Mobile clinics and telemedicine for remote communities.', 
      icon: '🏥', 
      color: '#6f42c1' 
    }
  ];

  return (
    <section id="programs" className="programs">
        <h2 className="section-title">Our Programs</h2>
      <div className="container">
        
        <div className="programs-grid">
          {programsData.map((program, index) => (
            <ProgramCard
              key={index}
              title={program.title}
              description={program.description}
              icon={program.icon}
              color={program.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;