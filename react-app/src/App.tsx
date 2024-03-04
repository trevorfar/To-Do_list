import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Routes/Home/Home'
import TestPage from './Routes/TestPage/TestPage'
import Navbar from './Components/Navbar/Navbar'
import Queries from './Routes/Queries/Queries'

const App: React.FC = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/TestPage" element={<TestPage />} />
      <Route path="/Queries" element={<Queries />} />

      </Routes>
  </Router>
);

const app = document.getElementById('appId');

if (app) {
  const root = ReactDOM.createRoot(app);
  root.render(<React.StrictMode><App /></React.StrictMode>);
} else {
  console.error('AppElement not found')
}



export { App };
export { Home };
export { TestPage };
export { Queries }; 