import React from 'react';
import { useParams } from 'react-router-dom';

const ListPage: React.FC = () => {
  const { listName } = useParams<{ listName: string }>();

 
  return (
    <h1>You are currently viewing the {listName} list. </h1>
  );
};
export default ListPage;
