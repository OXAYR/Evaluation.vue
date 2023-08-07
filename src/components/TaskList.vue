<template>
  <div>
    {{ Task }}
    <!-- <ul class="p-6 divide-y divide-slate-100">
      <li v-for="(tsk, id) in Task" :key="id">
        {{ id }}
        <p class="font-bold">Task title: {{ tsk.title }}</p>
        <p class="clamp-1"><b>Description</b>{{ tsk.desc }}</p>
      </li>
      <p>{{ ta }}</p>
    </ul>-->
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
