<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input
      @addItem="addOneItem">
    </todo-input>
    <todo-list
      v-bind:propsdata="todoItems"
      @removeItem="removeOneItem"
      @toggleItem="toggleOneItem">
    </todo-list>
    <todo-footer
      @clearAll="clearAllItems">
    </todo-footer>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data() {
    return {
      todoItems: []
    }
  },
  created() {
    if(localStorage.length>0) {
      for(var i=0 ; i<localStorage.length ; i++) {
        this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
  },
  methods: {
    addOneItem(todoItem) {
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
      this.todoItems.push(todoItem);
    },
    removeOneItem(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },
    toggleOneItem(todoItem, index) {
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
      
    },
    clearAllItems() {
      localStorage.clear();
      this.todoItems = [];
    }
  },
  components: {
    'todo-header': TodoHeader,
    'todo-input': TodoInput,
    'todo-list': TodoList,
    'todo-footer': TodoFooter
  }
}
</script>

<style>
  @import url('https://cdn.jsdelivr.net/gh/toss/tossface/dist/tossface.css');
  @import url('https://static.toss.im/tps/main.css');
  @import url('https://static.toss.im/tps/others.css');

  * {
    font-family: 'Toss Product Sans', TossFace;
  }
  body {
    text-align: center;
    background-color: #f6f6f6;
  }
  input {
    border-style: none;
    width: 200px;
  }
  button {
    border-style: groove;
    cursor: pointer;
  }
  .shadow {
    box-shadow: 5px 10px 10px rgba(0,0,0,0.03);
  }
</style>