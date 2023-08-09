<template>
  <div class="card flex justify-center">
    <h2>Edit Task</h2>
    <div>
      <label>Title:</label>
      <input
        :placeholder="prevTask.title"
        v-model="editedTask.title"
        class="border border-black"
      />

      <label>Description:</label>
      <textarea
        :placeholder="prevTask.desc"
        v-model="editedTask.desc"
        class="border border-black"
      />
      <label>Status:</label>
      <select v-model="editedTask.status">
        <option v-for="status in flag" :key="status">{{ status }}</option>
      </select>

      <button type="submit" @click="updateTaskInStore">Update Task</button>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import { mapActions } from "vuex";
export default {
  name: "EditTask",
  props: {
    prevTask: {
      type: Object,
      required: true,
    },
    indx: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      editedTask: {
        title: this.prevTask.title,
        desc: this.prevTask.desc,
        status: this.prevTask.status,
      },
      flag: ["In-Progress", "Pending", "Completed"],
    };
  },
  methods: {
    ...mapActions(["updateTask"]), // Corrected the usage of mapActions
    updateTaskInStore() {
      this.updateTask({ id: this.indx, data: this.editedTask });
      router.push("/taskview");
    },
  },
};
</script>
