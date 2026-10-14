import { createContext, useContext } from 'react'

export const GuideContext = createContext(null)
export const useGuide = () => useContext(GuideContext)
