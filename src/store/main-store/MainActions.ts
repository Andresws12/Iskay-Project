import { Actions } from 'vuex-smart-module';

import { Todo } from '@/webservices/models/Todo';

import MainMutations from './MainMutations';
import MainGetters from './MainGetters';
import MainState from './MainState';

import { getTodos } from '@/webservices/TodosWebservice';

export default class MainActions extends Actions<
    MainState,
    MainGetters,
    MainMutations,
    MainActions
> {
    // Translations
    public changeLanguageToSpanish(): void {
        this.commit('changeLanguageToSpanish');
    }

    public changeLanguageToEnglish(): void {
        this.commit('changeLanguageToEnglish');
    }

    // Todos
    public async getTodos(): Promise<void> {
        try {
            this.commit('startLoading', null);

            const todos: Todo[] = await getTodos(this.getters.query);

            this.commit('setTodos', todos);
        } catch (e) {
            console.error(e);
        } finally {
            this.commit('stopLoading', null);
        }
    }
}
