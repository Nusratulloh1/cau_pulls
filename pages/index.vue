<template>
  <ClientOnly>
    <div ref="container">
      <section v-for="(comp, index) in sectionComponents" :key="index" ref="sections" class="panel"
        :id="index + 'panel'">
        <component :is="comp" :current-section="currentSection" @next="handleNextSection" @prev="handlePrevSection" />
      </section>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, shallowRef, onUnmounted } from 'vue'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

const sectionComponents = shallowRef([
  defineAsyncComponent(() => import('@/components/sections/Entrance.vue')),
  defineAsyncComponent(() => import('@/components/sections/Welcome.vue')),
  defineAsyncComponent(() => import('@/components/sections/Modules.vue')),
  defineAsyncComponent(() => import('@/components/sections/Advantages.vue')),
  defineAsyncComponent(() => import('@/components/sections/SymtomChecker.vue')),
  defineAsyncComponent(() => import('@/components/sections/Library.vue')),
  defineAsyncComponent(() => import('@/components/sections/Screens.vue')),
  defineAsyncComponent(() => import('@/components/sections/Bottom.vue')),
])

const container = ref<HTMLElement | null>(null)
const sections = ref<HTMLElement[]>([])
const title = ref<HTMLElement | null>(null)
let scrollTween: gsap.core.Tween | null = null
const currentSection = ref(0)
const pinSection = ref(false)
const currentSlide = ref(0)

// Function to handle next section event from components
function handleNextSection() {
  if (currentSection.value < sectionComponents.value.length - 1) {
    goToSection(currentSection.value + 1);
  }
}

// Function to handle previous section event from components
function handlePrevSection() {
  if (currentSection.value > 0) {
    goToSection(currentSection.value - 1);
  }
}

function goToSection(index: number) {
  const moduleDivs = document.querySelectorAll('.moduleDiv')
  const advantage = document.querySelectorAll('.advantageDiv')
  const liblaryDiv = document.querySelectorAll('.liblaryDiv')
  const videoBg: any = document.querySelector('.video-bg')
  
  if (index <= currentSection.value) {
    // Do nothing when going back
    scrollTween = gsap.to(window, {
      scrollTo: { y: index * window.innerHeight, autoKill: false },
      duration: 1.4,
      ease: 'power2.out',
      onComplete: () => {
        scrollTween = null;
        currentSection.value = index;
      },
      overwrite: true,
    });
    return;
  }
  else if (index == 3 || index == 6) { // 3 || 6
    gsap.to(index == 3 ? moduleDivs : liblaryDiv, {
      opacity: 0,
      y: -515.48,
      duration: 1,
      ease: "power4.in",
    });
    scrollTween = gsap.to(window, {
      scrollTo: { y: index * window.innerHeight, autoKill: false },
      duration: 2.5,
      ease: "expo.inOut",
      onComplete: () => {
        scrollTween = null;
        currentSection.value = index;
      },
      overwrite: true,
    });
    gsap.to(index == 3 ? moduleDivs : liblaryDiv, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: undefined,
      delay: 2.5,
    });
  }
  else if (index == 4) {
    gsap.to(advantage, {
      opacity: 0,
      y: -window.innerHeight * 1.2, // Adjusted for smoother motion
      duration: 2, // Slightly longer duration for fluidity
      ease: "power3.inOut", // Smoother easing effect
    });
    scrollTween = gsap.to(window, {
      scrollTo: { y: index * window.innerHeight, autoKill: false },
      duration: 3,
      ease: "expo.inOut",
      onComplete: () => {
        scrollTween = null;
        currentSection.value = index;
        // play video
        videoBg.muted = true;
        videoBg.autoplay = true;
        videoBg.setAttribute("autoplay", "true");
        videoBg.play().catch((err: any) => console.warn("Autoplay blocked:", err));
      },
      overwrite: true,
    });
    gsap.to(advantage, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: undefined,
      delay: 3,
    });
  }
  // else if(index == 2){ // 7

  // }
  else {
    scrollTween = gsap.to(window, {
      scrollTo: { y: index * window.innerHeight, autoKill: false },
      duration: 1.4,
      ease: 'power2.out',
      onComplete: () => {
        scrollTween = null
        currentSection.value = index
      },
      overwrite: true,
    })
  }
}

onMounted(async () => {
  await nextTick()
  if (!process.client || !container.value) return

  // Create an array to store ScrollTrigger instances
  const triggers = [];

  // First, handle the Screens section separately
  let screensIndex = -1;
  let screensPanel = null;

  // Find the Screens section
  gsap.utils.toArray<HTMLElement>(sections.value).forEach((panel, index) => {
    // Check if current section contains the Screens component using class name matching
    if (panel.querySelector('[ref="scrollContainerScreens"]') || 
        (panel.firstElementChild && panel.firstElementChild.classList.contains('bg-white'))) {
      screensIndex = index;
      screensPanel = panel;
    }
  });

  // If we found the Screens panel, create a special trigger for it
  if (screensPanel) {
    const screensTrigger = ScrollTrigger.create({
      trigger: screensPanel,
      start: "top top",
      end: () => "+=" + (window.innerHeight * 3), // Give more scroll space for the steps
      pin: true, // Pin this section
      anticipatePin: 1,
      scrub: 1,
      onEnter: () => {
        currentSection.value = screensIndex;
      },
      onLeaveBack: (self) => {
        if (!scrollTween && currentSection.value === screensIndex) {
          goToSection(screensIndex - 1);
        }
      },
      onLeave: (self) => {
        if (!scrollTween && currentSection.value === screensIndex) {
          goToSection(screensIndex + 1);
        }
      }
    });
    
    triggers.push(screensTrigger);
  }

  // Then create regular triggers for all other sections
  gsap.utils.toArray<HTMLElement>(sections.value).forEach((panel, index) => {
    // Skip the Screens section as we already handled it
    if (index === screensIndex) return;
    
    const trigger = ScrollTrigger.create({
      trigger: panel,
      start: "top bottom-=2",
      end: () => "+=" + (window.innerHeight * 2 - 4),
      pin: pinSection.value,
      onToggle: (self) => self.isActive && !scrollTween && goToSection(index),
    });
    
    triggers.push(trigger);
  });

  function cancelWhenTweening(e: Event) {
    if (scrollTween) e.preventDefault()
  }
  window.addEventListener("wheel", cancelWhenTweening, { passive: false })
  window.addEventListener("scroll", cancelWhenTweening, { passive: false })
})

onUnmounted(() => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>
<style scoped>
.panel {
  height: 100vh;
  width: 100%;
  position: sticky;
  /* position: relative; */
  top: 0;
  overflow: hidden;
  /* display: flex;
  align-items: center;
  justify-content: center; */
}
</style>
