import React, { useState } from 'react';
import './edit-delete-dialog.scss';
import { patchTodo, deleteTodo } from '../../utils/fetchTodos';

const EditDeleteDialog = ({ todoId, title, refreshData }) => {
  const [newTitle, setNewTitle] = useState(title);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      await patchTodo(todoId, { title: newTitle });
      setIsEditing(false);
      refreshData();
    } catch (error) {
      console.error('Error editing todo:', error);
    }
  };

  const handleDeleteClick = async () => {
    try {
      await deleteTodo(todoId);
      refreshData();
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSaveClick();
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
        <div className="action-buttons">
          <a className="action-button edit" onClick={handleEditClick}>
            Edit
          </a>
          <a className="action-button delete" onClick={handleDeleteClick}>
            Delete
          </a>
        </div>
      )}
    </div>
  );
};

export default EditDeleteDialog;
