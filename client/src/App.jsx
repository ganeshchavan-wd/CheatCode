import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Upload from './pages/Upload'
import ViewCode from './pages/ViewCode'
import './styles/App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/view/:id" element={<ViewCode />} />
    </Routes>
  )
}

export default App