import * as React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Routes/Home'
import Page1 from './Routes/p1'
import Navbar from './Routes/Navbar'
import Sneaky from './Routes/sneakyButton'

const App: React.FC = () => (
  <Router>
    <Navbar />
    <Sneaky />
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/p1" element = {<Page1 />} />
    </Routes>
  </Router>
);

const app = document.getElementById('appId');
if (app) {
const root = ReactDOM.createRoot(app);
root.render(<React.StrictMode><App /></React.StrictMode>);
}else{
  console.error('AppElement not found')
}



export { App };
export { Home };
export { Page1 };
