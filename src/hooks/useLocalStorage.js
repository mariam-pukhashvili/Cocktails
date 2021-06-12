import { useState } from 'react'
import { getValue, storeValue } from '../utils/localStorage'

export const useLocalStorage = (key = '', initialValue = '') => {
  const [state, setState] = useState(() => {
    try {
      const record = getValue(key)
      return record || initialValue
    } catch {
      return initialValue
    }
  })

  const setLocalStorage = (newState) => {
    try {
      const newValue = typeof newState === 'function' ? newState(state) : newState
      setState(newValue)
      storeValue(key, newValue)
    } catch {
      console.log('unable to store value')
    }
  }

  return [state, setLocalStorage]
}

export default useLocalStorage
