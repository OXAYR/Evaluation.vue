<template>
  <div class="border card border-gray-200">
    <h1 class="font-bold text-3xl text-left">Tasks</h1>
    <ul class="p-4 card divide-y divide-slate-300 text-left shadow-md">
      <li v-for="(item, index) in items" :key="index">
        <p class="font-bold mt-4">{{ item.title }}</p>
        <p class="line-clamp-1 font-extralight">
          <b>{{ descriptionLabel }}</b> {{ item.desc }}
        </p>
        <select
          v-model="item.status"
          :value="$store.state.status[0].name"
          class="border border-black my-5"
        >
          <option v-for="status in $store.state.status" :key="status">
            {{ status.name }}
          </option>
        </select>
        <!-- {{ $store.status }} -->
        <div class="flex flex-col items-end">
          <div class="py-2 px-2">
            <div
              v-show="item.status == `Completed`"
              class="bg-green-500 text-white rounded"
            >
              Completed
            </div>
            <div
              v-show="item.status == `Pending`"
              class="bg-red-500 text-white rounded"
            >
              pending
            </div>
            <div
              v-show="item.status == `In-Progress`"
              class="bg-blue-500 text-white rounded"
            >
              In progress
            </div>
          </div>
          <button @click="deleteItem(index)" class="text-red-500 py-5">
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
