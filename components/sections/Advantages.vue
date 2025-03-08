<template>
    <div class="h-[100vh] bg-white overflow-hidden">
        <div ref="scrollContainer" class="h-screen  flex items-center w-full justify-center !overflow-scroll">
            <div class="absolute w-full top-0 line advantageDiv" ref="lineSvg">
                <svg class="mx-auto" width="14" height="120" viewBox="0 0 14 120" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <line opacity="0.5" x1="6.5" y1="115.045" x2="6.5" y2="-284.955" stroke="#62DCF2"
                        stroke-dasharray="4 4" />
                    <circle cx="7" cy="113" r="6" fill="white" stroke="#62DCF2" stroke-width="2" />
                </svg>
            </div>

            <!-- <div class=" absolute w-full top-0" ref="advantageNav"> -->
            <Navbar logo-type="blue" />
            <!-- </div> -->

            <div class="content text-center advantageDiv" ref="advantageContainer">
                <h2 class="max-w-[870px] mx-auto text-2xl md:text-5xl text-[#39444C]" ref="titleAd">
                    Современное <span class="text-[#62DCF2]">
                        медицинское обслуживание
                    </span> с заботой о вас и вашем времени
                </h2>
                <!-- <p v-for="slide in slides" :key="slide.id" :class="{ 'hidden': currentSlide !== slide.id }"
                    class="text-[#39444C] text-lg md:text-2xl mt-8 md:mt-16" ref="textAd">
                    {{ slide.title }}
                </p> -->
                <div class="slides  overflow-hidden h-[370px] mt-8 md:mt-16">
                    <div v-for="slide in slides" :key="slide.id" :class="{ 'hidden': currentSlide !== slide.id }">
                        <p class="text-[#39444C] text-lg md:text-2xl " ref="textAd">
                            {{ slide.title }}
                        </p>
                        <!-- <template v-if="currentSlide === slide.id"> -->
                        <div class="slide " ref="slideAd">
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
                        <!-- </template> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../navbar.vue';

import img1 from '@/assets/images/advantages/1.png';
import img2 from '@/assets/images/advantages/2.png';
import img3 from '@/assets/images/advantages/3.png';

gsap.registerPlugin(ScrollTrigger);

const props = defineProps<{ currentSlide: number, currentSection: number }>();
const emit = defineEmits(['next', 'prev']);
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
let scrollTriggerInstance: ScrollTrigger | null = null;
let isAnimating = false;
let wheelEventTimeout: number | null = null;

// Function to go to the next slide or section
const goToNextSlide = () => {
    if (isAnimating) return;
    isAnimating = true;

    if (currentSlide.value < slides.length) {
        // Store current slide before changing
        const prevSlide = currentSlide.value;
        // Go to next slide
        currentSlide.value++;

        console.log('Next slide:', currentSlide.value, 'Previous slide:', prevSlide);

        // Animation for slide change
        const tl = gsap.timeline({
            onComplete: () => {
                isAnimating = false;
            }
        });

        // Get all slide elements
        const slideElements = document.querySelectorAll('.slides > div');

        if (slideElements.length > 0) {
            // Get the slide components
            const prevSlideComponent = slideElements[prevSlide - 1].querySelector('.slide');
            const nextSlideComponent = slideElements[currentSlide.value - 1].querySelector('.slide');

            if (prevSlideComponent) {
                // Hide previous slide with animation
                gsap.to(prevSlideComponent, {
                    opacity: 0,
                    y: -150,
                    duration: 1,
                    ease: "power1.in", // Accelerating easing
                    onComplete: () => {
                        // Ensure it's hidden after animation
                        gsap.set(slideElements[prevSlide - 1], { display: 'none' });
                    }
                });
            }

            // Show new slide
            if (nextSlideComponent) {
                // First make the container visible
                gsap.set(slideElements[currentSlide.value - 1], { display: 'block' });

                // Then animate the slide component
                gsap.fromTo(nextSlideComponent,
                    {
                        opacity: 0,
                        y: 150,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        delay: 1,
                        ease: "power2.out" // Slowing down easing
                    }
                );
            }
        } else {
            isAnimating = false;
        }
    } else {
        // All slides viewed, go to next section
        emit('next');
        isAnimating = false;
    }
};

