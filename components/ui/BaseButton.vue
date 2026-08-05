<script setup lang="ts">
withDefaults(
  defineProps<{
    to?: string
    href?: string
    variant?: 'primary' | 'secondary' | 'ghost'
    type?: 'button' | 'submit'
  }>(),
  { variant: 'primary', type: 'button' },
)

const base = 'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-600 disabled:opacity-50 disabled:pointer-events-none'
const variants = {
  primary: 'bg-forest-700 text-sand-50 hover:bg-forest-800',
  secondary: 'bg-sand-100 text-ink-800 hover:bg-sand-200',
  ghost: 'bg-transparent text-forest-700 hover:bg-forest-50',
}
</script>

<template>
  <NuxtLink v-if="to" :to="to" :class="[base, variants[variant]]">
    <slot />
  </NuxtLink>
  <a v-else-if="href" :href="href" :class="[base, variants[variant]]">
    <slot />
  </a>
  <button v-else :type="type" :class="[base, variants[variant]]">
    <slot />
  </button>
</template>
