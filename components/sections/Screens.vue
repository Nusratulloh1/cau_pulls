<template>
    <div class="bg-white h-[100vh] overflow-hidden">
        <div ref="scrollContainerScreens" class="h-screen w-full relative">
            <div class="absolute w-full top-0 line">
                <svg ref="lineSc" class="mx-auto" width="14" height="120" viewBox="0 0 14 120" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <line opacity="0.5" x1="6.5" y1="115.045" x2="6.5" y2="-284.955" stroke="#62DCF2"
                        stroke-dasharray="4 4" />
                    <circle cx="7" cy="113" r="6" fill="white" stroke="#62DCF2" stroke-width="2" />
                </svg>

                <div class="text-center p-4 md:p-12 " ref="screenContainer">
                    <!-- hide on scroll slide out -->
                    {{ currentStep }}
                    <h2 ref="titleSc">
                        Самая полная картина вашего <mark>здоровья</mark>, доступная как никогда раньше
                    </h2>
                    <!-- hide on scroll slide out -->
                    <div ref="svgSc" class="w-full mt-6 sm:mt-16">

                        <svg class="w-[100px] md:w-[162px] mx-auto" width="162" height="50" viewBox="0 0 162 50"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_60_763)">
                                <path
                                    d="M48.4671 24.9999C48.4671 12.2829 38.0632 1.97363 25.2294 1.97363C12.3956 1.97363 1.9917 12.2829 1.9917 24.9999C1.9917 37.717 12.3956 48.0263 25.2294 48.0263C38.0632 48.0263 48.4671 37.717 48.4671 24.9999Z"
                                    fill="#62DCF2" />
                                <path
                                    d="M48.4671 24.9999C48.4671 12.2829 38.0632 1.97363 25.2294 1.97363C12.3956 1.97363 1.9917 12.2829 1.9917 24.9999C1.9917 37.717 12.3956 48.0263 25.2294 48.0263C38.0632 48.0263 48.4671 37.717 48.4671 24.9999Z"
                                    stroke="#EDFCFE" stroke-width="3" />
                                <path
                                    d="M33.8632 14.8419C31.8261 12.9615 29.5201 12.964 27.7964 13.386C26.0792 13.8063 24.2774 13.8063 22.5602 13.386C20.8365 12.964 18.5306 12.9615 16.4933 14.8419C12.6333 18.4051 15.7394 24.77 16.6743 25.8663C17.6091 26.9626 17.6393 28.4243 18.3027 31.4088C18.9662 34.3934 19.8105 37.2255 21.4993 36.7992C23.1881 36.3729 23.6403 34.3021 24.0626 31.5306C24.0917 31.3401 24.1218 31.1613 24.1532 30.9932C24.3677 29.841 25.9888 29.841 26.2034 30.9932C26.2347 31.1611 26.265 31.3401 26.2941 31.5306C26.7163 34.3021 27.1686 36.3729 28.8574 36.7992C30.5462 37.2255 31.3904 34.3934 32.054 31.4088C32.7174 28.4243 32.7475 26.9626 33.6823 25.8663C34.6173 24.77 37.7234 18.4051 33.8632 14.8419ZM22.0733 16.2263C22.0266 16.5764 21.7081 16.8223 21.3617 16.7767C21.2377 16.7611 18.4847 16.4543 17.7113 19.4893C17.6374 19.7786 17.3796 19.971 17.0967 19.971C17.0443 19.971 16.991 19.9644 16.9379 19.9506C16.5984 19.8623 16.3939 19.5127 16.4813 19.1697C17.3287 15.844 20.1532 15.3188 21.5285 15.5052C21.8761 15.5523 22.1199 15.8752 22.0733 16.2263Z"
                                    fill="white" />
                                <path
                                    d="M85.6475 24.9999C85.6475 12.2829 75.2437 1.97363 62.4098 1.97363C49.576 1.97363 39.1721 12.2829 39.1721 24.9999C39.1721 37.717 49.576 48.0263 62.4098 48.0263C75.2437 48.0263 85.6475 37.717 85.6475 24.9999Z"
                                    fill="#62DCF2" />
                                <path
                                    d="M85.6475 24.9999C85.6475 12.2829 75.2437 1.97363 62.4098 1.97363C49.576 1.97363 39.1721 12.2829 39.1721 24.9999C39.1721 37.717 49.576 48.0263 62.4098 48.0263C75.2437 48.0263 85.6475 37.717 85.6475 24.9999Z"
                                    stroke="#EDFCFE" stroke-width="3" />
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M58.3753 34.6981C54.4683 31.5411 49.1311 26.326 49.1311 21.3951C49.1311 13.6176 56.4346 10.0822 62.4098 16.4456C68.3849 10.0822 75.6885 13.6173 75.6885 21.3951C75.6885 26.3261 70.3512 31.5411 66.4443 34.6981C64.6755 36.1273 63.7912 36.8419 62.4098 36.8419C61.0284 36.8419 60.144 36.1273 58.3753 34.6981ZM59.8778 23.3502C59.9967 23.1819 60.0954 23.0422 60.1834 22.9226C60.2577 23.0509 60.3407 23.2003 60.4406 23.3803L62.7116 27.4718C62.932 27.8693 63.1484 28.2592 63.3655 28.542C63.5978 28.8447 64.0063 29.2595 64.6611 29.2717C65.3157 29.2839 65.7397 28.8845 65.9834 28.5907C66.2111 28.3161 66.4419 27.9347 66.6773 27.5457L66.7509 27.4242C67.0441 26.9399 67.2286 26.6372 67.392 26.4185C67.5425 26.217 67.6295 26.1513 67.6944 26.1149C67.7592 26.0785 67.861 26.0385 68.1127 26.0142C68.386 25.9878 68.7429 25.9868 69.3129 25.9868H70.377C70.927 25.9868 71.3729 25.5449 71.3729 24.9999C71.3729 24.4549 70.927 24.0131 70.377 24.0131H69.2698C68.7558 24.0131 68.3011 24.0131 67.92 24.0498C67.5068 24.0895 67.1047 24.1776 66.713 24.3974C66.3213 24.6172 66.0382 24.9135 65.7912 25.2442C65.5633 25.549 65.3295 25.9353 65.065 26.3722L65.0019 26.4764C64.8868 26.6667 64.7907 26.8251 64.7049 26.9611C64.6241 26.822 64.5342 26.6601 64.4263 26.4657L62.1564 22.3761C61.9518 22.0072 61.7478 21.6397 61.5411 21.3702C61.3151 21.0759 60.9278 20.6865 60.307 20.6534C59.6862 20.6202 59.2588 20.9657 59.0021 21.2343C58.7672 21.4802 58.5246 21.8238 58.2811 22.1688L57.8702 22.7503C57.5686 23.1773 57.3794 23.4434 57.2158 23.6352C57.0651 23.8118 56.9813 23.8697 56.9196 23.9015C56.8577 23.9335 56.7618 23.9682 56.5295 23.9893C56.2769 24.0122 55.9485 24.0131 55.4225 24.0131H54.4426C53.8926 24.0131 53.4467 24.4549 53.4467 24.9999C53.4467 25.5449 53.8926 25.9868 54.4426 25.9868H55.4625C55.9366 25.9868 56.3567 25.9868 56.7106 25.9548C57.0945 25.9201 57.4688 25.8434 57.8394 25.6522C58.2099 25.461 58.4881 25.2011 58.7369 24.9094C58.9664 24.6405 59.2072 24.2994 59.4791 23.9145L59.8778 23.3502Z"
                                    fill="white" />
                                <path
                                    d="M122.828 24.9999C122.828 12.2829 112.424 1.97363 99.5902 1.97363C86.7564 1.97363 76.3525 12.2829 76.3525 24.9999C76.3525 37.717 86.7564 48.0263 99.5902 48.0263C112.424 48.0263 122.828 37.717 122.828 24.9999Z"
                                    fill="#BDAF11" />
                                <path
                                    d="M122.828 24.9999C122.828 12.2829 112.424 1.97363 99.5902 1.97363C86.7564 1.97363 76.3525 12.2829 76.3525 24.9999C76.3525 37.717 86.7564 48.0263 99.5902 48.0263C112.424 48.0263 122.828 37.717 122.828 24.9999Z"
                                    stroke="#EDFCFE" stroke-width="3" />
                                <path
                                    d="M99.5902 17.1055C94.5162 17.1055 89.9147 19.8401 86.5194 24.2819C86.2422 24.6459 86.2422 25.1543 86.5194 25.5182C89.9147 29.9653 94.5162 32.7001 99.5902 32.7001C104.664 32.7001 109.266 29.9653 112.661 25.5235C112.938 25.1597 112.938 24.6513 112.661 24.2873C109.266 19.8401 104.664 17.1055 99.5902 17.1055ZM99.9542 30.3935C96.5859 30.6022 93.8045 27.8676 94.0164 24.5442C94.1902 21.8042 96.4448 19.5832 99.2263 19.412C102.595 19.2032 105.376 21.938 105.164 25.2613C104.985 27.996 102.73 30.2169 99.9542 30.3935ZM99.7858 27.8568C97.9713 27.9692 96.4719 26.4976 96.5914 24.7101C96.6838 23.2331 97.9007 22.0397 99.4001 21.9434C101.215 21.8309 102.714 23.3026 102.595 25.0901C102.497 26.5724 101.28 27.7659 99.7858 27.8568Z"
                                    fill="white" />
                                <path
                                    d="M160.008 24.9999C160.008 12.2829 149.604 1.97363 136.77 1.97363C123.937 1.97363 113.533 12.2829 113.533 24.9999C113.533 37.717 123.937 48.0263 136.77 48.0263C149.604 48.0263 160.008 37.717 160.008 24.9999Z"
                                    fill="#F26262" />
                                <path
                                    d="M160.008 24.9999C160.008 12.2829 149.604 1.97363 136.77 1.97363C123.937 1.97363 113.533 12.2829 113.533 24.9999C113.533 37.717 123.937 48.0263 136.77 48.0263C149.604 48.0263 160.008 37.717 160.008 24.9999Z"
                                    stroke="#EDFCFE" stroke-width="3" />
                                <path
                                    d="M128.098 25.4522V26.9042H121.296L121.206 25.7799L125.141 19.5928H126.626L125.018 22.2591L123.06 25.4522H128.098ZM127.028 19.5928V28.9472H125.161V19.5928H127.028ZM133.926 19.4965H134.198V20.9741H134.088C133.596 20.9741 133.157 21.047 132.773 21.1925C132.388 21.3382 132.062 21.5459 131.794 21.8158C131.53 22.0813 131.327 22.4025 131.184 22.7795C131.046 23.1565 130.977 23.5783 130.977 24.0451V25.6C130.977 25.9341 131.009 26.2296 131.074 26.4866C131.143 26.7392 131.24 26.9513 131.366 27.1226C131.495 27.2896 131.647 27.4161 131.819 27.5017C131.992 27.583 132.187 27.6237 132.403 27.6237C132.606 27.6237 132.789 27.5809 132.954 27.4953C133.123 27.4096 133.265 27.2896 133.382 27.1354C133.503 26.977 133.594 26.7928 133.654 26.5829C133.719 26.3688 133.752 26.1354 133.752 25.8826C133.752 25.6299 133.719 25.3965 133.654 25.1824C133.594 24.9682 133.503 24.784 133.382 24.6299C133.261 24.4713 133.113 24.3492 132.941 24.2636C132.768 24.1779 132.574 24.1351 132.358 24.1351C132.064 24.1351 131.804 24.2037 131.58 24.3407C131.359 24.4734 131.186 24.6448 131.061 24.8546C130.936 25.0646 130.868 25.2851 130.86 25.5165L130.296 25.1566C130.309 24.8269 130.378 24.5142 130.503 24.2186C130.633 23.923 130.81 23.6619 131.035 23.4347C131.264 23.2036 131.539 23.0236 131.858 22.8951C132.178 22.7624 132.539 22.6959 132.941 22.6959C133.382 22.6959 133.769 22.7795 134.101 22.9466C134.439 23.1136 134.72 23.3428 134.945 23.634C135.169 23.9253 135.338 24.2615 135.451 24.6426C135.562 25.0238 135.619 25.4308 135.619 25.8633C135.619 26.3174 135.543 26.7392 135.392 27.1291C135.245 27.5188 135.031 27.8594 134.751 28.1505C134.473 28.4419 134.141 28.6688 133.752 28.8316C133.363 28.9944 132.926 29.0758 132.442 29.0758C131.94 29.0758 131.484 28.9858 131.074 28.8059C130.668 28.6217 130.317 28.3648 130.023 28.0349C129.73 27.7051 129.503 27.3132 129.343 26.8592C129.187 26.4051 129.109 25.9083 129.109 25.3687V24.6491C129.109 23.8953 129.22 23.2057 129.44 22.5803C129.665 21.9507 129.987 21.4067 130.406 20.9484C130.825 20.4858 131.331 20.1282 131.923 19.8755C132.515 19.6228 133.184 19.4965 133.926 19.4965ZM143.088 23.4476V25.0667C143.088 25.7691 143.013 26.3751 142.861 26.8849C142.71 27.3903 142.492 27.8058 142.207 28.1313C141.925 28.4525 141.591 28.6903 141.202 28.8445C140.812 28.9987 140.38 29.0758 139.904 29.0758C139.524 29.0758 139.17 29.0286 138.842 28.9344C138.513 28.8359 138.216 28.6838 137.954 28.4783C137.693 28.2726 137.469 28.0136 137.279 27.7008C137.093 27.3838 136.95 27.007 136.851 26.5701C136.752 26.1332 136.701 25.6321 136.701 25.0667V23.4476C136.701 22.7453 136.777 22.1434 136.928 21.6423C137.084 21.1369 137.303 20.7236 137.583 20.4024C137.869 20.0811 138.206 19.8455 138.595 19.6957C138.984 19.5415 139.417 19.4644 139.892 19.4644C140.272 19.4644 140.624 19.5136 140.948 19.6121C141.277 19.7063 141.573 19.8541 141.836 20.0554C142.101 20.2567 142.325 20.5158 142.511 20.8328C142.697 21.1454 142.84 21.5203 142.94 21.9571C143.038 22.3897 143.088 22.8866 143.088 23.4476ZM141.215 25.3108V23.1971C141.215 22.8587 141.195 22.5632 141.156 22.3105C141.122 22.0578 141.067 21.8436 140.994 21.668C140.92 21.4882 140.83 21.3425 140.722 21.2311C140.613 21.1198 140.49 21.0384 140.352 20.987C140.214 20.9355 140.061 20.9099 139.892 20.9099C139.68 20.9099 139.491 20.9505 139.328 21.032C139.167 21.1133 139.032 21.244 138.919 21.4238C138.807 21.5995 138.72 21.835 138.66 22.1305C138.604 22.4219 138.575 22.7774 138.575 23.1971V25.3108C138.575 25.6492 138.592 25.9469 138.627 26.2038C138.667 26.4609 138.722 26.6815 138.795 26.8657C138.874 27.0455 138.964 27.1933 139.068 27.309C139.177 27.4203 139.3 27.5017 139.438 27.553C139.58 27.6045 139.736 27.6301 139.904 27.6301C140.113 27.6301 140.296 27.5895 140.455 27.508C140.62 27.4224 140.758 27.2896 140.871 27.1098C140.988 26.9255 141.074 26.6857 141.13 26.3901C141.187 26.0946 141.215 25.7349 141.215 25.3108ZM150.544 23.7367V25.3494H144.074V23.7367H150.544ZM148.197 21.199V28.0092H146.427V21.199H148.197Z"
                                    fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_60_763">
                                    <rect width="162" height="50" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                    </div>

                    <!-- shown on scroll slide in titleSc2 -->
                    <h2 ref="titleSc2" class="hidden">
                        Поймите свое здоровье с <br> уверенностью
                    </h2>
                    <!-- <h2 ref="titleSc3" class="hidden">
                        Ваш персональный <br> медицинский помощник
                    </h2> -->
                    <!-- scale 60% move to top on scroll -->
                    <div ref="imgSc" class="w-[90%] sm:w-[50%] lg:w-[30%] 2xl:w-[23%] mx-auto mt-10 md:mt-16">
                        <transition-group name="fade" tag="div" class="relative">
                            <img v-for="slide in slides" :key="slide.id" v-show="currentSlide === slide.id"
                                class="w-full absolute top-0 left-0" :src="slide.img" alt="screen">
                        </transition-group>
                    </div>

                    <div ref="buttonsSc"
                        class=" absolute bottom-[15%] md:bottom-[23%] left-0 flex w-full justify-center  hidden p-4 md:p-12">
                        <div class="flex items-center justify-center gap-3    roundedButtons ">
                            <button class=" shrink-0" @click="changeSlide(slide.id)" v-for="slide in slides"
                                :class="{ active: slide.id == currentSlide }">{{
                        slide.title
                                }}</button>
                        </div>
                    </div>

                </div>

            </div>
            <Navbar logo-type="blue" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import Navbar from '../navbar.vue';
