import { Routes, Route } from 'react-router-dom'
import Layout from './layout'
// import Home from './components/home'
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
        {/* <Route path='home' element={<Home/>}/> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
