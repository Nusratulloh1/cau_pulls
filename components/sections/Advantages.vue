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
                <h2 class="max-w-[870px] mx-auto text-2xl md:text-4xl 2xl:text-5xl text-[#39444C]" ref="titleAd">
                    Современное <mark class="text-[#62DCF2] bg-transparent">
                        медицинское обслуживание
                    </mark> с заботой о вас и вашем времени
                </h2>
                <!-- <p v-for="slide in slides" :key="slide.id" :class="{ 'hidden': currentSlide !== slide.id }"
                    class="text-[#39444C] text-lg md:text-2xl mt-8 md:mt-16" ref="textAd">
                    {{ slide.title }} {{ currentSlide }}
                </p> -->
                <div class="slides   h-[370px] ">
                    <div v-for="slide in slides" :key="slide.id" :class="{ 'hidden': currentSlide !== slide.id }">
                        <p class="text-[#39444C] text-lg md:text-2xl innerText mt-8 md:mt-10" ref="textAd">
                            {{ slide.title }} 
                        </p> 
                        <!-- <template v-if="currentSlide === slide.id"> -->
                        <div class="slide" :data-slide-id="slide.id" ref="slideAd" @mouseenter="startAnimation(slide.id)"
                            @mouseleave="stopAnimation(slide.id)">
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
                            <div class="img-container">
                                <img :src="slide.img" alt="img" v-show="!slideAnimations[slide.id]?.isPlaying">
                                <div :id="`lottie-container-${slide.id}`" class="lottie-container"
                                    v-show="slideAnimations[slide.id]?.isPlaying"></div>
                            </div>
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
import lottie from 'lottie-web';

import img1 from '@/assets/images/advantages/1.png';
import img2 from '@/assets/images/advantages/2.png';
import img3 from '@/assets/images/advantages/3.png';
import first from '@/assets/lottie/first.json';
import second from '@/assets/lottie/Second.json';
import third from '@/assets/lottie/Third.json';

gsap.registerPlugin(ScrollTrigger);

const props = defineProps<{ currentSlide: number, currentSection: number }>();
const emit = defineEmits(['next', 'prev']);
const slides = [
    {
        id: 1,
        title: 'CAU Puls Телемедецина',
        img: img1,
        animation: first,
        innerTitle: 'Видео звонок терапевту',
        innerDesc: 'Личное общение: обсудите ваше состояние с врачом, видя его в реальном времени, но без необходимости выходить из дома'
    },
    {
        id: 2,
        title: 'CAU Puls Телемедецина',
        img: img2,
        animation: second,
        innerTitle: 'Голосовой звонок терапевту',
        innerDesc: 'Приватное общение: обсудите своё состояние с врачом без видеосвязи, сохраняя комфорт и конфиденциальность'
    },
    {
        id: 3,
        title: 'CAU Puls Телемедецина',
        img: img3,
        animation: third,
        innerTitle: 'Чат с терапевтом',
        innerDesc: 'Удобный формат: задавайте вопросы врачу, отправляйте фото и документы, чтобы получить точные рекомендации'
    },
    // {
    //     id: 4,
    //     title: 'CAU Puls Телемедецина',
    //     img: img3,
    //     animation: third, // Reusing the third animation for the fourth slide
    //     innerTitle: 'Видео звонок терапевту',
    //     innerDesc: 'Личное общение: обсудите ваше состояние с врачом, видя его в реальном времени, но без необходимости выходить из дома'
    // },
];

const slideAnimations = ref<{ [key: number]: { animation: any, isPlaying: boolean } }>({});
const contentAnimations = ref<{ [key: number]: gsap.core.Timeline }>({});

// Function to start Lottie animation on hover
const startAnimation = (slideId: number) => {
    // Start content animation
    animateContentIn(slideId);
    
    if (!slideAnimations.value[slideId]) {
        // Initialize the animation if it doesn't exist
        const container = document.getElementById(`lottie-container-${slideId}`);
        if (container) {
            const animation = lottie.loadAnimation({
                container: container,
                renderer: 'svg',
                loop: false,
                autoplay: false,
                animationData: slides.find(s => s.id === slideId)?.animation
            });

            slideAnimations.value[slideId] = {
                animation,
                isPlaying: false
            };
        }
    }

    // Play the animation and show the Lottie container
    if (slideAnimations.value[slideId]) {
        slideAnimations.value[slideId].isPlaying = true;
        slideAnimations.value[slideId].animation.play();
    }
};

