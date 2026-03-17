import { createContext, useContext } from 'react'

export const DisclaimerContext = createContext(null)

export function useDisclaimerAccepted() {
  const context = useContext(DisclaimerContext)
  if (!context) {
    return true // Default to true if context doesn't exist
  }
  return context.accepted
}
