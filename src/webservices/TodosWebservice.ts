import axios from 'axios';

import { apiPrefix, jsonHeaders } from './consts';

import { Todo } from './models/Todo';

const baseUrl: string = apiPrefix('/todos');

export const getTodos: (params: string) => Promise<Todo[]> = async (
    params: string
) => {
    const response = await axios.get<Todo[]>(
        `${baseUrl}${params}`,
        jsonHeaders
    );
    return response.data;
};

export const addTodo: (todo: Todo) => Promise<void> = async todo => {
    await axios.post(`${baseUrl}`, todo, jsonHeaders);
};

export const removeTodo: (id: number) => Promise<void> = async (id: number) => {
    await axios.delete(`${baseUrl}/${id}`, jsonHeaders);
};
