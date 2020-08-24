<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-primary">
      <a class="drawer-btn mx-2 text-white" @click="drawer = !drawer">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </a>
      <a class="navbar-brand" href="#">Avlekh</a>
      <input type="checkbox" checked data-toggle="toggle" @click="changeTheme()">
      <a class="nav-item ml-auto btn-nav" @click="logout()">Logout</a>
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
    },
    theme: {
      get() {
        return this.$store.state.theme;
      },
      set(val) {        
        this.$store.state.theme = val;
      }
    }
  },
  methods: {
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
    },
    changeTheme() {              
      let newTheme = this.theme === 'light' ? 'dark':'light';     
      this.theme = newTheme;      
    },
    logout() {
      this.$store.dispatch('logout').then(()=> location.reload());
    }  
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

.btn-nav {
  color: white !important;
  font-weight: bold;
  cursor: pointer;
  user-select: none;
  padding: 5px;
}
.btn-nav:hover {
  background-color: gray;
}
.btn-nav:active {
  background-color: white;
  color: black !important;
}
</style>