import { ref, onMounted, watch } from 'vue';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image1 from "@/assets/images/screens/1.png"
import image2 from "@/assets/images/screens/2.png"
import image3 from "@/assets/images/screens/3.png"
import image4 from "@/assets/images/screens/4.png"
import image5 from "@/assets/images/screens/5.png"
gsap.registerPlugin(ScrollTrigger);
const props = defineProps<{ currentSection: number }>();
const emit = defineEmits(['next', 'prev']);
const scrollContainerScreens = ref<HTMLElement | null>(null);
const screenContainer = ref<HTMLElement | null>(null);
const titleSc = ref<HTMLElement | null>(null);
const titleSc2 = ref<HTMLElement | null>(null);
const titleSc3 = ref<HTMLElement | null>(null);
const buttonsSc = ref<HTMLElement | null>(null);
const lineSc = ref<HTMLElement | null>(null);
const svgSc = ref<HTMLElement | null>(null);
const imgSc = ref<HTMLElement | null>(null);
const steps = ['titleSc', 'titleSc2', 'titleSc3']
const currentStep = ref(0)
const isAnimating = ref(false);
let wheelEventTimeout: number | null = null;
const currentSlide = ref(1)
const slides = [
    {
        id: 1,
        title: 'Главная ',
        img: image1
    },
    {
        id: 2,
        title: 'Проверка симптомов ИИ ',
        img: image2
    },
    {
        id: 3,
        title: 'Онлайн терапевт',
        img: image3
    },
    {
        id: 4,
        title: 'Медицинская библиотека',
        img: image4
    },
    {
        id: 5,
        title: 'интересные инсайды',
        img: image5
    }
]
let currentImageAnimation: gsap.core.Timeline | null = null;

