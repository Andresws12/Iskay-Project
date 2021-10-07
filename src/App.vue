<template>
    <div id="app">
        <top-header />
        <router-view />
        <b-loading
            :is-full-page="true"
            v-model="isLoading"
            :can-cancel="true"
        ></b-loading>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

import mainStore from '@/store/main-store/MainStore';

import TopHeader from '@/components/header/TopHeader.vue';

import Axios from 'axios';

@Component({
    name: 'App',
    components: {
        TopHeader,
    },
})
export default class App extends Vue {
    private mainStore = mainStore.context(this.$store);

    private get currentLanguage(): string {
        return this.mainStore.state.currentLanguage;
    }

    private get isLoading(): boolean {
        return this.mainStore.state.isLoading;
    }

    public async created(): Promise<void> {
        this.$i18n.locale = this.currentLanguage;

        Axios.defaults.headers.post['Accept-Language'] = this.currentLanguage;

        this.mainStore.actions.getTodos();
    }

    @Watch('currentLanguage')
    private onChangeLanguage() {
        this.$i18n.locale = this.currentLanguage;
    }
}
</script>

<style lang="scss" scoped></style>
