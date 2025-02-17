<template>
    <div id="section1" class=" h-screen welcome">
        <Navbar logo-type="blur" />
    </div>
</template>
<script lang="ts" setup>
import Navbar from '../navbar.vue';


</script>
<style lang="scss" scoped>
.welcome {
    background: url('@/assets/images/section-2.jpg') no-repeat center center;
    background-size: cover;
}
</style>