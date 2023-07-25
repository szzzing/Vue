<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input></todo-input>
    <todo-list></todo-list>
    <todo-footer></todo-footer>
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
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
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