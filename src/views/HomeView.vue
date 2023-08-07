<template>
  <div class="home">
    <Nav />
    <home class="mt-20" />
    <router-view class="my-32" />
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
