import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import TaskListScreen from "./src/screens/TaskListScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="dark-content" />
      <TaskListScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },
});
