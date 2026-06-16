<script setup lang="ts">
import type { CvContent } from '@/types'

const { about } = defineProps<{
  about: CvContent['about']
}>()
</script>

<template>
  <div>
    <h1>About me</h1>
    <p>{{ about }}</p>
  </div>
</template>
