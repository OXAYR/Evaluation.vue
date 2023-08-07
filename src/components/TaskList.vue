<template>
  <div v-if="task">
    <ul class="p-6 divide-y divide-slate-100">
      <li v-for="(tsk, id) in task" :key="id">
        {{ id }}
        <p class="font-bold">Task title: {{ tsk.title }}</p>
        <p class="clamp-1"><b>Description</b>{{ tsk.desc }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({ task: "getTask" }),
  },

  created() {
    this.getTodos();
  },
};
</script>

<style scoped></style>
