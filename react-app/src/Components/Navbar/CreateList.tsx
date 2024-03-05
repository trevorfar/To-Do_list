import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'

interface CreateListProps {
    param1?: string;
  }

const CreateList: React.FC<CreateListProps> = (props) => {
    return(
        <>
            <li><NavLink to="/p1" className="active-link">{props.param1}</NavLink></li>
        </>
    );
};

export default CreateList;

  