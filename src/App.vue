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
      <div class="todo"
        v-for="todo in todos"
        :key="todo.id"
        :class="todo.completed ? 'completed' : 'pending'"
        >
        <span class="status" @click="todo.completed = !todo.completed">
          <b-icon class="icon-unchecked" icon="checkbox-blank-circle-outline"/>
          <b-icon class="icon-checked" icon="checkbox-marked-circle-outline"/>
        </span>
        <span class="task">{{ todo.task }}</span>
        <b-icon icon="close" @click.native="removeTodo(todo.id)"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",

  methods: {
    createTodo() {
      if (this.task) {
        this.todos.push({
          id: String(this.todos.length + 1),
          task: this.task,
          completed: false
        });
      }
      this.task = null;
    },

    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id != id);
    }
  },

  data() {
    return {
      task: null,
      todos: [
        {
          id: "1",
          task: "Use local state",
          completed: true
        },
        {
          id: "2",
          task: "Use Vuex store",
          completed: false
        }
      ]
    };
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
    margin-bottom: 0.5em;
  }
}

.todo-list {
  margin: 20px 0;
}

.todo {
  display: flex;
  flex-flow: row;
  margin: 12px 0;

  .task {
    flex: 1 1 auto;
  }

  .status {
    margin-right: 0.5em;

    .icon-checked {
      display: none;
      color: green;
    }
    .icon-unchecked {
      display: inline-flex;
    }
  }

  &.completed {
    .status {
      .icon-checked {
        display: inline-flex;
      }
      .icon-unchecked {
        display: none;
      }
    }

    .task {
      text-decoration: line-through;
    }
  }
}
</style>
