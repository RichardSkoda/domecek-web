<script setup lang="ts">
import { motion } from 'motion-v'

withDefaults(defineProps<{ delay?: number }>(), { delay: 0 })
</script>

<template>
  <motion.div
    :initial="{ opacity: 0, y: 24 }"
    :while-in-view="{ opacity: 1, y: 0 }"
    :viewport="{ once: true, margin: '-80px' }"
    :transition="{ duration: 0.5, delay }"
  >
    <slot />
  </motion.div>
</template>
