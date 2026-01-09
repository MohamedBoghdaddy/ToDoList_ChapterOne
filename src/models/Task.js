export const createTaskModel = (text) => ({
  id: Date.now().toString(),
  text: text.trim(),
  completed: false,
});