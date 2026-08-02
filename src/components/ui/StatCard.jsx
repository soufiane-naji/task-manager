const StatCard = ({ title, value, icon, type }) => {
  return (
    <article className={`stat-card ${type}`}>
      <div className="stat-card-header">
        <div className="stat-icon">{icon}</div>
      </div>

      <h2 className="stat-value">{value}</h2>

      <p className="stat-title">{title}</p>
    </article>
  );
};

export default StatCard;
