<template>
  <div>
    <nav class="bg-white py-5 shadow-md fixed top-0 left-0 right-0 font-serif">
      <div class="flex">
        <p class="px-10 font-semibold">TaskBoard</p>
        <router-link to="/about" class="color-blue-900"> Home </router-link>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
