import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, { FriendCar, MyCar } from './App.jsx'
import { Timer } from './Effect.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <MyCar />
    <FriendCar />
    <Timer/>
  </StrictMode>,
)
