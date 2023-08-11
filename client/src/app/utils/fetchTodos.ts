import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export async function getAllTodo() {
  try {
    const response = await axios.get(`${BASE_URL}/todos`);
    return response.data;
  } catch (error) {
    throw new Error('Error while fetching all todos');
  }
}

export async function getTodoId(todoId: number) {
  try {
    const response = await axios.get(`${BASE_URL}/todos/${todoId}`);
    return response.data;
  } catch (error) {
    throw new Error('Error while fetching a todo by ID');
  }
}

export async function putTodo(todoId: number, updatedTodo: string) {
  try {
    const response = await axios.put(`${BASE_URL}/todos/${todoId}`);
    return response.data;
  } catch (error) {
    throw new Error('Error while updating a todo');
  }
}

export async function patchTodo(todoId: number, updatedFields: string) {
  try {
    const response = await axios.patch(`${BASE_URL}/todos/${todoId}`, updatedFields);
    return response.data;
  } catch (error) {
    throw new Error('Error while partially updating a todo');
  }
}

export async function deleteTodo(todoId: number) {
  try {
    await axios.delete(`${BASE_URL}/todos/${todoId}`);
  } catch (error) {
    throw new Error('Error while deleting a todo');
  }
}
