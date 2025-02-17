<template>
  <div class="layout-container">
    <!-- <div class=" fixed z-[9999] top-0 w-full">
      <Navbar />
    </div> -->
    <main>
      <slot />
    </main>

  </div>
</template>
<script setup>
import Navbar from './components/navbar.vue';



</script>


<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>