<template>
  <div>
    <ul class="p-6 divide-y divide-slate-300 text-left shadow-md">
      <li v-for="(task, index) in tasks" :key="index">
        <p class="font-bold">Task title: {{ task.title }}</p>
        <p class="line-clamp-1"><b>Description:</b> {{ task.desc }}</p>
        <select v-model="task.status" class="border border-black mr-10">
          <option value="pending">To Do</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Done</option>
        </select>
        <button @click="deleteTask(index)" class="text-red-500">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
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
