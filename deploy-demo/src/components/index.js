import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'


const domNode = document.getElementById('root')
const root = createRoot(domNode)

root.render(
  <>
    <h1>Todo App</h1>
    <App />
  </>
)
