<template>
  <div>
    <nav v-if="authStore.accessToken">
      <button @click="authStore.logout()">Logout</button>
    </nav>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/stores/useAuthStore";
const authStore = useAuthStore();
</script>
~/stores/useAuthStore
