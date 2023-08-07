<template>
  <div class="home">
    <Nav />
    <router-view />
    <Home />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "@/components/Home.vue";
import Nav from "@/components/Nav.vue";
export default {
  name: "HomeView",
  components: {
    Home,
    Nav,
  },
};
</script>
