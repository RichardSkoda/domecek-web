<script setup lang="ts">
import type { GalleryImage } from '~/types/content'
import { galleryImageUrl } from '~/data/gallery'

const props = defineProps<{ images: GalleryImage[] }>()

const { t } = useI18n()

const activeIndex = ref<number | null>(null)

function open(index: number) {
  activeIndex.value = index
}

function close() {
  activeIndex.value = null
}
</script>

<template>
  <div>
    <p v-if="props.images.length === 0" class="text-sm text-ink-700">{{ t('gallery.empty') }}</p>

    <div v-else class="columns-2 gap-4 sm:columns-3 lg:columns-4">
      <button
        v-for="(image, index) in props.images"
        :key="image.id"
        type="button"
        class="mb-4 block w-full break-inside-avoid overflow-hidden rounded-xl2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest-600"
        @click="open(index)"
      >
        <NuxtImg
          :src="galleryImageUrl(image)"
          :alt="t(`gallery.categories.${image.category}`)"
          :width="image.width"
          :height="image.height"
          class="w-full object-cover transition-transform duration-300 hover:scale-105"
          sizes="sm:50vw md:33vw lg:25vw"
          loading="lazy"
        />
      </button>
    </div>

    <Lightbox
      v-if="activeIndex !== null"
      :images="props.images"
      :index="activeIndex"
      @close="close"
      @update:index="(i) => (activeIndex = i)"
    />
  </div>
</template>
