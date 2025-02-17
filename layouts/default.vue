<template>
  <div class="layout-container">

    <main>
      <slot />
    </main>

  </div>
</template>
<script setup>


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