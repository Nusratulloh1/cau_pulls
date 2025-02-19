<template>
    <div class="absolute w-full top-0 z-[99999]">
        <nav class=" flex items-center justify-between py-8 px-4 md:p-12">
            <div>
                <CLogo :type="logoType" v-if="props.logoVisible" class="w-16 h-16 !fill-none" />
            </div>
            <div class="relative">
                <button @click="toggleDropdown" :class="{ ' !border-[#39444C33] !text-[#39444C]': logoType == 'blue' }"
                    class=" flex items-center gap-1.5 rounded-[20px] capitalize text-white font-semibold border border-[#FFFFFF33] py-3 px-6 hover:bg-white hover:text-[#62DCF2]">
                    рус
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
                <transition name="fade" mode="out-in">
                    <div v-if="isDropdownVisible"
                        class="dropdown-menu absolute right-0 mt-2 w-28 bg-white shadow-lg rounded-md">
                        <ul>
                            <li v-for="lang in ['Uzbek', 'English', 'Russian']"
                                class="p-2 hover:bg-gray-100 cursor-pointer  hover:text-[#62DCF2]">{{ lang }}</li>
                        </ul>
                    </div>
                </transition>
            </div>
        </nav>
    </div>
    <div @click="toggleDropdown" class=" fixed w-full h-full top-0 left-0 z-[999]" v-if="isDropdownVisible"></div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import CLogo from '~/components/icons/CLogo.vue';

const props = defineProps({
    logoVisible: {
        type: Boolean,
        default: true,
        required: false
    },
    logoType: {
        type: String,
        default: 'white',
        required: false
    },
});

const isDropdownVisible = ref(false);

function toggleDropdown() {
    isDropdownVisible.value = !isDropdownVisible.value;
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>