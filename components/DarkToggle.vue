<script setup lang='ts'>
const color = useColorMode()
function toggleDark () {
  color.preference = color.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button aria-label="Тема"
      :title="`Выбрать ${color.value === 'dark' ? 'светлую' : 'темную'} тему`"
      class="p-1 sm:p-2 link inline-block hover:text-gray-700 dark:hover:text-gray-300 group text-gray-600"
      @click="toggleDark()">
      <div class="theme-icon dark:text-light-100">
        <ClientOnly>
          <template v-if="color.value === 'dark'">
              <Icon name="line-md:moon-twotone" class="theme-icon icon--on dark:text-light-100" />
              <Icon name="line-md:moon" class="theme-icon icon--off dark:text-light-100" />
          </template>
          <template v-else>
              <Icon name="line-md:sunny-outline-loop" class="theme-icon icon--on" />
              <Icon name="line-md:sunny-outline" class="theme-icon icon--off" />
          </template>
          <template #fallback>
            <Icon name="line-md:loading-twotone-loop" class="theme-icon" />
          </template>
        </ClientOnly>
      </div>
  </button>
</template>
