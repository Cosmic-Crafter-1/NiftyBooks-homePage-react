import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client';

import App from './App.jsx'
import './index.css'

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(<App />)
