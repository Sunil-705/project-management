import { FolderOpen, CheckSquare } from "lucide-react";
import { useSelector } from "react-redux";

export default function StatsGrid() {
  const currentWorkspace = useSelector(
    (state) => state.workspace?.currentWorkspace
  );

  const totalProjects = currentWorkspace?.projects?.length || 0;

  const totalTasks =
    currentWorkspace?.projects?.reduce(
      (acc, project) => acc + (project.tasks?.length || 0),
      0
    ) || 0;

  const stats = [
    {
      title: "Total Projects",
      value: totalProjects,
      icon: FolderOpen,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      title: "Total Tasks",
      value: totalTasks,
      icon: CheckSquare,
      color: "text-green-500",
      bg: "bg-green-500/10",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-5"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-zinc-500">{item.title}</p>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mt-1">
                  {item.value}
                </h2>
              </div>

              <div className={`p-3 rounded-lg ${item.bg}`}>
                <Icon className={item.color} size={22} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}