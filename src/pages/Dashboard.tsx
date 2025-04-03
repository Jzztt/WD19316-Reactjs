import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeProvider'

const Dashboard = () => {
  // global state
  const {theme, setTheme} = useContext(ThemeContext) as {theme: string; setTheme: React.Dispatch<React.SetStateAction<string>>};
  return (
   <>
    <div>Dashboard {theme}</div>
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Change Theme</button>
   </>

  )
}

export default Dashboard