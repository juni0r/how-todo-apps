<template>
  <div id="todo">
    
  </div>
</template>

<script>
export default {
  name: "todo",
  props: { todo: Object },
  computed: {
    completed() {
      return this.todo.completed;
    }
  }
};
</script>

<style lang="scss">
</style>
