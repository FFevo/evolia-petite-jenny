import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Ordre : tokens (variables) → base (reset + matière) → motion (interactions)
import './styles/tokens.css'
import './styles/base.css'
import './styles/motion.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
