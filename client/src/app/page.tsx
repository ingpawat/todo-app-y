"use client"
import React, { useState, useEffect } from 'react';
import './style.scss';
import ProgressBar from "@ramonak/react-progress-bar";
import { getAllTodo, putTodo, patchTodo, deleteTodo, getTodoId } from './utils/fetchTodos';
import TickBox from './assets/tickBox.svg';

export default function Home() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedTodoId, setSelectedTodoId] = useState(null); 

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const todosData = await getAllTodo();
            setTodos(todosData);
            setLoading(false); 
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };

    const handleTickClick = (todoId) => {
        if (selectedTodoId === todoId) {
            setSelectedTodoId(null); 
        } else {
            setSelectedTodoId(todoId); 
        }
    };
    return (
        <>
            <main className='main'>
                <div className='container'>
                    <div className='progress-box'>
                        <div className="left-side">
                            <p className='progress-title'>Progress</p>
                            <div className='progress-bar-center'>
                                <ProgressBar
                                    completed={50}
                                    bgColor="#fff"
                                    height="7.343px"
                                    width="480px"
                                    borderRadius="999px"
                                    labelAlignment="outside"
                                    isLabelVisible={false}
                                    baseBgColor="#3B3B3B"
                                    labelColor="#e80909"
                                    animateOnRender
                                    maxCompleted={100}
                                />
                            </div>
                            <p className='completed-text'>... completed</p>
                        </div>
                    </div>
                    {loading ? (
                     <span className="loader"></span>
                    ) : (
                        <div className='task-container'>
                            <h2 className='task-title'>Tasks</h2>
                            {todos.map(todo => (
                                     <div className='task-capsule' key={todo.id}>
                                     <div
                                         className='tick-box'
                                         onClick={() => handleTickClick(todo.id)}
                                         style={{
                                             backgroundColor: selectedTodoId === todo.id ? '#585292' : 'transparent'
                                         }}
                                     >
                                         {/* Tick icon or content */}
                                     </div>
                                     <p className='todo-title'>{todo.title}</p>
                                 </div>
                            ))}
                            <div className='task-capsule'>
                                <p className='add-your-todo'>Add your todo...</p>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </>
    );
}

