import React, { useState } from 'react';
const [newTitle, setNewTitle] = useState(title);
import { patchTodo, deleteTodo } from '../../utils/fetchTodos';

const handleSaveClick = async () => {

    const [isEditing, setIsEditing] = useState(false);
    
    try {
      await patchTodo(todoId, { title: newTitle });
      setIsEditing(false);
      refreshData();
    } catch (error) {
      console.error('Error editing todo:', error);
    }
  };

const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSaveClick();
    }
  };


const editInputField = () => {
    return (
        <div className="edit-field">
            <input
                type="text"
                className="edit-input"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </div>
    )
}

export default editInputField;