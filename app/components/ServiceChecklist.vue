<script setup lang="ts">
/**
 * Zebra-striped checklist grid — extracted from LandingServices.vue so
 * the same markup can be reused on the dedicated service detail pages
 * (ServiceDetail.vue) without duplicating it.
 */
defineProps<{
  rows: string[][]
}>()
</script>

<template>
  <div class="border border-border-subtle">
    <div
      v-for="(row, ri) in rows"
      :key="ri"
      class="flex flex-col sm:flex-row"
      :class="[ri > 0 && 'border-t border-border-subtle', ri % 2 === 1 ? 'bg-surface-alt' : 'bg-surface-card']"
    >
      <div
        v-for="(item, ii) in row"
        :key="item"
        class="flex flex-1 items-start gap-3 p-4"
        :class="ii === 0 && row.length > 1 && 'border-b border-border-subtle sm:border-b-0 sm:border-r'"
      >
        <span class="material-symbols-outlined shrink-0 text-[20px] text-brand-primary">check_box</span>
        <span class="text-body-sm font-medium text-ink">{{ item }}</span>
      </div>
    </div>
  </div>
</template>
