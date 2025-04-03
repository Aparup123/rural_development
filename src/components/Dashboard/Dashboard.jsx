// src/components/Dashboard/Dashboard.jsx
import './Dashboard.css';

const DashboardCard = ({ title, value, icon, color }) => {
  return (
    <div className="dashboard-card" style={{ borderColor: color }}>
      <div className="card-icon" style={{ backgroundColor: color }}>
        {icon}
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p className="card-value">{value}</p>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const dashboardData = [
    { 
      title: 'Revenue', 
      value: '$45,231', 
      icon: '💰', 
      color: '#28a745' 
    },
    { 
      title: 'Users', 
      value: '8,549', 
      icon: '👥', 
      color: '#007bff' 
    },
    { 
      title: 'New Orders', 
      value: '145', 
      icon: '📦', 
      color: '#ffc107' 
    },
    { 
      title: 'Conversion', 
      value: '24%', 
      icon: '📈', 
      color: '#6f42c1' 
    }
  ];

  return (
    <section id="dashboard" className="dashboard">
      <div className="container">
        <h2 className="section-title">Dashboard Overview</h2>
        <div className="dashboard-grid">
          {dashboardData.map((card, index) => (
            <DashboardCard
              key={index}
              title={card.title}
              value={card.value}
              icon={card.icon}
              color={card.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;