// Function to go to the previous slide or section
const goToPrevSlide = () => {
    if (isAnimating) return;
    isAnimating = true;

    if (currentSlide.value > 1) {
        // Store current slide before changing
        const prevSlide = currentSlide.value;
        // Go to previous slide
        currentSlide.value--;

        console.log('Prev slide:', currentSlide.value, 'Previous slide:', prevSlide);

        // Animation for slide change
        const tl = gsap.timeline({
            onComplete: () => {
                isAnimating = false;
            }
        });

        // Get all slide elements
        const slideElements = document.querySelectorAll('.slides > div');

        if (slideElements.length > 0) {
            // Get the slide components
            const prevSlideComponent = slideElements[prevSlide - 1].querySelector('.slide');
            const nextSlideComponent = slideElements[currentSlide.value - 1].querySelector('.slide');

            if (prevSlideComponent) {
                console.log(prevSlideComponent, 'prevSlideComponent');

                // Hide current slide with animation
                gsap.fromTo(prevSlideComponent,
                    {
                        opacity: 1,
                        y: -250,
                    },
                    {
                        opacity: 0,
                        y: 150,
                        duration: 1,
                        ease: "power1.in", // Accelerating easing
                        onComplete: () => {
                            // Ensure it's hidden after animation
                            gsap.set(slideElements[prevSlide - 1], { display: 'none' });
                        }
                    });
            }

            // Show previous slide
            if (nextSlideComponent) {
                // First make the container visible
                gsap.set(slideElements[currentSlide.value - 1], { display: 'block' });

                // Then animate the slide component
                gsap.fromTo(nextSlideComponent,
                    {
                        opacity: 0,
                        y: -150,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        delay: 1,
                        ease: "power2.out" // Slowing down easing
                    }
                );
            }
        } else {
            isAnimating = false;
        }
    } else {
        // At first slide, go to previous section
        emit('prev');
        isAnimating = false;
    }
};

// Handle wheel events for slide navigation
const handleWheel = (e: WheelEvent) => {
    e.preventDefault();

    // Debounce wheel events
    if (wheelEventTimeout) {
        clearTimeout(wheelEventTimeout);
    }

    wheelEventTimeout = setTimeout(() => {
        if (e.deltaY > 0) {
            goToNextSlide();
        } else if (e.deltaY < 0) {
            goToPrevSlide();
        }
    }, 100) as unknown as number;
};

// Function to handle keyboard navigation
const handleKeyDown = (e: KeyboardEvent) => {
    if (props.currentSection !== 3) return;

    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        goToNextSlide();
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        goToPrevSlide();
    }
};

watch(() => props.currentSection, (value) => {
    console.log('Updated Slide:', value);
    if (value === 3) {
        // currentSlide.value = 1;

        // Add wheel event listener when this section is active
        if (scrollContainer.value) {
            scrollContainer.value.addEventListener('wheel', handleWheel, { passive: false });
        }

        // Add keyboard event listener
        window.addEventListener('keydown', handleKeyDown);
    } else {
        // Remove wheel event listener when section is not active
        if (scrollContainer.value) {
            scrollContainer.value.removeEventListener('wheel', handleWheel);
        }

        // Remove keyboard event listener
        window.removeEventListener('keydown', handleKeyDown);
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

    // Create ScrollTrigger for pinning
    scrollTriggerInstance = ScrollTrigger.create({
        trigger: scrollContainer.value,
        pin: true,
        start: "top top",
        end: "+=3000",
        onEnter: () => {
            if (scrollContainer.value) {
                scrollContainer.value.addEventListener('wheel', handleWheel, { passive: false });
            }
        },
        onLeaveBack: () => {
            if (scrollContainer.value) {
                scrollContainer.value.removeEventListener('wheel', handleWheel);
            }
        }
    });

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: advantageContainer.value,
        },
    });

    if (lineSvg.value) {
        tl.from(
            lineSvg.value,
            { opacity: 0, duration: 1, ease: "power4.out", y: 820, delay: 0.68 },
        );
    }

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
    );

    if (titleAd.value) {
        tl.from(titleAd.value, { opacity: 0, y: 50, duration: 2, ease: "power3.out" }, "-=0.6");
    }

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
    );

    // Text Animation (Slight Delay)
    const text: any = textAd.value?.[0];
    if (text) {
        tl.from(text, { opacity: 0, y: 50, duration: 1, ease: "power3.out" }, "-=1");
    }

    const slide: any = slideAd.value?.[0];
    if (slide) {
        tl.from(slide, { opacity: 0, y: 509, duration: 1, ease: "power4.out" });
    }
});

onUnmounted(() => {
    // Clean up event listeners and ScrollTrigger
    if (scrollContainer.value) {
        scrollContainer.value.removeEventListener('wheel', handleWheel);
    }

    // Remove keyboard event listener
    window.removeEventListener('keydown', handleKeyDown);

    if (scrollTriggerInstance) {
        scrollTriggerInstance.kill();
    }

    if (wheelEventTimeout) {
        clearTimeout(wheelEventTimeout);
    }
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
            filter: blur(2px) brightness(0.98);
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
