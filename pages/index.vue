<template>
  <ClientOnly>
    <div ref="container">
      <section v-for="(comp, index) in sectionComponents" :key="index" ref="sections" class="panel">
        <component :is="comp" />
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
let scrollTween: gsap.core.Tween | null = null

function goToSection(index: number) {
  scrollTween = gsap.to(window, {
    scrollTo: { y: index * window.innerHeight, autoKill: false },
    duration: 1.5,
    ease: 'power2.out',
    onComplete: () => (scrollTween = null),
    overwrite: true,
  })
}

onMounted(async () => {
  await nextTick()
  if (!process.client || !container.value) return

  gsap.utils.toArray<HTMLElement>(sections.value).forEach((panel, index) => {
    ScrollTrigger.create({
      trigger: panel,
      start: "top bottom-=2",
      end: () => "+=" + (window.innerHeight * 2 - 4),
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
