export const storeValue = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value))
export const getValue = (key) => JSON.parse(localStorage.getItem(key))
export const removeValue = (key) => localStorage.removeItem(key)
export const valueExists = (key) => !!localStorage.getItem(key)
