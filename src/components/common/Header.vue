<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-primary">
      <a class="drawer-btn mx-2 text-white" @click="drawer = !drawer">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </a>
      <a class="navbar-brand" href="#">Avlekh</a>
    </nav>   
  </header>
</template>

<script>
export default {
  data: () => ({
    isDrawerOpen: false,
  }),
  computed: {
    title() {
      return this.$store.state.title;
    },
    drawer: {
      get() {
        return this.$store.state.isDrawerOpen;
      },
      set(val) {
        this.$store.state.isDrawerOpen = val;
      }
    }
  },
  methods: {
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
    },
  },
  created() {},
};
</script>

<style>
header {
  height: 5vh;
}
.bg-light {
  background-color: var(--blue);
}

.navbar-brand {
  color: white;
  font-weight: bold;
}
.drawer-btn {
  font-size: 1.5rem;
}
.drawer-btn:hover {
  cursor: pointer;
  color: gray !important;
}

</style>