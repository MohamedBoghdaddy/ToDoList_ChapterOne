import { createTaskModel } from "../models/Task";

export const addTask = (tasks, text) => {
  if (!text || text.trim().length === 0) return tasks;
  const newTask = createTaskModel(text);
  return [...tasks, newTask];
};

export const toggleTaskCompletion = (tasks, taskId) =>
  tasks.map((task) =>
    task.id === taskId ? { ...task, completed: !task.completed } : task
  );

export const deleteTask = (tasks, taskId) =>
  tasks.filter((task) => task.id !== taskId);

export const filterTasks = (tasks, filter) => {
  switch (filter) {
    case "active":
      return tasks.filter((t) => !t.completed);
    case "completed":
      return tasks.filter((t) => t.completed);
    default:
      return tasks;
  }
};