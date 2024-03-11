    import { useState, useEffect } from 'react';
    // import { Redirect } from 'react-router-dom';

    const useTaskList = (listName: string): { list: string[], handleClick: () => void, delTask: (index: number, item: string) => void, delList: (listName: string ) => void, switchList: () => Promise<void>} => {
        const [list, setList] = useState<string[]>([]);
        const [listState, deleteListState] = useState<boolean>(false);
        const [deleted, setDeleted] = useState<boolean>(false);

        useEffect(() => {
            const fetchData = async () => {

                const response = await fetch('http://localhost:3300/queryTasks', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ list_name: listName })
                });

                if (response.ok) {
                    console.log('Task Achieved successfully!');
                    const responseData = await response.json();
                    setList(responseData.tasks);
                } else {
                    console.error('Failed to query:', response.statusText);
                }
            }
            fetchData();
        }, [listName, listState, deleted]);

        const handleClick = async () => {
            const description = window.prompt('Enter task description:');
            const user_id = localStorage.getItem('user_id');

            if (description && user_id) {
                const response = await fetch('http://localhost:3300/addTask', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ user_id, description, list_name: listName })
                });
                if (response.ok) {
                    console.log('Task added successfully!');
                    setList([...list, description]);

                } else {
                    console.error('Failed to add task:', response.statusText);
                }
            }
        };

        const delTask = async (index: number, item: string) => {
            const user_id = localStorage.getItem('user_id');
            console.log(item);
            if (user_id && item) {
                const response = await fetch('http://localhost:3300/delTask', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ user_id, item })
                });
                if (response.ok) {
                    console.log('Task removed successfully!');
                    const newList = list.filter((_, idx) => idx !== index);
                    setList(newList);
                    setDeleted(!deleted)
                } else {
                    console.error('Failed to remove task:', response.statusText);
                }
            }
        }

        const switchList = async (): Promise<void> => {
            const user_id = localStorage.getItem('user_id');
            const response = await fetch('http://localhost:3300/queryList', {
                      method: 'POST',
                      headers: {
                          'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({ user_id })
                  });
        
                  if (response.ok) {
                      console.log('Task Queried successfully!');
                      const responseData = await response.json();
                      console.log(responseData);
                      return responseData;
                      } else {
                      console.error('Failed to query:', response.statusText);
                  }
              }
        
        const delList = async (list_name: string) => {
            const user_id = localStorage.getItem('user_id');
            
            if (user_id && list_name) {
                const response = await fetch('http://localhost:3300/delList', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ user_id, list_name })
                });
                if (response.ok) {
                    console.log('list removed successfully!');
                    deleteListState(true);
                    // return <Redirect to="/Home" />;
                } else {
                    console.error('Failed to remove list:', response.statusText);
                    deleteListState(false);
                }   
            }
        }

        return { list, handleClick, delTask, delList, switchList };
    };

    export default useTaskList;
