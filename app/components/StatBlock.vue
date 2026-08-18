<script setup lang="ts">

defineProps<{
  value: string
  label: string
}>()
</script>

<template>
  <div>
    <div class="text-[26px] font-semibold text-brand-primary font-display">{{ value }}</div>
    <div class="text-caption uppercase tracking-wider text-ink-subtle">{{ label }}</div>
  </div>
</template>
