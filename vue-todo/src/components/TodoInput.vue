<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" placeholder="Type what you have to do">
    <span class="addContainer" v-on:click="addTodo">
        <i class="addBtn fas fa-plus" aria-hidden="true"></i>
    </span>

    <todo-modal v-if="showModal" v-on:modalControl="modalControl">
        <template v-slot:header>경고</template>
        <template v-slot:footer>
            할 일을 입력하세요.
            <i @click="modalControl" class="closeModalBtn fas fa-times" aria-hidden="true"></i>
        </template>
    </todo-modal>
  </div>
</template>

<script>
import TodoModal from './common/TodoModal.vue'
export default {
    components: {
        'todo-modal': TodoModal
    },
    data: function() {
        return {
            newTodoItem: '',
            showModal: false
        }
    },
    methods: {
        addTodo: function() {
            if(this.newTodoItem!=='') {
                this.$store.commit('addOneItem', this.newTodoItem);
                this.clearInput();
            } else {
                this.modalControl();
            }
        },
        clearInput: function() {
            this.newTodoItem = '';
        },
        modalControl: function() {
            this.showModal = !this.showModal;
        }
    }
}
</script>

<style scoped>
    input {
        width: calc(100% - 80px);
    }
    input:focus {
        outline: none;
    }
    .inputBox {
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    }
    .inputBox input {
        border-style: none;
        font-size: 0.9rem;
    }
    .addContainer {
        float: right;
        background: linear-gradient(to right, #6478FB, #8763FB);
        display: inline-block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }
    .addBtn {
        color: white;
        vertical-align: middle;
        cursor: pointer;
    }
</style>