// Function to go to the next step or section
const goToNextStep = () => {
    if (isAnimating.value) return;

    isAnimating.value = true;

    // If we're not at the last step, go to the next step
    if (currentStep.value < steps.length - 1) {
        currentStep.value++;

        // The animations will be handled by the watch function
        setTimeout(() => {
            isAnimating.value = false;
        }, 800); // Animation duration
    }
    // If we're at the last step, go to the next section
    else {
        // Emit next event to move to the next section
        emit('next');
        isAnimating.value = false;
    }
};

// Function to go to the previous step or section
const goToPrevStep = () => {
    if (isAnimating.value) return;

    isAnimating.value = true;

    // If we're not at the first step, go to the previous step
    if (currentStep.value > 0) {
        currentStep.value--;

        // The animations will be handled by the watch function
        setTimeout(() => {
            isAnimating.value = false;
        }, 800); // Animation duration
    }
    // If we're at the first step, go to the previous section
    else {
        // Emit prev event to move to the previous section
        emit('prev');
        isAnimating.value = false;
    }
};

// Handle wheel events for step navigation
const handleWheel = (e: WheelEvent) => {
    e.preventDefault();

    // Debounce wheel events
    if (wheelEventTimeout) {
        clearTimeout(wheelEventTimeout);
    }

    wheelEventTimeout = setTimeout(() => {
        if (e.deltaY > 0) {
            goToNextStep();
        } else if (e.deltaY < 0) {
            goToPrevStep();
        }
    }, 100) as unknown as number;
};
const handleKeyDown = (e: KeyboardEvent) => {
    if (props.currentSection !== 2) return;

    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        goToNextStep();
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        goToPrevStep();
    }
};

