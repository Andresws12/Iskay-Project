<template>
    <div class="top-header">
        <div class="top-header__left top-header__item">
            <img
                src="../../assets/img/menu.svg"
                alt="Menu"
                class="top-header__menu-icon"
            />
            <img
                src="../../assets/img/search.svg"
                alt="Search"
                class="top-header__search-icon"
            />
        </div>
        <div class="top-header__center top-header__item">
            <img
                src="../../assets/img/logo.svg"
                alt="logo"
                class="top-header__logo-icon"
            />
        </div>
        <div class="top-header__right top-header__item">
            <img
                src="../../assets/img/login.svg"
                alt="login"
                class="top-header__login-icon"
            />
            <img
                src="../../assets/img/car.svg"
                alt="car"
                class="top-header__car-icon"
            />
            <div class="top-header__car-icon__counter">1</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    name: 'TopHeader',
})
export default class TopHeader extends Vue {}
</script>

<style lang="scss" scoped>
.top-header {
    background: white;
    padding: 20px 17px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #dbdbdb;

    &__item {
        display: flex;
        align-content: center;
        cursor: pointer;
    }

    &__center {
        justify-content: center;
    }

    &__logo-icon {
        width: 85%;
    }
    &__search-icon {
        margin-left: 24px;
    }
    &__car-icon {
        margin-left: 24px;
        &__counter {
            background-color: $alert;
            text-align: center;
            position: absolute;
            border-radius: 50%;
            font-size: 12px;
            color: white;
            width: 16px;
            height: 16px;
            right: 5px;
            top: 16px;
        }
    }
}
</style>
