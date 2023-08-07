<template>
  <div>
    <ul class="p-6 divide-y divide-slate-100 text-left">
      <li v-for="(task, id) in Task" :key="id">
        <p class="font-bold">Task title: {{ task.title }}</p>
        <p class="line-clamp-1"><b>Description</b>{{ task.desc }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TaskList",
  computed: {
    ...mapGetters({ Task: "getTasks" }),
  },
  methods: {
    ...mapActions({ getTask: "getTasks" }),
  },
  created() {
    this.getTask();
  },
};
</script>

<style scoped></style>
