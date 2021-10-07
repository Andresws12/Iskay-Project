<template>
    <div class="add-todo card">
        <h2 class="add-todo__title">{{ $t('views.home.modalTitle') }}</h2>
        <b-field>
            <template #label>
                <span class="add-todo__label">{{
                    $t('views.home.modalName')
                }}</span>
            </template>
            <b-input
                v-model="name"
                :placeholder="$t('views.home.modalName')"
                maxlength="150"
            ></b-input>
        </b-field>
        <b-field>
            <template #label>
                <span class="add-todo__label">{{
                    $t('views.home.modalDescription')
                }}</span>
            </template>
            <b-input
                v-model="description"
                maxlength="200"
                type="textarea"
                :placeholder="$t('views.home.modalDescription')"
            ></b-input>
        </b-field>
        <div class="columns is-mobile">
            <b-button
                class="column is-6 mr-1 add-todo__cancel-button"
                type="is-primary"
                expanded
                outlined
                @click="$emit('close')"
            >
                {{ $t('views.home.modalCancel') }}
            </b-button>
            <b-button
                type="is-primary"
                class="column is-6 ml-1"
                expanded
                @click="addTodo"
            >
                {{ $t('views.home.modalSave') }}
            </b-button>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import mainStore from '@/store/main-store/MainStore';

import { Todo } from '@/webservices/models/Todo';

@Component({
    name: 'AddTodo',
})
export default class AddTodo extends Vue {
    private mainStore = mainStore.context(this.$store);

    private description: string = '';
    private name: string = '';

    private addTodo(): void {
        const todo: Todo = {
            userId: 1,
            title: this.name,
            completed: true,
        };

        this.mainStore.actions.addTodo(todo);

        this.$emit('close');
    }
}
</script>

<style lang="scss" scoped>
.add-todo {
    padding: 25px 20px;
    margin: 0px 20px;
    &__title {
        font-weight: bold;
        color: #333333;
        font-size: 20px;
        margin-bottom: 40px;
    }
    &__label {
        font-weight: normal;
        color: #555555;
        font-size: 14px;
    }
    &__cancel-button {
        font-weight: 600;
        color: #b2b2b2 !important;
        border: 0px;
        &:focus,
        &:hover {
            color: white !important;
        }
    }
}
</style>
