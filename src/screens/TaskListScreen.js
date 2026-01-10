import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
} from "react-native";

import TaskInput from "../views/components/TaskInput";
import TaskItem from "../views/components/TaskItem";
import FilterBar from "../views/components/FilterBar";
import Snackbar from "../views/components/Snackbar";
import {
  addTask,
  toggleTaskCompletion,
  deleteTask,
  filterTasks,
} from "../controllers/taskController";

// Enable layout animations on Android
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// Main screen for managing task list
const TaskListScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [draft, setDraft] = useState("");
  const [filter, setFilter] = useState("all"); // 'all' | 'active' | 'completed'
  const [lastDeleted, setLastDeleted] = useState(null);

  // Animate next list state change
  const animate = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  const handleAddTask = () => {
    animate();
    const updated = addTask(tasks, draft);
    setTasks(updated);
    setDraft("");
  };

  const handleToggleTask = (id) => {
    animate();
    const updated = toggleTaskCompletion(tasks, id);
    setTasks(updated);
  };

  const handleDeleteTask = (id) => {
    const taskToDelete = tasks.find((t) => t.id === id);
    animate();
    const updated = deleteTask(tasks, id);
    setTasks(updated);

    if (taskToDelete) {
      // Clear previous undo timer if present
      if (lastDeleted?.timeoutId) clearTimeout(lastDeleted.timeoutId);

      const timeoutId = setTimeout(() => {
        setLastDeleted(null);
      }, 4000);

      // Store last deleted task for undo
      setLastDeleted({ task: taskToDelete, timeoutId });
    }
  };

  const handleUndoDelete = () => {
    if (!lastDeleted) return;
    const { task, timeoutId } = lastDeleted;
    clearTimeout(timeoutId);
    animate();
    setTasks((prev) => [...prev, task]);
    setLastDeleted(null);
  };

  const filteredTasks = filterTasks(tasks, filter);
  const total = tasks.length;
  const completedCount = tasks.filter((t) => t.completed).length;
  const progress = total === 0 ? 0 : completedCount / total;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Manager</Text>
      <Text style={styles.subtitle}>
        Add, complete, and organize your daily tasks.
      </Text>

      {/* Progress summary */}
      <View style={styles.summaryRow}>
        <Text style={styles.summaryText}>
          {completedCount} / {total} tasks completed
        </Text>
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBarFill, { flex: progress }]} />
          <View style={{ flex: 1 - progress }} />
        </View>
      </View>

      <TaskInput
        value={draft}
        onChangeText={setDraft}
        onSubmit={handleAddTask}
        disabled={draft.trim().length === 0}
      />

      <FilterBar activeFilter={filter} onChangeFilter={setFilter} />

      {filteredTasks.length === 0 ? (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>
            {total === 0
              ? "No tasks yet. Start by adding one above."
              : "No tasks match this filter."}
          </Text>
        </View>
      ) : (
        <FlatList
          data={filteredTasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem
              task={item}
              onToggleComplete={() => handleToggleTask(item.id)}
              onDelete={() => handleDeleteTask(item.id)}
            />
          )}
          contentContainerStyle={{ paddingBottom: 40 }}
        />
      )}

      <Snackbar
        visible={!!lastDeleted}
        message="Task deleted"
        onUndo={handleUndoDelete}
      />
    </View>
  );
};

export default TaskListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 32,
    backgroundColor: "#F3F4F6",
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#111827",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginBottom: 16,
  },
  summaryRow: {
    marginBottom: 16,
  },
  summaryText: {
    fontSize: 13,
    color: "#4B5563",
    marginBottom: 6,
  },
  progressBarBackground: {
    flexDirection: "row",
    height: 6,
    borderRadius: 999,
    backgroundColor: "#E5E7EB",
    overflow: "hidden",
  },
  progressBarFill: {
    backgroundColor: "#10B981",
  },
  emptyState: {
    marginTop: 40,
    alignItems: "center",
  },
  emptyText: {
    color: "#9CA3AF",
    fontSize: 14,
  },
});