watch(() => props.currentSection, (value) => {
    console.log('Updated Current Section:', value);

    if (value === 6) {
        console.log('Current Step:', currentStep.value);
        if (scrollContainerScreens.value) {
            scrollContainerScreens.value.addEventListener('wheel', handleWheel, { passive: false });
        }
        window.addEventListener('keydown', handleKeyDown);
    } else {
        if (scrollContainerScreens.value) {
            scrollContainerScreens.value.removeEventListener('wheel', handleWheel);
        }
        window.removeEventListener('keydown', handleKeyDown);
        // currentStep.value = 0;
    }
});

onMounted(() => {
    // Create initial animations for the section
    const initialTl = gsap.timeline({
        scrollTrigger: {
            trigger: screenContainer.value
        }
    });

    const splitWords = (element: HTMLElement | null) => {
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

    // Initial animation for titleSc
    const titleWords = splitWords(titleSc.value);
    const titleWords2 = splitWords(titleSc2.value);
    const titleWords3 = splitWords(titleSc3.value);
    initialTl.fromTo(
        titleWords,
        { opacity: 0, y: 50, ease: "power3.out", delay: 1.5 },
        {
            opacity: 1,
            y: 50,
            duration: 0.5,
            ease: "power4.out",
            stagger: 0.15, // Smooth sequential animation
            delay: 1.7,
        }
    )
    initialTl
        .from(titleSc.value, {
            opacity: 0,
            y: 100,
            duration: 2,
            // delay: 2
        },
            "-=1.5")

    initialTl.fromTo(
        svgSc.value,
        { opacity: 0, scale: 0.5 },
        {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power4.out",
        },
        "-=0.3"
    );

    initialTl.fromTo(
        imgSc.value,
        { opacity: 0, y: 100 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power4.out"
        },
        "-=0.5"
    );

    watch(() => currentStep.value, (newStep, oldStep) => {
        // Create a new timeline for each step transition
        const stepTl = gsap.timeline({
            onComplete: () => {
                isAnimating.value = false;
            }
        });

        // Transition from step 0 to step 1
        if (newStep === 1 && oldStep === 0) {
            console.log('nextstep');

            stepTl.fromTo(
                titleWords,
                { opacity: 1, y: 0 },
                {
                    opacity: 0,
                    y: -50,
                    duration: 0.5,
                    ease: "power3.out",
                    stagger: -0.15,
                    delay: 0.3,
                }
            );
            stepTl.set(titleSc.value, { display: 'none' })
            stepTl.to(
                svgSc.value,
                {
                    opacity: 0,
                    scale: 0.5,
                    duration: 0.8,
                    ease: "power4.out",
                    delay: -1
                },
            );
            stepTl.set(svgSc.value, { display: 'none' })
            stepTl.set(titleSc2.value, { display: 'block' })
            // Show second title
            stepTl.fromTo(titleWords2,
                { opacity: 0, y: 0 },
                {
                    opacity: 1,
                    y: 50,
                    duration: 0.5,
                    ease: "power3.out",
                    stagger: 0.15,
                    delay: 1,
                },
                1
            );

            // Scale and move image to top
            stepTl.to(imgSc.value, {
                y: -120,
                scale: 0.7,
                duration: 1.7,
                ease: "power2.inOut"
            }, 1.5);

        }

        // Transition from step 1 to step 2
        else if (newStep === 2 && oldStep === 1) {
            // Hide second title
            stepTl.fromTo(
                titleWords2,
                { opacity: 1, y: 0 },
                {
                    opacity: 0,
                    y: -50,
                    duration: 0.5,
                    ease: "power3.out",
                    stagger: -0.15,
                    delay: 0.3,
                }
            );
            stepTl.set(titleSc2.value, { display: 'none' })
            // stepTl.set(titleSc3.value, { display: 'block' })

            // // Show third title
            // stepTl.fromTo(titleWords3,
            //     { opacity: 0, y: 0 },
            //     {
            //         opacity: 1,
            //         y: 50,
            //         duration: 0.5,
            //         ease: "power3.out",
            //         stagger: 0.15,
            //         delay: 1,
            //     },
            //     1
            // );
            stepTl.to(lineSc.value, { opacity: 0, duration: 0.5, ease: "power4.out", y: -50 }, 1)
            stepTl.to(imgSc.value, {
                y: window.innerWidth > 768 ? -250 : -150,
                scale: 0.7,
                duration: 1,
                ease: "power2.inOut"
            }, 1.5);
            stepTl.set(buttonsSc.value, { display: 'flex' })
            stepTl.fromTo(buttonsSc.value,
                {
                    y: 0,
                    opacity: 0,
                    duration: 0.8,
                },
                {
                    y: 50,
                    opacity: 1,
                    // scale: 1,
                    duration: 0.8,
                    ease: "power4.out"
                },
                0
            );

        }

        // Going backwards from step 1 to step 0
        else if (newStep === 0 && oldStep === 1) {
            stepTl.fromTo(
                titleWords2,
                { opacity: 1, y: 0 },
                {
                    opacity: 0,
                    y: -50,
                    duration: 0.5,
                    ease: "power3.out",
                    stagger: -0.15,
                    delay: 0.3,
                }
            );
            stepTl.set(titleSc2.value, { display: 'none' })
            stepTl.set(titleSc.value, { display: "block" });
            stepTl.set(svgSc.value, { display: "block" });

            stepTl.fromTo(
                titleWords,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power3.out",
                    stagger: 0.15,
                    delay: 1,
                },
                1
            );
            stepTl.to(
                svgSc.value,
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    ease: "power4.out",
                    display: 'block',
                    delay: -1
                }
            );


            // Reset image to original size and position
            stepTl.to(imgSc.value, {
                scale: 1,
                y: 0,
                duration: 1.7,
                ease: "power2.inOut"
            }, 1.5);

            // Fade in the line
            stepTl.to(lineSc.value, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power4.out"
            }, 1);
        }

        // Going backwards from step 2 to step 1
        else if (newStep === 1 && oldStep === 2) {
            changeSlide(1)
            stepTl.fromTo(
                titleWords3,
                { opacity: 1, y: 0 },
                {
                    opacity: 0,
                    y: -50,
                    duration: 0.5,
                    ease: "power3.out",
                    stagger: -0.15,
                    delay: 0.3,
                }
            );

            // Slide out buttons
            stepTl.fromTo(buttonsSc.value,
                {
                    y: 0,
                    opacity: 1,
                    // scale: 1
                },
                {
                    y: 50,
                    opacity: 0,
                    // scale: 0.8,
                    duration: 0.8,
                    ease: "power4.out"
                },
                0
            );

            // Hide buttons after animation
            stepTl.set(buttonsSc.value, { display: 'none' }, "+=0.6");
            stepTl.set(titleSc3.value, { display: 'none' });
            stepTl.set(titleSc2.value, { display: 'block' });
            // Reset image position for step 1
            stepTl.to(imgSc.value, {
                y: -120,
                scale: 0.7,
                duration: 1,
                ease: "power2.inOut"
            }, 1);

            // Fade in the line
            stepTl.to(lineSc.value, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power4.out"
            }, 1.5);


            // Show second title again
            stepTl.fromTo(titleWords2,
                { opacity: 0, y: 0 },
                {
                    opacity: 1,
                    y: 50,
                    duration: 0.5,
                    ease: "power3.out",
                    stagger: 0.15,
                    delay: 1,
                },
                1
            );
        }
    });
})

