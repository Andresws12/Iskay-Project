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
