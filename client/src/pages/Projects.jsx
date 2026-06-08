import { useState } from "react";
import { useSelector } from "react-redux";
import { Plus, FolderOpen } from "lucide-react";
import ProjectCard from "../components/ProjectCard";
import CreateProjectDialog from "../components/CreateProjectDialog";

export default function Projects() {
  const projects = useSelector(
    (state) => state.workspace?.currentWorkspace?.projects || []
  );

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Projects</h1>
          <p className="text-zinc-500">
            Manage your projects
          </p>
        </div>

        <button
          onClick={() => setIsDialogOpen(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        >
          <Plus size={18} />
          New Project
        </button>
      </div>

      <CreateProjectDialog
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
      />

      {/* Projects */}
      {projects.length === 0 ? (
        <div className="text-center py-16">
          <FolderOpen
            size={50}
            className="mx-auto mb-3 text-zinc-400"
          />
          <p className="text-zinc-500">
            No Projects Found
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      )}
    </div>
  );
}