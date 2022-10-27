import { useEffect, useState } from 'react'

const getStorageValue = <T,>(key: string, defaultValue: T) => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(key)
    const value = saved !== null ? JSON.parse(saved) : defaultValue

    return value as T
  }
  return defaultValue
}

const useLocalStorage = <T,>(key: string, defaultValue: T) => {
  const [value, setValue] = useState<T>(() => {
    return getStorageValue(key, defaultValue)
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue as any]
}

export default useLocalStorage
