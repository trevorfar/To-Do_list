import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Routes/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Queries from './Routes/Queries/Queries'
import ListPage from './Components/ListEndpoint/ListPage'


const App: React.FC = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Queries" element={<Queries />} />
      <Route path="/:listName" element={<ListPage />} />
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
export { Queries }; 