const changeSlide = (slideId: number) => {
    // Cancel any ongoing animation
    if (currentImageAnimation) {
        currentImageAnimation.kill();
    }

    // Get current and next images
    const currentImage = imgSc.value?.querySelector(`img[src="${slides.find(s => s.id === currentSlide.value)?.img}"]`) as HTMLElement | null;
    const nextImage = imgSc.value?.querySelector(`img[src="${slides.find(s => s.id === slideId)?.img}"]`) as HTMLElement | null;

    if (currentImage && nextImage && currentSlide.value !== slideId) {
        // Set up initial state
        gsap.set(nextImage, { opacity: 0, scale: 1.05 });
        nextImage.style.display = 'block';

        // Create animation timeline
        currentImageAnimation = gsap.timeline({
            onComplete: () => {
                // Update the currentSlide after animation completes
                currentSlide.value = slideId;
                currentImageAnimation = null;
            }
        });

        // Fade out current image
        currentImageAnimation.to(currentImage, {
            opacity: 0,
            scale: 0.95,
            duration: 0.5,
            ease: "power2.inOut"
        });

        // Fade in next image
        currentImageAnimation.to(nextImage, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "power2.inOut"
        }, "-=0.3");
    } else {
        // If no animation needed, just update currentSlide
        currentSlide.value = slideId;
    }
};
</script>
<style lang="scss" scoped>
h2 {
    font-family: Manrope;
    font-weight: 400;
    font-size: 48px;
    line-height: 120%;
    letter-spacing: 0%;
    text-align: center;
    color: #39444C;
    max-width: 736px;
    margin: auto;

    mark {
        color: #62DCF2;
        background: transparent;
        margin-left: 8px;
    }

    &:first-child {
        font-size: 64px;
        line-height: 76.8px;
        max-width: 1151px;
    }
}

