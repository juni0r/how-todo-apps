<template>
  <div id="app">

    <h1>Todos</h1>

    <div class="add-todo">
      <b-field>
        <b-input v-model="task" placeholder="What's to do?" expanded/>
        <span class="control">
          <button @click="createTodo" class="button is-primary">
            <i class="mdi mdi-plus"></i>
          </button>
        </span>
      </b-field>
    </div>

    <div class="todo-list">
      <div v-for="todo in todos" :key="todo.id" class="todo-list-item">
        <Todo :todo="todo" @toggle="toggleTodo(todo)"/>
        <b-icon icon="close" @click.native="removeTodo(todo.id)"/>
      </div>
    </div>
  </div>
</template>

<script>
import Todo from "@/components/Todo";
import { todosRef } from "./firestore";

export default {
  name: "app",
  components: { Todo },

  methods: {
    createTodo() {
      if (this.task) {
        todosRef.add({ task: this.task, completed: false });
      }
      this.task = null;
    },

    removeTodo(id) {
      todosRef.doc(id).delete();
    },

    toggleTodo(todo) {
      todosRef.doc(todo.id).update({ completed: !todo.completed });
    }
  },

  data() {
    return {
      task: null,
      todos: []
    };
  },

  created() {
    todosRef.onSnapshot(docs => {
      const todos = [];
      docs.forEach(doc => {
        todos.push({ id: doc.id, ...doc.data() });
      });
      this.todos = todos;
    });
  }
};
</script>

<style lang="scss">
@import "styles";

#app {
  max-width: 360px;
  margin: 0 auto;
  padding: 24px;

  h1 {
    font-size: 36px;
    font-weight: 200;
    text-align: center;
  }
}

.todo-list {
  margin: 20px 0;
}

.todo-list-item {
  display: flex;
  flex-flow: row;
  margin: 12px 0;
}
</style>
