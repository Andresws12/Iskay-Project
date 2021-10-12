import { Mutations } from 'vuex-smart-module';

import { Todo } from '@/webservices/models/Todo';

import MainState from './MainState';

export default class MainMutations extends Mutations<MainState> {
    // Translation
    public changeLanguageToSpanish(): void {
        this.state.currentLanguage = 'es';
    }

    public changeLanguageToEnglish(): void {
        this.state.currentLanguage = 'en';
    }

    // Loading Mutations
    public startLoading(): void {
        this.state.isLoading = true;
    }

    public stopLoading(): void {
        this.state.isLoading = false;
    }

    // Todos
    public setTodos(todos: Todo[]): void {
        this.state.todos = todos;
    }
    public removeTodo(id: number): void {
        this.state.todos.splice(
            this.state.todos.findIndex(todo => todo.id === id),
            1
        );
    }
    public addTodo(todo: Todo): void {
        this.state.todos.push(todo);
    }
}