.hidden {
    display: none;
}

.roundedButtons {
    border: 1px solid #39444C1A;
    box-shadow: 0px 1px 20px 0px #D3D3D340;
    background: #FFFFFF;
    border-radius: 36px;
    border-width: 1px;
    padding: 16px;
    gap: 12px;
    // overflow: ;

    button {
        background: #F5F6F6;
        border-radius: 20px;
        gap: 6px;
        padding-top: 12px;
        padding-right: 24px;
        padding-bottom: 12px;
        padding-left: 24px;
        font-family: Manrope;
        font-weight: 600;
        font-size: 20px;
        line-height: 100%;
        letter-spacing: 0%;
        color: #39444C;




        &.active {
            background: #62DCF2;
            color: #FFFFFF;
        }

    }

}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: scale(1.05);
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
    transform: scale(1);
}

/* Position the images properly so they overlap */
.relative {
    position: relative;
    width: 100%;
    /* Set a fixed height for the container to prevent layout jumps */
    aspect-ratio: 0.48;
}

.relative img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
}

@media (max-width: 768px) {
    h2 {
        font-size: 24px !important;
        line-height: 31.2px;
    }

    .roundedButtons {
        button {
            font-size: 14px;
        }
    }
}

@media (max-width: 1536px) {
    h2 {
        font-size: 42px;
        line-height: 100%;

        &:first-child {
            font-size: 54px;
            line-height: 120%;
            max-width: 1033px !important;
        }
    }

    .roundedButtons {
        overflow: scroll !important;

        button {
            font-size: 16px;
        }
    }
}
</style>