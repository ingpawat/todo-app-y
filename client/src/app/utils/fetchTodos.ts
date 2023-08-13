import axios, { AxiosResponse } from 'axios';

const BASE_URL = 'http://localhost:3001';

interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

const createError = (operation: string) => new Error(`Error while ${operation} todo`);

async function axiosRequest<T>(url: string, method: string, data?: any): Promise<T> {
  try {
    const response: AxiosResponse<T> = await axios[method](url, data);
    return response.data;
  } catch (error) {
    throw createError(method.toLowerCase());
  }
}

export async function getAllTodo(): Promise<Todo[]> {
  return axiosRequest<Todo[]>(`${BASE_URL}/todos`, 'get');
}

export async function getTodoId(todoId: string): Promise<Todo> {
  return axiosRequest<Todo>(`${BASE_URL}/todos/${todoId}`, 'get');
}

export async function postTodo(newTodo: Todo): Promise<Todo> {
  return axiosRequest<Todo>(`${BASE_URL}/todos`, 'post', newTodo);
}

export async function patchTodo(todoId: string, updatedFields: Partial<Todo>): Promise<Todo> {
  return axiosRequest<Todo>(`${BASE_URL}/todos/${todoId}`, 'patch', updatedFields);
}

export async function deleteTodo(todoId: string): Promise<void> {
  await axiosRequest<void>(`${BASE_URL}/todos/${todoId}`, 'delete');
}
