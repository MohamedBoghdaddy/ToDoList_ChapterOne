import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

// Renders a single task row
const TaskItem = ({ task, onToggleComplete, onDelete }) => {
  return (
    <View style={styles.container}>
      {/* Toggle completion */}
      <TouchableOpacity style={styles.left} onPress={onToggleComplete}>
        <View
          style={[styles.checkbox, task.completed && styles.checkboxCompleted]}
        >
          {task.completed && <Text style={styles.checkmark}>✓</Text>}
        </View>
        <Text style={[styles.text, task.completed && styles.textCompleted]}>
          {task.text}
        </Text>
      </TouchableOpacity>

      {/* Remove task */}
      <TouchableOpacity onPress={onDelete} onLongPress={onDelete}>
        <Text style={styles.delete}>✕</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 999,
    borderWidth: 2,
    borderColor: "#9CA3AF",
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxCompleted: {
    backgroundColor: "#10B981",
    borderColor: "#10B981",
  },
  checkmark: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    color: "#111827",
  },
  textCompleted: {
    textDecorationLine: "line-through",
    color: "#9CA3AF",
  },
  delete: {
    color: "#EF4444",
    fontSize: 18,
    marginLeft: 12,
  },
});
