<template>
  <div class="mx-10 my-32" @dblclick="updateTask">
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
            value="item.status"
            class="border border-black my-5 max-w-md"
            @change="updateStatus(index, item.status)"
          >
            {{
              (index, item.status)
            }}
            <option v-for="status in flag" :key="status">
              {{ status }}
            </option>
          </select>
        </div>
        <div
          class="col-span-3 flex flex-col items-end justify-between py-2 mt-4"
        >
          <div
            v-show="item.status === 'Completed'"
            class="bg-green-500 text-white rounded-full px-2"
          >
            {{ item.status }}
          </div>
          <div
            v-show="item.status === 'Pending'"
            class="bg-rose-500 text-white rounded-full px-2"
          >
            {{ item.status }}
          </div>
          <div
            v-show="item.status === 'In-Progress'"
            class="bg-blue-500 text-white rounded-full px-2"
          >
            {{ item.status }}
          </div>
          <button
            @click="deleteItem(index)"
            class="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-medium rounded p-1 m-3"
          >
            Delete
          </button>
        </div>
        <EditTask
          v-show="editTask"
          :prevTask="item"
          :indx="index"
          class="flex flex-col col-span-5"
        />
      </li>
    </ul>
    <p v-else>No tasks to show</p>
  </div>
</template>

<script>
import EditTask from "./EditTask.vue";

export default {
  name: "TaskList",
  data() {
    return {
      editTask: false,
      flag: ["In-Progress", "Pending", "Completed"],
    };
  },
  props: {
    items: {},
  },
  methods: {
    deleteItem(index) {
      this.$emit("delete-task", index);
    },
    updateTask() {
      if (this.editTask == false) this.editTask = true;
      else this.editTask = false;
    },
    updateStatus(index, status) {
      console.log(index, status);
      this.$emit("status-change", index, status);
    },
  },
  components: { EditTask },
};
</script>
