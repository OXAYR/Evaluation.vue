<template>
  <div class="border border-gray-200">
    <ul class="p-6 divide-y divide-slate-300 text-left shadow-md">
      <li v-for="(item, index) in items" :key="index">
        <p class="font-bold">{{ itemTitle }}: {{ item.title }}</p>
        <p class="line-clamp-1">
          <b>{{ descriptionLabel }}:</b> {{ item.desc }}
        </p>
        <div class="flex justify-end items-start">
          <select v-model="item.status" class="border border-black mr-10">
            <option value="pending">To Do</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Done</option>
          </select>
          <button @click="deleteItem(index)" class="text-red-500">
            Delete
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TaskList",
  props: {
    items: {},
  },
  methods: {
    deleteItem(index) {
      this.$emit("delete-task", index);
    },
  },
};
</script>
