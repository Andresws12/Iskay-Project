<template>
    <div class="card card-todo columns is-mobile">
        <div class="column is-10">
            <p class="card-todo__title">
                {{ title }}
            </p>
            <p class="card-todo__description">
                {{ description }}
            </p>
        </div>
        <div class="column is-2 card-todo__remove-content">
            <img
                src="../../assets/img/trash.svg"
                alt="trash"
                class="card-todo__remove-icon"
                @click="$emit('remove-click', id)"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
    name: 'CardTodo',
})
export default class CardTodo extends Vue {
    @Prop(Number) private id: number;
    @Prop(String) private title: string;
    @Prop(String) private description: string;
}
</script>

<style lang="scss" scoped>
.card-todo {
    margin-bottom: 16px;

    &__title {
        text-transform: capitalize;
        color: #333333;
        font-weight: 600;
        font-size: 16px;
    }

    &__description {
        font-size: 12px;
        color: #777777;
    }

    &__remove-content {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    &__remove-icon {
        cursor: pointer;
    }
}
</style>
