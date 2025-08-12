export const setItem = (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error(`Error setting localStorage key "${key}":`, err);
    }
  };
  
  export const getItem = (key, defaultValue = null) => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : defaultValue;
    } catch (err) {
      console.error(`Error getting localStorage key "${key}":`, err);
      return defaultValue;
    }
  };