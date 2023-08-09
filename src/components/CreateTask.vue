<template>
  <div class="shadow-sm mt-32 Login px-8 py-11 max-w-full">
    <h1 class="text-center text-3xl font-medium font-serif">Enter a task</h1>
    <input
      type="text"
      placeholder="Enter title"
      id="todo"
      v-model="todo.title"
      class="mt-4 p-2 border border-gray-300 rounded-md w-full"
    />
    <p v-if="error.length" class="text-red-500 text-sm text-left">
      {{ error }}
    </p>
    <textarea
      type="text"
      placeholder="Enter Description"
      v-model="todo.desc"
      class="mt-4 h-32 border border-gray-300 rounded-md w-full"
    />
    <button
      class="mt-4 px-12 py-2 bg-blue-200 hover:bg-blue-400 rounded-full"
      @click="validate(todo)"
    >
      <p class="text-black font-serif text-center">Submit</p>
    </button>
  </div>
</template>

<script>
import router from "@/router";
import { mapActions } from "vuex";
export default {
  name: "CreateTask",
  data() {
    return {
      todo: {
        title: "",
        desc: " ",
        status: "In-Progress",
      },

      error: "",
    };
  },

  methods: {
    ...mapActions({ createTask: "createTask" }),
    validate(obj) {
      if (obj.title != "") {
        this.createTask(obj);
        router.push("/taskview");
      } else {
        this.error = "Enter title";
      }
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
