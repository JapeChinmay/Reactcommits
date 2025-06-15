import "./Task.css";

const TaskSetup = ({ taskInput, onDelete }) => {
  const handleDelete = () => {
    onDelete();
  };
  return (
    <div className="task-item">
      <p className="task-text">{taskInput}</p>
      <button className="delete-btn" onClick={() => handleDelete()}>
        ❌
      </button>
    </div>
  );
};

export default TaskSetup;
