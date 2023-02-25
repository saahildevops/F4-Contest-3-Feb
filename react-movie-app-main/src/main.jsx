import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import {AppProvider} from "./components/context";


const Test = () =>{
  return(
    <div style={{backgroundClip:'red'}}>
          <span>Title - <strong>Head</strong> </span>
          <span>Type - <strong>Title</strong> </span>
          <span>Year - <strong>Desc</strong> </span>
    </div>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
    <App />
  </AppProvider>
  </React.StrictMode>
)
