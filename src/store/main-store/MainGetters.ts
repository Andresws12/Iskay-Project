import { Getters } from 'vuex-smart-module';

import MainState from './MainState';

export default class MainGetters extends Getters<MainState> {
    public get query(): string {
        return ``;
    }
}
