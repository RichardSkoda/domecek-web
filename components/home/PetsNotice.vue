<template>
  <section class="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
    <div class="rounded-xl2 border border-sand-200 bg-sand-100/70 p-6 text-sm text-ink-700">
      <i18n-t keypath="home.petsNotice.text" tag="p" scope="global">
        <template #bold>
          <strong class="text-ink-900">{{ $t('home.petsNotice.bold') }}</strong>
        </template>
      </i18n-t>
      <p class="mt-1">{{ $t('home.petsNotice.thanks') }}</p>
    </div>
  </section>
</template>
