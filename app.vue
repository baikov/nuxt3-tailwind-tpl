<script setup lang="ts">
import '@/assets/css/main.css'
</script>
<template>
  <!-- <main class="py-20 px-10 text-center">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </main> -->
  <Html lang="ru-Ru">
    <Body
      class="antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900"
    >
      <NuxtLayout>
        <!-- <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" /> -->
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
