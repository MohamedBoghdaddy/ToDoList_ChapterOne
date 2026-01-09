import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";

const Snackbar = ({ visible, message, onUndo }) => {
  if (!visible) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <TouchableOpacity onPress={onUndo}>
        <Text style={styles.undo}>UNDO</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Snackbar;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    left: 16,
    right: 16,
    backgroundColor: "#111827",
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  message: {
    color: "#F9FAFB",
    fontSize: 13,
  },
  undo: {
    color: "#60A5FA",
    fontWeight: "600",
    fontSize: 13,
  },
});
