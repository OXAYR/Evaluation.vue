<template>
  <TaskList
    :items="tasks"
    @delete-task="deleteTask"
    @status-change="updateStatusAction"
  />
  <TaskPage />
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
      console.log("deleted node------> ", index);
      this.deleteTaskAction(index);
    },
    ...mapActions(["updateStatus"]),
    updateStatusAction(index, status) {
      this.updateStatus({ id: index, status });
    },
    ...mapActions({ task: "getTask" }),
  },

  created() {
    this.task();
  },
};
</script>
