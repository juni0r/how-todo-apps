<template>
  <div id="app">
    <h1>Todos</h1>
    <div class="todo" v-for="todo in todos" :key="todo.id">
      {{ todo.task }}
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
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
}

h1 {
  font-size: 36px;
  font-weight: 200;
  text-align: center;
  margin-bottom: 0.5em;
}
</style>
