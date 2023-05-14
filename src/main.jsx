import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  Router,
  RouterProvider,
} from "react-router-dom";
import router from './components/Routes/Routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </div>
)
