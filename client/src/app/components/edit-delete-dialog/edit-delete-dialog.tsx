import React, { useState } from 'react';
import './edit-delete-dialog.scss';
import { patchTodo, deleteTodo } from '../../utils/fetchTodos';

interface EditDeleteDialogProps {
  todoId: string;
  title: string;
  refreshData: () => void;
}

const EditDeleteDialog: React.FC<EditDeleteDialogProps> = ({ todoId, title, refreshData }) => {
  const [newTitle, setNewTitle] = useState<string>(title);
  const [isEditing, setIsEditing] = useState<boolean>(false);

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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSaveClick();
    }
  };

  return (
    <div className={isEditing ? 'dialog-container-edit' : 'dialog-container'}>
      {isEditing ? (
        <div className="edit-field">
          <input
            type="text"
            className="edit-input"
            style={{ zIndex: 90, position: 'relative', marginRight: '100%' }}
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder='Edit your todo and press enter ...'
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
