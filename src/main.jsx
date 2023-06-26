import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Dashboard from './pages/Dashboard'
import DetailProduk from './pages/DetailProduk'
import About from './pages/About'
import Shop from './pages/Shop'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
 {
  element: <App/>,
  children:[
    {
      path:'/',
      element: <Dashboard/>  
    },
    {
      path:'/detail-produk/:idProduk',
      element: <DetailProduk/>,  
    },
    {
      path:'/about',
      element: <About/>, 
    },
    {
      path:'/shop',
      element: <Shop/>, 
    }
  ]
 },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
