// api/todos/[id].ts

import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001';
const API_TODOS_PATH = process.env.NEXT_PUBLIC_API_TODOS_PATH || '/todos';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const todoId = parseInt(req.query.id as string, 10);
    
    try {
      const response = await axios.get(`${API_BASE_URL}${API_TODOS_PATH}/${todoId}`);
      const todo = response.data;
      res.status(200).json(todo);
    } catch (error) {
      res.status(404).json({ message: 'Todo not found' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
