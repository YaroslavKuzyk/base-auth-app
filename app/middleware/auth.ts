export default defineNuxtRouteMiddleware(async (to) => {
  const authStore = useAuthStore();
  await authStore.initialize();
  if (
    !authStore.accessToken &&
    to.path !== "/login" &&
    to.path !== "/register"
  ) {
    return navigateTo("/login");
  }
});
