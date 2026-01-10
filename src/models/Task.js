// Factory for standardized task objects
export const createTaskModel = (text) => ({
  id: Date.now().toString(),
  text: text.trim(),
  completed: false,
});
