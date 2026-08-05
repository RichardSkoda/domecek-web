<script setup lang="ts">
defineProps<{ name: string }>()

const paths: Record<string, string> = {
  clock: 'M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  kitchen: 'M4 4h16M6 4v16m12-16v16M4 10h16',
  bed: 'M3 18v-6a2 2 0 012-2h14a2 2 0 012 2v6M3 18h18M3 18v2m18-2v2M7 10V7a2 2 0 012-2h2a2 2 0 012 2v3',
  tv: 'M4 6h16v10H4zM9 20h6M8 6l4-3 4 3',
  sun: 'M12 4V2m0 20v-2m8-8h2M2 12h2m13.36-6.36l1.42-1.42M4.22 19.78l1.42-1.42M18.36 18.36l1.42 1.42M4.22 4.22l1.42 1.42M12 7a5 5 0 100 10 5 5 0 000-10z',
  bike: 'M6 17a3 3 0 100-6 3 3 0 000 6zm12 0a3 3 0 100-6 3 3 0 000 6zM9 17l3-8h4l2 4M9 9h5',
  car: 'M4 16V9l2-4h12l2 4v7m-16 0a1.5 1.5 0 003 0m-3 0h16m-3 0a1.5 1.5 0 003 0',
  thermometer: 'M10 14V4a2 2 0 114 0v10a4 4 0 11-4 0z',
  droplet: 'M12 2s6 7 6 11a6 6 0 11-12 0c0-4 6-11 6-11z',
  fire: 'M12 2s4 4 4 8a4 4 0 11-8 0c0-1 .3-2 1-3 .5 1.5 2 2 2 2-1-2-1-4 1-7z',
  shower: 'M4 12h16M7 12V6a5 5 0 0110 0v6M9 16v2m3-2v2m3-2v2',
  leaf: 'M5 21c9 0 14-5 14-14V5h-2C8 5 3 10 3 19v2z',
  home: 'M3 11l9-7 9 7M5 10v10h14V10',
  users: 'M9 11a3 3 0 100-6 3 3 0 000 6zm7 0a3 3 0 100-6 3 3 0 000 6zM2 20c0-3.3 3.1-6 7-6s7 2.7 7 6m-2-6c3 0 6 2 6 6',
  window: 'M4 4h16v16H4zM12 4v16M4 12h16',
  mail: 'M3 6h18v12H3zM3 6l9 7 9-7',
  phone: 'M4 4h4l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v4a2 2 0 01-2 2A15 15 0 013 6a2 2 0 012-2z',
  pin: 'M12 21s7-6.3 7-11.5A7 7 0 105 9.5C5 14.7 12 21 12 21zM12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z',
}
</script>

<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6">
    <path :d="paths[name] ?? paths.leaf" />
  </svg>
</template>
