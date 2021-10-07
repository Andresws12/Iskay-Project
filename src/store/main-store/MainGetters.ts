import { Getters } from 'vuex-smart-module';

import MainState from './MainState';

import { Todo } from '@/webservices/models/Todo';

export default class MainGetters extends Getters<MainState> {
    public get query(): string {
        return ``;
    }

    public get firstThreeTodos(): Todo[] {
        return this.state.todos.length > 0 ? this.state.todos.slice(0, 3) : [];
    }
}
