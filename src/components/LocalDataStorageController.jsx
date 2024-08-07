const localTodoKey = "TodoWork";
export const getLocalStorageData = () => {
  const rawTodoWork = localStorage.getItem(localTodoKey);
  if (!rawTodoWork) {
    return [];
  }
  return JSON.parse(rawTodoWork);
};

export const setLocalStorageData = (todoWork) => {
  return localStorage.setItem(localTodoKey, JSON.stringify(todoWork));
};
