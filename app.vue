<script setup lang="ts">
import "@/assets/css/main.css";
</script>
<template>
  <Html lang="ru-Ru">
    <Body
      class="bg-white text-gray-800 antialiased transition-colors duration-300 dark:bg-gray-900 dark:text-gray-200"
    >
      <NuxtLayout>
        <!-- <NuxtLoadingIndicator :height="5" :duration="3000" :throttle="400" /> -->
        <button
          class="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3"
        >
          ...
        </button>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
