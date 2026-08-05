<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string
    id: string
    type?: string
    required?: boolean
    modelValue: string | number
    as?: 'input' | 'textarea'
    rows?: number
  }>(),
  { type: 'text', as: 'input', rows: 4 },
)

defineEmits<{ 'update:modelValue': [string | number] }>()
</script>

<template>
  <div>
    <label :for="id" class="block text-sm font-medium text-ink-800">
      {{ label }}<span v-if="required" class="text-clay-500"> *</span>
    </label>
    <textarea
      v-if="as === 'textarea'"
      :id="id"
      :required="required"
      :rows="rows"
      :value="modelValue"
      class="mt-2 w-full rounded-lg border border-sand-300 bg-sand-50 px-4 py-2.5 text-sm text-ink-900 shadow-sm focus:border-forest-600 focus:outline-none focus:ring-1 focus:ring-forest-600"
      @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    />
    <input
      v-else
      :id="id"
      :type="type"
      :required="required"
      :value="modelValue"
      class="mt-2 w-full rounded-lg border border-sand-300 bg-sand-50 px-4 py-2.5 text-sm text-ink-900 shadow-sm focus:border-forest-600 focus:outline-none focus:ring-1 focus:ring-forest-600"
      @input="
        $emit(
          'update:modelValue',
          type === 'number' ? Number(($event.target as HTMLInputElement).value) : ($event.target as HTMLInputElement).value,
        )
      "
    />
  </div>
</template>
