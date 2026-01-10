import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

// Available filter options for the list
const FILTERS = [
  { key: "all", label: "All" },
  { key: "active", label: "Active" },
  { key: "completed", label: "Completed" },
];

// Renders filter chips for task visibility
const FilterBar = ({ activeFilter, onChangeFilter }) => {
  return (
    <View style={styles.container}>
      {FILTERS.map((filter) => {
        const isActive = activeFilter === filter.key;
        return (
          <TouchableOpacity
            key={filter.key}
            style={[styles.chip, isActive && styles.chipActive]}
            onPress={() => onChangeFilter(filter.key)}
          >
            <Text style={[styles.label, isActive && styles.labelActive]}>
              {filter.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default FilterBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 16,
  },
  chip: {
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
  },
  chipActive: {
    backgroundColor: "#111827",
    borderColor: "#111827",
  },
  label: {
    fontSize: 13,
    color: "#4B5563",
  },
  labelActive: {
    color: "#F9FAFB",
    fontWeight: "600",
  },
});
