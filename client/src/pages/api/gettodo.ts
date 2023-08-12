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
