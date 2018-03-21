<template>
  <div class="todo" :class="{ completed }">
    <span class="status" @click="todo.completed = !todo.completed">
      <b-icon class="icon-unchecked" icon="checkbox-blank-circle-outline"/>
      <b-icon class="icon-checked" icon="checkbox-marked-circle-outline"/>
    </span>
    <span class="task">{{ todo.task }}</span>
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
.todo {
  display: flex;
  flex-flow: row;
  flex: 1 1 auto;

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
