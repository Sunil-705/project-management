import { format, isValid } from "date-fns";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../features/workspaceSlice";

const ProjectTasks = ({ tasks = [] }) => {
  const dispatch = useDispatch();

  const handleStatusChange = (taskId, newStatus) => {
    const task = tasks.find((t) => t.id === taskId);

    if (!task) return;

    dispatch(
      updateTask({
        ...task,
        status: newStatus,
      })
    );
  };

  const handleDelete = (taskId) => {
    dispatch(deleteTask([taskId]));
  };

  return (
    <div className="overflow-x-auto rounded-lg border border-zinc-300 dark:border-zinc-800">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-zinc-300 dark:border-zinc-800">
            <th className="p-3 text-left">Title</th>
            <th className="p-3 text-left">Priority</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Due Date</th>
            <th className="p-3 text-left">Action</th>
          </tr>
        </thead>

        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <tr
                key={task.id}
                className="border-b border-zinc-200 dark:border-zinc-800"
              >
                <td className="p-3">{task.title}</td>

                <td className="p-3">
                  <span className="px-2 py-1 rounded bg-blue-100 dark:bg-blue-950">
                    {task.priority}
                  </span>
                </td>

                <td className="p-3">
                  <select
                    value={task.status}
                    onChange={(e) =>
                      handleStatusChange(task.id, e.target.value)
                    }
                    className="border rounded px-2 py-1"
                  >
                    <option value="TODO">Todo</option>
                    <option value="IN_PROGRESS">In Progress</option>
                    <option value="DONE">Done</option>
                  </select>
                </td>

                <td className="p-3">
                  {task.due_date &&
                  isValid(new Date(task.due_date))
                    ? format(
                        new Date(task.due_date),
                        "dd MMM yyyy"
                      )
                    : "No Due Date"}
                </td>

                <td className="p-3">
                  <button
                    onClick={() => handleDelete(task.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                className="text-center p-6 text-zinc-500"
              >
                No Tasks Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTasks;