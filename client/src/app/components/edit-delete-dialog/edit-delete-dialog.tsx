import React from 'react';
import './edit-delete-dialog.scss';
import { putTodo, deleteTodo } from '../../utils/fetchTodos'; // Make sure to import deleteTodo

const EditDeleteDialog = ({ todoId }) => {
    console.log('pass',todoId)

  const handleEditClick = async (todoId: string, updatedTodo: string) => {
    console.log('edit',todoId)
    try {
      await putTodo(todoId, updatedTodo);
      console.log('Edit successful');
    } catch (error) {
      console.error('Error editing todo:', error);
    }
  };

  const handleDeleteClick = async (todoId) => {
    console.log('delete',todoId)
    try {
      await deleteTodo(todoId); // Make sure deleteTodo is defined and implemented
      console.log('Delete successful');
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div className='dialog-container'>
      <a className='edit' onClick={handleEditClick}>
        Edit
      </a>
      <a className='delete' onClick={handleDeleteClick}>
        Delete
      </a>
    </div>
  );
};

export default EditDeleteDialog;
