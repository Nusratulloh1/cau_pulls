<template>
    <div class="h-[100vh] bg-white overflow-hidden">
        <div ref="scrollContainer" class="h-screen relative flex items-center w-full justify-center !overflow-scroll">
            <div class="absolute w-full top-0 line advantageDiv" ref="lineSvg">
                <svg class="mx-auto" width="14" height="120" viewBox="0 0 14 120" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <line opacity="0.5" x1="6.5" y1="115.045" x2="6.5" y2="-284.955" stroke="#62DCF2"
                        stroke-dasharray="4 4" />
                    <circle cx="7" cy="113" r="6" fill="white" stroke="#62DCF2" stroke-width="2" />
                </svg>
            </div>

            <div class=" absolute w-full top-0" ref="advantageNav">
                <Navbar logo-type="blue" />
            </div>

            <div class="content text-center advantageDiv" ref="advantageContainer">
                <h2 class="max-w-[870px] mx-auto text-2xl md:text-5xl text-[#39444C]" ref="titleAd">
                    Современное <span class="text-[#62DCF2]">
                        медицинское обслуживание
                    </span> с заботой о вас и вашем времени
                </h2>

                <div class="slides mt-8 md:mt-16">
                    <div v-for="slide in slides" :key="slide.id">
                        <template v-if="currentSlide === slide.id">
                            <p class="text-[#39444C] text-lg md:text-2xl" ref="textAd">
                                {{ slide.title }}
                            </p>
                            <div class="slide" ref="slideAd">
                                <div class="flex items-center gap-2 arrow">
                                    <div
                                        class="border border-[#39444C] rounded-xl w-9 h-9 flex items-center justify-center">
                                        <span class="text-[#39444C]">
                                            {{ slide.id }}
                                        </span>
                                    </div>
                                    <svg width="20" height="1" viewBox="0 0 20 1" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <line opacity="0.5" y1="0.5" x2="20" y2="0.5" stroke="#39444C"
                                            stroke-dasharray="4 4" />
                                    </svg>
                                </div>
                                <img :src="slide.img" alt="img">
                                <div class="md:text-start ml-5 content">
                                    <h3 class="md:text-2xl font-semibold text-[#39444C]">
                                        {{ slide.innerTitle }}
                                    </h3>
                                    <p class="text-[#39444C] text-sm md:text-lg max-w-[389px] mt-1 md:mt-3 opacity-50">
                                        {{ slide.innerDesc }}
                                    </p>
                                </div>
                                <div class="flex items-center gap-2 arrow">
                                    <svg width="20" height="1" viewBox="0 0 20 1" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <line opacity="0.5" y1="0.5" x2="20" y2="0.5" stroke="#39444C"
                                            stroke-dasharray="4 4" />
                                    </svg>
                                    <div
                                        class="border border-[#39444C] rounded-xl w-9 h-9 flex items-center justify-center">
                                        <span class="text-[#39444C]">
                                            {{ slide.id }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../navbar.vue';

import img1 from '@/assets/images/advantages/1.png';
import img2 from '@/assets/images/advantages/2.png';
import img3 from '@/assets/images/advantages/3.png';

gsap.registerPlugin(ScrollTrigger);

const props = defineProps<{ currentSlide: number, currentSection: number }>();
const emit = defineEmits(['next']);
const slides = [
    {
        id: 1,
        title: 'CAU Puls Телемедецина',
        img: img1,
        innerTitle: 'Видео звонок терапевту',
        innerDesc: 'Личное общение: обсудите ваше состояние с врачом, видя его в реальном времени, но без необходимости выходить из дома'
    },
    {
        id: 2,
        title: 'CAU Puls Телемедецина',
        img: img2,
        innerTitle: 'Видео звонок терапевту',
        innerDesc: 'Личное общение: обсудите ваше состояние с врачом, видя его в реальном времени, но без необходимости выходить из дома'
    },
    {
        id: 3,
        title: 'CAU Puls Телемедецина',
        img: img3,
        innerTitle: 'Видео звонок терапевту',
        innerDesc: 'Личное общение: обсудите ваше состояние с врачом, видя его в реальном времени, но без необходимости выходить из дома'
    },
    {
        id: 4,
        title: 'CAU Puls Телемедецина',
        img: img3,
        innerTitle: 'Видео звонок терапевту',
        innerDesc: 'Личное общение: обсудите ваше состояние с врачом, видя его в реальном времени, но без необходимости выходить из дома'
    },
];

const currentSlide = ref(1);
const scrollContainer = ref<HTMLElement | null>(null);
const advantagesNav = ref<HTMLElement | null>(null);
const advantageContainer = ref<HTMLElement | null>(null);
const lineSvg = ref<HTMLElement | null>(null);
const titleAd = ref<HTMLElement | null>(null);
const textAd = ref<HTMLElement[]>();
const slideAd = ref<HTMLElement[]>();

watch(() => props.currentSection, (value) => {
    console.log('Updated Slide:', value);
    if (value === 3) {
        // document.body.style.overflow = 'hidden';
        currentSlide.value = 1;
        // const panels = document.querySelectorAll('.panel');
        // panels.forEach((panel, index) => {
        //     if (index > 3) {
        //         panel.classList.add('!invisible');
        //     } else {
        //         panel.classList.remove('!invisible');
        //     }
        // });

    }
});

onMounted(() => {
    // Split Text Function
    const splitWords = (element: any) => {
        console.log(element, 'element');

        const words = element.innerText.split(" ");
        element.innerHTML = words.map((word: any) => `<span class="word">${word}</span>`).join(" ");
        return element.querySelectorAll(".word");
    };

    const titleWords = splitWords(titleAd.value);
    const textWords = splitWords(textAd.value?.[0]);
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: advantageContainer.value,
            // start: "top top",
            // end: "+=3000px",
            // pin: true,
            // pinSpacing: true,
            // anticipatePin: 1,
            // scrub: 0.5,
            // invalidateOnRefresh: true,
            // markers: true
        },
    })
    // tl.from(advantagesNav.value, {
    //     opacity: 0,
    //     y: 325,
    //     duration: 1,
    //     ease: "power4.out",
    //     delay: 0.68,
    // })
    tl.from(
        lineSvg.value,
        { opacity: 0, duration: 1, ease: "power4.out", y: 820, delay: 0.68 },
    )
    // Title Animation
    tl.fromTo(
        titleWords,
        { opacity: 0, y: 440, ease: "power4.out" },
        {
            opacity: 1,
            y: 440,
            duration: 0.5,
            ease: "power4.out",
            stagger: 0.11, // Smooth sequential animation
        },
        "-=0.4"
    )
    tl.from(titleAd.value, { opacity: 0, y: 50, duration: 2, ease: "power3.out" }, "-=0.6")
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
        "-=0.8"
    )
    // Text Animation (Slight Delay)
    const text: any = textAd.value?.[0]
    tl.from(text, { opacity: 0, y: 50, duration: 1, ease: "power3.out" }, "-=1");
    const slide: any = slideAd.value?.[0]
    tl.from(slide, { opacity: 0, y: 509, duration: 1, ease: "power4.out" });
  // should work after tl animations done
    const nexttl = gsap.timeline({
        scrollTrigger: {
            trigger: advantageContainer.value,
            start: "top top",
            end: "+=3000px",
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            scrub: 0.5,
            invalidateOnRefresh: true,
            markers: true
        },
    })


});
</script>

<style lang="scss" scoped>
.slide {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 40px;
    cursor: pointer;
    // transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    overflow: hidden;

    img {
        width: 600px;
        height: 300px;
        border-radius: 24px;
        transition: transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out, opacity 0.3s ease-in-out;
    }

    .content {
        display: none;
        opacity: 0;
        transform: translateY(20px) scale(0.98);
        transition: transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
    }

    &:hover {
        img {
            filter: blur(2px);
            brightness: 0.98;
        }

        .content {
            display: block !important;
            opacity: 1;
            transform: translateY(0) scale(1);
        }

        .arrow {
            .border {
                border-color: #62DCF2;
            }

            svg {
                line {
                    stroke: #62DCF2;
                }
            }

            span {
                color: #62DCF2;
            }
        }
    }

    @media (max-width: 1025px) {
        display: flex !important;
        flex-direction: column !important;
        margin-top: 20px;
        gap: 25px;

        img {
            width: 85%;
            height: auto !important;
        }

        .arrow {
            flex-direction: column !important;
            gap: 15px;

            svg {
                transform: rotate(90deg);
            }
        }
    }
}
</style>
