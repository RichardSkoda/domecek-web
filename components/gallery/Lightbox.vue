<script setup lang="ts">
import type { GalleryImage } from '~/types/content'
import { galleryImageUrl } from '~/data/gallery'

const props = defineProps<{
  images: GalleryImage[]
  index: number
}>()

const emit = defineEmits<{
  close: []
  'update:index': [number]
}>()

const { t } = useI18n()

const current = computed(() => props.images[props.index])
const currentAlt = computed(() => t(`gallery.categories.${current.value.category}`))

function next() {
  emit('update:index', (props.index + 1) % props.images.length)
}

function prev() {
  emit('update:index', (props.index - 1 + props.images.length) % props.images.length)
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') emit('close')
  if (event.key === 'ArrowRight') next()
  if (event.key === 'ArrowLeft') prev()
}

onMounted(() => {
  window.addEventListener('keydown', onKeydown)
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <div
    class="fixed inset-0 z-[100] flex items-center justify-center bg-ink-900/95 p-4"
    role="dialog"
    aria-modal="true"
    :aria-label="currentAlt"
    @click.self="emit('close')"
  >
    <button
      type="button"
      class="absolute right-4 top-4 rounded-full p-2 text-sand-50 hover:bg-sand-50/10"
      :aria-label="t('gallery.lightbox.close')"
      @click="emit('close')"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="h-7 w-7">
        <path stroke-linecap="round" d="M6 6l12 12M18 6L6 18" />
      </svg>
    </button>

    <button
      type="button"
      class="absolute left-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-sand-50 hover:bg-sand-50/10 sm:left-6"
      :aria-label="t('gallery.lightbox.prev')"
      @click="prev"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="h-8 w-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 6l-6 6 6 6" />
      </svg>
    </button>

    <NuxtImg
      :src="galleryImageUrl(current)"
      :alt="currentAlt"
      :width="current.width"
      :height="current.height"
      class="max-h-[85vh] max-w-full rounded-lg object-contain"
      sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw 2xl:100vw"
    />

    <button
      type="button"
      class="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-2 text-sand-50 hover:bg-sand-50/10 sm:right-6"
      :aria-label="t('gallery.lightbox.next')"
      @click="next"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" class="h-8 w-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 6l6 6-6 6" />
      </svg>
    </button>
  </div>
</template>
