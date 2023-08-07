<template></template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CreateTask",
  data() {
    return {
      todo: {
        title: "",
        desc: " ",
        status: "In Progress",
      },
      error: [],
    };
  },

  methods: {
    ...mapActions({ createTask: "createTask" }),
    validate(obj) {
      if (obj.title != "" && obj.desc != "") {
        this.createTask(obj);
      } else {
        this.error.push("enter values");
      }
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