// Function to animate content on hover
const animateContentIn = (slideId: number) => {
    const slide = document.querySelector(`.slide[data-slide-id="${slideId}"] .content`);
    
    if (!slide) return;
    
    if (!contentAnimations.value[slideId]) {
        contentAnimations.value[slideId] = gsap.timeline()
            .set(slide, { visibility: 'visible' })
            .to(slide, {
                opacity: 1,
                x: 0,
                scale: 1,
                duration: 0.5,
                ease: "power2.out"
            });
    } else {
        contentAnimations.value[slideId].play();
    }
};

// Function to animate content out on mouse leave
const animateContentOut = (slideId: number) => {
    const slide = document.querySelector(`.slide[data-slide-id="${slideId}"] .content`);
    
    if (!slide || !contentAnimations.value[slideId]) return;
    
    contentAnimations.value[slideId].reverse();
};

// Function to stop Lottie animation when not hovering
const stopAnimation = (slideId: number) => {
    if (slideAnimations.value[slideId]) {
        slideAnimations.value[slideId].isPlaying = false;
        slideAnimations.value[slideId].animation.stop();
    }
    
    // Stop content animation
    animateContentOut(slideId);
};

// Clean up animations on component unmount
onUnmounted(() => {
    Object.values(slideAnimations.value).forEach(anim => {
        if (anim.animation) {
            anim.animation.destroy();
        }
    });
});

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
        const slideElements = document.querySelectorAll('.slides > div');

        if (slideElements.length > 0) {
            const prevSlideComponent = slideElements[prevSlide - 1].querySelector('.slide');
            const nextSlideComponent = slideElements[currentSlide.value - 1].querySelector('.slide');
            const prevTextElement = slideElements[prevSlide - 1].querySelector('p.innerText');
            const nextTextElement = slideElements[currentSlide.value - 1].querySelector('p.innerText');

            // Create word spans only if elements exist
            const prevTextWords = prevTextElement ? splitWords(prevTextElement) : [];
            const nextTextWords = nextTextElement ? splitWords(nextTextElement) : [];

            if (prevSlideComponent) {
                // Slide out effect for previous slide's text
                if (prevTextWords.length > 0) {
                    tl.fromTo(
                        prevTextWords,
                        { opacity: 1, y: 0 },
                        {
                            opacity: 0,
                            y: 50,
                            duration: 0.1,
                            ease: "power1.in", // Accelerate
                            stagger: 0.10, // Forward animation
                        }, 0
                    );
                    
                }

                gsap.to(prevSlideComponent, {
                    opacity: 0,
                    y: -150,
                    duration: 1,
                    ease: "power1.in",
                    onComplete: () => {
                        gsap.set(slideElements[prevSlide - 1], { display: 'none' });
                    }
                });
            }
            if (nextSlideComponent) {
                gsap.set(slideElements[currentSlide.value - 1], { display: 'block' });
                gsap.fromTo(nextSlideComponent,
                    {
                        opacity: 0,
                        y: 200,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.2,
                        delay: 0.8,
                        ease: "power2.out"
                    }
                );
            }

            if (nextTextWords.length > 0) {
                // Slide in effect for next slide's text
                tl.fromTo(
                    nextTextWords,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: "power2.out", // Smooth
                        stagger: 0.10, // Forward animation with slow down
                        delay: 0.10
                    }, 1
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
            const prevTextElement = slideElements[prevSlide - 1].querySelector('p');
            const nextTextElement = slideElements[currentSlide.value - 1].querySelector('p');

            // Create word spans only if elements exist
            const prevTextWords = prevTextElement ? splitWords(prevTextElement) : [];
            const nextTextWords = nextTextElement ? splitWords(nextTextElement) : [];

            if (prevSlideComponent) {

                if (prevTextWords.length > 0) {
                    console.log(prevTextWords, 'prevTextWords.length');
                    tl.fromTo(
                        prevTextWords,
                        { opacity: 1, y: 0 },
                        {
                            opacity: 0,
                            y: 50,
                            duration: 0.1,
                            ease: "power1.in", // Accelerate
                            stagger: 0, // Forward animation
                        }, 0
                    );
                }
                // Slide out effect for previous slide's text
                gsap.fromTo(prevSlideComponent,
                    {
                        opacity: 1,
                        y: -300,
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

            if (nextSlideComponent) {
                gsap.set(slideElements[currentSlide.value - 1], { display: 'block' });
                gsap.fromTo(nextSlideComponent,
                    {
                        opacity: 0,
                        y: -150,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        delay: 0.8,
                        ease: "power2.out" // Slowing down easing
                    }
                );
            }

            if (nextTextWords.length > 0) {
                // Slide in effect for next slide's text
                tl.fromTo(
                    nextTextWords,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: "power2.out", // Smooth
                        stagger: 0.10, // Forward animation with slow down
                        delay: 0.5
                    }, 0.8
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
const splitWords = (element: any) => {
    if (!element) return [];

    // Store the original HTML to check for mark tags
    const originalHTML = element.innerHTML;
    const hasMarkTag = originalHTML.includes("</mark>");

    // If there's a mark tag, we need special handling
    if (hasMarkTag) {
        // Create a temporary element to manipulate the HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = originalHTML;

        // Process mark tags first - add the special class to them
        const markTags = tempDiv.querySelectorAll('mark');
        markTags.forEach((markTag) => {
            const text = markTag.textContent;
            if (!text) return;

            const words = text.split(" ");
            markTag.innerHTML = words.map((word: string) =>
                `<span class="word text-[#62DCF2]">${word}</span>`
            ).join(" ");
        });

        // Find all text nodes (not inside mark tags) and wrap words in spans
        const processTextNodes = (node: Node) => {
            if (node.nodeType === 3) { // Text node
                const text = node.textContent;
                const words = text ? text.split(" ").filter(word => word.trim() !== "") : [];
                if (words.length === 0) return node;

                const fragment = document.createDocumentFragment();
                words.forEach((word: string, i: number) => {
                    const span = document.createElement('span');
                    span.className = 'word';
                    span.textContent = word;
                    fragment.appendChild(span);

                    // Add space after each word except the last one
                    if (i < words.length - 1) {
                        fragment.appendChild(document.createTextNode(" "));
                    }
                });

                node.parentNode?.replaceChild(fragment, node);
                return fragment;
            } else if (node.nodeType === 1) { // Element node
                // Skip processing for mark tags - we already processed them
                if ((node as Element).tagName.toLowerCase() === 'mark') {
                    return node;
                }

                // Process other element nodes
                Array.from(node.childNodes).forEach(child => {
                    processTextNodes(child);
                });
            }
            return node;
        };

        // Process all child nodes 
        Array.from(tempDiv.childNodes).forEach(child => {
            processTextNodes(child);
        });

        // Update the original element's HTML
        element.innerHTML = tempDiv.innerHTML;
    } else {
        // Original logic for elements without mark tags
        const words = element.innerText.split(" ");
        element.innerHTML = words.map((word: string) =>
            `<span class="word">${word}</span>`
        ).join(" ");
    }

    return element.querySelectorAll(".word");
};
onMounted(() => {
    // Split Text Function
    document.querySelectorAll('.slides p').forEach(element => {
        splitWords(element);
    });

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
        "-=0.6"
    );

    if (titleAd.value) {
        tl.from(titleAd.value, { opacity: 0, y: 50, duration: 2, ease: "power3.out" }, "-=0.8");
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
        "-=1"
    );

    // Text Animation (Slight Delay)
    const text: any = textAd.value?.[0];
    if (text) {
        tl.fromTo(text,
            { opacity: 0, y: 10 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                delay: 0.2
            },
        "-=1.2"
        );
    }

    const slide: any = slideAd.value?.[0];
    if (slide) {
        tl.from(slide, { opacity: 0, y: 509, duration: 1, ease: "power4.out" },
        "-=0.4");
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
    overflow: hidden;

    .img-container {
        position: relative;
        width: 600px;
        height: 300px;
        border-radius: 24px;
        transition: transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out, opacity 0.3s ease-in-out;
        z-index: 9999;
        img {
            width: 100%;
            height: 100%;
            border-radius: 24px;
            object-fit: cover;
        }

        .lottie-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 24px;
            overflow: hidden;
        }

        &:hover {
            filter: blur(2px) brightness(0.98);
        }
    }

    .content {
        // visibility: hidden;
        display: none;
        opacity: 0;
        transform: translateX(-60px) scale(0.95);
        transition: none;
        position: relative;
        z-index: 1;
    }

    .arrow {
        display: none;
    }

    &:hover {
        .img-container {
            transform: scale(0.96);
            transition: transform 0.4s ease-out;
        }
        
        .content {
            display: block !important;
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

        .img-container {
            width: 85%;
            height: auto;

            img,
            .lottie-container {
                width: 100%;
                height: auto !important;
            }
        }

        .arrow {
            flex-direction: column !important;
            gap: 15px;
            display: flex;

            svg {
                transform: rotate(90deg);
            }
        }

        .content {
            display: block;
            opacity: 1;
            transform: none;
        }
    }

    @media (min-width: 768px) {
        .arrow {
            display: flex;
        }
    }
}
</style>
