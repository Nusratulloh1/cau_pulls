<template>
    <div id="section1" class="h-screen welcome">
        <!-- Background Video -->
        <video autoplay muted loop class="video-bg">
            <source src="@/assets/videos/4.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>


        <Navbar logo-type="blur" />


        <div class="overlay">
            <div class="flex w-full items-center justify-between flex-col md:flex-row p-4 sm:px-12">
                <div class="left text-center md:text-start max-w-[396px]">
                    <h3 class=" text-[32px] left-[38.4px] md:text-5xl md:leading-[57.6px]">
                        Проверка симптомов с помощью ИИ
                    </h3>
                    <p class=" md:text-lg mt-2 md:mt-4 opacity-80">
                        Точный анализ симптомов на базе искусственного интеллекта с мгновенными рекомендациями для
                        вашего здоровья
                    </p>
                    <button
                        class=" bg-white rounded-[22px] font-bold text-[#39444C] sm:text-xl px-4 sm:px-9 py-3 sm:py-4 mt-6 sm:mt-10">
                        Связаться с нами
                    </button>
                </div>
                <div
                    class="right text-center flex items-center md:block overflow-x-auto md:space-y-4 gap-4 absolute md:relative bottom-6 w-full md:w-auto px-5 md:px-0">
                    <div class="bg-white rounded-3xl p-4 md:py-5 md:px-14 shrink-0">
                        <h5 class="text-[#62DCF2] font-semibold text-2xl md:text-[32px]">
                            163 000+
                        </h5>
                        <p class="text-[#39444C] opacity-60 capitalize mt-2">
                            реальных кейсов
                        </p>
                    </div>
                    <div class="bg-white rounded-3xl p-4 md:py-5 md:px-14 shrink-0">
                        <h5 class="text-[#62DCF2] font-semibold text-2xl md:text-[32px]">
                            3-4 минуты
                        </h5>
                        <p class="text-[#39444C] opacity-60 capitalize mt-2">
                            Cессии Q&A
                        </p>
                    </div>
                    <div class="bg-white rounded-3xl p-4 md:py-5 md:px-14 shrink-0">
                        <h5 class="text-[#62DCF2] font-semibold text-2xl md:text-[32px]">
                            355 кейсов
                        </h5>
                        <p class="text-[#39444C] opacity-60 capitalize mt-2">
                            в одной болезни
                        </p>
                    </div>
                    <div class="bg-white rounded-3xl p-4 md:py-5 md:px-14 shrink-0">
                        <svg class="mx-auto" width="35" height="36" viewBox="0 0 35 36" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.5 32.75H13.9375C9.30625 32.75 5.625 29.0688 5.625 24.4375V19.6875H8V24.4375C8 27.7625 10.6125 30.375 13.9375 30.375H17.5V32.75ZM31.75 35.125H34.3625L28.9 22.0625H26.2875L20.825 35.125H23.4375L24.3875 32.75H30.6812L31.75 35.125ZM25.4563 30.375L27.5938 25.15L29.7312 30.375H25.4563ZM31.75 17.3125H29.375V12.5625C29.375 9.2375 26.7625 6.625 23.4375 6.625H18.6875V4.25H23.4375C28.0688 4.25 31.75 7.93125 31.75 12.5625V17.3125ZM15.125 5.4375V3.0625H9.1875V0.6875H6.8125V3.0625H0.875V5.4375H10.6125C10.375 6.50625 9.6625 8.40625 8 10.1875C7.2875 9.35625 6.69375 8.525 6.3375 7.8125H3.60625C4.08125 9 4.9125 10.425 6.1 11.7312C5.15 12.5625 3.725 13.275 2.0625 13.8688L2.89375 16.125C5.03125 15.2937 6.69375 14.3438 8 13.3938C9.30625 14.4625 10.9688 15.4125 13.1062 16.125L13.9375 13.8688C12.275 13.275 10.85 12.4438 9.78125 11.7312C12.0375 9.35625 12.75 6.8625 12.9875 5.4375H15.125Z"
                                fill="#62DCF2" />
                        </svg>

                        <p class="text-[#39444C] opacity-60 capitalize mt-2">
                            реальных кейсов
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Navbar from '../navbar.vue';
</script>

<style lang="scss" scoped>
.welcome {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

/* Background video */
.video-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
}

/* Optional overlay */
.overlay {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media (max-width: 769px) {
    .overlay {
        justify-content: flex-end;
    }

}
</style>