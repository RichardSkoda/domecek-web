<script setup lang="ts">
defineProps<{ modelValue: boolean; id: string }>()
defineEmits<{ 'update:modelValue': [boolean] }>()
</script>

<template>
  <div class="flex items-start gap-3">
    <input
      :id="id"
      type="checkbox"
      required
      :checked="modelValue"
      class="mt-1 h-4 w-4 shrink-0 rounded border-sand-300 text-forest-700 focus:ring-forest-600"
      @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
    />
    <label :for="id" class="text-sm text-ink-700">
      Souhlasím se zpracováním osobních údajů za účelem vyřízení mého požadavku.<span class="text-clay-500"> *</span>
    </label>
  </div>
</template>
