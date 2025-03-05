<template>
  <ClientOnly>
    <div ref="container">
      <section v-for="(comp, index) in sectionComponents" :key="index" ref="sections" class="panel"
        :id="index + 'panel'">
        <component :is="comp" :currentSection="currentSection" />
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
  // defineAsyncComponent(() => import('@/components/sections/Entrance.vue')),
  // defineAsyncComponent(() => import('@/components/sections/Welcome.vue')),
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


function goToSection(index: number) {
  const moduleDivs = document.querySelectorAll('.moduleDiv')
  const advantage = document.querySelectorAll('.advantageDiv')

  if (index == 1) { // 3
    gsap.to(moduleDivs, {
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
    gsap.to(moduleDivs, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: undefined,
      delay: 2.5,
    });
  }
  else if (index == 2) {
    gsap.to(advantage, {
      opacity: 0,
      y: -1531,
      duration: 1,
      ease: "power4.in",
    });
    scrollTween = gsap.to(window, {
      scrollTo: { y: index * window.innerHeight, autoKill: false },
      duration: 2,
      ease: "expo.inOut",
      onComplete: () => {
        scrollTween = null;
        currentSection.value = index;
      },
      overwrite: true,
    });
    gsap.to(advantage, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: undefined,
      delay: 2,
    });
  }
  else {
    scrollTween = gsap.to(window, {
      scrollTo: { y: index * window.innerHeight, autoKill: false },
      duration: 1.2,
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

  gsap.utils.toArray<HTMLElement>(sections.value).forEach((panel, index) => {
    ScrollTrigger.create({
      trigger: panel,
      start: "top bottom-=2",
      end: () => "+=" + (window.innerHeight * 2 - 4),
      pin: pinSection.value,
      onToggle: (self) => self.isActive && !scrollTween && goToSection(index),
    })
  })

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
  top: 0;
  /* display: flex;
  align-items: center;
  justify-content: center; */
}
</style>
