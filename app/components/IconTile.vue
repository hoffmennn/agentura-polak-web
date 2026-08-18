<script setup lang="ts">

defineProps<{
  /** Material Symbols Outlined icon name, e.g. "history", "storefront". */
  icon: string
}>()
</script>

<template>
  <div class="flex shrink-0 items-center justify-center bg-brand-primary p-3.5">
    <span class="material-symbols-outlined text-white">{{ icon }}</span>
  </div>
</template>
