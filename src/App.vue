<template>
    <div id="app">
        <top-header />
        <subheader />
        <left-menu />
        <transition name="slide-fade-inverted" mode="out-in">
            <router-view />
        </transition>
        <GithubButton />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

import mainStore from '@/store/main-store/MainStore';

import TopHeader from '@/components/header/TopHeader.vue';
import Subheader from '@/components/header/Subheader.vue';
import LeftMenu from '@/components/header/LeftMenu.vue';
import GithubButton from '@/components/GithubButton.vue';

import Axios from 'axios';

@Component({
    name: 'App',
    components: {
        TopHeader,
        Subheader,
        LeftMenu,
        GithubButton,
    },
})
export default class App extends Vue {
    private mainStore = mainStore.context(this.$store);

    private get currentLanguage(): string {
        return this.mainStore.state.currentLanguage;
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
