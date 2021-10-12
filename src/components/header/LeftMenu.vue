<template>
    <transition name="slide-fade-menu" mode="out-in">
        <div
            v-if="isShowLeftMenu"
            class="left-menu"
            v-click-outside="closeLeftMenu"
        >
            <img
                src="../../assets/img/times-solid.svg"
                class="left-menu__close-menu-icon"
                @click="closeLeftMenu"
                alt="close-left-menu"
            />
            <div class="left-menu__logo">
                <img src="../../assets/img/logo.svg" alt="logo" />
            </div>
            <b-menu class="left-menu__translation-menu">
                <b-menu-list :label="$t('common.languages.title')">
                    <b-menu-item :label="currentLanguage.toUpperCase()">
                        <b-menu-item
                            label="ES"
                            :active="currentLanguage === 'es'"
                            @click="changeLanguageToSpanish"
                        ></b-menu-item>
                        <b-menu-item
                            label="EN"
                            :active="currentLanguage === 'en'"
                            @click="changeLanguageToEnglish"
                        ></b-menu-item>
                    </b-menu-item>
                </b-menu-list>
            </b-menu>
        </div>
    </transition>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import mainStore from '@/store/main-store/MainStore';

@Component({
    name: 'LeftMenu',
})
export default class LeftMenu extends Vue {
    private mainStore = mainStore.context(this.$store);

    private get currentLanguage(): string {
        return this.mainStore.state.currentLanguage;
    }
    private get isShowLeftMenu(): boolean {
        return this.mainStore.state.isShowLeftMenu;
    }

    private changeLanguageToSpanish(): void {
        this.mainStore.actions.changeLanguageToSpanish();
    }
    private changeLanguageToEnglish(): void {
        this.mainStore.actions.changeLanguageToEnglish();
    }

    private closeLeftMenu(): void {
        this.mainStore.actions.hideLeftMenu();
    }
}
</script>

<style lang="scss" scoped>
.left-menu {
    top: 0rem;
    left: 0rem;
    width: 19rem;
    height: 100%;
    z-index: 2000;
    position: absolute;
    background-color: #fff;

    &__logo {
        justify-content: center;
        display: flex;
        padding: 25px;
        width: 100%;
    }

    &__close-menu-icon {
        width: 14px;
        position: absolute;
        right: 10px;
        top: 10px;
        filter: $secondary-filter;
    }
    &__translation-menu {
        padding: 25px;
    }
}
</style>
