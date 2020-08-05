<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import LoggedInLayout from "@/components/layout/Default";
import EmptyLayout from "@/components/layout/Empty";
import "../node_modules/font-awesome/css/font-awesome.min.css";
const lightThemes = () => import("@/assets/scss/light.scss");
const darkThemes = () => import("@/assets/scss/dark.scss");
export default {
  components: {
    LoggedInLayout,
    EmptyLayout,
  },
  computed: {
    layout() {
      return this.$store.state.auth.isLoggedIn
        ? "logged-in-layout"
        : "empty-layout";
    },
    theme() {
      return this.$store.state.theme;
    },
  },
  mounted() {
    lightThemes();
  },
  watch: {
    
  },
};
</script>

<style>
html {
  background: var(--global-bg-color);
  font-family: var(--global-font-family);
  color: var(--global-text-color);
}
</style>
