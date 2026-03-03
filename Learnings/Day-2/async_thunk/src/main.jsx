import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux";
import Posts from './App.jsx'
import { store } from './store_async.js';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Posts />
  </Provider>,
)
