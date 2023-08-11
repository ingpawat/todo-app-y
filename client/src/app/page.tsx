"use client"
import React, { useState, useEffect } from 'react';
import './style.scss';
import ProgressBar from "@ramonak/react-progress-bar";
import { getAllTodo, putTodo, patchTodo, deleteTodo, getTodoId } from './utils/fetchTodos'; 

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const todosData = await getAllTodo();
      setTodos(todosData);
    } catch (error) {
      console.error('Error fetching todos:', error);
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
            <div className="right-side">
              <ul>
                {todos.map(todo => (
                  <li key={todo.id}>
                    <p>{todo.title}</p>
                    <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
