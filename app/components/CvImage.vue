<script setup lang="ts">
import profileImage from '@/assets/images/profile_image.jpg'
</script>

<template>
  <img
    :src="profileImage"
    alt="Profile Image"
    class="size-40 rounded-full object-cover mx-auto drop-shadow-xl print:drop-shadow-none grayscale-25"
  >
</template>
