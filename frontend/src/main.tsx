import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { AuthContextProvider } from './context/AuthContext.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ShortlinkContextProvider } from './context/ShortlinkContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ShortlinkContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ShortlinkContextProvider>
  </BrowserRouter>
)
