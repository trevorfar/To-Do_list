import React from 'react';
import Fetch from './Fetch';
import List from './List';
import QueryDB from './QueryDB';
const Queries: React.FC = () => {
    

    return (
        <div>
          <Fetch />
          <List />
          <QueryDB user_id={1} />
        </div>
    );
};

export default Queries;
