<template>
    <div class=" h-screen bg-white flex items-center justify-center relative" >
        <div class=" absolute w-full top-0 line">
            <svg class=" mx-auto" width="14" height="120" viewBox="0 0 14 120" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <line opacity="0.5" x1="6.5" y1="115.045" x2="6.5" y2="-284.955" stroke="#62DCF2"
                    stroke-dasharray="4 4" />
                <circle cx="7" cy="113" r="6" fill="white" stroke="#62DCF2" stroke-width="2" />
            </svg>



        </div>
        <Navbar ref="navLib" logo-type="blue" />
        <div ref="liblaryContainer" class=" text-center pt-16 xl:pt-10 2xl:pt-0 container px-4 md:px-0 liblaryDiv">
            <div class=" max-w-[668px] mx-auto">
                <h2 ref="titleLib"
                    class=" text-[#39444C] text-2xl sm:text-2xl md:text-4xl 2xl:text-5xl 2xl:leading-[57px]">
                    Медицинская библиотека и рекомендации врачей
                </h2>
                <p ref="textLib" class=" text-sm sm:text-base xl:text-lg text-[#39444C] mt-2 sm:mt-4">
                    460+ заболеваний, структурированная информация и видео от экспертов, которые помогут лучше понять
                    своё состояние
                </p>
            </div>
            <div ref="images"
                class="images grid grid-cols-2 md:grid-cols-4 px-4 gap-3 md:gap-4 lg:gap-6 mt-6 sm:mt-10 xl:mt-20">
                <div class="box">
                    <div class="image">
                        <img src="@/assets/images/liblary/1.png" alt="1">
                        <p>
                            Советы врачей
                        </p>
                    </div>
                </div>
                <div class="box">
                    <div class="image">
                        <img src="@/assets/images/liblary/2.png" alt="2">
                        <p>
                            Бронхит
                        </p>
                    </div>
                    <div class="image">
                        <img src="@/assets/images/liblary/3.png" alt="3">
                        <p>
                            Гастрит
                        </p>
                    </div>
                </div>
                <div class="box ">
                    <div class="image !hidden sm:!block">
                        <img src="@/assets/images/liblary/4.png" alt="4">
                        <p>
                            Ишемическая болезнь сердца
                        </p>
                    </div>
                    <div class="image">
                        <img src="@/assets/images/liblary/5.png" alt="3">
                        <p>
                            Анемия
                        </p>
                    </div>
                </div>
                <div class="box ">
                    <div class="image !hidden sm:!block">
                        <img src="@/assets/images/liblary/6.png" alt="4">
                        <p>
                            Сахарный диабет
                        </p>
                    </div>
                    <div class="more">
                        <p>
                            460+
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from '../navbar.vue';

gsap.registerPlugin(ScrollTrigger);
const liblaryContainer = ref(null)
const titleLib = ref(null)
const textLib = ref(null)
const navLib = ref(null)
onMounted(() => {
    // Split Text Function
    const splitWords = (element: any) => {
        const words = element.innerText.split(" ");
        element.innerHTML = words.map((word: any) => `<span class="word">${word}</span>`).join(" ");
        return element.querySelectorAll(".word");
    };

    const titleWords = splitWords(titleLib.value);
    const textWords = splitWords(textLib.value);
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: liblaryContainer.value,
            // start: "top 85%",
            // toggleActions: "play none none reverse",
        },
    });

    tl.from(navLib.value, {
        opacity: 0,
        y: 35,
        duration: 1,
        ease: "power4.out",
        delay: 0.5,
    })

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
    )
    tl.from(titleLib.value, { opacity: 0, y: 50, duration: 1.5, ease: "power3.out" }, "-=1")
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
        "-=1.2"
    )
    // Text Animation (Slight Delay)
    tl.from(textLib.value, { opacity: 0, y: 50, duration: 1, ease: "power3.out" }, "-=1.5")
    tl.from(".box", {
        opacity: 0,
        y: 115,
        duration: 0.8,
        ease: "power4.out",
        stagger: 0.4,
    })

});
</script>

<style lang="scss" scoped>
.images {
    // max-width: 1340px;

    .box {
        display: flex;
        flex-direction: column;
        gap: 22px;

        .image {
            border-radius: 26px;
            overflow: hidden;
            height: 205px;
            position: relative;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            p {
                width: 100%;
                position: absolute;
                z-index: 999;
                bottom: 20px;
                font-family: Manrope;
                font-weight: 500;
                font-size: 18px;
                line-height: 21.6px;
                letter-spacing: 0%;
                text-align: center;
                color: #FFFFFF;
            }


        }

        .more {
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #62DCF2;
            color: #62DCF2;
            font-family: Manrope;
            font-weight: 500;
            font-size: 48px;
            line-height: 57.6px;
            letter-spacing: 0%;
            text-align: center;
            height: 100%;
            border-radius: 26px;
            height: 205px;

            p {
                margin: 0;
            }
        }

        &:nth-child(1) {
            .image {
                height: 432px;
            }
        }
    }
    @media (max-width: 1582px) {
        .box {
            .image {
                height: 135px;

                p {
                    font-size: 14px;
                    line-height: 16.6px;
                }
            }

            .more {
                height: 135px;
                font-size: 38px;
                line-height: 47.6px;
            }


            &:nth-child(1) {
                .image {
                    height: 295px;
                }
            }
        }

    }
    @media (max-width: 1025px) {
        .box {
            .image {
                height: 150px;

                p {
                    font-size: 14px;
                    line-height: 16.6px;
                }
            }

            .more {
                height: 150px;
                font-size: 38px;
                line-height: 47.6px;
            }


            &:nth-child(1) {
                .image {
                    height: 322px;
                }
            }
        }

    }

    @media (max-width: 768px) {
        .box {

            .image {
                height: 120px;

                p {
                    font-size: 12px;
                    line-height: 14px;
                    bottom: 12px;
                }
            }

            &:nth-child(1) {
                .image {
                    height: 252px;
                }
            }

            .more {
                height: 120px;
                font-size: 32px;
                line-height: 37.6px;
            }

            gap: 12px;
        }
    }
}
</style>