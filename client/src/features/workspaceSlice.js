import { createSlice } from "@reduxjs/toolkit";


const savedWorkspaces = JSON.parse(localStorage.getItem("workspaces")) || [];

const savedCurrentWorkspaceId = localStorage.getItem("currentWorkspaceId");

const currentWorkspace = savedWorkspaces.find((w) => w.id === savedCurrentWorkspaceId) || savedWorkspaces[0];

const initialState = {workspaces: savedWorkspaces.length? savedWorkspaces: [
              {
                  id: crypto.randomUUID(),
                  name: "Workspace",
                  projects: [],
                  members: [],
                  image_url: "/favicon.ico",
              },
          ],
    currentWorkspace:
        currentWorkspace || {
            id: crypto.randomUUID(),
            name: "Workspace",
            projects: [],
            members : [],
            image_url: "/favicon.ico",
        },
    loading: false,
};

const workspaceSlice = createSlice({
    name: "workspace",
    initialState,
    reducers: {
       setWorkspaces: (state, action) => {state.workspaces = action.payload;
        localStorage.setItem("workspaces",JSON.stringify(action.payload));
        },
       setCurrentWorkspace: (state, action) => {
        localStorage.setItem("currentWorkspaceId", action.payload);
            state.currentWorkspace = state.workspaces.find((w) => w.id === action .payload);
        },
        addWorkspace: (state, action) => {
    state.workspaces.push(action.payload);
    state.currentWorkspace = action.payload;

    localStorage.setItem(
        "currentWorkspaceId",
        action.payload.id
    );

    localStorage.setItem(
        "workspaces",
        JSON.stringify(state.workspaces)
    );
},
        updateWorkspace: (state, action) => {
            state.workspaces = state.workspaces.map((w) =>
                w.id === action.payload.id ? action.payload : w
            );

            // if current workspace is updated, set it to the updated workspace
            if (state.currentWorkspace?.id === action.payload.id) {
                state.currentWorkspace = action.payload;
            }
            localStorage.setItem(
    "workspaces",
    JSON.stringify(state.workspaces)
);
        },
        deleteWorkspace: (state, action) => {
    state.workspaces = state.workspaces.filter(
        (w) => w.id !== action.payload
    );

    if (state.currentWorkspace?.id === action.payload) {
        state.currentWorkspace = state.workspaces[0] || null;

        localStorage.setItem(
            "currentWorkspaceId",
            state.currentWorkspace?.id || ""
        );
    }

    localStorage.setItem(
        "workspaces",
        JSON.stringify(state.workspaces)
    );
},
      addProject: (state, action) => {
    state.workspaces = state.workspaces.map((w) =>
        w.id === state.currentWorkspace.id
            ? {
                  ...w,
                  projects: [...w.projects, action.payload],
              }
            : w
    );

    state.currentWorkspace = state.workspaces.find(
        (w) => w.id === state.currentWorkspace.id
    );

    localStorage.setItem(
        "workspaces",
        JSON.stringify(state.workspaces)
    );
},
      addTask: (state, action) => {
    state.workspaces = state.workspaces.map((w) =>
        w.id === state.currentWorkspace.id
            ? {
                  ...w,
                  projects: w.projects.map((p) =>
                      p.id === action.payload.projectId
                          ? {
                                ...p,
                                tasks: [...(p.tasks || []), action.payload],
                            }
                          : p
                  ),
              }
            : w
    );

    state.currentWorkspace = state.workspaces.find(
        (w) => w.id === state.currentWorkspace.id
    );

    localStorage.setItem(
        "workspaces",
        JSON.stringify(state.workspaces)
    );
},
       updateTask: (state, action) => {
    state.workspaces = state.workspaces.map((w) =>
        w.id === state.currentWorkspace.id
            ? {
                  ...w,
                  projects: w.projects.map((p) =>
                      p.id === action.payload.projectId
                          ? {
                                ...p,
                                tasks: p.tasks.map((t) =>
                                    t.id === action.payload.id
                                        ? action.payload
                                        : t
                                ),
                            }
                          : p
                  ),
              }
            : w
    );

    state.currentWorkspace = state.workspaces.find(
        (w) => w.id === state.currentWorkspace.id
    );

    localStorage.setItem(
        "workspaces",
        JSON.stringify(state.workspaces)
    );
},
        
      deleteTask: (state, action) => {
    state.workspaces = state.workspaces.map((w) =>
        w.id === state.currentWorkspace.id
            ? {
                  ...w,
                  projects: w.projects.map((p) =>
                      p.id === action.payload.projectId
                          ? {
                                ...p,
                                tasks: p.tasks.filter(
                                    (t) => !action.payload.taskIds.includes(t.id)
                                ),
                            }
                          : p
                  ),
              }
            : w
    );

    state.currentWorkspace = state.workspaces.find(
        (w) => w.id === state.currentWorkspace.id
    );

    localStorage.setItem(
        "workspaces",
        JSON.stringify(state.workspaces)
    );
},
addMember: (state, action) => {
    state.workspaces = state.workspaces.map((w) =>
        w.id === state.currentWorkspace.id
            ? {
                  ...w,
                  members: [...(w.members || []), action.payload],
              }
            : w
    );

    state.currentWorkspace = state.workspaces.find(
        (w) => w.id === state.currentWorkspace.id
    );

    localStorage.setItem(
        "workspaces",
        JSON.stringify(state.workspaces)
    );
},
}
});

export const { setWorkspaces, setCurrentWorkspace, addWorkspace, updateWorkspace, deleteWorkspace, addProject, addTask, updateTask, deleteTask,  addMember} = workspaceSlice.actions;
export default workspaceSlice.reducer;