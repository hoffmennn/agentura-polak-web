<script setup lang="ts">
/**
 * Stand-in for the source prototype's `<image-slot>` (a design-tool-only
 * drag-and-drop placeholder, inert outside that runtime — see claude.md).
 * Used for the O nás lead photo and team photos until real photos exist.
 * Sizing/border are the caller's job via `class` (single root element, so
 * Vue merges it in automatically).
 */
</script>

<template>
  <div class="flex items-center justify-center bg-surface-alt">
    <span class="material-symbols-outlined text-[48px] text-ink-subtle">person</span>
  </div>
</template>
