<template>
  <CreateTask />
</template>

<script>
import CreateTask from "./CreateTask.vue";
export default {
  name: "Home",
  data() {
    return {
      clicked: false,
    };
  },
  components: {
    CreateTask,
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
