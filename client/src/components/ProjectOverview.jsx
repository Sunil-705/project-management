import { Link } from "react-router-dom";
import { FolderOpen } from "lucide-react";
import { useSelector } from "react-redux";

const ProjectOverview = () => {
  const currentWorkspace = useSelector(
    (state) => state.workspace?.currentWorkspace
  );

  const projects = currentWorkspace?.projects || [];

  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg">
      <div className="p-4 border-b border-zinc-200 dark:border-zinc-800">
        <h2 className="font-semibold text-lg">Projects</h2>
      </div>

      {projects.length === 0 ? (
        <div className="p-10 text-center">
          <FolderOpen size={40} className="mx-auto mb-3 text-zinc-400" />
          <p className="text-zinc-500">No Projects Found</p>
        </div>
      ) : (
        <div>
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projectsDetail?id=${project.id}&tab=tasks`}
              className="flex items-center justify-between p-4 border-b border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-800"
            >
              <div>
                <h3 className="font-medium">{project.name}</h3>
                <p className="text-sm text-zinc-500">
                  {project.status}
                </p>
              </div>

              <span className="text-blue-500 text-sm">
                View
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectOverview;