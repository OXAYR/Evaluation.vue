<template>
  <router-link to="/createTask">
    <button class="mt-32 px-12 py-2 bg-blue-200 hover:bg-blue-400 rounded-full">
      <p class="text-black font-serif text-center">Create Task</p>
    </button>
  </router-link>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      clicked: false,
    };
  },
  methods: {
    checkClick() {
      if (this.clicked == false) {
        this.clicked = true;
      } else {
        this.clicked = false;
      }
    },
  },
};
</script>
