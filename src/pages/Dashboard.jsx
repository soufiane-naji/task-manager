import { FaChartLine, FaCheckCircle, FaClock, FaTasks } from "react-icons/fa";
import StatCard from "../components/ui/StatCard";
import useTasks from "../hooks/useTasks";
import { PiHandWavingFill } from "react-icons/pi";

const Dashboard = () => {
  const { tasks } = useTasks();
  const nombreTasks = tasks.length;
  const nombreCompleted = tasks.filter(
    (task) => task.status === "completed"
  ).length;
  const nombrePending = tasks.filter(
    (task) => task.status === "pending"
  ).length;

  const progress =
    nombreTasks === 0 ? 0 : Math.round((nombreCompleted / nombreTasks) * 100);

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Dashboard</h1>

          <p>
            Welcome back, Soufiane
            <PiHandWavingFill className="wave-icon" />
          </p>

          <span>
            Track your productivity and manage your tasks efficiently.
          </span>
        </div>
      </div>
      <div className="stats-grid">
        <StatCard
          type=""
          title="Total Tasks"
          value={nombreTasks}
          icon={<FaTasks />}
        />
        <StatCard
          type="completed"
          title="Completed"
          value={nombreCompleted}
          icon={<FaCheckCircle />}
        />
        <StatCard
          type="pending"
          title="Pending"
          value={nombrePending}
          icon={<FaClock />}
        />
        <StatCard
          type="progress"
          title="Progress"
          value={`${progress}%`}
          icon={<FaChartLine />}
        />
      </div>
    </div>
  );
};

export default Dashboard;
