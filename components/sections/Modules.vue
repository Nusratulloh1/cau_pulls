<template>
    <div class="bg-white h-screen flex items-center justify-center relative">
        <div class=" absolute top-0 line" ref="lineSvg">
            <svg class="h-[40vh] md:h-[30vh] xl:h-[35vh] 2xl:h-[40vh]" width="14" height="325" viewBox="0 0 14 325"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <line opacity="0.5" x1="6.5" y1="320.045" x2="6.5" y2="-79.9546" stroke="#62DCF2"
                    stroke-dasharray="4 4" />
                <circle cx="7" cy="318" r="6" fill="white" stroke="#62DCF2" stroke-width="2" />
            </svg>

        </div>

        <div class=" absolute w-full top-0">
            <Navbar logo-type="blue" />
        </div>

        <div class=" text-center px-5" ref="modulesContainer">
            <h2 ref="title" class=" text-[#39444C] text-2xl md:text-5xl max-w-[560px] mx-auto">
                Все возможности для вашего здоровья
            </h2>
            <p ref="text" class=" max-w-[464px] text-[#39444C] mx-auto mt-2 sm:mt-4 text-sm md:text-lg">
                Инновации и технологии, которые делают заботу о здоровье простой и доступной каждому
            </p>
        </div>
        <div class="absolute top-0 left-0 w-full h-full" ref="images">

            <img ref="image1" class="absolute top-24 md:top-0 left-[40%] w-[200px] md:w-[19vw] mx-auto"
                src="@/assets/images/modules/3.png" alt="28vw">
            <img ref="image2" class="absolute left-0 top-[23vh] md:top-[10vh] w-[130px] md:w-[24vw]"
                src="@/assets/images/modules/1.png" alt="28vw">
            <img ref="image3" class="absolute left-0 bottom-[15vh]  md:bottom-[3vh] w-[130px] md:w-[21vw] md:ml-[5vw]"
                src="@/assets/images/modules/5.png" alt="28vw">
            <img ref="image4" class="absolute bottom-[5vh] left-[40%] md:bottom-[3vh] w-[200px] md:w-[19vw] m-auto"
                src="@/assets/images/modules/4.png" alt="28vw">
            <img ref="image5" class="absolute top-[23vh] md:top-[10vh] right-0 w-[130px] md:w-[25vw] m-auto"
                src="@/assets/images/modules/2.png" alt="28vw">
            <img ref="image6"
                class="absolute bottom-[15vh] md:bottom-[3vh] w-[125px] md:w-[20vw] right-0 md:right-[8vw] m-auto"
                src="@/assets/images/modules/6.png" alt="28vw">

        </div>
    </div>
</template>
<script lang="ts" setup>
import Navbar from '../navbar.vue';
import { ref, onMounted } from 'vue';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const lineSvg = ref(null);
const title = ref(null);
const text = ref(null);
const image1 = ref(null);
const image2 = ref(null);
const image3 = ref(null);
const image4 = ref(null);
const image5 = ref(null);
const image6 = ref(null);
const images = ref(null)
const modulesContainer = ref(null);

onMounted(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: modulesContainer.value,
            // start: "top 85%",
            // toggleActions: "play none none reverse",
        },
    });

    // Line Animation
    tl.fromTo(
        lineSvg.value,
        { scaleY: 0, transformOrigin: "top" },
        { scaleY: 1, duration: 0.8, ease: "power4.out" }
    );

    // Split Text Function
    const splitWords = (element: any) => {
        const words = element.innerText.split(" ");
        element.innerHTML = words.map((word: any) => `<span class="word">${word}</span>`).join(" ");
        return element.querySelectorAll(".word");
    };

    const titleWords = splitWords(title.value);
    const textWords = splitWords(text.value);

    // Title Animation
    tl.fromTo(
        titleWords,
        { opacity: 0, y: 50, ease: "power3.out" },
        {
            opacity: 1,
            y: 50,
            duration: 0.5,
            ease: "power4.out",
            stagger: 0.15, // Smooth sequential animation
        },
        "-=0.4"
    )
    tl.from(title.value, { opacity: 0, y: 50, duration: 2, ease: "power3.out" }, "-=0.8");
    tl.fromTo(
        textWords,
        { opacity: 0, y: 50, ease: "power3.out" },
        {
            opacity: 1,
            y: 50,
            duration: 0.5,
            ease: "power4.out",
            stagger: 0.10, // Smooth sequential animation
        },
        "-=0.4"
    )
    // Text Animation (Slight Delay)
    tl.from(text.value, { opacity: 0, y: 50, duration: 1, ease: "power3.out" }, "-=0.8");

    // Images Animation (Grow & Fade)
    tl.fromTo(
        images.value,
        { opacity: 0, scale: 0.5 }, // Start: Hidden, Scaled Down
        { opacity: 1, scale: 1, duration: 2.1, ease: "power4.out" } // Grow & Fade
    );
});

</script>

<style lang="scss" scoped>
img {
    will-change: transform, opacity;
}
</style>