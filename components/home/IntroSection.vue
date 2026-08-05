<script setup lang="ts">
import { sectionBanners, sectionImageUrl } from '~/data/media'

const image = sectionBanners.intro
</script>

<template>
  <section class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
    <div class="grid items-center gap-12 lg:grid-cols-2">
      <div>
        <SectionHeading eyebrow="O chatě" title="Komfortní zázemí uprostřed přírody">
          Nacházíme se v klidné chatové oblasti u Labe a nabízíme plně zařízenou zděnou a zateplenou chatu pro
          komfortní ubytování. Chata je dispozice 3kk. V ložnici naleznete manželskou postel 160×200 cm a v pokojíku
          palandu s postelemi 90×200 cm. V případě potřeby je možné přespat i na gauči v obývacím pokoji.
        </SectionHeading>

        <p class="mt-4 text-base text-ink-700">
          Chata disponuje plně zařízenou kuchyní s lednicí, mrazákem, myčkou, varnou deskou, troubou, mikrovlnkou,
          kávovarem i vinotékou. Pro tepelný komfort slouží klimatizační jednotka, podlahové vytápění v celé ploše
          objektu, elektrický přímotop v ložnici i krbová kamna. Úpravna vody zajišťuje pitnou vodu v nejvyšší kvalitě.
        </p>

        <div class="mt-8">
          <BaseButton to="/cenik" variant="ghost">Ceník pronájmu →</BaseButton>
        </div>
      </div>

      <NuxtImg
        :src="sectionImageUrl(image)"
        :alt="image.alt"
        :width="image.width"
        :height="image.height"
        class="aspect-[4/3] w-full rounded-xl2 object-cover shadow-lg"
        sizes="sm:100vw lg:40vw"
        loading="lazy"
      />
    </div>
  </section>
</template>
