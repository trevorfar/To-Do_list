import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Routes/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Queries from './Routes/Queries/Queries'
import ListsHome from './Components/ListEndpoint/ListsHome'
import SignupForm from './Components/Login/SignupForm'

const App: React.FC = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Queries" element={<Queries />} />
      <Route path="/ListsHome" element={<ListsHome />} />
      <Route path="/Signup" element={<SignupForm />} />
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