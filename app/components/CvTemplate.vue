<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: 'Curriculum Vitae'
  }
})
</script>

<template>
  <CvHeader :title="props.title" />
  <UContainer>
    Test
  </UContainer>
</template>
