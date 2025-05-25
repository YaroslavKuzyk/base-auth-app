<template>
  <form @submit.prevent="onSubmit">
    <input v-model="email" type="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button type="submit">Login</button>
    <p><NuxtLink to="/register">Don’t have an account? Register</NuxtLink></p>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "~/stores/useAuthStore";

const email = ref("kuzyk.yarik@gmail.com");
const password = ref("password");
const authStore = useAuthStore();

async function onSubmit() {
  try {
    await authStore.login({ email: email.value, password: password.value });
    navigateTo("/dashboard");
  } catch (e) {
    console.error(e);
  }
}
</script>
