import Vue from 'vue';
import { Actions } from 'vuex-smart-module';

import { Todo } from '@/webservices/models/Todo';

import MainMutations from './MainMutations';
import MainGetters from './MainGetters';
import MainState from './MainState';

import { getTodos, removeTodo, addTodo } from '@/webservices/TodosWebservice';

import i18n from '../../localization/localization';

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

            this.commit('setTodos', todos.slice(0, 3));
        } catch (e) {
            console.error(e);
        } finally {
            this.commit('stopLoading', null);
        }
    }
    public async removeTodo(id: number): Promise<void> {
        try {
            this.commit('startLoading', null);

            await removeTodo(id);

            this.commit('removeTodo', id);

            Vue.$toast.success(`${i18n.t('views.home.successRemove')}`, {
                timeout: 4000,
            });
        } catch (e) {
            console.error(e);
            Vue.$toast.error(`${i18n.t('common.errors.removeTodo')}`, {
                timeout: 4000,
            });
        } finally {
            this.commit('stopLoading', null);
        }
    }
    public async addTodo(todo: Todo): Promise<void> {
        try {
            this.commit('startLoading', null);

            await addTodo(todo);

            this.commit('addTodo', todo);

            Vue.$toast.success(`${i18n.t('views.home.successAdd')}`, {
                timeout: 4000,
            });
        } catch (e) {
            console.error(e);
            Vue.$toast.error(`${i18n.t('common.errors.addTodo')}`, {
                timeout: 4000,
            });
        } finally {
            this.commit('stopLoading', null);
        }
    }

    // Left Menu
    public showLeftMenu(): void {
        this.commit('showLeftMenu');
    }
    public hideLeftMenu(): void {
        this.commit('hideLeftMenu');
    }
}
