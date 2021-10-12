import { Todo } from '@/webservices/models/Todo';

export default class MainState {
    public currentLanguage: string = 'es';
    public isLoading: boolean = false;
    public todos: Todo[] = [];
    public isShowLeftMenu: boolean = false;
}
