<script setup lang="ts">
import { navLinks } from '~/data/siteConfig'

const isOpen = ref(false)
const route = useRoute()

watch(
  () => route.fullPath,
  () => {
    isOpen.value = false
  },
)
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-sand-200/70 bg-sand-50/90 backdrop-blur">
    <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
      <NuxtLink to="/" class="font-display text-3xl font-semibold text-slate-700">
        Domeček <span class="text-forest-700">Oseček</span>
      </NuxtLink>

      <nav class="hidden items-center gap-6 lg:flex">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="border-b-2 border-transparent pb-1 text-sm font-medium text-slate-700 transition-colors hover:text-forest-700"
          active-class="!border-forest-700 !text-forest-700 !font-semibold"
        >
          {{ link.label }}
        </NuxtLink>
        <BaseButton to="/rezervace" class="ml-2">Rezervace</BaseButton>
      </nav>

      <button
        type="button"
        class="inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-700 lg:hidden"
        aria-label="Otevřít menu"
        :aria-expanded="isOpen"
        @click="isOpen = !isOpen"
      >
        <svg v-if="!isOpen" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="h-6 w-6">
          <path stroke-linecap="round" d="M4 7h16M4 12h16M4 17h16" />
        </svg>
        <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="h-6 w-6">
          <path stroke-linecap="round" d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </div>

    <transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <nav v-if="isOpen" class="border-t border-sand-200 bg-sand-50 px-4 pb-6 pt-2 lg:hidden">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="block rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-sand-100"
          active-class="!bg-forest-50 !font-semibold !text-forest-700"
        >
          {{ link.label }}
        </NuxtLink>
        <BaseButton to="/rezervace" class="mt-3 w-full">Rezervace</BaseButton>
      </nav>
    </transition>
  </header>
</template>
