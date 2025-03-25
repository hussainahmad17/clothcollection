// Utility to safely use browser APIs
export function isBrowser() {
  return typeof window !== "undefined"
}

// Safe localStorage wrapper
export const safeLocalStorage = {
  getItem: (key) => {
    if (isBrowser()) {
      return localStorage.getItem(key)
    }
    return null
  },
  setItem: (key, value) => {
    if (isBrowser()) {
      localStorage.setItem(key, value)
    }
  },
  removeItem: (key) => {
    if (isBrowser()) {
      localStorage.removeItem(key)
    }
  },
}

