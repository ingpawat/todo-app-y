import React, { useState } from 'react';
import './edit-delete-dialog.scss';
import { patchTodo, deleteTodo, getAllTodo } from '../../utils/fetchTodos';

const EditDeleteDialog = ({ todoId, title, refreshData }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [isEditing, setIsEditing] = useState(false);

  const fetchData = async () => {
    try {
      await getAllTodo();
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const handleEditClick = async () => {
    setIsEditing(true);
    fetchData();
  };

  const handleSaveClick = async () => {
    try {
      await patchTodo(todoId, { title: newTitle });
      setIsEditing(false);
      console.log('Edit successful');
      refreshData(); // Refresh the data here
    } catch (error) {
      console.error('Error editing todo:', error);
    }
  };

  const handleDeleteClick = async () => {
    try {
      await deleteTodo(todoId);
      fetchData();
      console.log('Delete successful');
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const handleKeyDown = async (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent default form submission
      await handleSaveClick(); // Save the data
    }
  };

  return (
    <div className={`dialog-container ${isEditing ? '' : 'edit-input-container'}`}>
      {isEditing ? (
        <div className="edit-field">
          <input
            type="text"
            className="edit-input"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      ) : (
        <>
          <a className="action-button edit" onClick={handleEditClick}>
            Edit
          </a>
          <a className="action-button delete" onClick={handleDeleteClick}>
            Delete
          </a>
        </>
      )}
    </div>
  );
};

export default EditDeleteDialog;
