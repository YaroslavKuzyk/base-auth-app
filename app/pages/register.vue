<template>
  <form @submit.prevent="onSubmit">
    <input v-model="email" type="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button type="submit">Register</button>
    <p><NuxtLink to="/login">Already have an account? Login</NuxtLink></p>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "~/stores/useAuthStore";

const email = ref("");
const password = ref("");
const authStore = useAuthStore();

async function onSubmit() {
  try {
    await authStore.register({ email: email.value, password: password.value });
    navigateTo("/dashboard");
  } catch (e) {
    console.error(e);
  }
}
</script>
