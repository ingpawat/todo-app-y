import React, { useState } from 'react';
import './edit-delete-dialog.scss';
import { patchTodo, deleteTodo } from '../../utils/fetchTodos';

const EditDeleteDialog = ({ todoId, title, refreshData }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = async () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      await patchTodo(todoId, { title: newTitle });
      setIsEditing(false);
      console.log('Edit successful');
    } catch (error) {
      console.error('Error editing todo:', error);
    }
  };

  const handleDeleteClick = async () => {
    try {
      await deleteTodo(todoId);
      refreshData();
      console.log('Delete successful');
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div className='dialog-container'>
      {isEditing ? (
        <div>
          <input
            type='text'
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <button className='action-button save' onClick={handleSaveClick}>
            Save
          </button>
        </div>
      ) : (
        <>
          <a className='action-button edit' onClick={handleEditClick}>
            Edit
          </a>
          <a className='action-button delete' onClick={handleDeleteClick}>
            Delete
          </a>
        </>
      )}
    </div>
  );
};

export default EditDeleteDialog;
