<template>
    <div class="subheader-item" @click="goTo">
        <p
            class="subheader-item__text"
            :class="{
                'subheader-item__text--active': isActive,
            }"
            data-cy="subheader-item-label"
        >
            {{ label }}
        </p>
        <div
            v-if="isActive"
            class="subheader-item__bar-active"
            data-cy="subheader-item-bar-active"
        ></div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    name: 'SubheaderItem',
})
export default class SubheaderItem extends Vue {
    @Prop([String, Object]) private nameToGo: string | any;
    @Prop(Boolean) private isActive: boolean;
    @Prop(String) private label: string;
    @Prop(String) private path: string;

    private goTo(): void {
        this.nameToGo
            ? this.nameToGo !== this.$router.currentRoute.name
                ? this.$router.push({ name: this.nameToGo })
                : null
            : null;
    }
}
</script>

<style lang="scss" scoped>
.subheader-item {
    cursor: pointer;

    &__text {
        white-space: nowrap;
        padding: 15px 20px 0px;
        &--active {
            color: $primary;
            font-weight: bold;
        }
    }

    &__bar-active {
        border-radius: 3px 3px 0px 0px;
        background: $primary;
        position: relative;
        margin-top: 15px;
        height: 4px;
    }
}
</style>
