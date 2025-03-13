<template>
    <div class="h-screen bg-[#62DCF2] relative">
        <div ref="navBarEntr" class=" absolute top-0 w-full z-[99999991]">
            <Navbar :logo-visible="false" />
        </div>
        <img class="m-auto object-cover pt-[12vh] sm:pt-0 h-[83vh]  sm:h-screen " src="@/assets/images/bg-round.png"
            alt="rounder" ref="rounder">
        <div class="absolute top-0 w-full h-full flex items-center justify-center">
            <div class="text-center sm:mt-16">
                <div ref="logo">
                    <CLogo class=" w-[102px] sm:w-[130px] mx-auto" />
                </div>
                <p ref="title" class=" mt-0 sm:mt-6 text-white font-medium text-base sm:text-2xl max-w-[297px] mx-auto">
                    Ваш надёжный партнёр <br> в вопросах здоровья
                </p>
            </div>
        </div>
        <div class="absolute bottom-[14%] sm:bottom-[11%] z-[999] w-full flex justify-center">
            <button @click="navigateSection" class="mx-auto bg-[#7FE0F1] py-5 px-7 rounded-[20px] mt-2" ref="button">
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
import Navbar from '../navbar.vue'

// Refs for the logo and button
const logo = ref<HTMLElement | null>(null)
const button = ref<HTMLElement | null>(null)
const rounder = ref<HTMLElement | null>(null)
const title = ref<HTMLElement | null>(null)
const navBarEntr = ref<HTMLElement | null>(null)
const navigateSection = () => {
    const nextSection = document.querySelector('#section1');
    if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
    }
}
onMounted(() => {
    // GSAP logo animation: fade in and scale up
    if (logo.value) {
        const tl = gsap.timeline({ ease: 'power3.out', force3D: true });

        tl.from(logo.value, {
            y: 75,
            opacity: 0,
            scale: 1,
            duration: 1,
            ease: 'power4.out'
        })
            .to(logo.value, {
                scale: 1.2,
                duration: 0.3,
                yoyo: true,
            })
            .to(logo.value, {
                scale: 0.8,
                duration: 0.3,
                // delay: 1,
                yoyo: true,
            })
            .to(logo.value, {
                scale: 1,
                duration: 0.3,
                // repeat: -1, // Infinite pulsing
                yoyo: true,
            });
    }
    if (rounder.value) {
        gsap.from(rounder.value, {
            scale: 0.5,
            opacity: 0,
            duration: 1.5, // 0.8
            ease: 'power4.out',
            delay: 1.83,
        })
    }
    if (navBarEntr.value) {
        gsap.from(navBarEntr.value, {
            y: 26,
            opacity: 0,
            duration: 1.1,
            ease: "power4.out",
            delay: 1.84,
        });
    }
    if (title.value) {
        const splitWords = (element: HTMLElement) => {
            const words = element.innerText.split(" ");
            element.innerHTML = words
                .map((word) => `<span class="word" style="display: inline-block; opacity: 0;">${word}</span>`)
                .join(" ");
            return element.querySelectorAll(".word");
        };

        const textWords = splitWords(title.value);

        gsap.fromTo(
            textWords,
            {
                opacity: 0,
                y: "50%", // Start below position
                delay: 1.83,
                duration: 0.5
            },
            {
                opacity: 1,
                y: "0%",
                duration: 0.5, // Each word animates for 500ms
                ease: "power3.out", // Smoother deceleration
                stagger: 0.15, // 150ms delay between words
                delay: 1.85,
            }
        );
    }
    if (button.value) {
        gsap.from(button.value, {
            y: -40,
            opacity: 0,
            duration: 1.5,
            ease: 'power3.out',
            repeat: -1,
            delay: 2.52,
        })
    }

})
</script>

<style scoped>
/* Additional styling */
</style>