import { FaCheckCircle, FaClock, FaTasks } from "react-icons/fa";
import { Link } from "react-router-dom";

const RecentTaskCard = ({ tasks }) => {
  const recentTasks = [...tasks]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 2);

  if (recentTasks.length === 0)
    return (
      <section className="recent-tasks">
        <h2>Recent Tasks</h2>

        <p>No recent tasks.</p>
      </section>
    );

  return (
    <section className="recent-tasks">
      <div className="recent-header">
        <h2>
          <FaTasks />
          Recent Tasks
        </h2>

        <Link to="/tasks" className="view-all-btn">View All</Link>
      </div>
      {recentTasks.map((task) => (
        <article key={task.id} className="recent-task">
          <div className="recent-task-left">
            <p className="recent-task-title">{task.title}</p>

            <span className="recent-task-date">
              Created on {task.createdAt}
            </span>
          </div>

          <span className={`recent-task-status ${task.status}`}>
            {task.status == "completed" ? (
              <>
                <FaCheckCircle />
                Completed
              </>
            ) : (
              <>
                <FaClock />
                Pending
              </>
            )}
          </span>
        </article>
      ))}
    </section>
  );
};
export default RecentTaskCard;
