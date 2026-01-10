# Chapter One – React Native Tech Screen (Task Manager)

This repository contains my solution to the **Chapter One React Native Tech Screen**:  
a focused, MVC-inspired **Task Manager** app built with **Expo + React Native**.

---

##  Features

- Add new tasks
- Mark tasks as complete / incomplete
- Delete tasks
- Filter by:
  - **All**
  - **Active**
  - **Completed**
- Task summary and progress indicator (e.g. `3 / 7 tasks completed`)
- Animated list updates (add / toggle / delete / undo)
- "Undo delete" snackbar

All state is kept local in line with the assessment requirements.

---

## Architecture (MVC-Inspired)

The brief emphasizes frontend development and local state management, so I designed a light, scalable architecture:

- **Model – `src/models/Task.js`**
  - Defines the `Task` data model.
- **Controller – `src/controllers/taskController.js`**
  - Pure functions: `addTask`, `toggleTaskCompletion`, `deleteTask`, `filterTasks`.
  - No React or UI logic, easy to test.
- **View – `src/views` + `src/screens`**
  - `TaskInput`, `TaskItem`, `FilterBar`, `Snackbar` (presentational).
  - `TaskListScreen` wires state + user actions to controller functions.


---

## Tests

Basic unit tests for the controller live in:

- `__tests__/taskController.test.js`

They cover:

- Adding tasks
- Toggling completion
- Deleting tasks
- Filtering by active/completed

This shows how business logic can be validated independently of the UI.

---

##  Tech Stack

- **React Native**
- **Expo**
- **JavaScript (ES6+)**
- **Jest** (for unit tests)

No external state management, no backend, and no storage, respecting the tech screen scope.

---

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/MohamedBoghdaddy/ToDoList_ChapterOne
cd ToDoList_ChapterOne
