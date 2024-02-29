import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Routes/Home'
import Page1 from './Routes/p1'
import Navbar from './Routes/Navbar'

const App: React.FC = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/p1" element = {<Page1 />} />
    </Routes>
  </Router>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export { App };
export { Home };
export { Page1 };
