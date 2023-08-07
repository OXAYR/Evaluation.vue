<template>
  <div class="home">
    <Nav />
    <Home />
    <router-view />
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
