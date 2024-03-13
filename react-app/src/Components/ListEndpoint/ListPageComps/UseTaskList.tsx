    import { useState, useEffect } from 'react';
    // import { Redirect } from 'react-router-dom';

    const useTaskList = (listName: string): { list: string[], handleClick: () => void, delTask: (index: number, item: string) => void, delList: (listName: string ) => void, switchList: () => Promise<void>} => {
        const [taskState, setTaskState] = useState<{ tasks: string[], listDeleted: boolean }>({ tasks: [], listDeleted: false });
        const [state, setState] = useState<string[]>([]);

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
                setTaskState({ tasks: responseData.tasks, listDeleted: false });

            } else {
                console.error('Failed to query:', response.statusText);
            }
        }

        useEffect(() => {
            fetchData();
        }, [listName]);

        useEffect(()=>{
            console.log("yay");

        }, [taskState])

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
                    setState([...state, description]);
                    console.log(state);
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
                    const newList = taskState.tasks.filter((_, idx) => idx !== index);
                    setTaskState(prevState => ({
                        ...prevState,
                        tasks: newList
                    }));
                    
                } else {
                    console.error('Failed to remove task:', response.statusText);
                    setTaskState(prevState => ({
                        ...prevState,
                        listDeleted: !prevState.listDeleted}));
                }
            }
        }

        const switchList = async () => {
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
                    setTaskState(prevState => ({
                        ...prevState,
                        listDeleted: true
                    }));
                    // return <Redirect to="/Home" />;
                } else {
                    console.error('Failed to remove list:', response.statusText);
                    setTaskState(prevState => ({
                        ...prevState,
                        listDeleted: false
                    }));
                }   
            }
        }

        return { list: taskState.tasks, handleClick, delTask, delList, switchList };
    };

    export default useTaskList;
