<template>
  <div class="home">
    <Nav />
    <home class="mt-20" />
    <router-view />
    <TaskView />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "@/components/Home.vue";
import Nav from "@/components/Nav.vue";
import TaskView from "@/views/TaskView.vue";
export default {
  name: "HomeView",
  components: {
    Home,
    Nav,
    TaskView,
  },
};
</script>
