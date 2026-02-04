import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { NumberList } from './Sample.jsx'
import { Listtodos } from './Sample.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <NumberList/> */}
    <Listtodos />
  </StrictMode>,
)
