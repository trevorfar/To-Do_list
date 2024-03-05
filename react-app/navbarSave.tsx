// import React, { useState } from 'react'
// import { NavLink } from 'react-router-dom';
// import CreateList from './CreateList';

// const Navbar: React.FC = () => {
//   const [menuItems, setMenuItems] = useState([
//     { id: 1, label: 'Home', path: '/', isActive: true }
//   ]);

//   const addListItem = (label: string, path: string) => {    
//     const newId = menuItems.length + 1;
//     const newItem = { id: newId, label, path, isActive: false };
//     setMenuItems([...menuItems, newItem]);
//   };


//   return (
//     <div className="navbar">
//       <nav>
//         <ul>
//           {menuItems.map(item => (
//             <li key={item.id}>
//               <NavLink to={item.path} className={item.isActive ? 'active-link' : ''}>{item.label}</NavLink>
//             </li>
//           ))}    
//           <li>
//           <button onClick={() => addListItem('New Item', '/new')}>Add New Item</button>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
