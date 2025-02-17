<template>
    <div class="h-screen bg-[#62DCF2] relative overflow-hidden">
        <img class="mx-auto h-screen" src="@/assets/images/bg-round.png" alt="rounder" ref="rounder">
        <div class="absolute top-0 w-full h-full flex items-center justify-center">
            <div class="text-center mt-16">
                <div ref="logo">
                    <CLogo class="w-[150px] mx-auto" />
                </div>
                <p ref="title" class="mt-6 text-white font-medium text-2xl">
                    Ваш надёжный партнёр <br> в вопросах здоровья
                </p>
            </div>
        </div>
        <div class="absolute bottom-[11%] z-[999] w-full flex justify-center">
            <button class="mx-auto bg-[#7FE0F1] py-5 px-7 rounded-[20px] mt-2" ref="button">
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L7 7L13 1" stroke="white" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import gsap from 'gsap'
import CLogo from '../icons/CLogo.vue'

// Refs for the logo and button
const logo = ref<HTMLElement | null>(null)
const button = ref<HTMLElement | null>(null)
const rounder = ref<HTMLElement | null>(null)
const title = ref<HTMLElement | null>(null)

onMounted(() => {
    // GSAP logo animation: fade in and scale up
    if (logo.value) {
        gsap.from(logo.value, {
            y: 100,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
            delay: 0.5,
        })
        setTimeout(() => {
            gsap.from(logo.value, {
                opacity: 1,
                scale: 1.4,
                duration: 1.5,
                ease: 'power3.out',
                // repeat: 1, // Repeat the pulsing effect indefinitely
                yoyo: true, // Make the animation reverse after each pulse
            })
            gsap.to(logo.value, {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: 'power3.out',
                // repeat: 1, // Repeat the pulsing effect indefinitely
                yoyo: false, // Make the animation reverse after each pulse
            })
        }, 1000);
    }
    if (rounder.value) {
        gsap.from(rounder.value, {
            y: 10,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            delay: 2,
        })
    }
    if (title.value) {
        gsap.from(title.value, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out',
            delay: 3,
        })
    }
    // GSAP button animation: slide in from bottom
    if (button.value) {
        gsap.from(button.value, {
            y: -40,
            opacity: 0,
            duration: 1.5,
            ease: 'power3.out',
            repeat: -1,
            delay: 3.5,
        })
    }

})
</script>

<style scoped>
/* Additional styling */
</style>