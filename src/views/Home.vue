<template>
    <div class="home">
        <div class="section">
            <h1 class="title">{{ $t('views.home.title') }}</h1>
            <b-skeleton height="80px" v-if="isLoading"></b-skeleton>
            <div v-else>
                <card-todo
                    v-for="todo in firstThreeTodos"
                    :id="todo.id"
                    :key="todo.id"
                    :title="todo.title"
                    @remove-click="onRemoveTodo"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris, ac elementum ultrices mauris. Cursus urna"
                />
            </div>
            <b-button
                type="is-primary"
                class="home__add-button"
                expanded
                @click="showModal = true"
            >
                {{ $t('views.home.addTask') }}
            </b-button>
            <b-modal
                v-model="showModal"
                has-modal-card
                trap-focus
                :destroy-on-hide="false"
                aria-modal
            >
                <add-todo @close="showModal = false" />
            </b-modal>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import CardTodo from '@/components/todo/CardTodo.vue';
import AddTodo from '@/components/todo/AddTodo.vue';

import mainStore from '@/store/main-store/MainStore';

import { Todo } from '@/webservices/models/Todo';

@Component({
    name: 'Home',
    components: {
        CardTodo,
        AddTodo,
    },
})
export default class Home extends Vue {
    private mainStore = mainStore.context(this.$store);

    private showModal: boolean = false;

    private get firstThreeTodos(): Todo[] {
        return this.mainStore.getters.firstThreeTodos;
    }
    private get isLoading(): boolean {
        return this.mainStore.state.isLoading;
    }

    private onRemoveTodo(id: number): void {
        this.mainStore.actions.removeTodo(id);
    }
}
</script>

<style lang="scss" scoped>
.home {
    &__add-button {
        margin-top: 45px;
    }
}
</style>
