<template>
  <div v-if="task">
    <ul class="p-6 divide-y divide-slate-100">
      <li v-for="(tsk, id) in task" :key="id">
        <p class="font-bold">Task {{ id }}: {{ tsk.title }}</p>
        <p><b>Description</b>{{ tsk.desc }}</p>
      </li>
    </ul>
  </div>
</template>
<script></script>

<style></style>
