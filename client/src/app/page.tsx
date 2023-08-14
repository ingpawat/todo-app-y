"use client"
import React, { useState, useEffect, useRef } from 'react';
import './style.scss';
import ProgressBar from "@ramonak/react-progress-bar";
import { getAllTodo, patchTodo, postTodo } from './utils/fetchTodos';
import Image from 'next/image';
import TickBox from '../app/assets/tickBox.svg';
import Dot from '../app/assets/3dot.svg'
import ChevronDown from '../app/assets/chevron-down.svg';
import EditDeleteDialog from '@/app/components/edit-delete-dialog/edit-delete-dialog'

export default function Home() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [isDialogOpen, setDialogOpen] = useState<boolean>(false);
    const [todoIdforEditDelete, setTodoIdforEditDelete] = useState<string | null>(null);
    const [howManyCompleted, setHowManyCompleted] = useState<number>(0);
    const [newTodoTitle, setNewTodoTitle] = useState<string>('');
    const [progressBoxWidth, setProgressBoxWidth] = useState(85);
    const progressBoxRef = useRef(null);


    const fetchData = async () => {
        try {
            const todosData = await getAllTodo();
            setTodos(todosData);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };

    const handleTickClick = async (todoId: string, updatedFields: any) => {
        try {
            const todo = todos.find(todo => todo.id === todoId);
            const updatedFields = { completed: !todo.completed };
            await patchTodo(todoId, updatedFields);
            fetchData();
        } catch (error) {
            console.error('Error updating todo:', error);
        }
    };

    const completeCount = () => {
        return todos.filter(todo => todo.completed).length;
    };

    const refreshData = async () => {
        const updatedTodos = await getAllTodo();
        setTodos(updatedTodos);
    };

    const handleAddTodo = async () => {
        try {
            if (newTodoTitle.trim() === '') return;

            const newTodo = { title: newTodoTitle, completed: false };
            await postTodo(newTodo);
            setNewTodoTitle('');
            fetchData();
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };

    useEffect(() => {
        setHowManyCompleted(completeCount());
    }, [todos]);

    useEffect(() => {
        fetchData();
        refreshData();
        if (progressBoxRef.current) {
            const width = progressBoxRef.current.offsetWidth;
            setProgressBoxWidth((width - 30)); // Convert to percentage
        }
    }, []);

    return (
        <>
            <main className='main'>
                <div className='container' >
                    <div className='progress-box' ref={progressBoxRef}>
                        <div className="left-side">
                            <p className='progress-title'>Progress</p>
                            <div className='progress-bar-center'>
                                <ProgressBar
                                    completed={(howManyCompleted / todos.length) * 100}
                                    bgColor="#fff"
                                    height="7.343px"
                                    width={progressBoxWidth}
                                    borderRadius="999px"
                                    labelAlignment="outside"
                                    isLabelVisible={false}
                                    baseBgColor="#3B3B3B"
                                    labelColor="#e80909"
                                    animateOnRender
                                    maxCompleted={100}
                                />
                            </div>
                            <p className='completed-text'>{howManyCompleted} completed</p>
                        </div>
                    </div>
                    {loading ? (
                        <span className="loader"></span>
                    ) : (
                        <div className='task-container'>
                            <div className='task-filter-container'>
                                <h2 className='task-title'>Tasks</h2>
                                <div className='filter-dropdown'>
                                    <p>ALL</p>
                                    <Image src={ChevronDown} className='chevron-down' alt='ChevronDown' width={14} height={14} />
                                </div>
                            </div>
                            {todos.map(todo => (
                                <div className='task-capsule' key={todo.id}>
                                    {/* Tick box */}
                                    <div
                                        className='tick-box'
                                        onClick={() => handleTickClick(todo.id, '')}
                                        style={{
                                            backgroundColor: todo.completed ? '#585292' : 'transparent'
                                        }}
                                    >
                                        <Image src={TickBox} alt='TickBox' width={17} height={17} />
                                    </div>

                                    {/* Todo - Title */}
                                    <p
                                        className={todo.completed ? 'completed-todo' : 'todo-title'}
                                    >
                                        {todo.title}
                                    </p>

                                    {/* 3 Dots click to open the edit delete dialog */}
                                    <a
                                        style={{ zIndex: 80 }}
                                        onClick={() => {
                                            setDialogOpen(true);
                                            setTodoIdforEditDelete(todo.id);
                                        }}>

                                        <Image src={Dot} alt='Dot' width={17} height={17} style={{ cursor: 'pointer' }} />
                                    </a>

                                    {isDialogOpen && todoIdforEditDelete === todo.id && (
                                        <>
                                            <div className='edit-delete-dialog-warpper' style={{ zIndex: 90 }} >
                                                <EditDeleteDialog
                                                    todoId={todoIdforEditDelete}
                                                    key={todo.id}
                                                    refreshData={refreshData} />
                                            </div>
                                            <div className='background' onClick={() => setDialogOpen(false)} style={{ zIndex: 50 }} />
                                        </>
                                    )}

                                </div>
                            ))}

                            <div className='task-capsule-add-todo'>
                                <input
                                    className='add-todo-type-field'
                                    type='text'
                                    value={newTodoTitle}
                                    onChange={e => setNewTodoTitle(e.target.value)}
                                    onKeyDown={e => {
                                        if (e.key === 'Enter') {
                                            handleAddTodo(newTodoTitle);
                                        }
                                    }}
                                    placeholder='Add your todo...'
                                />
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </>
    );
} 