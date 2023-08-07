<template>
  <TaskList :items="tasks" @delete-task="deleteTask" />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TaskList from "../components/TaskList.vue";

export default {
  name: "TaskView",
  components: {
    TaskList,
  },
  computed: {
    ...mapGetters({ tasks: "getTasks" }),
  },
  methods: {
    ...mapActions({ deleteTaskAction: "deleteTask" }),
    deleteTask(index) {
      this.deleteTaskAction(index);
    },
  },
};
</script>
