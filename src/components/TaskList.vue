<template>
  <div class="mx-10">
    <h1 class="font-bold text-3xl text-left">Tasks</h1>
    <ul
      v-if="items.length"
      class="p-4 mt-4 card divide-y divide-slate-300 text-left shadow-md"
    >
      <li
        v-for="(item, index) in items"
        :key="index"
        class="px-2 grid grid-cols-12 gap-4"
      >
        <div class="col-span-9">
          <p class="font-bold mt-4">{{ item.title }}</p>
          <p class="line-clamp-2 font-extralight">
            <b>{{ descriptionLabel }}</b> {{ item.desc }}
          </p>
          <select
            v-model="item.status"
            :value="$store.state.status[0].name"
            class="border border-black my-5 max-w-md"
          >
            <option v-for="status in $store.state.status" :key="status">
              {{ status.name }}
            </option>
          </select>
        </div>
        <div
          class="col-span-3 flex flex-col items-end justify-between py-2 mt-3"
        >
          <div
            v-show="item.status == 'Completed'"
            class="bg-green-500 text-white rounded-full px-2"
          >
            {{ item.status }}
          </div>
          <div
            v-show="item.status == 'Pending'"
            class="bg-rose-500 text-white rounded-full px-2"
          >
            {{ item.status }}
          </div>
          <div
            v-show="item.status == 'In-Progress'"
            class="bg-blue-500 text-white rounded-full px-2"
          >
            {{ item.status }}
          </div>
          <button
            @click="deleteItem(index)"
            class="border border-rose-700 text-rose-500 font-medium rounded p-1 m-4"
          >
            Delete
          </button>
        </div>
      </li>
    </ul>
    <p v-else>No tasks to show</p>
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
