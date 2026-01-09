// __tests__/taskController.test.js
import {
  addTask,
  toggleTaskCompletion,
  deleteTask,
  filterTasks,
} from "../src/controllers/taskController";

describe("taskController", () => {
  test("addTask adds a new task when text is valid", () => {
    const tasks = [];
    const updated = addTask(tasks, "Test task");
    expect(updated).toHaveLength(1);
    expect(updated[0].text).toBe("Test task");
    expect(updated[0].completed).toBe(false);
  });

  test("addTask ignores empty text", () => {
    const tasks = [];
    const updated = addTask(tasks, "   ");
    expect(updated).toHaveLength(0);
  });

  test("toggleTaskCompletion flips completed flag", () => {
    const tasks = [{ id: "1", text: "Task", completed: false }];
    const updated = toggleTaskCompletion(tasks, "1");
    expect(updated[0].completed).toBe(true);
  });

  test("deleteTask removes the task", () => {
    const tasks = [
      { id: "1", text: "One", completed: false },
      { id: "2", text: "Two", completed: false },
    ];
    const updated = deleteTask(tasks, "1");
    expect(updated).toHaveLength(1);
    expect(updated[0].id).toBe("2");
  });

  test("filterTasks returns only active tasks when filter is 'active'", () => {
    const tasks = [
      { id: "1", text: "One", completed: false },
      { id: "2", text: "Two", completed: true },
    ];
    const active = filterTasks(tasks, "active");
    expect(active).toHaveLength(1);
    expect(active[0].id).toBe("1");
  });

  test("filterTasks returns only completed tasks when filter is 'completed'", () => {
    const tasks = [
      { id: "1", text: "One", completed: false },
      { id: "2", text: "Two", completed: true },
    ];
    const completed = filterTasks(tasks, "completed");
    expect(completed).toHaveLength(1);
    expect(completed[0].id).toBe("2");
  });
});
