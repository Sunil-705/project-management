import { Plus } from 'lucide-react'
import { useState } from 'react'
import StatsGrid from '../components/StatsGrid'
import ProjectOverview from '../components/ProjectOverview'
import CreateProjectDialog from '../components/CreateProjectDialog'

const Dashboard = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false)

   return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Dashboard
          </h1>
          <p className="text-gray-500 dark:text-zinc-400">
            Hi,Manage your projects and tasks
          </p>
        </div>

        <button
          onClick={() => setIsDialogOpen(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          <Plus size={18} />
          New Project
        </button>
      </div>

      {/* Stats */}
      <StatsGrid />

      {/* Projects */}
      <div className="mt-8">
        <ProjectOverview />
      </div>

      <CreateProjectDialog
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
      />
    </div>
  );
};

export default Dashboard;